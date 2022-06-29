import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  DialogContent,
  DialogTitle,
  DialogContentText,
  Dialog,
} from "@mui/material";

import "./Navbar.scss";
import { height } from "@mui/system";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [signupDialogBox, setSignupDialogBox] = useState(false);
  const [signinDialogBox, setSigninDialogBox] = useState(false);

  const handleOpenDialogBox = (e) => {
    if (e == "signin") {
      setSigninDialogBox(true);
      setSignupDialogBox(false);
    } else {
      setSigninDialogBox(false);
      setSignupDialogBox(true);
    }
  };

  const handleCloseDialogBox = () => {
    setSignupDialogBox(false);
    setSigninDialogBox(false);
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
        <Button style={{color:"#ffa500"}} variant="text" onClick={() => handleOpenDialogBox("signin")}>Sign-In</Button>
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
          <div className="app__signup-main">
            <h1>Sign Up</h1>
              <div className="app__signup-col">
                <div className="app__signup-left">
                  <div className="app__space">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                  />
                  </div>
                  <div className="app__space">
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                  />
                  </div>
                  <div className="app__space">
                  <TextField
                    id="outlined-basic"
                    label="Zip Code"
                    variant="outlined"
                  />
                  </div>
                </div>
                <div className="app__signup-right">
                <div className="app__space">
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                  />
                  </div>
                  <div className="app__space">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  </div>
                 <div className="app__space">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                  </div>
                </div>
              </div>
              <div className="app__signup-button">
              <Button variant="contained">Sign Up</Button>
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
            </div>
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
            <div className="app__login-main">
              <div className="login__form">
                <h2>Sign In</h2>

                <div className="form-element">
                  <input
                    type="text"
                    id="email"
                    placeholder=" " className="textbox"
                  ></input>
                  <label className="emailid-label">Email</label>
                </div>
                <div className="form-element">
                  <input
                    type="password"
                    id="password"
                    placeholder=" " className="textbox"
                  ></input>
                  <label className="password-label">Password</label>
                </div>
              </div>
              <div className="login-btn">
                <button>Sign In</button>
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
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
