import React from "react";
import { AllPrices } from "./AllPrices";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";

export const PricesPage = () => {
  return (
    <div>
      <Navigation />
      <AllPrices />
      <Calc />
      <Maps />
      <Contact />
    </div>
  );
};
