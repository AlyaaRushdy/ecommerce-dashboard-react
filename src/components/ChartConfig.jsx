const chartConfig = {
    sales: {
      label: "Sales Cost",
    },
    revenu: {
      label: "Revenu",
      color: "hsl(var(--chart-1))",
    },
    expense: {
      label: "Expense",
      color: "hsl(var(--chart-2))",
    },
  };
  
  function ChartConfigComponent() {
    return (
      <div>
        <h2>{chartConfig.views.label}</h2>
        <div style={{ color: chartConfig.desktop.color }}>
          {chartConfig.desktop.label}
        </div>
        <div style={{ color: chartConfig.mobile.color }}>
          {chartConfig.mobile.label}
        </div>
      </div>
    );
  }
  
  export default ChartConfigComponent;
  