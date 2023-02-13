import React, { Component } from "react";
import { Accums } from "./accums";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";

export const AccumsPage = () => {
  return (
    <div>
      <Navigation />
      <Accums />
      <Calc />
      <Maps />
      <Contact />
    </div>
  );
};
