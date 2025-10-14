import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function AnnouncementDataTableSkeleton() {
  return (
    <div className="flex w-full flex-col gap-2.5 overflow-auto">
      {/* Toolbar Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-8 w-[70px]" />
          <Skeleton className="h-8 w-[70px]" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-[100px]" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[28px]">
                <Skeleton className="h-4 w-4" />
              </TableHead>
              <TableHead className="w-[300px]">
                <Skeleton className="h-4 w-[60px]" />
              </TableHead>
              <TableHead className="w-[80px]">
                <Skeleton className="h-4 w-[50px]" />
              </TableHead>
              <TableHead className="w-[80px]">
                <Skeleton className="h-4 w-[50px]" />
              </TableHead>
              <TableHead className="w-[120px]">
                <Skeleton className="h-4 w-[70px]" />
              </TableHead>
              <TableHead className="w-[140px]">
                <Skeleton className="h-4 w-[100px]" />
              </TableHead>
              <TableHead className="w-[140px]">
                <Skeleton className="h-4 w-[100px]" />
              </TableHead>
              <TableHead className="w-[120px]">
                <Skeleton className="h-4 w-[60px]" />
              </TableHead>
              <TableHead className="w-[80px]">
                <Skeleton className="h-4 w-[60px]" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 8 }).map((_, index) => (
              <TableRow key={index}>
                {/* Select checkbox */}
                <TableCell>
                  <Skeleton className="h-4 w-4" />
                </TableCell>
                
                {/* Title */}
                <TableCell>
                  <div className="max-w-[300px] space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[250px]" />
                  </div>
                </TableCell>
                
                {/* Image */}
                <TableCell>
                  <Skeleton className="h-12 w-16 rounded" />
                </TableCell>
                
                {/* Video */}
                <TableCell>
                  <Skeleton className="h-12 w-16 rounded" />
                </TableCell>
                
                {/* Location */}
                <TableCell>
                  <Skeleton className="h-6 w-[80px] rounded-full" />
                </TableCell>
                
                {/* Target Audience */}
                <TableCell>
                  <Skeleton className="h-6 w-[60px] rounded-full" />
                </TableCell>
                
                {/* Schedule Date */}
                <TableCell>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </TableCell>
                
                {/* Created */}
                <TableCell>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                </TableCell>
                
                {/* Actions */}
                <TableCell>
                  <Skeleton className="h-8 w-8" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Skeleton */}
      <div className="flex items-center justify-between px-2">
        <Skeleton className="h-4 w-[100px]" />
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-8 w-[70px]" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-8 w-[100px]" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
