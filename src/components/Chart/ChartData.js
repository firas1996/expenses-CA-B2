import Chart from "./Chart";

const ChartData = ({ expenses }) => {
  const chartData = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
  for (const expense of expenses) {
    chartData[expense.date.getMonth()].value += expense.price;
  }
  return <Chart data={chartData} />;
};
export default ChartData;
