"use client";

import { StatsCard } from "../stats-card";
import { Card } from "@/components/ui/card";
import { LineChart } from "./line-chart";
import { useState, useMemo } from "react";
import { DateFilter } from "../date-filter";
import type { DateRange } from "react-day-picker";

export function CountriesChart() {
  const [selectedRange, setSelectedRange] = useState<"day" | "month" | "year">(
    "month"
  );
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const countryData = [
    {
      country: "Canada",
      flag: "🇨🇦",
      users: 2847,
      donations: "$89,450",
      avgPerUser: "$314",
      percentage: 45,
      growth: { value: "+12.3%", isPositive: true },
    },
    {
      country: "United States",
      flag: "🇺🇸",
      users: 1923,
      donations: "$67,230",
      avgPerUser: "$349",
      percentage: 30,
      growth: { value: "+18.7%", isPositive: true },
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      users: 856,
      donations: "$28,940",
      avgPerUser: "$338",
      percentage: 14,
      growth: { value: "+8.2%", isPositive: true },
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      users: 423,
      donations: "$15,670",
      avgPerUser: "$370",
      percentage: 7,
      growth: { value: "+25.1%", isPositive: true },
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      users: 298,
      donations: "$9,850",
      avgPerUser: "$330",
      percentage: 4,
      growth: { value: "+15.6%", isPositive: true },
    },
  ];

  // Regional donation trends data
  const regionTrendsData = {
    yearly: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      northAmerica: [45000, 52000, 61000, 73000, 89000, 95000],
      europe: [18000, 22000, 28000, 34000, 42000, 45000],
      oceania: [8000, 10000, 12000, 14000, 17000, 19000],
    },
    monthly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      northAmerica: [
        7800, 8200, 7500, 8900, 9200, 8800, 9500, 8600, 9100, 9800, 8400, 9000,
      ],
      europe: [
        3200, 3600, 3100, 3800, 4100, 3700, 4200, 3500, 3900, 4300, 3300, 3800,
      ],
      oceania: [
        1200, 1400, 1100, 1600, 1800, 1500, 1900, 1300, 1700, 2000, 1200, 1600,
      ],
    },
    daily: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      northAmerica: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 500) + 300
      ),
      europe: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 200) + 100
      ),
      oceania: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * 100) + 50
      ),
    },
  };

  const chartData = useMemo(() => {
    let data;
    switch (selectedRange) {
      case "year":
        data = regionTrendsData.yearly;
        break;
      case "day":
        data = regionTrendsData.daily;
        break;
      default:
        data = regionTrendsData.monthly;
    }

    return {
      labels: data.labels,
      datasets: [
        {
          label: "North America",
          data: data.northAmerica,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Europe",
          data: data.europe,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: "Oceania",
          data: data.oceania,
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalUsers = countryData.reduce(
    (sum, country) => sum + country.users,
    0
  );
  const totalDonations = countryData.reduce(
    (sum, country) => sum + parseFloat(country.donations.replace(/[$,]/g, "")),
    0
  );

  return (
    <div className="space-y-6">
      {/* Regional Trends Chart */}
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
        <LineChart data={chartData} height={400} formatValue={formatCurrency} title="Regional Donations" />
      </Card>
    </div>
  );
}
