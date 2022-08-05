import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Navigation from "./navigation";
import Login from "./Login.js";
import Globel from "./GlobelRedux";
import GlobelRedux from "./GlobelRedux";


export default function Routing() {
  return (
    <>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Globel" element={<GlobelRedux/>} />
        <Route path="/Contact" element={<Contact user="Hello lnb" />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
