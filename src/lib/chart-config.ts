/**
 * Chart.js configuration and registration
 * Separated to allow better code splitting
 */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

let isRegistered = false;

/**
 * Register Chart.js components only once
 * This prevents duplicate registration errors
 */
export function registerChartComponents() {
  if (!isRegistered) {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      Filler
    );
    isRegistered = true;
  }
}
