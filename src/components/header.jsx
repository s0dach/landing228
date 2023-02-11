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
                    Ищете пункт приема металлолома?
                    <span></span>
                  </h1>
                  <h1>
                    Требуется демонтаж и вывоз металлолома?
                    <span></span>
                  </h1>
                  <h1>
                    Хотите продать лом по высокой цене?
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Загрузка"}</p>
                  <span
                    onClick={() => props.setMade(true)}
                    className="btnCall btn-customOne btn-lgCall page-scroll"
                  >
                    Узнать цены
                  </span>
                  <span
                    onClick={() => props.setActive(true)}
                    className="btnCall btn-customCall btn-lgCall page-scroll"
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
