import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
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
