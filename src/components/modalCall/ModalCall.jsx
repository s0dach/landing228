import axios from "axios";
import React from "react";
import "./styles.css";

export const ModalCall = ({ active, setActive }) => {
  const [number, setNumber] = React.useState("+7‒922‒396‒00‒11");
  React.useEffect(() => {
    axios
      .get("https://unmarred-silky-crowley.glitch.me/price/1")
      .then(({ data }) => setNumber(data.number));
  }, []);
  return (
    <div
      className={active ? "modalAct active" : "modalAct"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modalDiv">
          <div className="modalDivh1">
            <h1 className="modalh1">Заказать звонок</h1>
            <span className="spanModal">
              Оставьте ваш номер телефона, мы перезвоним в ближайшее время.
            </span>
          </div>
          <span className="spanModal">Введите ваше имя</span>
          <input className="inputModal" type="text" />
        </div>
        <div className="modalDivOne">
          <span className="spanModal">Введите ваш телефон</span>
          <input className="inputModal" type="text" />
        </div>
        <div>
          <span className="spanModal">
            Вы можете позвонить нам <br />
            по номеру {number}
          </span>
        </div>
        <div className="buttonmodalDiv">
          <div className="modalButton">Отправить</div>
        </div>
      </div>
    </div>
  );
};
