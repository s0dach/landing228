import React, { Component } from "react";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Demontaj } from "./demontaj";
import { Maps } from "./maps";
import { Navigation } from "./navigation";

export const DemontajPage = () => {
  return (
    <div>
      <Navigation />
      <Demontaj />
      <Calc />
      <Maps />
      <Contact />
    </div>
  );
};
