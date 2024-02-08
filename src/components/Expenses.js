import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      <ExpensesFilter years={["2023", "2024", "2025"]} />
      <ChartData expenses={expenses} />
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
