"use client";

import { LineChart } from "./line-chart";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/ui/card";
import { DateFilter } from "../date-filter";
import { useState, useMemo } from "react";
import type { DateRange } from "react-day-picker";

export function RecurringChart() {
  const { theme } = useTheme();
  const [selectedRange, setSelectedRange] = useState<"day" | "month" | "year">(
    "month"
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  // Import data from centralized location
  const allData = useMemo(() => {
    return require("../../data/chart-data").recurringChartData;
  }, []);

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
          label: "Weekly Donations",
          data: data.weeklyDonations,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Monthly Subscribers",
          data: data.monthlySubscribers,
          borderColor: "#8b5cf6",
          backgroundColor: "rgba(139, 92, 246, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
      ],
    };
  }, [selectedRange]);

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
          title="Recurring Activities"
          height={400}
          formatValue={(value) => value.toString()}
        />
      </Card>
    </div>
  );
}
