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
        </div>
        <div className="company_headerDiv"></div>
      </div>
    </div>
  );
};
