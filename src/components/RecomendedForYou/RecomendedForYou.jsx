import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";

import "./RecomendedForYou.scss";
import { Services } from "../../Pages";

const recomended = [
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
  {
    imageUrl:
      "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2021/08/JD__210G_LC_.611c797165850.png?auto=format%2Ccompress",
    name: "Text",
    model: "00qwert",
    year: "2012",
    price: 100,
  },
];

const RecomendedForYou = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <div className="app__works">
      <div className="app__rfy">
        <h4>Recomended for you</h4>
        <h4>
          See all <AiOutlineArrowRight />
        </h4>
      </div>

      <motion.div
        animate={{ animateCard }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__rfy-card"
      >
        {recomended.map((recomend, index) => (
          <div className="app__rfy-item app__flex" key={index}>
            <div className="app__rfy-img app__flex">
              <img src={recomend.imageUrl} alt={recomend.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__rfy-hover app__flex"
              >
                <a href="#" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsFillHeartFill />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__rfy-content app__flex">
              <h4 className="bold-text">Name: {recomend.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                Model: {recomend.model}
              </p>
              <p className="p-text" style={{ marginTop: 10 }}>
                Year: {recomend.year}
              </p>
              <div className="app__rfy-price app__flex">
                <p className="p-text">${recomend.price}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="app__flex"
      >
       <Services />
      </motion.div>
    </div>
  );
};

export default RecomendedForYou;
