import axios from "axios";
import React from "react";
import { useContext } from "react";
import { ActiveContext } from "./context";
import { ModalCall } from "./modalCall/ModalCall";

export const Calc = () => {
  const [state, setState] = React.useState(true);
  const [price, setPrice] = React.useState(undefined);
  const [ok, setOk] = React.useState(450);
  const [number, setNumber] = React.useState(5);
  const { active, setActive } = useContext(ActiveContext);
  React.useEffect(() => {
    axios
      .get("https://unmarred-silky-crowley.glitch.me/price/1")
      .then(({ data }) => setPrice(data.one));
  }, []);
  const saveResult = (index) => {
    if (!state) {
      setOk(Number(price?.[index]?.[1] * number) * 1000);
    } else {
      setOk(Number(price?.[index]?.[1] * number));
    }
  };
  return (
    <>
      <div className="calcSection">
        <div className="calcSectionDiv">
          <div className="calcSectionDivFlex">
            <h1 className="calcsecth1">Калькулятор цен</h1>
            <h1 className="calcsecth2">Узнайте стоимость вашего металлолома</h1>
            <div className="calcSelectDiv">
              <div className="gridCalc">
                <span>Тип металла</span>
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
              </div>
              <div className="gridCalc">
                <span className="calcleftspan">Количество</span>
                <input
                  defaultValue="5"
                  onChange={(e) => setNumber(e.target.value)}
                  className="inputQuant"
                  placeholder="Кол-во"
                  type="number"
                />
              </div>
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
            <span
              className="btn-customCallCalc btn-lgCall page-scroll"
              onClick={() => setActive(true)}
            >
              Оставить заявку
            </span>
          </div>
        </div>
      </div>
      <ModalCall setActive={setActive} active={active} />
    </>
  );
};
