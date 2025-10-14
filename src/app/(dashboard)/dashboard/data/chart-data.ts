/**
 * Centralized chart data to reduce component bundle size
 * In production, this would be replaced with API calls
 */

export const raisedChartData = {
  yearly: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    income: [120000, 150000, 180000, 220000, 280000, 233300],
    cumulative: [120000, 270000, 450000, 670000, 950000, 1183300],
  },
  monthly: {
    labels: [
      "2024-Jul", "2024-Aug", "2024-Sep", "2024-Oct", "2024-Nov", "2024-Dec",
      "2025-Jan", "2025-Feb", "2025-Mar", "2025-Apr", "2025-May", "2025-Jun",
      "2025-Jul", "2025-Aug",
    ],
    income: [3000, 2000, 25000, 60000, 5000, 3000, 2000, 1000, 1500, 1000, 800, 500, 300, 200],
    cumulative: [131000, 133000, 158000, 218000, 223000, 226000, 228000, 229000, 230500, 231500, 232300, 232800, 233100, 233300],
  },
  daily: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    income: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 100),
    cumulative: Array.from({ length: 30 }, (_, i) => 230000 + i * 100 + Math.floor(Math.random() * 500)),
  },
};

export const performanceChartData = {
  yearly: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    shalat: [75, 80, 85, 88, 92, 90],
    quran: [1.5, 2.0, 2.3, 2.7, 3.1, 3.0],
    consistency: [70, 75, 80, 85, 89, 86],
  },
  monthly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"],
    shalat: [85, 92, 78, 88, 95, 87, 91, 83, 89, 94, 86, 90],
    quran: [2.5, 3.2, 2.1, 2.8, 3.5, 2.9, 3.1, 2.4, 2.7, 3.3, 2.6, 3.0],
    consistency: [78, 85, 72, 82, 89, 81, 87, 75, 84, 91, 79, 86],
  },
  daily: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    shalat: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 80),
    quran: Array.from({ length: 30 }, () => Math.random() * 2 + 1),
    consistency: Array.from({ length: 30 }, () => Math.floor(Math.random() * 25) + 70),
  },
};

export const recurringChartData = {
  yearly: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    weeklyDonations: [8, 12, 15, 18, 20, 20],
    monthlySubscribers: [30, 40, 45, 50, 55, 57],
  },
  monthly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"],
    weeklyDonations: [12, 15, 10, 18, 22, 16, 19, 13, 17, 21, 14, 20],
    monthlySubscribers: [45, 48, 44, 52, 58, 54, 59, 47, 53, 61, 49, 57],
  },
  daily: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    weeklyDonations: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 15),
    monthlySubscribers: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 50),
  },
};

export const daytimeChartData = {
  yearly: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    fajr: [65, 70, 75, 80, 85, 87],
    dhuhr: [85, 88, 90, 92, 94, 95],
    asr: [80, 82, 85, 87, 90, 92],
    maghrib: [95, 96, 97, 98, 99, 99],
    isha: [75, 78, 80, 83, 85, 88],
  },
  monthly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"],
    fajr: [80, 85, 75, 90, 88, 82, 87, 78, 85, 92, 80, 89],
    dhuhr: [95, 92, 88, 96, 94, 90, 93, 89, 95, 98, 91, 96],
    asr: [88, 90, 85, 93, 91, 87, 90, 86, 92, 95, 88, 93],
    maghrib: [99, 98, 97, 100, 99, 98, 99, 97, 100, 100, 98, 99],
    isha: [85, 88, 82, 90, 87, 84, 88, 83, 89, 92, 86, 90],
  },
  daily: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    fajr: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 70),
    dhuhr: Array.from({ length: 30 }, () => Math.floor(Math.random() * 15) + 85),
    asr: Array.from({ length: 30 }, () => Math.floor(Math.random() * 15) + 80),
    maghrib: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 95),
    isha: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 75),
  },
};
