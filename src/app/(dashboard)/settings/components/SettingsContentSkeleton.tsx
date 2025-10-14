"use client";

export function GeneralSettingsContentSkeleton() {
  return (
    <div className="space-y-6">
      {/* Navigation Card Skeleton */}
      <div className="border border-border rounded-lg p-4 space-y-4">
        <div className="h-4 bg-muted rounded w-20 animate-pulse" />
        <div className="space-y-2">
          <div className="border border-border rounded-md p-3 flex items-center gap-2">
            <div className="w-7 h-7 bg-muted rounded animate-pulse" />
            <div className="space-y-1 flex-1">
              <div className="h-4 bg-muted rounded w-16 animate-pulse" />
              <div className="h-3 bg-muted rounded w-24 animate-pulse" />
            </div>
          </div>
          <div className="border border-border rounded-md p-3 flex items-center gap-2">
            <div className="w-7 h-7 bg-muted rounded animate-pulse" />
            <div className="space-y-1 flex-1">
              <div className="h-4 bg-muted rounded w-16 animate-pulse" />
              <div className="h-3 bg-muted rounded w-24 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="h-3 bg-muted rounded w-64 animate-pulse" />
      </div>

      {/* Theme Card Skeleton */}
      <div className="border border-border rounded-lg p-4 space-y-4">
        <div className="h-4 bg-muted rounded w-12 animate-pulse" />
        <div className="flex items-center gap-3">
          <div className="border border-border rounded-md px-4 py-2 flex items-center gap-2">
            <div className="w-4 h-4 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded w-10 animate-pulse" />
          </div>
          <div className="border border-border rounded-md px-4 py-2 flex items-center gap-2">
            <div className="w-4 h-4 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded w-8 animate-pulse" />
          </div>
        </div>
        <div className="h-3 bg-muted rounded w-48 animate-pulse" />
      </div>

      {/* Brand Color Card Skeleton */}
      <div className="border border-border rounded-lg p-4 space-y-4">
        <div className="h-4 bg-muted rounded w-20 animate-pulse" />
        <div className="flex items-center gap-3">
          <div className="border border-border rounded-md px-4 py-2 flex items-center gap-2">
            <div className="w-5 h-5 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded w-20 animate-pulse" />
          </div>
          <div className="border border-border rounded-md px-3 py-2">
            <div className="h-4 bg-muted rounded w-16 animate-pulse" />
          </div>
        </div>
        <div className="h-3 bg-muted rounded w-52 animate-pulse" />
      </div>

      {/* Save Button Skeleton */}
      <div className="flex justify-end gap-3">
        <div className="h-10 bg-muted rounded-md w-32 animate-pulse" />
      </div>
    </div>
  );
}

export function ProfileSettingsContentSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Field Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-24 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
        {/* Username Field Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-16 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
      {/* Save Button Skeleton */}
      <div className="flex justify-end">
        <div className="h-10 bg-muted rounded-md w-28 animate-pulse" />
      </div>
    </div>
  );
}

export function OrganizationSettingsContentSkeleton() {
  return (
    <div className="space-y-4">
      {/* Organization Name Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-32 animate-pulse" />
        <div className="h-10 bg-muted rounded-md animate-pulse" />
      </div>

      {/* Contact Info Grid Skeleton */}
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-24 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-24 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
      </div>

      {/* Logo Upload Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-32 animate-pulse" />
        <div className="border-2 border-dashed border-border rounded-lg p-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-muted rounded animate-pulse" />
            <div className="text-center space-y-1">
              <div className="h-4 bg-muted rounded w-48 mx-auto animate-pulse" />
              <div className="h-3 bg-muted rounded w-32 mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Address Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-16 animate-pulse" />
        <div className="h-10 bg-muted rounded-md animate-pulse" />
      </div>

      {/* City, State, ZIP Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-8 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-10 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-16 animate-pulse" />
          <div className="h-10 bg-muted rounded-md animate-pulse" />
        </div>
      </div>

      {/* Account Credentials Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-44 animate-pulse" />
        <div className="h-10 bg-muted rounded-md animate-pulse" />
      </div>

      {/* Save Button Skeleton */}
      <div className="flex justify-end gap-3">
        <div className="h-10 bg-muted rounded-md w-28 animate-pulse" />
      </div>
    </div>
  );
}

export function SecuritySettingsContentSkeleton() {
  return (
    <div className="space-y-6">
      {/* Current Password Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-28 animate-pulse" />
        <div className="h-10 bg-muted rounded-md animate-pulse" />
      </div>

      {/* New Password Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-24 animate-pulse" />
        <div className="h-10 bg-muted rounded-md animate-pulse" />
      </div>

      {/* Confirm Password Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-36 animate-pulse" />
        <div className="h-10 bg-muted rounded-md animate-pulse" />
      </div>

      {/* Save Button Skeleton */}
      <div className="flex justify-end">
        <div className="h-10 bg-muted rounded-md w-28 animate-pulse" />
      </div>
    </div>
  );
}
