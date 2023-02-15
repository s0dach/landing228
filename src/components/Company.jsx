import React from "react";
import { useContext } from "react";
import { ReactComponent as People } from "../components/assets/people.svg";
import { ActiveContext } from "./context";
import { ModalCall } from "./modalCall/ModalCall";

export const Company = () => {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <>
      <div className="company_header">
        <div className="company_headerSection">
          <div className="company_headerDivOne">
            <div className="flexCompanyDiv">
              <p className="company_headerDivOneP">О компании</p>
              <span
                onClick={() => setActive(true)}
                className="btn-customCall btn-lgCall page-scroll"
              >
                Оставить заявку
              </span>
            </div>
            <p className="company_headerDivOnespan">
              Ял-Мет специализируется на:
            </p>
            <p className="company_headerDivOnespanh">
              1. Приёме и вывозе металлолома.
            </p>
            <p className="company_headerDivOnespanh">2. Демонтажных работах.</p>
            <p className="company_headerDivOnespanh">3. Вывозе мусора.</p>
            <p className="company_headerDivOnespanP">
              Мы молодая и стремительно развивающаяся компания, в составе
              опытный персонал и необходимая специализированная техника, а также
              собственная производственная база.
            </p>
          </div>
          <div className="company_headerDiv"></div>
        </div>
        <div className="companySectionTwo">
          <div className="companySectionTwoBlock">
            <div>
              <People />
            </div>
            <span className="companySectionTwoBlockspan">
              В Ял-Мет сформирован крепкий коллектив, который слаженно и чётко
              выполняет поставленные задачи. Благодаря профессионализму наших
              сотрудников, услуги нашей компании только высокого качества!
            </span>
          </div>
        </div>
        <div className="companySectionThree">
          <span className="companySectionThreeText">Привлекательные цены</span>
          <span className="companySectionThreeText">
            Прием металлолома разных сортов
          </span>
          <span className="companySectionThreeText">
            Прием лома из любого населенного пункта​​
          </span>
        </div>
      </div>
      <ModalCall setActive={setActive} active={active} />
    </>
  );
};
