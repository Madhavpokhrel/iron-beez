import React from "react";
import "./Services.scss";

import { images } from "../../constants";
import { motion } from "framer-motion";

const services = [
  {
    imageUrl: images.ex_1,
    name: "Excivator",
    description: "Excivator Excivator Excivator Excivator",
    tags: ["Test", "working", "Good"],
  },
  {
    imageUrl: images.ex_2,
    name: "Excivator",
    description: "Excivator Excivator Excivator Excivator",
    tags: ["Test", "working", "Good"],
  },
  {
    imageUrl: images.ex_3,
    name: "Excivator",
    description: "Excivator Excivator Excivator Excivator",
    tags: ["Test", "working", "Good"],
  },
];

const Services = () => {
  return (
    <div className="app__services">
    <h2 className="service-intro">
    IronBeez is a start up dedicated to the e-commerce of heavy machinery on the American market. Its mission is to bring together and centralize the total sum of the materials and services related to it.
    </h2>
      <h1 className="head-text">
        We Know That <span> Good Services </span><br /> means <span> Good Busniss </span>
      </h1>
      <div className="app__services-model">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__service-item"
            key={service.name + 1}
          >
            <img src={service.imageUrl} alt={service.name} />
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {service.name}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
