import React from "react";
import { useContext } from "react";
import { ActiveContext } from "./context";
import { ModalCall } from "./modalCall/ModalCall";

export const RemoveMetal = (props) => {
  // const { setActive } = useContext(ActiveContext);
  const { active, setActive } = useContext(ActiveContext);
  return (
    <>
      <div className="company_header">
        <div className="company_headerSectionOnebs">
          <div className="company_headerDivOne">
            <div className="flexCompanyDiv">
              <p className="company_headerDivOneP">Вывоз металлолома</p>
              <span
                onClick={() => setActive(true)}
                className="btn-customCall btn-lgCall page-scroll"
              >
                Оставить заявку
              </span>
            </div>
            <div className="demontajDiv">
              <p className="pDemontaj">
                Демонтируем, вывозим и скупаем черный и цветной металл у
                юридических и физических лиц. Неработающие станки, старые
                гаражи, металлический мусор и любые другие металлические
                конструкции, которые захламляют помещение или больше не нужны на
                территории. Деньги отдаем сразу и вывозим в день обращения. Есть
                вся необходимая для сложного демонтажа техника и опытные
                специалисты.
              </p>
            </div>
          </div>
          <div className="company_headerDiv"></div>
        </div>
      </div>
      <ModalCall setActive={setActive} active={active} />
    </>
  );
};
