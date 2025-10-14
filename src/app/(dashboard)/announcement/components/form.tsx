'use client';

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import {
  CalendarIcon,
  Upload,
  X,
  Image as ImageIcon,
  Video,
} from 'lucide-react';
import Image from 'next/image';
import { type Announcement } from './dataTable';
import Link from 'next/link';

interface AnnouncementFormProps {
  initialData?: Partial<Announcement>;
  onSubmit: (
    data: Omit<Announcement, 'id' | 'created_at' | 'updated_at'>
  ) => void;
  onCancel?: () => void;
  loading?: boolean;
  className?: string;
}

export function AnnouncementForm({
  initialData,
  onSubmit,
  onCancel,
  loading = false,
  className,
}: AnnouncementFormProps) {
  const { theme } = useTheme();
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [targetLocation, setTargetLocation] = useState<'inside' | 'outside'>(
    initialData?.target_location || 'inside'
  );
  const [targetUser, setTargetUser] = useState<
    'all' | 'adult' | 'teen' | 'child'
  >(initialData?.target_user || 'all');
  const [dateFrom, setDateFrom] = useState<Date | undefined>(
    initialData?.date_schedule_from
      ? new Date(initialData.date_schedule_from)
      : undefined
  );
  const [dateTo, setDateTo] = useState<Date | undefined>(
    initialData?.date_schedule_to
      ? new Date(initialData.date_schedule_to)
      : undefined
  );
  const [image, setImage] = useState<File | string | null>(
    typeof initialData?.image === 'string' ? initialData.image : null
  );
  const [video, setVideo] = useState<File | string | null>(
    initialData?.video || null
  );
  const [imagePreview, setImagePreview] = useState<string | null>(
    typeof initialData?.image === 'string' ? initialData.image : null
  );
  const [videoPreview, setVideoPreview] = useState<string | null>(
    initialData?.video || null
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!content.trim()) {
      newErrors.content = 'Content is required';
    }

    if (dateFrom && dateTo && dateFrom > dateTo) {
      newErrors.dateTo = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setErrors({ ...errors, image: 'Please select a valid image file' });
      }
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        setVideo(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setVideoPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setErrors({ ...errors, video: 'Please select a valid video file' });
      }
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  };

  const removeVideo = () => {
    setVideo(null);
    setVideoPreview(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData: Omit<Announcement, 'id' | 'created_at' | 'updated_at'> = {
      title: title.trim(),
      content: content.trim(),
      target_location: targetLocation,
      target_user: targetUser,
      date_schedule_from: dateFrom
        ? dateFrom.toISOString().split('T')[0]
        : null,
      date_schedule_to: dateTo ? dateTo.toISOString().split('T')[0] : null,
      image: image instanceof File ? imagePreview : image,
      video: video instanceof File ? videoPreview : video,
    };

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">
          Title <span className="text-destructive">*</span>
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter announcement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'border-destructive' : ''}
        />
        {errors.title && (
          <p className="text-sm text-destructive">{errors.title}</p>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Label htmlFor="content">
          Content <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="content"
          placeholder="Enter announcement content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={cn(
            'min-h-[120px]',
            errors.content ? 'border-destructive' : ''
          )}
        />
        {errors.content && (
          <p className="text-sm text-destructive">{errors.content}</p>
        )}
      </div>

      {/* Target */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Target Location */}
        <div className="space-y-2">
          <Label>Target Location</Label>
          <Select
            value={targetLocation}
            onValueChange={(value: 'inside' | 'outside') =>
              setTargetLocation(value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inside">Inside</SelectItem>
              <SelectItem value="outside">Outside</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Target User */}
        <div className="space-y-2">
          <Label>Target Audience</Label>
          <Select
            value={targetUser}
            onValueChange={(value: 'all' | 'adult' | 'teen' | 'child') =>
              setTargetUser(value)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select target audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="adult">Adult</SelectItem>
              <SelectItem value="teen">Teen</SelectItem>
              <SelectItem value="child">Child</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Schedule From</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !dateFrom && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateFrom ? format(dateFrom, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dateFrom}
                onSelect={setDateFrom}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Schedule To</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !dateTo && 'text-muted-foreground',
                  errors.dateTo && 'border-destructive'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateTo ? format(dateTo, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dateTo}
                onSelect={setDateTo}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.dateTo && (
            <p className="text-sm text-destructive">{errors.dateTo}</p>
          )}
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <Label>Image</Label>
        <div className="space-y-4">
          {imagePreview ? (
            <div className="relative inline-block w-full">
              <div className="relative w-full h-96 rounded-lg shadow mx-auto">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover rounded-lg"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 cursor-pointer"
                  onClick={removeImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-muted-foreground transition-colors"
              onClick={() => imageInputRef.current?.click()}
            >
              <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Click to upload image
              </p>
            </div>
          )}
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {errors.image && (
            <p className="text-sm text-destructive">{errors.image}</p>
          )}
        </div>
      </div>

      {/* Video Upload */}
      <div className="space-y-2">
        <Label>Video</Label>
        <div className="space-y-4">
          {videoPreview ? (
            <div className="relative inline-block w-full">
              <div className="relative w-full h-96 rounded-lg border border-border bg-black mx-auto">
                <video
                  src={videoPreview}
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  muted
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                  onClick={removeVideo}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-muted-foreground transition-colors"
              onClick={() => videoInputRef.current?.click()}
            >
              <Video className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Click to upload video
              </p>
            </div>
          )}
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
          />
          {errors.video && (
            <p className="text-sm text-destructive">{errors.video}</p>
          )}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex gap-4 pt-6">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 cursor-pointer"
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          disabled={loading}
          className="flex-1 cursor-pointer"
          variant="default"
          style={{ backgroundColor: theme.primary }}
        >
          {loading
            ? 'Saving...'
            : initialData
            ? 'Update Announcement'
            : 'Create Announcement'}
        </Button>
      </div>
    </form>
  );
}
