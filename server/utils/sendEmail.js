import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "ironbeez@zohomail.com",
    pass: "Lansing5656@@"
    // pass: "bik7isivC805",
  },
});

export const sendEmail = (to, subject, text) => {
  return new Promise((resolve, reject) => {
    const options = {
      from: 'ironbeez@zohomail.com',
      to: `${to}`,
      subject: `${subject}`,
      html: text, // html body
    };

    return transporter.sendMail(options, (error, info) => {
		if (error) {
      console.log("These is some ERROR WHITE SENDING EMAIL \n\n", error);
    } else {
      console.log("working \n\n");
    };
    });
  });
};
