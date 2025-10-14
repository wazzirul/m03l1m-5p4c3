'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useCallback } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { useDropzone } from 'react-dropzone';
import { Upload, CheckCircle } from 'lucide-react';

export function OnboardingForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const { navigateWithProgress } = useProgress();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  // Step 1: Organization onboarding fields
  const [annualFundraisingGoal, setAnnualFundraisingGoal] = useState('');
  const [upcomingEventFundraising, setUpcomingEventFundraising] = useState<
    'yes' | 'no' | ''
  >('');
  const [donationToolsUsed, setDonationToolsUsed] = useState('');
  const [organizationPersonCount, setOrganizationPersonCount] = useState('');
  const [donorManagementTools, setDonorManagementTools] = useState('');
  const [referralSource, setReferralSource] = useState('');

  // Step 2: Organization profile fields
  const [organizationName, setOrganizationName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [organizationLogo, setOrganizationLogo] = useState<File | null>(null);
  const [locationAddress, setLocationAddress] = useState('');
  const [locationCity, setLocationCity] = useState('');
  const [locationState, setLocationState] = useState('');
  const [locationZip, setLocationZip] = useState('');
  const [accountCredentials, setAccountCredentials] = useState('');

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

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === 1) {
      handleNext();
      return;
    }

    setLoading(true);
    try {
      // TODO: Persist all onboarding data to backend
      console.log('Complete onboarding data', {
        // Step 1 data
        annualFundraisingGoal,
        upcomingEventFundraising,
        donationToolsUsed,
        organizationPersonCount,
        donorManagementTools,
        referralSource,
        // Step 2 data
        organizationName,
        contactEmail,
        contactPhone,
        organizationLogo: organizationLogo?.name,
        locationAddress,
        locationCity,
        locationState,
        locationZip,
        accountCredentials,
      });
      navigateWithProgress('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="w-full mb-2">
      <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
        <span
          className={
            currentStep === 1
              ? 'text-primary'
              : currentStep > 1
              ? 'text-green-600'
              : ''
          }
        >
          Overview
        </span>
        <div className="flex-1 mx-4 relative top-0.5">
          <div className="w-full h-2 rounded-full bg-gray-300 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-slate-800 rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: currentStep === 1 ? '0%' : '60%',
              }}
            />
          </div>
        </div>
        <span className={currentStep === 2 ? 'text-primary' : ''}>
          Profile Creation
        </span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="annual-fundraising-goal">Annual fundraising goal</Label>
        <Input
          id="annual-fundraising-goal"
          type="text"
          placeholder="$25,000"
          value={annualFundraisingGoal}
          onChange={(e) => setAnnualFundraisingGoal(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          How much do you plan to raise online this year?
        </p>
      </div>

      <div className="grid gap-3">
        <Label>Raise funds at an upcoming event?</Label>
        <div className="flex items-center gap-6">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="upcoming-event-fundraising"
              value="yes"
              checked={upcomingEventFundraising === 'yes'}
              onChange={() => setUpcomingEventFundraising('yes')}
              className="h-4 w-4"
            />
            Yes
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="upcoming-event-fundraising"
              value="no"
              checked={upcomingEventFundraising === 'no'}
              onChange={() => setUpcomingEventFundraising('no')}
              className="h-4 w-4"
            />
            No
          </label>
        </div>
      </div>

      <div className="grid gap-3">
        <Label>Donation tools currently used</Label>
        <Select value={donationToolsUsed} onValueChange={setDonationToolsUsed}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              <SelectItem value="cash">Cash</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
              <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
              <SelectItem value="online_platform">Online Platform</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-3">
        <Label>Active person in organization</Label>
        <Select
          value={organizationPersonCount}
          onValueChange={setOrganizationPersonCount}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Active person</SelectLabel>
              <SelectItem value="lt_50">Less than 50</SelectItem>
              <SelectItem value="50_100">50-100</SelectItem>
              <SelectItem value="100_200">100-200</SelectItem>
              <SelectItem value="200_500">200-500</SelectItem>
              <SelectItem value="gt_500">500+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-3">
        <Label>Donor/community management tools</Label>
        <Select
          value={donorManagementTools}
          onValueChange={setDonorManagementTools}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tools</SelectLabel>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="whatsapp_groups">WhatsApp Groups</SelectItem>
              <SelectItem value="google_sheets">Google Sheets</SelectItem>
              <SelectItem value="crm">CRM</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-3">
        <Label>How did you hear about Muslim Spaces?</Label>
        <Select value={referralSource} onValueChange={setReferralSource}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sources</SelectLabel>
              <SelectItem value="friend">Friend</SelectItem>
              <SelectItem value="imam_recommendation">
                Imam recommendation
              </SelectItem>
              <SelectItem value="online_search">Online Search</SelectItem>
              <SelectItem value="social_media">Social Media</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="organization-name">Organization Name *</Label>
        <Input
          id="organization-name"
          type="text"
          placeholder="Enter your organization name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
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
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="contact-phone">Contact Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
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
            organizationLogo && 'border-green-500 bg-green-50'
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
                <p className="font-medium text-green-600">
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
          value={locationAddress}
          onChange={(e) => setLocationAddress(e.target.value)}
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
            value={locationCity}
            onChange={(e) => setLocationCity(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="location-state">State *</Label>
          <Input
            id="location-state"
            type="text"
            placeholder="State"
            value={locationState}
            onChange={(e) => setLocationState(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="location-zip">ZIP Code *</Label>
          <Input
            id="location-zip"
            type="text"
            placeholder="12345"
            value={locationZip}
            onChange={(e) => setLocationZip(e.target.value)}
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
          value={accountCredentials}
          onChange={(e) => setAccountCredentials(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <form
      onSubmit={onSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {currentStep === 1
            ? 'Onboarding – Mosque/Community Organization'
            : 'Organization - Profile Setup'}
        </h1>
        <p className="text-muted-foreground text-sm text-balance text-center">
          {currentStep === 1
            ? 'Tell us about your mosque or community organization to help us understand your needs and better personalize your dashboard experience.'
            : 'Complete your organization profile to finish the setup process.'}
        </p>
      </div>

      {renderStepIndicator()}

      <div className="grid gap-6">
        {currentStep === 1 ? renderStep1() : renderStep2()}

        <div className="flex gap-3">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              className="flex-1"
            >
              Previous
            </Button>
          )}
          <Button type="submit" className="flex-1" disabled={loading}>
            {loading
              ? 'Saving...'
              : currentStep === totalSteps
              ? 'Complete Setup'
              : 'Next Step'}
          </Button>
        </div>
      </div>
    </form>
  );
}
