import React, { useState } from "react";
let id = 5;
const NewExpenseForm = ({ toggle, newXp }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [stats, setStats] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChanger = (e) => {
    // setTitle(e.target.value);
    setStats((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const priceChanger = (e) => {
    // setPrice(e.target.value);
    setStats({ ...stats, price: e.target.value });
  };
  const dateChanger = (e) => {
    // setDate(e.target.value);
    setStats({ ...stats, date: e.target.value });
  };
  const changeAll = (e) => {
    setStats((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
    console.log(stats);
    newXp({
      id: id,
      title: stats.title,
      price: +stats.price,
      date: new Date(stats.date),
    });
    id++;
    setStats({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            placeholder="Title"
            onChange={changeAll}
            value={stats.title}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            required
            placeholder="Price"
            type="number"
            min="0"
            step="0.01"
            value={stats.price}
            onChange={changeAll}
            name="price"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2022-01-01"
            max="2026-12-31"
            value={stats.date}
            onChange={changeAll}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={toggle}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
