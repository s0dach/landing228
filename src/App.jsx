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
import { Prices } from "./components/Prices";
import { ModalCall } from "./components/modalCall/ModalCall";

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
      {!state ? (
        <>
          <Navigation />
          <Header
            setActive={setActive}
            setMade={setMade}
            data={landingPageData.Header}
          />
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          <Contact data={landingPageData.Contact} />
        </>
      ) : (
        <>
          <Navigation setMade={setMade} />
          <Prices />
        </>
      )}
      <ModalCall setActive={setActive} active={active} />
    </div>
  );
};

export default App;
