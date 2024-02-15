import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  const values = data.map((item) => {
    return item.value;
  });
  console.log(values);
  const max = Math.max(...values);
  const total = values.reduce((x, y) => x + y);

  return (
    <div className="chart">
      {data.map((item) => {
        return (
          <ChartBar
            label={item.label}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
