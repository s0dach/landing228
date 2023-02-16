import React from "react";
import { useContext } from "react";
import { ActiveContext } from "./context";
import { ModalCall } from "./modalCall/ModalCall";

export const Accums = () => {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <>
      <div className="company_header">
        <div className="company_headerSectionOnebs">
          <div className="company_headerDivOne">
            <div className="flexCompanyDiv">
              <p className="company_headerDivOneP">Прием аккумляторов</p>
              <span
                onClick={() => setActive(true)}
                className="btn-customCall btn-lgCall page-scroll"
              >
                Оставить заявку
              </span>
            </div>
          </div>
          <div className="company_headerDiv"></div>
        </div>
      </div>
      <ModalCall setActive={setActive} active={active} />
    </>
  );
};
