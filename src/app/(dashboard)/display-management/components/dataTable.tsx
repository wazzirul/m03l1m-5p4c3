'use client';

import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useTheme } from '@/contexts/ThemeContext';
import { MoreHorizontal, ImageIcon, Video, Moon, Sun } from 'lucide-react';

import {
  MonitorIcon,
  TagIcon,
  CheckCircleIcon,
  XCircleIcon,
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon,
  LayoutIcon,
  StarAndCrescentIcon,
  BookOpenIcon,
  SpeakerHighIcon,
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
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

import { Display } from '../types/displayTypes';
import { layoutToDisplay, styleToDisplay } from '@/types/display';
import {
  formatDate,
  formatDateTime,
  getRelativeTime,
} from '../utils/displayUtils';

interface DisplayDataTableProps {
  data: Display[];
  onLivePreview?: (display: Display) => void;
  onEdit?: (display: Display) => void;
  onDelete?: (display: Display) => void;
}

export function DisplayDataTable({
  data,
  onLivePreview,
  onEdit,
  onDelete,
}: DisplayDataTableProps) {
  const { theme } = useTheme();

  // Define columns with proper meta options for filtering and sorting
  const columns = useMemo<ColumnDef<Display>[]>(() => {
    // Generate unique layout options from data
    const layoutOptions = Array.from(
      new Set(data.map((item) => item.layout))
    ).map((layout) => ({ value: layout, label: layoutToDisplay(layout) }));

    // Generate unique style options from data
    const styleOptions = Array.from(
      new Set(data.map((item) => item.style))
    ).map((style) => ({
      value: style.toString(),
      label: styleToDisplay(style),
    }));

    // Generate unique selected content options from data
    const selectedContentOptions = Array.from(
      new Set(
        data
          .map((item) => item.templateContent?.selectedContent)
          .filter(
            (content): content is NonNullable<typeof content> => !!content
          )
      )
    ).map((content) => ({ value: content, label: content }));

    // Generate unique content details options from data
    const contentDetailsOptions = [
      { value: 'has-content', label: 'Has Content' },
      { value: 'no-content', label: 'No Content' },
      { value: 'prayer-times', label: 'Prayer Times' },
    ];

    return [
      {
        id: 'displayName',
        accessorKey: 'displayName',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Display" />
        ),
        cell: ({ row }) => {
          const display = row.original;
          return (
            <div className="flex items-start">
              <MonitorIcon className="h-4 w-4 relative mt-[2px] mr-3 text-foreground" />
              <div className="flex flex-col">
                <span className="font-medium">{display.displayName}</span>
                <span className="text-xs text-muted-foreground font-mono">
                  Code: {display.displayCode}
                </span>
              </div>
            </div>
          );
        },
        meta: {
          label: 'Display',
          variant: 'text',
          placeholder: 'Search display...',
          icon: MonitorIcon,
        },
        enableColumnFilter: true,
        enableHiding: false,
        filterFn: (row, id, value) => {
          const searchTerm = value.toLowerCase();
          const display = row.original;
          return (
            display.displayName.toLowerCase().includes(searchTerm) ||
            display.displayCode.toLowerCase().includes(searchTerm) ||
            layoutToDisplay(display.layout)
              .toLowerCase()
              .includes(searchTerm) ||
            styleToDisplay(display.style).toLowerCase().includes(searchTerm)
          );
        },
      },
      {
        id: 'layout',
        accessorKey: 'layout',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Layout" />
        ),
        cell: ({ row }) => {
          const layout = row.original.layout;
          return (
            <div className="flex items-center">
              <LayoutIcon className="h-4 w-4 mr-2 text-foreground" />
              <span className="font-medium">{layoutToDisplay(layout)}</span>
            </div>
          );
        },
        meta: {
          label: 'Layout',
          variant: 'select',
          options: layoutOptions,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          if (!value?.length) return true;
          return value.includes(row.original.layout);
        },
      },
      {
        id: 'style',
        accessorKey: 'style',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Style" />
        ),
        cell: ({ row }) => {
          const style = row.original.style;
          const styleDisplay = styleToDisplay(style);
          const getStyleVariant = (styleDisplay: string) => {
            if (styleDisplay.includes('Light')) return 'default';
            if (styleDisplay.includes('Dark')) return 'secondary';
            return 'outline';
          };
          return (
            <Badge
              variant={getStyleVariant(styleDisplay)}
              className="flex items-center gap-1 w-fit"
            >
              <TagIcon className="h-3 w-3" />
              {styleDisplay}
            </Badge>
          );
        },
        meta: {
          label: 'Style',
          variant: 'select',
          options: styleOptions,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          if (!value?.length) return true;
          return value.includes(row.original.style.toString());
        },
      },
      {
        id: 'selectedContent',
        accessorKey: 'templateContent.selectedContent',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Selected Content" />
        ),
        cell: ({ row }) => {
          const display = row.original;
          const templateContent = display.templateContent;

          if (!templateContent?.selectedContent) {
            return (
              <span className="text-sm text-muted-foreground">No content</span>
            );
          }

          const getContentIcon = (content: string) => {
            if (content.includes('Prayer'))
              return <StarAndCrescentIcon className="h-4 w-4" />;
            if (content.includes('Quran'))
              return <BookOpenIcon className="h-4 w-4" />;
            if (content.includes('Announcement'))
              return <SpeakerHighIcon className="h-4 w-4" />;
            if (content.includes('Image'))
              return <ImageIcon className="h-4 w-4" />;
            if (content.includes('Video')) return <Video className="h-4 w-4" />;
            return <MonitorIcon className="h-4 w-4" />;
          };

          return (
            <div className="flex items-center max-w-[200px]">
              <div className="mr-2 text-foreground">
                {getContentIcon(templateContent.selectedContent)}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm truncate">
                  {templateContent.selectedContent}
                </span>
              </div>
            </div>
          );
        },
        meta: {
          label: 'Selected Content',
          variant: 'select',
          options: selectedContentOptions,
        },
        enableColumnFilter: true,
        enableSorting: true,
        sortingFn: (rowA, rowB) => {
          const contentA = rowA.original.templateContent?.selectedContent || '';
          const contentB = rowB.original.templateContent?.selectedContent || '';
          return contentA.localeCompare(contentB);
        },
        filterFn: (row, id, value) => {
          if (!value?.length) return true;
          const selectedContent = row.original.templateContent?.selectedContent;
          return value.includes(selectedContent || '');
        },
      },
      {
        id: 'contentDetails',
        accessorKey: 'templateContent.mainContentData',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Content Details" />
        ),
        cell: ({ row }) => {
          const display = row.original;
          const mainContentData = display.templateContent?.mainContentData;
          const selectedContent = display.templateContent?.selectedContent;

          // If Next Prayer Times, show "-"
          if (selectedContent === 'Next Prayer Times') {
            return <span className="text-sm text-muted-foreground">-</span>;
          }

          if (!mainContentData) {
            return <span className="text-sm text-muted-foreground">-</span>;
          }

          // Get content details based on selected content type
          let contentDetail = '-';
          if (mainContentData.announcementData?.announcements?.length) {
            contentDetail = `${mainContentData.announcementData.announcements.length} announcement(s)`;
          } else if (mainContentData.imageData?.image) {
            contentDetail = 'Image configured';
          } else if (mainContentData.videoData?.video) {
            contentDetail = 'Video configured';
          } else if (mainContentData.quranData?.quran?.length) {
            contentDetail = `${mainContentData.quranData.quran.length} verse(s)`;
          }

          return <span className="text-sm font-medium">{contentDetail}</span>;
        },
        meta: {
          label: 'Content Details',
          variant: 'select',
          options: contentDetailsOptions,
        },
        enableColumnFilter: true,
        enableSorting: false,
        filterFn: (row, id, value) => {
          if (!value?.length) return true;
          const display = row.original;
          const mainContentData = display.templateContent?.mainContentData;
          const selectedContent = display.templateContent?.selectedContent;

          return value.some((filterValue: string) => {
            if (filterValue === 'prayer-times') {
              return selectedContent === 'Next Prayer Times';
            }
            if (filterValue === 'has-content') {
              return (
                mainContentData &&
                (mainContentData.announcementData?.announcements?.length ||
                  mainContentData.imageData?.image ||
                  mainContentData.videoData?.video ||
                  mainContentData.quranData?.quran?.length)
              );
            }
            if (filterValue === 'no-content') {
              return (
                !mainContentData ||
                (!mainContentData.announcementData?.announcements?.length &&
                  !mainContentData.imageData?.image &&
                  !mainContentData.videoData?.video &&
                  !mainContentData.quranData?.quran?.length)
              );
            }
            return false;
          });
        },
      },
      {
        id: 'subContent',
        accessorKey: 'templateContent.subContentData',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Sub Content" />
        ),
        cell: ({ row }) => {
          const display = row.original;
          const layout = display.layout;
          const subContentData = display.templateContent?.subContentData;

          // Only L-Layout has sub content
          if (layout !== 'l-layout') {
            return <span className="text-sm text-muted-foreground">-</span>;
          }

          if (!subContentData || subContentData.length === 0) {
            return (
              <span className="text-sm text-muted-foreground">
                No sub content
              </span>
            );
          }

          return (
            <span className="text-sm font-medium">
              {subContentData.length} announcement(s)
            </span>
          );
        },
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          const status = row.original.status;
          const isActive = status === 'active';
          return (
            <Badge
              variant={isActive ? 'default' : 'secondary'}
              className={cn(
                'flex items-center gap-1 w-fit',
                isActive
                  ? 'bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400'
              )}
            >
              {isActive ? (
                <CheckCircleIcon className="h-3 w-3" />
              ) : (
                <XCircleIcon className="h-3 w-3" />
              )}
              {status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
          );
        },
        meta: {
          label: 'Status',
          variant: 'select',
          options: [
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' },
          ],
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          if (!value?.length) return true;
          return value.includes(row.original.status);
        },
      },
      {
        id: 'created_at',
        accessorKey: 'created_at',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-sm">
              <CalendarIcon className="h-3 w-3 mr-1 text-muted-foreground" />
              <span className="font-medium">
                {formatDate(row.original.created_at)}
              </span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ClockIcon className="h-3 w-3 mr-1" />
              <span>{getRelativeTime(row.original.created_at)}</span>
            </div>
          </div>
        ),
        meta: {
          label: 'Created Date',
          variant: 'date',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const dateA = new Date(rowA.original.created_at);
          const dateB = new Date(rowB.original.created_at);
          return dateA.getTime() - dateB.getTime();
        },
      },
      {
        id: 'updated_at',
        accessorKey: 'updated_at',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Updated" />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-sm">
              <CalendarIcon className="h-3 w-3 mr-1 text-muted-foreground" />
              <span className="font-medium">
                {formatDate(row.original.updated_at)}
              </span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ClockIcon className="h-3 w-3 mr-1" />
              <span>{getRelativeTime(row.original.updated_at)}</span>
            </div>
          </div>
        ),
        meta: {
          label: 'Updated Date',
          variant: 'date',
        },
        enableSorting: true,
        enableColumnFilter: false,
        sortingFn: (rowA, rowB) => {
          const dateA = new Date(rowA.original.updated_at);
          const dateB = new Date(rowB.original.updated_at);
          return dateA.getTime() - dateB.getTime();
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
          const display = row.original;

          const handleLivePreview = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (onLivePreview) {
              onLivePreview(display);
            } else {
              // Default behavior: open live preview in new tab
              window.open(`/display/${display.displayCode}`, '_blank');
            }
          };

          const handleEdit = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (onEdit) {
              onEdit(display);
            } else {
              // Default behavior: navigate to edit page
              window.location.href = `/display-management/edit/${display.id}`;
            }
          };

          const handleDelete = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (onDelete) {
              onDelete(display);
            } else {
              // Default behavior: show confirmation and delete
              if (
                window.confirm(
                  `Are you sure you want to delete "${display.displayName}"?`
                )
              ) {
                console.log('Delete display:', display.id);
                // TODO: Implement actual delete functionality
              }
            }
          };

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={handleLivePreview}
                  className="cursor-pointer"
                >
                  <EyeIcon className="h-4 w-4 text-foreground" />
                  Live Preview
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleEdit}
                  className="cursor-pointer"
                >
                  <PencilSimpleIcon className="h-4 w-4 text-foreground" />
                  Edit Display
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
                >
                  <TrashIcon className="h-4 w-4" />
                  Delete Display
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        enableSorting: false,
        enableHiding: false,
      },
    ];
  }, [data, onLivePreview, onEdit, onDelete, theme]);

  // Initialize table state for client-side filtering
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updated_at', desc: true }, // Default sort by most recently updated
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    created_at: false,
    updated_at: false,
    subContent: false,
  });

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
        pageSize: 10,
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
