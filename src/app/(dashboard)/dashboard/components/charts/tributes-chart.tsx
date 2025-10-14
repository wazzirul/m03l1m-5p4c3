"use client";

import { LineChart } from "./line-chart";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/ui/card";
import { DateFilter } from "../date-filter";
import { useState, useMemo } from "react";
import type { DateRange } from "react-day-picker";

export function TributesChart() {
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
      memorialDonations: [15000, 18000, 22000, 28000, 35000, 42000],
      honorDonations: [12000, 15000, 18000, 23000, 28000, 33000],
      anniversaryTributes: [8000, 10000, 12000, 15000, 18000, 22000],
      specialOccasions: [6000, 7500, 9000, 11000, 14000, 17000],
    },
    monthly: {
      labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      memorialDonations: [
        3500, 3200, 3800, 4100, 3600, 3900,
        4200, 3400, 3700, 4500, 3300, 4000
      ],
      honorDonations: [
        2800, 2600, 3000, 3200, 2900, 3100,
        3400, 2700, 3000, 3600, 2500, 3200
      ],
      anniversaryTributes: [
        1800, 1600, 2000, 2200, 1900, 2100,
        2300, 1700, 2000, 2500, 1600, 2200
      ],
      specialOccasions: [
        1400, 1200, 1600, 1800, 1500, 1700,
        1900, 1300, 1600, 2000, 1200, 1800
      ],
    },
    daily: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      memorialDonations: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 200) + 100
      ),
      honorDonations: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 150) + 80
      ),
      anniversaryTributes: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 100) + 50
      ),
      specialOccasions: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 80) + 40
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
          label: "Memorial Donations",
          data: data.memorialDonations,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99, 102, 241, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Honor Donations",
          data: data.honorDonations,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Anniversary Tributes",
          data: data.anniversaryTributes,
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.4)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Special Occasions",
          data: data.specialOccasions,
          borderColor: "#ec4899",
          backgroundColor: "rgba(236, 72, 153, 0.4)",
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
          title="Tribute Donations"
          height={400}
          formatValue={formatCurrency}
        />
      </Card>
    </div>
  );
}
