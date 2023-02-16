import axios from "axios";
import React from "react";
import { useContext } from "react";
import { ActiveContext } from "./context";
import { ModalCall } from "./modalCall/ModalCall";
import "./styles.css";

export const AllPrices = () => {
  const [price, setPrice] = React.useState(undefined);
  const { active, setActive } = useContext(ActiveContext);
  React.useEffect(() => {
    axios
      .get("https://unmarred-silky-crowley.glitch.me/price/1")
      .then(({ data }) => setPrice(data.one));
  }, []);
  // price.forEach((c) => console.log(c));
  return (
    <>
      <div className="pricesSection">
        <div className="pricesSectionText">
          <span className="pricesSectionTextSpan">
            Актуальные цены на сегодня
          </span>
          <span
            className="btn-customCallCalc btn-lgCall page-scroll"
            onClick={() => setActive(true)}
          >
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
      </div>
      <ModalCall setActive={setActive} active={active} />
    </>
  );
};
