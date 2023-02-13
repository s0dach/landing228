import React from "react";

export const AutoLom = () => {
  return (
    <div className="company_header">
      <div className="company_headerSectionOnebs">
        <div className="company_headerDivOne">
          <div className="flexCompanyDiv">
            <p className="company_headerDivOneP">Прием автолома</p>
            <span
              // onClick={() => props.setActive(true)}
              className="btn-customCall btn-lgCall page-scroll"
            >
              Оставить заявку
            </span>
          </div>
          <div className="demontajDiv">
            <p className="autolomp">СТОИМОСТЬ АВТОЛОМА В КОМПАНИИ ЯЛ-МЕТ </p>
            <p className="pDemontaj">
              Частый вопрос клиентов, сколько стоит машина на металлолом. Все
              зависит от количества, качества металла и рыночного спроса.
              Колебания стоимости незначительные. Вы сможете сдать автомобиль на
              металлолом по выгодной цене. У нас удобный график работы, прием
              заявок – ежедневно с 8:00 до 17:00, обед с 12:00 до 13:00. Можно
              связаться с нами по специальной форме на сайте и уточнить, как
              сдать машину на металл. Отвечаем оперативно.
            </p>
          </div>
        </div>
        <div className="company_headerDiv"></div>
      </div>
    </div>
  );
};
