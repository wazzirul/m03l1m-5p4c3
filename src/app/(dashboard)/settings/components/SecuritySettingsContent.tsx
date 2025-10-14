'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SecuritySettingsContent() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
  };

  return (
    <div className="space-y-6">
      {/* Form Current Password */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          Current Password
        </Label>
        <Input
          type="password"
          value={formData.currentPassword}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              currentPassword: e.target.value,
            }))
          }
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="Enter your current password"
        />
      </div>

      {/* Form New Password */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          New Password
        </Label>
        <Input
          type="password"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
          }
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="Enter your new password"
        />
      </div>

      {/* Form Confirm New Password */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          Confirm New Password
        </Label>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          placeholder="Confirm your new password"
        />
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
