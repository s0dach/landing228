import React from "react";
import { useNavigate } from "react-router-dom";

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
            <li>
              <span onClick={() => navigate("/price")} className="pageSpan">
                Наши цены
              </span>
            </li>
            <li>
              <span className="pageSpan">Связаться с нами</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
