import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "New Tv",
      price: 1234,
      date: new Date(2025, 1, 9),
    },
    {
      id: 2,
      title: "Car",
      price: 9999,
      date: new Date(2023, 8, 9),
    },
    {
      id: 3,
      title: "Education",
      price: 5963,
      date: new Date(2024, 3, 29),
    },
    {
      id: 4,
      title: "Bills",
      price: 999,
      date: new Date(2024, 10, 18),
    },
  ];
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
