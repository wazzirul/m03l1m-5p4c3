"use client";

import { BaseChart } from "./charts";

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill?: boolean;
      tension?: number;
      pointRadius?: number;
      pointHoverRadius?: number;
      borderWidth?: number;
    }[];
  };
  title?: string;
  height?: number;
  formatValue?: (value: number) => string;
  showLegend?: boolean;
}

export function LineChart(props: LineChartProps) {
  return <BaseChart {...props} />;
}
