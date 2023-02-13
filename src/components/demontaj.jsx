import React from "react";
import { ReactComponent as People } from "../components/assets/people.svg";

export const Demontaj = () => {
  return (
    <div className="company_header">
      <div className="company_headerSectionOnebs">
        <div className="company_headerDivOne">
          <div className="flexCompanyDiv">
            <p className="company_headerDivOneP">Демонтаж</p>
            <span
              // onClick={() => props.setActive(true)}
              className="btn-customCall btn-lgCall page-scroll"
            >
              Оставить заявку
            </span>
          </div>
          <div className="demontajDiv">
            <p className="pDemontaj">
              Ял-Мет принимает заявки на демонтажные работы. Мы разбираем и
              сносим здания, сооружения, отопительное оборудование, включая печи
              и котлы, септики, внутриквартирные перегородки и многое другое.
              Работы ведутся с соблюдением требований техники безопасности и
              строительных нормативов.
            </p>
            <p className="pDemontaj">
              Заказать демонтаж могут жители и предприятия Тюмени и Тюменской
              области. Компания располагает необходимым оборудованием. Если
              требуется снос крупного объекта (дома, промышленного цеха),
              специалисты помогают оформить необходимые документы, снять здание
              с учета.
            </p>
          </div>
        </div>
        <div className="company_headerDiv"></div>
      </div>
    </div>
  );
};
