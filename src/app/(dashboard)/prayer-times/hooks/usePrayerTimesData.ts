import { useState, useEffect } from 'react';
import { PrayerTime } from '../types/prayerTimes';
import { formatPrayerTimesData } from '../utils/prayerTimeUtils';

export function usePrayerTimesData() {
  const [data, setData] = useState<PrayerTime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrayerTimes = async () => {
      try {
        setIsLoading(true);
        // Load the JSON file from the public directory
        // Later this can be replaced with an API call
        const response = await fetch('/PrayerTimes.json');
        if (!response.ok) {
          throw new Error('Failed to load prayer times data');
        }
        
        const jsonData = await response.json();
        const formattedData = formatPrayerTimesData(jsonData);
        setData(formattedData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load prayer times');
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPrayerTimes();
  }, []);

  return { data, isLoading, error };
}
