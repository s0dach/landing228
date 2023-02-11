import React from "react";
import { ModalCall } from "./modalCall/ModalCall";

export const Header = (props) => {
  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <span
                    onClick={() => props.setMade(true)}
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Узнать цены
                  </span>
                  <span
                    onClick={() => props.setActive(true)}
                    className="btnCall btn-customCall btn-lgCall page-scroll"
                  >
                    Заказать звонок
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
