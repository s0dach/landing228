import React from "react";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { NavigationBar } from "./modalCall/NavigationBar";
import { Navigation } from "./navigation";

export const Calculator = () => {
  return (
    <div>
      <Navigation />

      <NavigationBar />
      <div className="calcpadding">
        <Calc />
      </div>
      <Maps />
      <Contact />
    </div>
  );
};
