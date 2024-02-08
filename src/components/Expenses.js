import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  let years = new Set(expenses.map((item) => item.date.getFullYear()).sort());
  // console.log([...years]);
  const [selectedYear, setSelectedYear] = useState("All");
  console.log(selectedYear);
  const filtredExpenses = expenses.filter((item) => {
    if (selectedYear == "All") {
      return true;
    }
    return item.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        years={[...years]}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <ChartData expenses={filtredExpenses} />
      {filtredExpenses.map((expense) => {
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
