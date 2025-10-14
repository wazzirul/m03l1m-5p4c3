import type { DateRange as ReactDayPickerDateRange } from 'react-day-picker';

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill?: boolean;
  tension?: number;
  pointRadius?: number;
  pointHoverRadius?: number;
  borderWidth?: number;
}

export interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  progress?: number;
  content?: React.ReactNode;
}

export interface DateFilterProps {
  selectedRange: DateRangeType;
  onRangeChange: (range: DateRangeType) => void;
  dateRange?: ReactDayPickerDateRange;
  onDateRangeChange?: (range: ReactDayPickerDateRange | undefined) => void;
  selectedYear?: number;
  onYearChange?: (year: number) => void;
  selectedMonth?: number;
  onMonthChange?: (month: number) => void;
}

export type DateRangeType = 'day' | 'month' | 'year';
