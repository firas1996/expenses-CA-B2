import "./ChartBar.css";

const chartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__mask">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">label</div>
    </div>
  );
};

export default chartBar;
