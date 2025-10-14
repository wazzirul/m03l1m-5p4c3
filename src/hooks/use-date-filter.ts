import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import type { DateRangeType } from '@/types/dashboard';

export function useDateFilter() {
  const [selectedRange, setSelectedRange] = useState<DateRangeType>('month');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  return {
    selectedRange,
    setSelectedRange,
    dateRange,
    setDateRange,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
  };
}
