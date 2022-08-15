import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../utils/sendEmail.js';

export const signup = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password, zipCode } =
    req.body;

  const oldUser = await User.findOne({ email });

  if (oldUser) return res.status(400).json({ message: 'User already exists' });

  const activeCode = Math.random().toString(36).substring(0, 20);

  const result = await User.create({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    zipCode
  });

  // await sendEmail(
  //   email,
  //   "Ironbeez",
  //   `Dear ${firstName},
  // <br>
  // <p style="font-size: 16px; text-align: justify;">To activate your account. Please <a href="http://localhost:3000/activate?email=${result.email}&activeCode=${activeCode}" target="_blank"> CLICK HERE</a>.</p>

  // <p>Thank you,</p>
  // <p><strong> IronBeez</strong>
  // <br>`
  // );

  res.status(201).json(result);
};

export const signin = async (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Email or password is incorrect',
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Email or password is incorrect',
          });
        }
        if (result.accountActive == false) {
          return res.status(401).json({
            message: 'Please activate your account!',
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.JWT_KEY || 'text',
            {
              expiresIn: '1h',
            }
          );
          const test = user;
          test.token = token;
          return res.status(200).json({
            user: test,
          });
        }
        res.status(401).json({
          message: 'Email or password is incorrect',
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const activateAccount = async (req, res) => {
  const activeCode = req.query.activeCode;
  const email = req.query.email;

  const isEmail = await User.findOne({ email });

  if (!isEmail)
    return res.status(400).json({ message: 'Account not activated!' });

  const isAccountActive = await isEmail.accountActive.localeCompare(activeCode);

  if (isAccountActive !== 0) return res.redirect('/account-not-active');

  res.redirect('/accountActive');
};
