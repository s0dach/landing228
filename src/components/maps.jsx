import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const Maps = () => {
  return (
    <div className="mapsYandexSection">
      <div className="displayFlexMaps">
        <h1 className="displayFlexMapsh1">Где нас найти?</h1>
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
