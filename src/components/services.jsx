import React from "react";

export const Services = (props) => {
  return (
    <div id="section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-textone">
              <h2>Демонтаж</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>
                Почему следует доверить нам резку, снос и демонтаж
                металлоконструкций?
              </h3>
              <p>
                Каждый заказ по демонтажным работам в «Ял-Мет» планируем
                индивидуально. Учитываем все нюансы заказа для быстрого,
                успешного, аккуратного проведения демонтажа. Участок приводим в
                порядок, образовавшийся мусор, отходы вывозим на спецплощадку.
                Помогаем клиентам с вопросом вывоза, утилизации металлолома.
              </p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="blur">
            <div className="col-xs-12 col-md-6">
              <img src="img/about.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
