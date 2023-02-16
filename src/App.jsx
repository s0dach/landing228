import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ModalCall } from "./components/modalCall/ModalCall";
import { Maps } from "./components/maps";
import { NavigationBar } from "./components/modalCall/NavigationBar";
import { Calc } from "./components/Calc";
import { ActiveContext } from "./components/context";
import { useContext } from "react";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const { active, setActive } = useContext(ActiveContext);
  console.log(active);
  return (
    <div>
      <>
        <Navigation />
        <NavigationBar />
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Calc />
        <Maps />
        <Contact data={landingPageData.Contact} />
      </>
      <ModalCall setActive={setActive} active={active} />
    </div>
  );
};

export default App;
