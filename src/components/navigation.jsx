import React from "react";
import { useNavigate } from "react-router-dom";
import { Contact } from "./contact";
import { Maps } from "./maps";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <span
            onClick={() => {
              navigate("/");
            }}
            className="navbar-brand page-scroll oneHeader"
          >
            Ял-Мет
          </span>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span
                onClick={() => {
                  navigate("/about");
                }}
                className="pageSpan"
              >
                О компании
              </span>
            </li>
            {/* <li>
              <span onClick={() => navigate("/price")} className="pageSpan">
                Наши цены
              </span>
            </li> */}
            <li>
              <span className="pageSpan">Контакты</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="navFlex">
        <div className="navFlexBlock">
          <span className="navFlexText">Черный лом</span>
          <div className="blockNav">
            <div>
              <span className="blocknavspan">Сталь</span>
            </div>
            <div>
              <span className="blocknavspan">Чугун</span>
            </div>
            <div>
              <span className="blocknavspan">Нержавейка</span>
            </div>
          </div>
        </div>
        <div className="navFlexBlock">
          <span className="navFlexText">Цветной лом</span>

          <div className="blockNav">
            <div>
              <span className="blocknavspan">Медь</span>
            </div>
            <div>
              <span className="blocknavspan">Латунь</span>
            </div>
            <div>
              <span className="blocknavspan">Алюминий</span>
            </div>
            <div>
              <span className="blocknavspan">Свинец</span>
            </div>
          </div>
        </div>
        <div className="navFlexBlock">
          <span className="navFlexText">Демонтаж</span>
        </div>
        <div className="navFlexBlock">
          <span className="navFlexText">Вывоз металлолома</span>
        </div>
        <div className="navFlexBlock">
          <span className="navFlexText">Цены на сегодня</span>
        </div>
      </div>
    </nav>
  );
};
