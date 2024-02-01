import "./ChartBar.css";

const ChartBar = ({ label, value, max, total }) => {
  let x = 0;
  if (max > 0) {
    x = (value / max) * 100;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__mask">
        <div className="chart-bar__fill" style={{ height: `${x}%` }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
