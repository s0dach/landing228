import React from "react";
import { Calc } from "./Calc";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";
import { Prices } from "./Prices";

export const Price = () => {
  const [name, setName] = React.useState("");
  const a = ["Цветной", "Черный"];
  return (
    <>
      <Navigation />
      <Prices name={a} />
      <Calc />
      <Maps />
      <Contact />
    </>
  );
};
