import React from "react";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";
import { Prices } from "./Prices";

export const Price = () => {
  return (
    <>
      <Navigation />
      <Prices />
      <Calc />
      <Maps />
      <Contact />
    </>
  );
};
