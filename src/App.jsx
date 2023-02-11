import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ModalCall } from "./components/modalCall/ModalCall";
import { Maps } from "./components/maps";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [state, setMade] = React.useState(false);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <>
        <Navigation />
        <Header setActive={setActive} data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Maps />
        <Contact data={landingPageData.Contact} />
      </>
      <ModalCall setActive={setActive} active={active} />
    </div>
  );
};

export default App;
