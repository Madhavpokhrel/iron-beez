import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DialogContent, DialogContentText, Dialog } from "@mui/material";
import { useDispatch } from "react-redux";

import "./Navbar.scss";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  zipCode: "",
  password: "",
};
const signinInitialState = { email: "", password: "" };

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [signupDialogBox, setSignupDialogBox] = useState(false);
  const [signinDialogBox, setSigninDialogBox] = useState(false);
  const [otpDialogBox, setOtpDialogBox] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [signInFormData, setSignInFormData] = useState(signinInitialState);
  const [checkAuth, setCheckAuth] = useState("");
  const [checkValue, setCheckValue] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  // console.log(setSignInFormData.email);

  useEffect(() => {
    const token = user?.token;

    // JWT
  }, []);

  const handleOpenDialogBox = (e) => {
    if (e === "signin") {
      setSigninDialogBox(true);
      setSignupDialogBox(false);
      setOtpDialogBox(false);
    } else if (e === "signup") {
      setSigninDialogBox(false);
      setOtpDialogBox(false);
      setSignupDialogBox(true);
    }
    if (e === "otp") {
      setOtpDialogBox(true);
      setSigninDialogBox(false);
      setSignupDialogBox(false);
    }
  };

  const handleCloseDialogBox = () => {
    setSignupDialogBox(false);
    setSigninDialogBox(false);
    setOtpDialogBox(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkAuth === "signup") {
      console.log(formData);
      dispatch(signup(formData));
    } else if (checkAuth === "signin") {
      console.log(signInFormData);
      dispatch(signin(signInFormData));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignInChange = (e) => {
    setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>
          <span style={{ color: "#ec901a" }}>Iron</span>
          <span style={{ color: "#1bb37d" }}>Beez</span>
        </h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p-text">
          <a href="/">Home</a>
        </li>
        <li className="p-text">
          <Link to="/sell">sell</Link>
        </li>
        <li className="p-text">
          <Link to="/rent">rent</Link>
        </li>
        <li className="p-text">
          <Link to="/finance">finance</Link>
        </li>
        <li style={{ cursor: "auto" }}>|</li>
        <Button
          style={{ color: "#ffa500" }}
          variant="text"
          onClick={() => handleOpenDialogBox("signin")}
        >
          Sign-In
        </Button>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li className="p-text">
                <a href="#">Home</a>
              </li>
              <li className="p-text">
                <Link to="/sell">sell</Link>
              </li>
              <li className="p-text">
                <a href="#">rent</a>
              </li>
              <li className="p-text">
                <a href="#">finance</a>
              </li>
              <li className="p-text">
                <a href="#">Sign-In</a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Dialog box for sign up */}
      <Dialog open={signupDialogBox} onClose={handleCloseDialogBox}>
        {/* <DialogTitle>Dialog Box</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <form className="app__signup-main" onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <div className="app__signup-col">
                <div className="app__signup-left">
                  <div className="app__space">
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      autoFocus
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app__space">
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      name="phoneNumber"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app__space">
                    <TextField
                      id="outlined-basic"
                      label="Zip Code"
                      variant="outlined"
                      name="zipCode"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="app__signup-right">
                  <div className="app__space">
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app__space">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="app__space">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="app__signup-button">
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    setCheckAuth("signup");
                    if (
                      formData.firstName !== "" &&
                      formData.lastName !== "" &&
                      formData.email !== "" &&
                      formData.password !== "" &&
                      formData.zipCode !== ""
                    ) {
                      handleOpenDialogBox("otp");
                    }
                  }}
                >
                  Sign Up
                </Button>
              </div>
              <h4 className="app__login-text">
                Already have account?{" "}
                <Button
                  variant="text"
                  onClick={() => handleOpenDialogBox("signin")}
                >
                  Sign In
                </Button>{" "}
              </h4>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/* Dialog box for sign in */}
      <Dialog
        className="app__signup-dialogbox"
        open={signinDialogBox}
        onClose={handleCloseDialogBox}
      >
        <DialogContent>
          <DialogContentText>
            <form className="app__login-main" onSubmit={handleSubmit}>
              <h1>Sign In</h1>

              <div className="app__login-space">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  required
                  style={{width: 400}}
                  onChange={handleSignInChange}
                />
              </div>
              <div className="app__login-space">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  required
                  style={{width: 400}}
                  onChange={handleSignInChange}
                />
              </div>
              <div className="app__signin-button">
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setCheckAuth("signin")}
                >
                  Sign In
                </Button>
              </div>
              <h4 className="app__login-text">
                Create New Account{" "}
                <Button
                  variant="text"
                  onClick={() => handleOpenDialogBox("signup")}
                >
                  Sign Up
                </Button>{" "}
              </h4>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/* Dialog box for sign up */}
      <Dialog open={otpDialogBox}>
        {/* <DialogTitle>Dialog Box</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <form className="app__otp-main" onSubmit={handleSubmit}>
              <h1>Verify Your Account</h1>
              <p>
                Please check your email inbox or spam for varification Link{" "}
              </p>
              <div className="app__signup-button">
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    setCheckAuth("otp");
                    handleCloseDialogBox();
                  }}
                >
                  Close
                </Button>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
