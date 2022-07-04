import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { RecomendedForYou } from '../../components'

import "./Home.scss";
import { Brands, Ads } from "..";

const Home = () => {
  return (
    <div className="app__header">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
        id="header"
      >
        <div className="app__header-main">
          <div className="app__header-text">
            <h1>Your Local Heavy</h1>
            <h1>
              <span style={{ color: "#ec901a" }}>Equipment</span>{" "}
              <span style={{ color: "#1bb37d" }}>Marketplace</span>
            </h1>
            <p>Know more, shop wisely</p>
          </div>
          <div className="btn">
              <button>Used Machinery</button>
              <button>New Machinery</button>
              <button>Certified Pre-Owned</button>
              <button>For Sale By Owner</button>
              <button>Financing</button>
            </div>
        </div>
        <div className="app__header-search">
          <input
            type="text"
            id="header-search"
            placeholder="Search heavy equipment"
            name="s" 
          />
          <button>Financing</button>
        </div>
      </motion.div>
      <RecomendedForYou />
      <Brands />
      <Ads />
    </div>
  );
};

export default Home;
