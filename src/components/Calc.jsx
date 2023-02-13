import axios from "axios";
import React from "react";

export const Calc = () => {
  const [state, setState] = React.useState(true);
  const [price, setPrice] = React.useState(undefined);
  const [ok, setOk] = React.useState(450);
  const [number, setNumber] = React.useState(5);
  React.useEffect(() => {
    axios
      .get("http://95.163.234.208:4500/price/1")
      .then(({ data }) => setPrice(data.one));
  });
  const saveResult = (index) => {
    if (!state) {
      setOk(Number(price?.[index]?.[1] * number) * 1000);
    } else {
      setOk(Number(price?.[index]?.[1] * number));
    }
  };
  return (
    <div className="calcSection">
      <div className="calcSectionDiv">
        <div className="calcSectionDivFlex">
          <h1 className="calcsecth1">Калькулятор цен</h1>
          <h1 className="calcsecth2">Узнайте стоимость вашего металлолома</h1>
          <div className="calcSelectDiv">
            <select
              className="hall"
              id="hall"
              onChange={(e) => saveResult(e.target.value)}
            >
              {price &&
                price.map((data, i) => {
                  return <option value={i}>{data[0]}</option>;
                })}
            </select>
            <input
              defaultValue="5"
              onChange={(e) => setNumber(e.target.value)}
              className="inputQuant"
              placeholder="Кол-во"
              type="number"
            />
            <div className="checkboxFlex">
              <input
                checked={state}
                onClick={() => setState(!state)}
                className="inputCheckBox"
                type="radio"
              />
              <span className="inputSpanCheck">Киллограмм</span>
            </div>
            <div className="checkboxFlex">
              <input
                onClick={() => setState(!state)}
                checked={!state}
                className="inputCheckBox"
                type="radio"
              />
              <span className="inputSpanCheck">Тонн</span>
            </div>
          </div>
        </div>
        <div>
          <div className="itogo">
            <h1 className="itogoh1">Итого</h1>
            <h1 className="itogoh2">от {ok} руб</h1>
          </div>
          <span className="btn-customCallCalc btn-lgCall page-scroll">
            Оставить заявку
          </span>
        </div>
      </div>
    </div>
  );
};
