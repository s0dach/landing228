import axios from "axios";
import React from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ActiveContext } from "./context";

export const Header = () => {
  const [number, setNumber] = React.useState("+7‒922‒396‒00‒11");
  React.useEffect(() => {
    axios
      .get("https://unmarred-silky-crowley.glitch.me/price/1")
      .then(({ data }) => setNumber(data.number));
  }, []);
  const navigate = useNavigate();
  const { setActive } = useContext(ActiveContext);
  // const { setActive } = useContext(ActiveContext);
  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="row">
              <div className="rowOne">
                {/* <div className="col-md-8 col-md-offset-2 intro-text"> */}
                <h1>
                  Прием металлолома в Тюмени
                  <span></span>
                </h1>
                <span className="h1headerintro">
                  {/* Дорого */}
                  <span></span>
                </span>
                <div className="displayFlex">
                  <h2>
                    {number}
                    <span></span>
                  </h2>
                </div>
                <p></p>
                <div className="mobile">
                  <span
                    onClick={() => navigate("/price")}
                    className="btnCall btn-customOne btn-lgCall page-scroll"
                  >
                    Узнать цены
                  </span>
                  <span
                    onClick={() => setActive(true)}
                    className="btn-customCall btn-lgCall page-scroll"
                  >
                    Оставить заявку
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
