import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price }) => {
  // const [t, setT] = useState(title);
  // const updateTitle = () => {
  //   console.log(t);
  //   setT("New Title!!!!");
  //   console.log(t);
  // };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={updateTitle}>Update Title</button> */}
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
