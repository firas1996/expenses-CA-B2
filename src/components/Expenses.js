import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  let years = new Set(expenses.map((item) => item.date.getFullYear()).sort());
  // console.log([...years]);
  const filtredExpenses = expenses.filter((item) => {
    return true;
  });
  return (
    <div className="expenses">
      <ExpensesFilter years={[...years]} />
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
