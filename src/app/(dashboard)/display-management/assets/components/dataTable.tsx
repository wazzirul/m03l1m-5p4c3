'use client';

import { useMemo, useState, useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

import { 
  ImageIcon, 
  VideoIcon, 
  FileIcon, 
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon
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
  type RowSelectionState,
} from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

import { Asset } from '../types/assetTypes';
import { formatDate, formatDateTime, getRelativeTime, getFileTypeLabel, getAssetPreviewUrl } from '../utils/assetUtils';
import { AssetPreviewModal } from './AssetPreviewModal';

interface AssetDataTableProps {
  data: Asset[];
  onPreview?: (asset: Asset) => void;
  onEdit?: (asset: Asset) => void;
  onDelete?: (asset: Asset) => void;
  onSelectionChange?: (selectedAssets: Asset[]) => void;
  onAssetUpdate?: (updatedAsset: Asset) => void;
}

export function AssetDataTable({ 
  data, 
  onPreview, 
  onEdit, 
  onDelete,
  onSelectionChange,
  onAssetUpdate 
}: AssetDataTableProps) {
  // State for preview modal
  const [previewAsset, setPreviewAsset] = useState<Asset | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Define columns with proper meta options for filtering and sorting
  const columns = useMemo<ColumnDef<Asset>[]>(
    () => {
      // Generate unique type options from data
      const typeOptions = Array.from(new Set(data.map(item => item.type)))
        .map(type => ({ value: type, label: getFileTypeLabel(type) }));

      return [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            onClick={(e) => e.stopPropagation()}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 28,
        minSize: 28,
        maxSize: 28,
      },
      {
        id: 'name',
        accessorKey: 'name',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Asset" />
        ),
        cell: ({ row }) => {
          const asset = row.original;
          const isImage = asset.type === 'image';
          const isVideo = asset.type === 'video';
          const previewUrl = getAssetPreviewUrl(asset.sourceUrl);
          
          return (
            <div className="flex items-center">
              <div 
                className="relative h-10 w-10 rounded border mr-3 flex-shrink-0"
              >
                {isImage ? (
                  <Image
                    src={previewUrl}
                    alt={asset.name}
                    fill
                    className="object-cover rounded"
                    sizes="40px"
                  />
                ) : isVideo ? (
                  <div className="h-full w-full bg-gray-100 rounded flex items-center justify-center">
                    <VideoIcon className="h-5 w-5 text-gray-500" />
                  </div>
                ) : (
                  <div className="h-full w-full bg-gray-100 rounded flex items-center justify-center">
                    <FileIcon className="h-5 w-5 text-gray-500" />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{asset.name}</span>
                <span className="text-xs text-muted-foreground">
                  ID: {asset.id}
                </span>
                {asset.dimensions && (
                  <span className="text-xs text-muted-foreground">
                    {asset.dimensions}
                  </span>
                )}
                {asset.duration && (
                  <span className="text-xs text-muted-foreground">
                    Duration: {asset.duration}
                  </span>
                )}
              </div>
            </div>
          );
        },
        meta: {
          label: 'Asset',
          variant: 'text',
          placeholder: 'Search asset name or ID...',
          icon: FileIcon,
        },
        enableColumnFilter: true,
        enableHiding: false,
        filterFn: (row, id, value) => {
          const searchTerm = value.toLowerCase();
          const asset = row.original;
          return asset.name.toLowerCase().includes(searchTerm) || 
                 asset.id.toLowerCase().includes(searchTerm);
        },
      },
      {
        id: 'type',
        accessorKey: 'type',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => {
          const type = row.original.type;
          const isImage = type === 'image';
          const isVideo = type === 'video';
          
          return (
            <Badge 
              variant={isImage ? 'default' : 'secondary'}
              className="flex items-center gap-1 w-fit"
            >
              {isImage ? (
                <ImageIcon className="h-3 w-3" />
              ) : isVideo ? (
                <VideoIcon className="h-3 w-3" />
              ) : (
                <FileIcon className="h-3 w-3" />
              )}
              {getFileTypeLabel(type)}
            </Badge>
          );
        },
        meta: {
          label: 'Asset Type',
          variant: 'select',
          options: typeOptions,
        },
        enableColumnFilter: true,
        filterFn: (row, id, value) => {
          if (!value?.length) return true;
          return value.includes(row.original.type);
        },
      },
      {
        id: 'fileSize',
        accessorKey: 'fileSize',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="File Size" />
        ),
        cell: ({ row }) => {
          const fileSize = row.original.fileSize;
          return fileSize ? (
            <span className="text-sm text-muted-foreground">{fileSize}</span>
          ) : (
            <span className="text-xs text-muted-foreground">—</span>
          );
        },
        meta: {
          label: 'File Size',
        },
        enableColumnFilter: false,
        enableSorting: true,
        sortingFn: (rowA, rowB) => {
          const sizeA = rowA.original.fileSize || '';
          const sizeB = rowB.original.fileSize || '';
          return sizeA.localeCompare(sizeB);
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
              <CalendarIcon className="h-3 w-3 mr-1 text-gray-500" />
              <span className="font-medium">{formatDate(row.original.created_at)}</span>
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
              <CalendarIcon className="h-3 w-3 mr-1 text-gray-500" />
              <span className="font-medium">{formatDate(row.original.updated_at)}</span>
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
          const asset = row.original;
          
          const handlePreview = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (onPreview) {
              onPreview(asset);
            } else {
              // Open preview modal
              setPreviewAsset(asset);
              setIsPreviewOpen(true);
            }
          };

          const handleDelete = (e: React.MouseEvent) => {
            e.stopPropagation();
            if (onDelete) {
              onDelete(asset);
            } else {
              // Default behavior: show confirmation and delete
              if (window.confirm(`Are you sure you want to delete "${asset.name}"?`)) {
                console.log('Delete asset:', asset.id);
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
                <DropdownMenuItem onClick={handlePreview} className="cursor-pointer">
                  <EyeIcon className="h-4 w-4" />
                  Preview
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleDelete} 
                  className="cursor-pointer text-red-600 hover:!bg-red-200 hover:!text-red-600"
                >
                  <TrashIcon className="h-4 w-4" />
                  Delete Asset
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
        enableSorting: false,
        enableHiding: false,
        size: 60,
        minSize: 60,
        maxSize: 60,
      },
      ];
    },
    [data, onPreview, onEdit, onDelete]
  );

  // Initialize table state for client-side filtering
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updated_at', desc: true } // Default sort by most recently updated
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    updated_at: false,
  });
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
    getRowId: (row) => row.id,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  // Handle selection changes
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = table.getFilteredSelectedRowModel().rows;
      const selectedAssets = selectedRows.map(row => row.original);
      onSelectionChange(selectedAssets);
    }
  }, [rowSelection, onSelectionChange, table]);

  // Handle row click to open preview
  const handleRowClick = (asset: Asset) => {
    if (onPreview) {
      onPreview(asset);
    } else {
      setPreviewAsset(asset);
      setIsPreviewOpen(true);
    }
  };

  return (
    <div className="space-y-4">
      <DataTable table={table} onRowClick={handleRowClick}>
        <DataTableToolbar table={table} />
      </DataTable>
      
      {/* Asset Preview Modal */}
      <AssetPreviewModal
        asset={previewAsset}
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setPreviewAsset(null);
        }}
        onAssetUpdate={onAssetUpdate}
      />
    </div>
  );
}
