import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="blur">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/metal.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Прием металлолома</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Почему вам нужно выбрать нас</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
