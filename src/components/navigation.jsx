import React from "react";

export const Navigation = ({ setMade }) => {
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
          <a
            onClick={() => setMade(false)}
            className="navbar-brand page-scroll"
          >
            Ял-Мет
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                onClick={() => setMade(false)}
                href="#about"
                className="page-scroll"
              >
                О нас
              </a>
            </li>
            <li>
              <a
                onClick={() => setMade(false)}
                href="#services"
                className="page-scroll"
              >
                Наши услуги
              </a>
            </li>
            <li>
              <a
                onClick={() => setMade(false)}
                href="#contact"
                className="page-scroll"
              >
                Связаться с нами
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
