"use client";

import { LineChart } from "./line-chart";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/ui/card";
import { DateFilter } from "../date-filter";
import { useState, useMemo } from "react";
import type { DateRange } from "react-day-picker";

export function FrequencyChart() {
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
      dailyActivities: [3.2, 3.8, 4.1, 4.5, 4.8, 4.6],
      weeklyEvents: [12, 15, 18, 22, 25, 24],
      monthlyGatherings: [4.5, 5.2, 6.1, 6.8, 7.2, 7.0],
    },
    monthly: {
      labels: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8",
        "Week 9",
        "Week 10",
        "Week 11",
        "Week 12",
      ],
      dailyActivities: [
        4.2, 4.8, 3.9, 4.5, 5.1, 4.3, 4.7, 4.0, 4.6, 5.0, 4.1, 4.6,
      ],
      weeklyEvents: [18, 22, 16, 24, 28, 20, 26, 19, 23, 29, 17, 24],
      monthlyGatherings: [
        6.5, 7.2, 5.8, 7.5, 8.1, 6.9, 7.8, 6.2, 7.1, 8.3, 6.0, 7.0,
      ],
    },
    daily: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      dailyActivities: Array.from({ length: 30 }, () => Math.random() * 2 + 3),
      weeklyEvents: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 10) + 15
      ),
      monthlyGatherings: Array.from(
        { length: 30 },
        () => Math.random() * 3 + 5
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
          label: "Daily Activities (avg)",
          data: data.dailyActivities,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Weekly Events",
          data: data.weeklyEvents,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Monthly Gatherings",
          data: data.monthlyGatherings,
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.2)",
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
          title="Activity Frequency Analysis"
          height={400}
          formatValue={(value) => value.toFixed(1)}
        />
      </Card>
    </div>
  );
}
