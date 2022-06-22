import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { Sell, Rent, Finance, Home, Footer } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
