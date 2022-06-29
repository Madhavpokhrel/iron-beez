import React, { useState } from "react";
import { motion } from "framer-motion";
import {Icon} from 'react-icons';
import {RecomendedForYou} from '../../components';
import { FAQs, Ads } from '../../Pages';
import {
  DialogContent,
  DialogTitle,
  DialogContentText,
  Dialog,
} from "@mui/material";
import "./Sell.scss";
import Help from "../Help/Help";

const Sell = () => {
  const [dialogBox, setDialogBox] = useState(false);
  const handleOpenDialogBox = () => {
    setDialogBox(true);
  };

  const handleCloseDialogBox = () => {
    setDialogBox(false);
  };

  return (
    <div className="app__sell">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header"
        id="head"
      >
        <div className="sell__main">
          <div className="sell-text">
            <h1>Sell your machinery 100% online</h1>
            <h2>
              Get the{" "}
              <i>
                <b>best offer instantly</b>
              </i>{" "}
              from thousands of dealers
            </h2>
            <button
            onClick={handleOpenDialogBox}
            type="button"
            className="button"
          >
            Get Started Now! »
          </button>
          </div>
          <Dialog open={dialogBox} onClose={handleCloseDialogBox}>
            <DialogTitle className="app__dialog">Dialog Box</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This feature is coming soon. We are working on the full version
                of our new site and will be back shortly.
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
      <section className="offer__container">
        <div className="app__offer-step">
          <h2>
            3 simple steps.
            <br />1 unbeatable offer.
          </h2>
          <h3>It’s fast, free, and oh-so-easy.</h3>
        </div>
        {/* <ul className="offer__step">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ul> */}
        <Help />
      </section>
      <RecomendedForYou />
      <FAQs />
      <Ads />
    </div>
  );
};

export default Sell;
