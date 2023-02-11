import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import { Lists } from "./Lists";
import { Price } from "./Price";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<Lists />} />
      <Route path="/price" element={<Price />} />
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
