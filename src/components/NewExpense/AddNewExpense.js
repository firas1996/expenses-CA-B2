import { useState } from "react";
import "./AddNewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const AddNewExpense = ({ newXp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="new-expense">
      {isOpen ? (
        <NewExpenseForm newXp={newXp} toggle={toggle} />
      ) : (
        <button onClick={toggle}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddNewExpense;
