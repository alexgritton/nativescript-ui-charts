import { colorToString, toHIColor } from "../helpers/helpers";

export function chartHandler(hiOptions, chartOptions) {
  const chart = new HIChart();
  
  chartOptions.type && (chart.type = chartOptions.type);

  if (chartOptions.backgroundColor) {
    if (chartOptions.backgroundColor.linearGradient && chartOptions.backgroundColor.stops) {
      const stops = chartOptions.backgroundColor.stops.map((stop, index) => [index, colorToString(stop)]);
      chart.backgroundColor = new HIColor({ 
        linearGradient: NSDictionary.dictionaryWithObjectsForKeys(chartOptions.backgroundColor.linearGradient, ["x1", "y1", "x2", "y2"]), 
        stops: stops
      });
    } else {
      chart.backgroundColor = toHIColor(chartOptions.backgroundColor)
    }
  }

  chartOptions.borderRadius && (chart.borderRadius = chartOptions.borderRadius);
  chartOptions.borderWidth && (chart.borderWidth = chartOptions.borderWidth);
  if (chartOptions.borderColor) {
    chart.borderColor = toHIColor(chartOptions.borderColor);
  }

  hiOptions.chart = chart;
  
  return hiOptions;
}