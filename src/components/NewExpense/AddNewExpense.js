import { useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChanger = (e) => {
    setTitle(e.target.value);
  };
  const priceChanger = (e) => {
    setPrice(e.target.value);
  };
  const dateChanger = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(price);
    console.log(date);
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={titleChanger}
              value={title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              value={price}
              onChange={priceChanger}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              value={date}
              onChange={dateChanger}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
