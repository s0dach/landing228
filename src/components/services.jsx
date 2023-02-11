import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>СДАТЬ ЛОМ В ПРИЕМ МЕТАЛЛА (2023 ГОД)</h2>
          <p>
            На протяжении всего 2023 года «В-Лом» даем выгодные цены, поэтому
            сдать металл в наш пункт приема «Ял-Мет» - логичное решение. Являясь
            крупной скупкой, мы работаем на количество и держим цены на лом в
            2023 году максимальными.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
