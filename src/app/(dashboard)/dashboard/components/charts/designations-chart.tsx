"use client";

import { LineChart } from "./line-chart";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/ui/card";
import { DateFilter } from "../date-filter";
import { useState, useMemo } from "react";
import type { DateRange } from "react-day-picker";

export function DesignationsChart() {
  const { theme } = useTheme();
  const [selectedRange, setSelectedRange] = useState<"day" | "month" | "year">(
    "month"
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const allData = {
    yearly: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      masjidOperations: [45000, 52000, 61000, 73000, 89000, 95000],
      educationPrograms: [28000, 32000, 38000, 45000, 52000, 58000],
      communityServices: [18000, 22000, 28000, 34000, 42000, 48000],
      emergencyFund: [12000, 15000, 18000, 22000, 28000, 32000],
      youthPrograms: [8000, 10000, 14000, 18000, 24000, 28000],
    },
    monthly: {
      labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      masjidOperations: [
        7800, 8200, 7500, 8900, 9200, 8800,
        9500, 8600, 9100, 9800, 8400, 9000
      ],
      educationPrograms: [
        4800, 5100, 4600, 5400, 5700, 5300,
        5800, 5200, 5600, 6100, 5000, 5500
      ],
      communityServices: [
        3900, 4200, 3700, 4500, 4800, 4400,
        4900, 4300, 4700, 5200, 4100, 4600
      ],
      emergencyFund: [
        2600, 2800, 2400, 3000, 3200, 2900,
        3300, 2700, 3100, 3500, 2700, 3000
      ],
      youthPrograms: [
        2300, 2500, 2100, 2700, 2900, 2600,
        3000, 2400, 2800, 3200, 2400, 2700
      ],
    },
    daily: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      masjidOperations: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 500) + 200
      ),
      educationPrograms: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 300) + 150
      ),
      communityServices: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 200) + 100
      ),
      emergencyFund: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 150) + 80
      ),
      youthPrograms: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 120) + 60
      ),
    },
  };

  const chartData = useMemo(() => {
    let data;
    switch (selectedRange) {
      case "year":
        data = allData.yearly;
        break;
      case "day":
        data = allData.daily;
        break;
      default:
        data = allData.monthly;
    }

    return {
      labels: data.labels,
      datasets: [
        {
          label: "Masjid Operations",
          data: data.masjidOperations,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Education Programs",
          data: data.educationPrograms,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Community Services",
          data: data.communityServices,
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Emergency Fund",
          data: data.emergencyFund,
          borderColor: "#ef4444",
          backgroundColor: "rgba(239, 68, 68, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Youth Programs",
          data: data.youthPrograms,
          borderColor: "#8b5cf6",
          backgroundColor: "rgba(139, 92, 246, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
      ],
    };
  }, [selectedRange]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Chart */}
      <Card className="p-6">
        <DateFilter
          selectedRange={selectedRange}
          onRangeChange={setSelectedRange}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
        <LineChart
          data={chartData}
          title="Donation Designations"
          height={400}
          formatValue={formatCurrency}
        />
      </Card>
    </div>
  );
}
