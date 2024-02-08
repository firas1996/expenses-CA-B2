import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select
        value={selectedYear}
        onChange={(e) => {
          setSelectedYear(e.target.value);
        }}
      >
        <option value="All">All</option>
        {years.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
