import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link} from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>
          <span style={{ color: "#ec901a" }}>Iron</span>
          <span style={{ color: "#1bb37d" }}>Beez</span>
        </h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p-text"><a href="/">Home</a></li>
        <li className="p-text"><Link to='/sell'>sell</Link></li>
        <li className="p-text"><Link to='/rent'>rent</Link></li>
        <li className="p-text"><Link to='/finance'>finance</Link></li>
        <li style={{ cursor: "auto" }}>|</li>
        <li className="p-text"><a href="#">Sign-In</a></li>
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
              <li className="p-text"><a href="#">Home</a></li>
              <li className="p-text"><Link to="/sell">sell</Link></li>
              <li className="p-text"><a href="#">rent</a></li>
              <li className="p-text"><a href="#">finance</a></li>
              <li className="p-text"><a href="#">Sign-In</a></li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
