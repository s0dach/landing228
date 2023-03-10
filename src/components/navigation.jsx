import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const [number, setNumber] = React.useState("+7‒922‒396‒00‒11");
  React.useEffect(() => {
    axios
      .get("https://unmarred-silky-crowley.glitch.me/price/1")
      .then(({ data }) => setNumber(data.number));
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span
                className="pageSpan"
                onClick={() => {
                  navigate("/calculator");
                }}
              >
                Калькулятор цен
              </span>
            </li>
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
              <span
                className="pageSpan"
                onClick={() => {
                  navigate("/contacts");
                }}
              >
                Контакты
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="containerCenter">
        <div className="centerBlockMobile">
          <div className="centerBlockOne">
            <h1 className="nameCenterBlock" onClick={() => navigate("/")}>
              ЯЛ-МЕТ
            </h1>
          </div>
        </div>
        <div className="centerBlock">
          <div className="centerBlockOne">
            <div className="imageBlock">
              <img
                src="img/location.png"
                width="50"
                height="50"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="BlockSpanDiv">
              <div>
                <span className="blockCenterTextOne">
                  ул. Тимофея Чаркова, 14
                </span>
              </div>
              <div>
                <span>c 8 до 21:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="centerBlockMobile">
          <div className="centerBlockOne">
            <div className="imageBlock">
              <img
                src="img/phone.png"
                width="50"
                height="50"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="BlockSpanDiv">
              <div>
                <span className="blockCenterText">{number}</span>
              </div>
              <div>
                <span>c 8 до 21:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navFlex">
        {/* <div className="navFlexBlock">
          <span
            onClick={() => navigate("/chernyy-lom")}
            className="navFlexText"
          >
            Черный лом
          </span> */}
        {/* <div className="blockNav">
            <div>
              <span className="blocknavspan">Сталь</span>
            </div>
            <div>
              <span className="blocknavspan">Чугун</span>
            </div>
            <div>
              <span className="blocknavspan">Нержавейка</span>
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className="navFlexBlock">
          <span
            className="navFlexText"
            onClick={() => navigate("/cvetnoy-lom")}
          >
            Цветной лом
          </span>
        </div> */}
        <div className="navFlexBlock">
          <div className="dropdown">
            <div className="navFlexText" onClick={() => navigate("/prices")}>
              Черный лом
            </div>
            <div className="dropdown-content">
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Сталь
              </div>
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Чугун
              </div>
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Нержавейка
              </div>
            </div>
          </div>
        </div>
        <div className="navFlexBlock">
          <div className="dropdown">
            <div className="navFlexText" onClick={() => navigate("/prices")}>
              Цветной лом
            </div>
            <div className="dropdown-content">
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Медь
              </div>
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Латунь
              </div>
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Алюминий
              </div>
              <div
                className="menuBlockText"
                onClick={() => navigate("/prices")}
              >
                Свинец
              </div>
            </div>
          </div>
        </div>
        <div className="navFlexBlock" onClick={() => navigate("/demontaj")}>
          <span className="navFlexText">Демонтаж</span>
        </div>
        <div className="navFlexBlock" onClick={() => navigate("/autolom")}>
          <span className="navFlexText">Автолом</span>
        </div>
        <div
          className="navFlexBlock"
          onClick={() => navigate("/akkumulyatory")}
        >
          <span className="navFlexText">Аккумляторы</span>
        </div>
        <div className="navFlexBlock">
          <span onClick={() => navigate("/metal")} className="navFlexText">
            Вывоз металлолома
          </span>
        </div>
        <div className="navFlexBlock" onClick={() => navigate("/prices")}>
          <span className="navFlexText">Цены на сегодня</span>
        </div>
      </div>
    </nav>
  );
};
