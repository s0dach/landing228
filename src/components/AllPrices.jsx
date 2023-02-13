import axios from "axios";
import React from "react";
import "./styles.css";

export const AllPrices = () => {
  const [price, setPrice] = React.useState(undefined);
  React.useEffect(() => {
    axios
      .get("http://95.163.234.208:4500/price/1")
      .then(({ data }) => setPrice(data.one));
  });
  // price.forEach((c) => console.log(c));
  return (
    <div className="pricesSection">
      <div className="pricesSectionText">
        <span className="pricesSectionTextSpan">
          Актуальные цены на сегодня
        </span>
        <span className="btn-customCallCalc btn-lgCall page-scroll">
          Оставить заявку
        </span>
      </div>

      <div className="pricesSectionPriceBlock">
        <div className="pricesSectionPriceText">
          <span>Лом</span>
        </div>
        <div className="pricesSectionPriceText">
          <span>Цена от ₽/кг</span>
        </div>
      </div>
      {price
        ? price.map((data) => {
            return (
              <div className="pricesSectionPriceBlockOne">
                <div className="pricesSectionPriceTextOne">
                  <span>{data[0]}</span>
                </div>
                <div className="pricesSectionPriceTextOne">
                  <span>{data[1]} руб</span>
                </div>
              </div>
            );
          })
        : undefined}
      {/* <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Медь блеск</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>610 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Медь кусок</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>600 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Медь микс</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span> 590 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Медь луженая</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>545 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Радиаторы тепловозные</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span> 425 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Латунь микс</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>340 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Латунные радиаторы</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>355 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Латунные радиаторы</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>355 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Алюминий электротехнический</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>145 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Латунные радиаторы</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>355 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Латунные радиаторы</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>355 руб</span>
        </div>
      </div>
      <div className="pricesSectionPriceBlockOne">
        <div className="pricesSectionPriceTextOne">
          <span>Латунные радиаторы</span>
        </div>
        <div className="pricesSectionPriceTextOne">
          <span>355 руб</span>
        </div>
      </div> */}
    </div>
  );
};
