import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { ReactComponent as Teal } from "../components/assets/teal.svg";

export const Maps = () => {
  return (
    <div className="mapsYandexSection">
      <div className="displayFlexMaps">
        <div>
          <h1 className="displayFlexMapsh1">
            Почему выгодно обращаться в нашу компанию?
          </h1>
          <h3 className="displayFlexMapsh3">
            <div className="displayFlexLogo">
              <Teal />
            </div>
            у нас выгодные цены;
          </h3>
          <h3 className="displayFlexMapsh3">
            <div className="displayFlexLogo">
              <Teal />
            </div>
            удобный график работы;
          </h3>
          <h3 className="displayFlexMapsh3">
            <div className="displayFlexLogo">
              <Teal />
            </div>{" "}
            наличие современного оборудования и инструментов;
          </h3>
          <h3 className="displayFlexMapsh3">
            <div className="displayFlexLogo">
              <Teal />
            </div>
            собственный автотранспорт.
          </h3>
          <div className="spanMapsOne">
            <span className="spanTextMaps">
              Сдать металл по высокой цене и заказать демонтаж можно, позвонив
              по телефону +7 (900) 999 99 99. С нами можно связаться по
              специальной форме на сайте. Мы оперативно отвечаем на запросы
              клиентов, находя выгодные решения.
            </span>
          </div>
          <div className="spanMaps">
            <span>
              За дополнительной информацией обращайтесь к консультантам
              компании.
            </span>
          </div>
        </div>
        <div>
          <h1 className="displayFlexMapsh1">Где нас найти?</h1>
        </div>
      </div>
      <YMaps>
        <Map
          width="100%"
          height="400px"
          defaultState={{
            center: [57.193279, 65.613829],
            zoom: 17,
          }}
        >
          <Placemark defaultGeometry={[57.193279, 65.613829]} />
        </Map>
      </YMaps>
    </div>
  );
};
