'use client';

import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useProgress } from '@/hooks/use-progress';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Calendar,
  MapPin,
  Users,
  FileText,
  Clock,
  MoreHorizontal,
  Eye,
  Edit,
  Image as ImageIcon,
  Video,
} from 'lucide-react';

import { TrashSimpleIcon } from '@phosphor-icons/react';

import { DataTable } from '@/components/data-table/data-table';
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header';
import { DataTableToolbar } from '@/components/data-table/data-table-toolbar';
import Image from 'next/image';
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
  type RowSelectionState,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { StaticImageData } from 'next/image';

// Define the announcement data type
export type Announcement = {
  id: string;
  title: string;
  content: string;
  video?: string | null;
  image?: StaticImageData | string | null;
  date_schedule_from: string | null;
  date_schedule_to: string | null;
  target_location: 'inside' | 'outside';
  target_user: 'all' | 'adult' | 'teen' | 'child';
  created_at: string;
  updated_at: string;
};

interface AnnouncementDataTableProps {
  data: Announcement[];
  onDelete?: (announcement: Announcement) => void;
}

export function AnnouncementDataTable({
  data,
  onDelete,
}: AnnouncementDataTableProps) {
  const { router } = useProgress();
  const { theme } = useTheme();

  // Define columns with proper meta options for filtering and sorting
  const columns = useMemo<ColumnDef<Announcement>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 28,
      },
      {
        id: 'title',
        accessorKey: 'title',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => (
          <div className="max-w-[300px]">
            <div className="font-medium truncate">{row.getValue('title')}</div>
            <div className="text-sm text-muted-foreground truncate">
              {row.original.content.substring(0, 60)}...
            </div>
          </div>
        ),
        meta: {
          label: 'Title',
          placeholder: 'Search titles...',
          variant: 'text',
          icon: FileText,
        },
        enableColumnFilter: true,
      },
      {
        id: 'image',
        accessorKey: 'image',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Image" />
        ),
        cell: ({ row }) => {
          const image = row.original.image;
          if (!image) {
            return (
              <div className="flex items-center justify-center w-16 h-12 bg-muted rounded">
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </div>
            );
          }
          return (
            <div className="relative w-16 h-12 rounded overflow-hidden">
              <Image
                src={image}
                alt="Announcement image"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          );
        },
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        id: 'video',
        accessorKey: 'video',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Video" />
        ),
        cell: ({ row }) => {
          const video = row.original.video;
          if (!video) {
            return (
              <div className="flex items-center justify-center w-16 h-12 bg-muted rounded">
                <Video className="h-4 w-4 text-muted-foreground" />
              </div>
            );
          }
          return (
            <div className="relative w-16 h-12 bg-black rounded overflow-hidden group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                muted
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src={video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all">
                <Video className="h-4 w-4 text-white" />
              </div>
            </div>
          );
        },
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        id: 'target_location',
        accessorKey: 'target_location',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Location" />
        ),
        cell: ({ row }) => (
          <Badge
            className="capitalize"
            variant={
              row.getValue('target_location') === 'inside'
                ? 'default'
                : 'secondary'
            }
          >
            <MapPin className="mr-1 h-3 w-3" />
            {row.getValue('target_location')}
          </Badge>
        ),
        meta: {
          label: 'Location',
          variant: 'select',
          options: [
            { label: 'Inside', value: 'inside' },
            { label: 'Outside', value: 'outside' },
          ],
          icon: MapPin,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        id: 'target_user',
        accessorKey: 'target_user',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Target Audience" />
        ),
        cell: ({ row }) => {
          const targetUser = row.getValue('target_user') as string;
          const variants = {
            all: 'default',
            adult: 'secondary',
            teen: 'secondary',
            child: 'secondary',
          } as const;

          return (
            <Badge
              variant={variants[targetUser as keyof typeof variants]}
              className="capitalize"
            >
              <Users className="mr-1 h-3 w-3" />
              {targetUser}
            </Badge>
          );
        },
        meta: {
          label: 'Target Audience',
          variant: 'select',
          options: [
            { label: 'All', value: 'all' },
            { label: 'Adult', value: 'adult' },
            { label: 'Teen', value: 'teen' },
            { label: 'Child', value: 'child' },
          ],
          icon: Users,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id));
        },
      },
      {
        id: 'date_schedule_from',
        accessorKey: 'date_schedule_from',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Schedule Date" />
        ),
        cell: ({ row }) => {
          const fromDate = row.getValue('date_schedule_from') as string | null;
          const toDate = row.original.date_schedule_to;

          if (!fromDate) {
            return <span className="text-muted-foreground">No schedule</span>;
          }

          const formatDate = (date: string) =>
            new Date(date).toLocaleDateString('en-GB');

          return (
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>
                {fromDate === toDate
                  ? formatDate(fromDate)
                  : `${formatDate(fromDate)} - ${
                      toDate ? formatDate(toDate) : 'Ongoing'
                    }`}
              </span>
            </div>
          );
        },
        meta: {
          label: 'Schedule Date',
          variant: 'dateRange',
          icon: Calendar,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          const rowDate = row.getValue(id) as string | null;

          // Always exclude rows with null date_schedule_from
          if (!rowDate) return false;

          // If no filter value, show all non-null dates
          if (!value) return true;

          const rowDateObj = new Date(rowDate);

          // Handle date range filtering
          if (Array.isArray(value) && value.length === 2) {
            const [fromDate, toDate] = value;
            if (fromDate && toDate) {
              const fromDateObj = new Date(fromDate);
              const toDateObj = new Date(toDate);
              return rowDateObj >= fromDateObj && rowDateObj <= toDateObj;
            } else if (fromDate) {
              const fromDateObj = new Date(fromDate);
              return rowDateObj >= fromDateObj;
            } else if (toDate) {
              const toDateObj = new Date(toDate);
              return rowDateObj <= toDateObj;
            }
          }

          // Handle single date filtering
          if (typeof value === 'string') {
            const filterDateObj = new Date(value);
            return rowDateObj.toDateString() === filterDateObj.toDateString();
          }

          return true;
        },
      },
      {
        id: 'created_at',
        accessorKey: 'created_at',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created" />
        ),
        cell: ({ row }) => {
          const date = new Date(row.getValue('created_at'));
          return (
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{date.toLocaleDateString('en-GB')}</span>
            </div>
          );
        },
        meta: {
          label: 'Created Date',
          variant: 'date',
          icon: Clock,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          const rowDate = row.getValue(id) as string;
          if (!rowDate || !value) return true;

          const rowDateObj = new Date(rowDate);
          const filterDateObj = new Date(value);

          // Compare dates (ignoring time)
          return rowDateObj.toDateString() === filterDateObj.toDateString();
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        onClick: (e: any) => e.stopPropagation(),
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0"
                onClick={(e: any) => e.stopPropagation()}
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={(e: any) => {
                  e.stopPropagation();
                  router.push(`/announcement/detail/${row.original.id}`);
                }}
                >
                  <Eye className="h-4 w-4 relative top-[1px]" />
                  View
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={(e: any) => {
                  e.stopPropagation();
                  router.push(`/announcement/edit/${row.original.id}`);
                }}
              >
                <Edit className="h-4 w-4 relative top-[1px]" />
                Edit
              </DropdownMenuItem>
                <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
                onClick={(e: any) => {
                  e.stopPropagation();
                  onDelete?.(row.original);
                }}
              >
                <TrashSimpleIcon className="h-4 w-4 text-current relative top-[1px]" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        enableSorting: false,
        enableHiding: false,
      },
    ],
    [router, onDelete, theme]
  );

  // Initialize table state for client-side filtering
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'created_at', desc: true },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  // Initialize the data table with client-side filtering
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
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
      rowSelection,
    },
    enableRowSelection: true,
    getRowId: (row) => row.id,
  });

  const handleRowClick = (announcement: Announcement) => {
    router.push(`/announcement/detail/${announcement.id}`);
  };

  return (
    <DataTable table={table} onRowClick={handleRowClick}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
}
