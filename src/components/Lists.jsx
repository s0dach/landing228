import React, { Component } from "react";
import { Calc } from "./Calc";
import { Company } from "./Company";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";

export const Lists = () => {
  return (
    <>
      <Navigation />
      <Company />
      <Calc />
      <Maps />
      <Contact />
    </>
  );
};
