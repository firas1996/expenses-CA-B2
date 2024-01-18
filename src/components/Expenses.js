import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            price={expense.price}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
