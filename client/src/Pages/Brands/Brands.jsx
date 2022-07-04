import React from "react";

import {motion } from 'framer-motion';
import {images} from '../../constants';
import "./Brands.scss";

const brandList = [
    {
        imageUrl: images.brand_1,
        text: "ACCEPT NO LIMITS"
    },
    {
        imageUrl: images.brand_2,
        text: "THINK ALTERNATIVELY"
    },
    {
        imageUrl: images.brand_3,
        text: "MOTOR SPORT"
    }
]

const Brands = () => {
  return (
    <div className="app__brand">
      <h1 className="app__brand-head">
        {" "}
        <span className="app__brand-heading">our</span> Brand pillars
      </h1>
      <motion.div
        // animate={{ animateCard }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__brand-card"
      >
        {brandList.map((brand, index) => (
          <div className="app__brand-item app__flex" key={index}>
            <div className="app__brand-img app__flex">
              <img src={brand.imageUrl} alt={brand.text} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__brand-hover app__flex"
              >
                {/* <a href="#" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsFillHeartFill />
                  </motion.div>
                </a> */}
              </motion.div>
            </div>
            <div className="app__brand-content app__flex">
              <h4 className="bold-text">{brand.text}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
