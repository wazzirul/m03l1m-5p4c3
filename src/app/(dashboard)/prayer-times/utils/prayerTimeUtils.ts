import { PrayerTime, MONTH_NAMES } from '../types/prayerTimes';

// Interface for raw JSON data from API/file
interface RawPrayerTimeData {
  month: number;
  day_of_month: number;
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

export function formatPrayerTimesData(rawData: RawPrayerTimeData[]): PrayerTime[] {
  return rawData
    .filter(item => item.month && item.day_of_month) // Filter out incomplete entries
    .map((item) => {
      const month = item.month;
      const day = item.day_of_month;
      
      // Create a date string for the current year
      const currentYear = new Date().getFullYear();
      const dateObj = new Date(currentYear, month - 1, day);
      const dateString = dateObj.toISOString().split('T')[0];
      
      return {
        id: `${month}-${day}`,
        month,
        day_of_month: day,
        date: dateString,
        fajr_start: item.fajr_start,
        fajr_congregation_start: item.fajr_congregation_start,
        sunrise_start: item.sunrise_start,
        zuhr_start: item.zuhr_start,
        zuhr_congregation_start: item.zuhr_congregation_start,
        asr_first_start: item.asr_first_start,
        asr_second_start: item.asr_second_start,
        asr_congregation_start: item.asr_congregation_start,
        maghrib_start: item.maghrib_start,
        maghrib_congregation_start: item.maghrib_congregation_start,
        isha_start: item.isha_start,
        isha_congregation_start: item.isha_congregation_start,
      };
    });
}

// Keep the CSV parsing function for backward compatibility if needed
export function parsePrayerTimesCSV(csvContent: string): PrayerTime[] {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map((line, index) => {
    const values = line.split(',');
    const month = parseInt(values[0]);
    const day = parseInt(values[1]);
    
    // Create a date string for the current year
    const currentYear = new Date().getFullYear();
    const dateObj = new Date(currentYear, month - 1, day);
    const dateString = dateObj.toISOString().split('T')[0];
    
    return {
      id: `${month}-${day}`,
      month,
      day_of_month: day,
      date: dateString,
      fajr_start: values[2],
      fajr_congregation_start: values[3],
      sunrise_start: values[4],
      zuhr_start: values[5],
      zuhr_congregation_start: values[6],
      asr_first_start: values[7],
      asr_second_start: values[8],
      asr_congregation_start: values[9],
      maghrib_start: values[10],
      maghrib_congregation_start: values[11],
      isha_start: values[12],
      isha_congregation_start: values[13],
    };
  });
}

export function formatDate(month: number, day: number): string {
  return `${MONTH_NAMES[month - 1]} ${day}`;
}

export function formatTime(time: string): string {
  // Convert 24-hour format to 12-hour format with AM/PM
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function isToday(month: number, day: number): boolean {
  const today = new Date();
  return today.getMonth() + 1 === month && today.getDate() === day;
}

export function getCurrentMonthPrayerTimes(data: PrayerTime[]): PrayerTime[] {
  const currentMonth = new Date().getMonth() + 1;
  return data.filter(item => item.month === currentMonth);
}

export function getUpcomingPrayerTimes(data: PrayerTime[], limit: number = 7): PrayerTime[] {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  
  return data
    .filter(item => {
      if (item.month > currentMonth) return true;
      if (item.month === currentMonth && item.day_of_month >= currentDay) return true;
      return false;
    })
    .slice(0, limit);
}
