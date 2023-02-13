import React from "react";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";
import { AutoLom } from "./autoLom";

export const AutoLompage = () => {
  return (
    <div>
      <Navigation />
      <AutoLom />
      <Calc />
      <Maps />
      <Contact />
    </div>
  );
};
