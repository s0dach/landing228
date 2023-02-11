import React from "react";
import "./styles.css";

export const ModalCall = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modalAct active" : "modalAct"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modalDiv">
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
            по номеру +7 999 999 99 99
          </span>
        </div>
        <div className="buttonmodalDiv">
          <div className="modalButton">Отправить</div>
        </div>
      </div>
    </div>
  );
};
