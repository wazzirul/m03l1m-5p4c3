'use client';
import { useState } from 'react';
import { AuthUser } from '@/lib/auth-guard';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  user: AuthUser;
}

export default function ProfileSettingsContent({ user }: { user: AuthUser }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Form Email Address */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">
            Email Address
          </Label>
          <Input
            type="email"
            defaultValue={user.email || ''}
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
            placeholder="Enter your email address"
          />
        </div>

        {/* Form Username */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Username</Label>
          <Input
            type="text"
            defaultValue={user.name || ''}
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
            placeholder="Enter your user name"
          />
        </div>
      </div>

      {/* Button Save Changes */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
}
