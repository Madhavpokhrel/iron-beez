import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import "./Help.scss";

const Help = () => {
  return (
    <div className="app__help-main">
      <h1>How We Can Help You</h1>
      <section className="help-section">
        <div className="help-section1">
          <h3>
            <BiRightArrowCircle style={{ color: "#E4DA76", width: "40px" }} />
            Phase 1: Set the Foundation
          </h3>
          <p>Help Phase 1</p>
        </div>
        <div className="help-section2">
          <h3> <BiRightArrowCircle style={{ color:"#E4DA76", width: "40px" }}/> Phase 2: Grow Your Brand</h3>
          <p>Help Phase 2</p>
        </div>
        <div className="help-section3">
            <h3><BiRightArrowCircle style={{ color:"#E4DA76", width: "40px" }} />Phase 2:Dominate the Market</h3>
            <p>Help Phase 3</p>
        </div>
      </section>
    </div>
  );
};

export default Help;
