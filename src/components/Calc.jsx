import React from "react";

export const Calc = () => {
  return (
    <div className="calcSection">
      <div className="calcSectionDiv">
        <div className="calcSectionDivFlex">
          <h1 className="calcsecth1">Калькулятор цен</h1>
          <h1 className="calcsecth2">Узнайте стоимость вашего металлолома</h1>
          <div className="calcSelectDiv">
            <select className="hall" id="hall" value="3">
              <option>АКБ полипропилен (белые) залитые, гелевые</option>
              <option>АКБ полипропилен (белые) слитые</option>
              <option>АКБ эбонит (черные) залитые</option>
              <option>АКБ эбонит (черные) слитые</option>
              <option>Алюминиевые банки</option>
              <option>Алюминий А гр. 1-1</option>
              <option>Алюминий А гр. 1-2</option>
              <option>Алюминий А гр. 2-4</option>
              <option>Алюминий А гр. 5-7</option>
              <option>Батареи отопительные</option>
              <option>
                Латунные автомобильные радиаторы / бойлерные трубки
              </option>
              <option>Латунь кусок</option>
              <option>Латунь микс</option>
              <option>Медь блеск</option>
              <option>Медь кусок</option>
              <option>Медь микс</option>
              <option>Нержавейка</option>
              <option>Радиаторы автомобильные</option>
              <option>Свинец «переплав»</option>
              <option>Сталь 12А</option>
              <option>Сталь 3А</option>
              <option>Сталь 3А2</option>
              <option>Сталь 5А</option>
              <option>Чугун</option> <option>Цены на лом алюминия</option>
            </select>
            <input className="inputQuant" placeholder="Кол-во" type="number" />
            <div className="checkboxFlex">
              <input checked="true" className="inputCheckBox" type="radio" />
              <span className="inputSpanCheck">Киллограмм</span>
            </div>
            <div className="checkboxFlex">
              <input className="inputCheckBox" type="radio" />
              <span className="inputSpanCheck">Тонн</span>
            </div>
          </div>
        </div>
        <div>
          <div className="itogo">
            <h1 className="itogoh1">Итого</h1>
            <h1 className="itogoh2">от NAN руб</h1>
          </div>
          <span className="btn-customCallCalc btn-lgCall page-scroll">
            Оставить заявку
          </span>
        </div>
      </div>
    </div>
  );
};
