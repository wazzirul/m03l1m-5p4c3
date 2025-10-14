"use client";
import { TooltipItem } from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "@/contexts/ThemeContext";
import { ChartData } from "@/types/dashboard";
import { CHART_DEFAULTS } from "@/constants/dashboard-chart";
import { registerChartComponents } from "@/lib/chart-config";

// Register Chart.js components immediately at module level
registerChartComponents();

interface BaseChartProps {
  data: ChartData;
  title?: string;
  height?: number;
  formatValue?: (value: number) => string;
  showLegend?: boolean;
}

export function BaseChart({
  data,
  title,
  height = CHART_DEFAULTS.height,
  formatValue = (value) => value.toString(),
  showLegend = true,
}: BaseChartProps) {
  const { theme } = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          color: theme.mode === 'dark' ? '#e5e7eb' : '#374151',
        },
      },
      title: {
        display: !!title,
        text: title,
        color: theme.mode === 'dark' ? '#f3f4f6' : '#1f2937',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: theme.mode === 'dark' ? '#1f2937' : '#ffffff',
        titleColor: theme.mode === 'dark' ? '#f3f4f6' : '#1f2937',
        bodyColor: theme.mode === 'dark' ? '#e5e7eb' : '#374151',
        borderColor: theme.mode === 'dark' ? '#374151' : '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context: TooltipItem<'line'>) {
            const y = context.parsed.y;
            const valueLabel = (y == null) ? '—' : formatValue(y);
            return `${context.dataset.label}: ${valueLabel}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable vertical grid lines
          drawOnChartArea: false,
          drawTicks: true,
        },
        ticks: {
          color: theme.mode === 'dark' ? '#9ca3af' : '#6b7280',
        },
      },
      y: {
        grid: {
          display: true,
          drawOnChartArea: true, // Enable horizontal grid lines
          drawTicks: true,
          color: function(context: any) {
            // Very light grid that gets hidden by filled areas
            return theme.mode === 'dark'
              ? 'rgba(75, 85, 99, 0.2)' // Very subtle in dark mode
              : 'rgba(209, 213, 219, 0.4)'; // Very subtle in light mode
          },
          lineWidth: 0.5, // Thin lines
        },
        ticks: {
          color: theme.mode === 'dark' ? '#9ca3af' : '#6b7280',
          callback: function(value: any) {
            return formatValue(Number(value));
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    // Ensure datasets with fill render above grid lines
    datasets: {
      line: {
        order: 1, // Higher order means rendered on top
      }
    }
  };

  // Increase opacity for filled areas to better hide horizontal grid lines
  const processedData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      backgroundColor: dataset.fill ?
        dataset.backgroundColor.replace(/[\d\.]+\)$/g, '0.8)') : // High opacity for filled areas
        dataset.backgroundColor
    }))
  };

  return (
    <div style={{ height: `${height}px` }}>
      <Line data={processedData} options={options} />
    </div>
  );

}
