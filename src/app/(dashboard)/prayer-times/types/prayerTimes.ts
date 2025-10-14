// Prayer times data types based on the CSV structure
export interface PrayerTime {
  id: string; // Generated from month-day combination
  month: number;
  day_of_month: number;
  date: string; // Formatted date string (YYYY-MM-DD)
  fajr_start: string;
  fajr_congregation_start: string;
  sunrise_start: string;
  zuhr_start: string;
  zuhr_congregation_start: string;
  asr_first_start: string;
  asr_second_start: string;
  asr_congregation_start: string;
  maghrib_start: string;
  maghrib_congregation_start: string;
  isha_start: string;
  isha_congregation_start: string;
}

export interface PrayerTimeMetadata {
  prayer_name: string;
  start_time: string;
  congregation_time?: string;
  icon?: React.ComponentType<any>;
}

export const PRAYER_NAMES = {
  fajr: 'Fajr',
  zuhr: 'Zuhr',
  asr: 'Asr',
  maghrib: 'Maghrib',
  isha: 'Isha',
} as const;

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;
