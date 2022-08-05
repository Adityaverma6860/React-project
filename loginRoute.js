import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";


export default function LoginRoute() {
  return (
    <>
      
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Login />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
