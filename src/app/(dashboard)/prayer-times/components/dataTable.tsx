'use client';

import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useTheme } from '@/contexts/ThemeContext';

import {
  CalendarDotsIcon,
  StarAndCrescentIcon,
  CloudSunIcon,
  SunIcon,
  SunHorizonIcon,
  CloudMoonIcon,
  MoonStarsIcon,
} from '@phosphor-icons/react';

import { DataTable } from '@/components/data-table/data-table';
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableToolbar } from '@/components/data-table/data-table-toolbar';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import { PrayerTime } from '../types/prayerTimes';
import { formatDate, formatTime, isToday } from '../utils/prayerTimeUtils';

interface PrayerTimeDataTableProps {
  data: PrayerTime[];
}

export function PrayerTimeDataTable({ data }: PrayerTimeDataTableProps) {
  const { theme } = useTheme();

  // Define columns with proper meta options for filtering and sorting
  const columns = useMemo<ColumnDef<PrayerTime>[]>(
    () => [
      {
        id: 'date',
        accessorFn: (row) => {
          const currentYear = new Date().getFullYear();
          const dateObj = new Date(
            currentYear,
            row.month - 1,
            row.day_of_month
          );
          const dayName = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
          });
          const dayMonth = dateObj.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
          });
          // Return searchable text that includes day name, date, and month
          return `${dayName} ${dayMonth} ${row.day_of_month} ${row.month}`;
        },
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Day" />
        ),
        cell: ({ row }) => {
          const isCurrentDay = isToday(
            row.original.month,
            row.original.day_of_month
          );
          const currentYear = new Date().getFullYear();
          const dateObj = new Date(
            currentYear,
            row.original.month - 1,
            row.original.day_of_month
          );
          const dayName = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
          });
          const dayMonth = dateObj.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
          });

          return (
            <div className="flex items-start">
              <CalendarDotsIcon className="h-4 w-4 relative mt-[2px] mr-1" />
              <div className="flex flex-col">
                <span
                  className={cn(
                    'font-medium',
                    isCurrentDay && 'text-primary font-bold'
                  )}
                >
                  {dayName}
                </span>
                <span className="text-xs text-muted-foreground">
                  {dayMonth}
                </span>
                {isCurrentDay && (
                  <Badge variant="default" className="text-xs w-fit mt-1">
                    Today
                  </Badge>
                )}
              </div>
            </div>
          );
        },
        meta: {
          label: 'Day',
          variant: 'text',
          placeholder: 'Search day, date, or month...',
          icon: CalendarDotsIcon,
        },
        enableColumnFilter: true,
        enableHiding: false,
        filterFn: (row, id, value) => {
          const searchTerm = value.toLowerCase();
          const currentYear = new Date().getFullYear();
          const dateObj = new Date(
            currentYear,
            row.original.month - 1,
            row.original.day_of_month
          );
          const dayName = dateObj
            .toLocaleDateString('en-US', { weekday: 'long' })
            .toLowerCase();
          const monthName = dateObj
            .toLocaleDateString('en-US', { month: 'long' })
            .toLowerCase();
          const dayMonth = dateObj
            .toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
            .toLowerCase();
          const dayNumber = row.original.day_of_month.toString();

          // Search in day name, month name, full date string, or day number
          return (
            dayName.includes(searchTerm) ||
            monthName.includes(searchTerm) ||
            dayMonth.includes(searchTerm) ||
            dayNumber.includes(searchTerm)
          );
        },
      },
      {
        id: 'fajr',
        accessorKey: 'fajr_start',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Fajr" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1 items-start relative top-[-4px]">
            <div className="flex items-start text-sm">
              <StarAndCrescentIcon className="h-3 w-3 mr-1 relative top-[3px]" />
              <span className="font-medium">
                {formatTime(row.original.fajr_start)}
              </span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="ml-4">
                Jamaat: {formatTime(row.original.fajr_congregation_start)}
              </span>
            </div>
          </div>
        ),
        meta: {
          label: 'Fajr',
          variant: 'text',
          placeholder: 'HH:MM',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const timeA = rowA.original.fajr_start;
          const timeB = rowB.original.fajr_start;
          return timeA.localeCompare(timeB);
        },
      },
      {
        id: 'sunrise',
        accessorKey: 'sunrise_start',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Sunrise" />
        ),
        cell: ({ row }) => (
          <div className="flex items-start">
            <CloudSunIcon className="mr-2 h-4 w-4" />
            <span className="font-medium">
              {formatTime(row.original.sunrise_start)}
            </span>
          </div>
        ),
        meta: {
          label: 'Sunrise',
          variant: 'text',
          placeholder: 'HH:MM',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const timeA = rowA.original.sunrise_start as string;
          const timeB = rowB.original.sunrise_start as string;
          return timeA.localeCompare(timeB);
        },
      },
      {
        id: 'zuhr',
        accessorKey: 'zuhr_start',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Zuhr" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1 relative top-[-4px]">
            <div className="flex items-start text-sm">
              <SunIcon className="mr-1 h-3 w-3 relative top-[3px]" />
              <span className="font-medium">
                {formatTime(row.original.zuhr_start)}
              </span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="ml-4">
                Jamaat: {formatTime(row.original.zuhr_congregation_start)}
              </span>
            </div>
          </div>
        ),
        meta: {
          label: 'Zuhr',
          variant: 'text',
          placeholder: 'HH:MM',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const timeA = rowA.original.zuhr_start;
          const timeB = rowB.original.zuhr_start;
          return timeA.localeCompare(timeB);
        },
      },
      {
        id: 'asr',
        accessorKey: 'asr_first_start',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Asr" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1 relative top-[-4px]">
            <div className="flex items-start text-sm">
              <SunHorizonIcon className="mr-1 h-3 w-3 relative top-[3px]" />
              <span className="font-medium">
                {formatTime(row.original.asr_first_start)}
              </span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="ml-4">
                Jamaat: {formatTime(row.original.asr_congregation_start)}
              </span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="ml-4">
                Hanafi: {formatTime(row.original.asr_second_start)}
              </span>
            </div>
          </div>
        ),
        meta: {
          label: 'Asr',
          variant: 'text',
          placeholder: 'HH:MM',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const timeA = rowA.original.asr_first_start;
          const timeB = rowB.original.asr_first_start;
          return timeA.localeCompare(timeB);
        },
      },
      {
        id: 'maghrib',
        accessorKey: 'maghrib_start',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Maghrib" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1 relative top-[-4px]">
            <div className="flex items-start text-sm">
              <CloudMoonIcon className="mr-1 h-3 w-3 relative top-[3px]" />
              <span className="font-medium">
                {formatTime(row.original.maghrib_start)}
              </span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="ml-4">
                Jamaat: {formatTime(row.original.maghrib_congregation_start)}
              </span>
            </div>
          </div>
        ),
        meta: {
          label: 'Maghrib',
          variant: 'text',
          placeholder: 'HH:MM',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const timeA = rowA.original.maghrib_start;
          const timeB = rowB.original.maghrib_start;
          return timeA.localeCompare(timeB);
        },
      },
      {
        id: 'isha',
        accessorKey: 'isha_start',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Isha" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1 relative top-[-4px]">
            <div className="flex items-start text-sm">
              <MoonStarsIcon className="mr-1 h-3 w-3 relative top-[3px]" />
              <span className="font-medium">
                {formatTime(row.original.isha_start)}
              </span>
            </div>
            <div className="flex items-start text-xs text-muted-foreground">
              <span className="ml-4">
                Jamaat: {formatTime(row.original.isha_congregation_start)}
              </span>
            </div>
          </div>
        ),
        meta: {
          label: 'Isha',
          variant: 'text',
          placeholder: 'HH:MM',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const timeA = rowA.original.isha_start;
          const timeB = rowB.original.isha_start;
          return timeA.localeCompare(timeB);
        },
      },
    ],
    [theme]
  );

  // Initialize table state for client-side filtering
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // Initialize the data table with client-side filtering
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    getRowId: (row) => row.id,
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  return (
    <div className="space-y-4">
      <DataTable table={table} tableCellClassName="align-baseline">
        <DataTableToolbar table={table} />
      </DataTable>
    </div>
  );
}
