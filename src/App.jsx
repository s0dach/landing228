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
import { NavigationBar } from "./components/modalCall/NavigationBar";
import { Calc } from "./components/Calc";
import { AllPrices } from "./components/AllPrices";
import { AdminPage } from "./components/adminPage";
import axios from "axios";

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
  // React.useEffect(() => {
  //   console.log(state);
  // }, [state]);
  // axios
  //   .get("http://95.163.234.208:4500/price/1")
  //   .then(({ data }) => data.one.forEach((c) => console.log(c)));
  // axios.delete("http://95.163.234.208:4500/price/1");
  // React.useEffect(() => {
  // axios.post(
  //   "http://95.163.234.208:4500/price",
  //   {
  //     one: [
  //       ["Черный металл", "17000"],
  //       ["Медь микс", "590"],
  //       ["Медь луженая", "545"],
  //       ["Радиаторы тепловозные", "425"],
  //       ["Латунь микс", "340"],
  //       ["Латунные радиаторы", "355"],
  //       ["Алюминий электротехнический", "145"],
  //       ["Алюминий пищевой", "140"],
  //       ["Алюминий моторный", "107"],
  //       ["Алюминий бытовой", "107"],
  //       ["Алюминевая банка", "75"],
  //       ["Алюминиевые радиаторы", "50"],
  //       ["Сплав ЦАМ", "140"],
  //       ["Прием свинца", "110"],
  //       ["Магний", "90"],
  //       ["Нержавеющая сталь 10%", "75"],
  //       ["Титан", "0"],
  //       ["Прием бронзы", "0"],
  //       ["Прием лом никеля", "0"],
  //     ],
  //   },
  //   []
  // );
  return (
    <div>
      <>
        {/* <Navigation />
        <NavigationBar />
        <Header setActive={setActive} data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Calc />
        <Maps />
        <Contact data={landingPageData.Contact} /> */}
        <AdminPage />
        {/* <AllPrices /> */}
      </>
      <ModalCall setActive={setActive} active={active} />
    </div>
  );
};

export default App;
