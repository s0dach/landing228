import axios from "axios";
import React from "react";

export const AdminPage = () => {
  const [price, setPrice] = React.useState(undefined);
  const [firstName1, setFirstName1] = React.useState("");
  const [firstName2, setFirstName2] = React.useState("");
  const [new1, setNew1] = React.useState(false);
  const [newPrice, setNewPrice] = React.useState(null);
  const [newPrice1, setNewPrice1] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("http://95.163.234.208:4500/price/1")
      .then(({ data }) => setPrice(data.one));
  });
  const saveBtn = (dataName, dataPrice, name, priced, index) => {
    if (name === "") {
      name = dataName;
    }
    if (priced === "") {
      priced = dataPrice;
    }
    price[index] = [name, priced];
    axios.patch("http://95.163.234.208:4500/price/1", { one: price });

    setFirstName1("");
    setFirstName2("");
  };
  const newLocation = () => {
    const abc = [...price, [newPrice, newPrice1]];
    axios.patch("http://95.163.234.208:4500/price/1", { one: abc });
    setNewPrice(null);
    setNewPrice1(null);
    setNew1(false);
  };
  return (
    <div className="adminPage">
      <div className="adminSpan">Админ-раздел</div>
      {/* <div className="adminPageDiv"> */}
      <div className="adminPageDivGrid">
        {price &&
          price.map((data, i) => {
            return (
              <>
                <input
                  className="inputName"
                  defaultValue={data[0]}
                  onChange={(event) => setFirstName1(event.target.value)}
                />
                <input
                  className="inputName"
                  defaultValue={data[1]}
                  onChange={(event) => setFirstName2(event.target.value)}
                />
                <button
                  className="saveButton"
                  onClick={() =>
                    saveBtn(data[0], data[1], firstName1, firstName2, i)
                  }
                >
                  Сохранить
                </button>
              </>
            );
          })}
        {!new1 ? (
          <button className="NewPosition" onClick={() => setNew1(true)}>
            Добавить новую позицию
          </button>
        ) : (
          <>
            <input
              onChange={(event) => setNewPrice(event.target.value)}
              className="inputName"
              placeholder="Новое название"
            />
            <input
              onChange={(event) => setNewPrice1(event.target.value)}
              className="inputName"
              placeholder="Новая цена"
            />
            <button onClick={() => newLocation()}>СОХРАНИТЬ</button>
          </>
        )}
      </div>
    </div>
  );
};
