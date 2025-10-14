'use client';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

export default function OrganizationSettingsContent() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactEmail: '',
    contactPhone: '',
    locationAddress: '',
    locationCity: '',
    locationState: '',
    locationZip: '',
    accountCredentials: '',
  });

  const [organizationLogo, setOrganizationLogo] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setOrganizationLogo(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg'],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleSave = async () => {
    setIsSaving(true);
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="organization-name">Organization Name *</Label>
        <Input
          id="organization-name"
          type="text"
          placeholder="Enter your organization name"
          value={formData.organizationName}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              organizationName: e.target.value,
            }))
          }
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="grid gap-3">
          <Label htmlFor="contact-email">Contact Email *</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="contact@organization.com"
            value={formData.contactEmail}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, contactEmail: e.target.value }))
            }
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="contact-phone">Contact Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.contactPhone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, contactPhone: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="grid gap-3">
        <Label>Organization Logo</Label>
        <div
          {...getRootProps()}
          className={cn(
            'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
            isDragActive
              ? 'border-primary bg-primary/5'
              : 'border-muted-foreground/25',
            organizationLogo && 'border-primary bg-primary/5'
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-2">
            {organizationLogo ? (
              <img
                src={URL.createObjectURL(organizationLogo)}
                alt="Organization logo preview"
                className="w-16 h-16 object-contain rounded"
              />
            ) : (
              <Upload className="w-8 h-8 text-muted-foreground" />
            )}
            {organizationLogo ? (
              <div className="text-sm">
                <p className="font-medium text-primary">
                  ✓ {organizationLogo.name}
                </p>
                <p className="text-muted-foreground">
                  Click or drag to replace
                </p>
              </div>
            ) : (
              <div className="text-sm">
                <p className="font-medium">
                  Drop your logo here, or click to browse
                </p>
                <p className="text-muted-foreground">PNG, JPG, GIF up to 5MB</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <Label htmlFor="location-address">Address *</Label>
        <Input
          id="location-address"
          type="text"
          placeholder="123 Main Street"
          value={formData.locationAddress}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              locationAddress: e.target.value,
            }))
          }
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid gap-3">
          <Label htmlFor="location-city">City *</Label>
          <Input
            id="location-city"
            type="text"
            placeholder="City"
            value={formData.locationCity}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, locationCity: e.target.value }))
            }
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="location-state">State *</Label>
          <Input
            id="location-state"
            type="text"
            placeholder="State"
            value={formData.locationState}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                locationState: e.target.value,
              }))
            }
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="location-zip">ZIP Code *</Label>
          <Input
            id="location-zip"
            type="text"
            placeholder="12345"
            value={formData.locationZip}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, locationZip: e.target.value }))
            }
            required
          />
        </div>
      </div>

      <div className="grid gap-3">
        <Label htmlFor="account-credentials">Account Setup Credentials</Label>
        <Input
          id="account-credentials"
          type="text"
          placeholder="Enter account setup information"
          value={formData.accountCredentials}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              accountCredentials: e.target.value,
            }))
          }
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
}
