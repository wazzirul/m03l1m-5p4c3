import { CHART_DEFAULTS } from "@/constants/dashboard-chart";
import { Dataset } from "@/types/dashboard";

export const generateMockData = (
  length: number,
  min: number,
  max: number
): number[] =>
  Array.from({ length }, () => Math.floor(Math.random() * (max - min)) + min);

export const createDataset = (
  label: string,
  data: number[],
  color: string,
  options: Partial<Dataset> = {}
): Dataset => ({
  label,
  data,
  borderColor: color,
  backgroundColor: `${color.replace(")", `, ${CHART_DEFAULTS.fillOpacity})`)}`,
  fill: true,
  tension: CHART_DEFAULTS.tension,
  pointRadius: CHART_DEFAULTS.pointRadius,
  pointHoverRadius: CHART_DEFAULTS.pointHoverRadius,
  borderWidth: CHART_DEFAULTS.borderWidth,
  ...options,
});
