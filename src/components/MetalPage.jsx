import React from "react";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";
import { RemoveMetal } from "./removeMetal";

export const MetalPage = () => {
  return (
    <div>
      <Navigation />
      <RemoveMetal />
      <Calc />
      <Maps />
      <Contact />
    </div>
  );
};
