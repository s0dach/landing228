import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalCall } from "./modalCall/ModalCall";

export const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Прием металлолома в Тюмени
                    <span></span>
                  </h1>
                  <h1>
                    Дорого
                    <span></span>
                  </h1>
                  <div className="displayFlex">
                    <h2>
                      + 7 999 999 99 99
                      <span></span>
                    </h2>
                  </div>
                  <p></p>
                  <span
                    onClick={() => navigate("/price")}
                    className="btnCall btn-customOne btn-lgCall page-scroll"
                  >
                    Узнать цены
                  </span>
                  <span
                    onClick={() => props.setActive(true)}
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
