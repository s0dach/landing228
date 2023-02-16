import React from "react";
import { Contact } from "./contact";
import { Maps } from "./maps";
import { Navigation } from "./navigation";

export const ContactPage = () => {
  return (
    <div>
      <Navigation />
      <Contact />
      <Maps />
    </div>
  );
};
