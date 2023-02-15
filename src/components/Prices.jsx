import React from "react";
import { useContext } from "react";
import { ActiveContext } from "./context";
import { ModalCall } from "./modalCall/ModalCall";

import "./styles.css";

export const Prices = ({ name }) => {
  // const { setActive } = useContext(ActiveContext);
  const { active, setActive } = useContext(ActiveContext);
  return (
    <>
      <div className="pricesSection">
        <div className="pricesSectionText">
          <span className="pricesSectionTextSpan">
            Актуальные цены на {name[1]} лом
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
            <span>Металл</span>
          </div>
          <div className="pricesSectionPriceText">
            <span>Цена от ₽/кг</span>
          </div>
        </div>
        <div className="pricesSectionPriceBlockOne">
          <div className="pricesSectionPriceTextOne">
            <span>ПРИЕМ ЧУГУНА</span>
          </div>
          <div className="pricesSectionPriceTextOne">
            <span>550-560</span>
          </div>
        </div>
        <div className="pricesSectionPriceBlockOne">
          <div className="pricesSectionPriceTextOne">
            <span>ЛОМ БЫСТРОРЕЗОВ</span>
          </div>
          <div className="pricesSectionPriceTextOne">
            <span>95-105</span>
          </div>
        </div>
        <div className="pricesSectionPriceBlockOne">
          <div className="pricesSectionPriceTextOne">
            <span>ЛОМ НЕРЖАВЕЙКИ</span>
          </div>
          <div className="pricesSectionPriceTextOne">
            <span>95-105</span>
          </div>
        </div>
        <div className="pricesSectionPriceBlockOne">
          <div className="pricesSectionPriceTextOne">
            <span>ЛОМ СТАЛИ</span>
          </div>
          <div className="pricesSectionPriceTextOne">
            <span>95-105</span>
          </div>
        </div>
      </div>
      <ModalCall setActive={setActive} active={active} />
    </>
  );
};
