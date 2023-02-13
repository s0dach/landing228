import axios from "axios";
import React from "react";

export const AdminPage = () => {
  const [price, setPrice] = React.useState(undefined);
  const [firstName1, setFirstName1] = React.useState("");
  const [firstName2, setFirstName2] = React.useState("");
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
      </div>
    </div>
  );
};
