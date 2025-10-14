'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Upload, X, Image as ImageIcon, Video, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import { type Announcement } from '@/app/(dashboard)/announcement/components/dataTable';
import { ColorPopup } from './selectionDisplayColorPopUp';

// Import assets
import ImageMosque1 from '@/assets/images/mosque/mosque-1.jpg';
import ImageMosque2 from '@/assets/images/mosque/mosque-2.jpg';
import ImageMosque3 from '@/assets/images/mosque/mosque-3.jpg';
import ImageMosque4 from '@/assets/images/mosque/mosque-4.jpg';
import ImageMosque5 from '@/assets/images/mosque/mosque-5.jpg';
import ImageMosque6 from '@/assets/images/mosque/mosque-6.png';
import ImageMosque7 from '@/assets/images/mosque/mosque-7.png';
const SampleVideo = '/sample-videos.mp4';

// Asset type definition
interface Asset {
  id: string;
  name: string;
  type: 'image' | 'video';
  sourceUrl: any;
  fileSize: string;
  dimensions: string;
  duration?: string;
  created_at: string;
  updated_at: string;
}

interface QuranVerse {
  name: string;
  verse: string;
  translation: string;
}

interface QuranProps {
  verse: string;
  translation: string;
}

interface DisplayFormProps {
  selectedContent: string;
  selectedStyle?: string;
  selectedLayout?: string;
  onSubmit?: (data: DisplayFormData) => void;
  onCancel?: () => void;
  loading?: boolean;
  className?: string;
  onImageSelection?: (imageSource: string | null) => void;
  onVideoSelection?: (videoSource: string | null) => void;
  listQuranVerse?: QuranVerse[];
  selectedQuranVerse?: QuranProps[];
  onQuranVerseSelection?: (verses: QuranProps[]) => void;
  announcementList?: Announcement[];
  selectedAnnouncementType?: 'text' | 'image' | 'video';
  selectedAnnouncements?: Announcement[];
  onAnnouncementTypeSelection?: (type: 'text' | 'image' | 'video') => void;
  onAnnouncementSelection?: (announcements: Announcement[]) => void;
  selectedBackgroundColor?: string | null;
  onBackgroundColorSelection?: (color: string | null) => void;
  // Small announcement props for L-Layout
  smallAnnouncementList?: Announcement[];
  selectedSmallAnnouncements?: Announcement[];
  onSmallAnnouncementSelection?: (announcements: Announcement[]) => void;
}

export interface DisplayFormData {
  displayName: string;
  displayCode: string;
  image?: File | string | null;
  video?: File | string | null;
  selectedVerses?: QuranProps[];
}

export function DisplayForm({
  selectedContent,
  selectedLayout,
  onSubmit,
  onCancel,
  loading = false,
  className,
  onImageSelection,
  onVideoSelection,
  listQuranVerse = [],
  selectedQuranVerse,
  onQuranVerseSelection,
  selectedStyle,
  announcementList = [],
  selectedAnnouncementType = 'image',
  selectedAnnouncements = [],
  onAnnouncementTypeSelection,
  onAnnouncementSelection,
  selectedBackgroundColor,
  onBackgroundColorSelection,
  smallAnnouncementList = [],
  selectedSmallAnnouncements = [],
  onSmallAnnouncementSelection,
}: DisplayFormProps) {
  // Default assets data
  const defaultAssets: Asset[] = [
    {
      id: 'asset-001',
      name: 'Outside Mosque',
      type: 'image',
      sourceUrl: ImageMosque1,
      fileSize: '2.1 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-002',
      name: 'Inside Mosque',
      type: 'image',
      sourceUrl: ImageMosque2,
      fileSize: '1.8 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-003',
      name: 'Mosque Interior',
      type: 'image',
      sourceUrl: ImageMosque3,
      fileSize: '2.3 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-004',
      name: 'Mosque Exterior',
      type: 'image',
      sourceUrl: ImageMosque4,
      fileSize: '1.9 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-005',
      name: 'Mosque Prayer Hall',
      type: 'image',
      sourceUrl: ImageMosque5,
      fileSize: '2.0 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-006',
      name: 'Mosque Interior ver 2',
      type: 'image',
      sourceUrl: ImageMosque6,
      fileSize: '2.3 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-007',
      name: 'Mosque Exterior ver 2',
      type: 'image',
      sourceUrl: ImageMosque7,
      fileSize: '1.9 MB',
      dimensions: '1920 x 1080',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
    {
      id: 'asset-008',
      name: 'Mosque Video Tour',
      type: 'video',
      sourceUrl: SampleVideo,
      fileSize: '15.7 MB',
      dimensions: '1280 x 720',
      duration: '2:34',
      created_at: '2025-08-20T09:30:00Z',
      updated_at: '2025-08-21T11:15:00Z',
    },
  ];

  // Filter assets by type
  const imageAssets = defaultAssets.filter((asset) => asset.type === 'image');
  const videoAssets = defaultAssets.filter((asset) => asset.type === 'video');
  const [displayName, setDisplayName] = useState('');
  const [displayCode, setDisplayCode] = useState('');
  const [image, setImage] = useState<File | string | null>(null);
  const [video, setVideo] = useState<File | string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [imageAssetSelection, setImageAssetSelection] = useState('-');
  const [videoAssetSelection, setVideoAssetSelection] = useState('-');
  const [selectedImageAsset, setSelectedImageAsset] = useState<Asset | null>(
    null
  );
  const [selectedVideoAsset, setSelectedVideoAsset] = useState<Asset | null>(
    null
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDragOverImage, setIsDragOverImage] = useState(false);
  const [isDragOverVideo, setIsDragOverVideo] = useState(false);
  const [selectedVerseIds, setSelectedVerseIds] = useState<string[]>([
    'Al-Baqarah : 45',
  ]);
  const [selectedAnnouncementIds, setSelectedAnnouncementIds] = useState<
    string[]
  >([]);
  const [selectedSmallAnnouncementIds, setSelectedSmallAnnouncementIds] = useState<
    string[]
  >([]);
  const [backgroundColorPopup, setBackgroundColorPopup] = useState({
    isOpen: false,
    currentColor: '#ffffff',
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const backgroundColorRef = useRef<HTMLDivElement>(null);

  // Reset image selection when selectedStyle changes (only if image section visibility changes)
  useEffect(() => {
    const shouldShowImage =
      selectedContent.toLowerCase().includes('image') ||
      ((selectedContent === 'Next Prayer Times' ||
        selectedContent === 'Quran Verse') &&
        selectedStyle &&
        [
          'Light Image Overlay',
          'Dark Image Overlay',
          'Light Imagery',
          'Dark Imagery',
        ].includes(selectedStyle)) ||
      (selectedContent === 'Announcements' &&
        selectedAnnouncementType === 'text');

    // Only reset if image section becomes hidden
    if (!shouldShowImage) {
      setImageAssetSelection('-');
      setSelectedImageAsset(null);
      setImage(null);
      setImagePreview(null);
      onImageSelection?.(null);
    }
  }, [
    selectedStyle,
    selectedContent,
    selectedAnnouncementType,
    onImageSelection,
  ]);

  // Generate unique 8-character alphanumeric code
  const generateDisplayCode = () => {
    setIsGenerating(true);
    // Simulate generation delay for better UX
    setTimeout(() => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 8; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      setDisplayCode(result);
      setIsGenerating(false);
    }, 500);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    }

    if (!displayCode.trim()) {
      newErrors.displayCode = 'Display code is required';
    } else if (displayCode.length !== 8) {
      newErrors.displayCode = 'Display code must be 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageAssetSelection = (value: string) => {
    setImageAssetSelection(value);
    if (value === '-') {
      setSelectedImageAsset(null);
      setImage(null);
      setImagePreview(null);
      onImageSelection?.(null);
    } else if (value !== 'new-upload') {
      const asset = imageAssets.find((a) => a.id === value);
      if (asset) {
        setSelectedImageAsset(asset);
        setImage(asset.sourceUrl);
        const imageSource = asset.sourceUrl.src || asset.sourceUrl;
        setImagePreview(imageSource);
        // Pass image to backgroundImage if content is not 'Images'
        if (selectedContent !== 'Images') {
          onImageSelection?.(imageSource);
        } else {
          onImageSelection?.(imageSource);
        }
      }
    } else {
      setSelectedImageAsset(null);
      setImage(null);
      setImagePreview(null);
      onImageSelection?.(null);
    }
  };

  const handleVideoAssetSelection = (value: string) => {
    setVideoAssetSelection(value);
    if (value === '-') {
      setSelectedVideoAsset(null);
      setVideo(null);
      setVideoPreview(null);
      onVideoSelection?.(null);
    } else if (value !== 'new-upload') {
      const asset = videoAssets.find((a) => a.id === value);
      if (asset) {
        setSelectedVideoAsset(asset);
        setVideo(asset.sourceUrl);
        const videoSource = asset.sourceUrl;
        setVideoPreview(videoSource);
        onVideoSelection?.(videoSource);
      }
    } else {
      setSelectedVideoAsset(null);
      setVideo(null);
      setVideoPreview(null);
      onVideoSelection?.(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setImagePreview(result);
          // Pass image to backgroundImage if content is not 'Images'
          if (selectedContent !== 'Images') {
            onImageSelection?.(result);
          } else {
            onImageSelection?.(result);
          }
        };
        reader.readAsDataURL(file);
        setImageAssetSelection('new-upload');
        setSelectedImageAsset(null);
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
          const result = e.target?.result as string;
          setVideoPreview(result);
          onVideoSelection?.(result);
        };
        reader.readAsDataURL(file);
        setVideoAssetSelection('new-upload');
        setSelectedVideoAsset(null);
      } else {
        setErrors({ ...errors, video: 'Please select a valid video file' });
      }
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    setImageAssetSelection('-');
    onImageSelection?.(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  };

  const removeVideo = () => {
    setVideo(null);
    setVideoPreview(null);
    setVideoAssetSelection('-');
    onVideoSelection?.(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };

  // Drag and drop handlers for images
  const handleImageDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverImage(true);
  };

  const handleImageDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverImage(false);
  };

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverImage(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setImagePreview(result);
          // Pass image to backgroundImage if content is not 'Images'
          if (selectedContent !== 'Images') {
            onImageSelection?.(result);
          } else {
            onImageSelection?.(result);
          }
        };
        reader.readAsDataURL(file);
        setImageAssetSelection('new-upload');
        setSelectedImageAsset(null);
      } else {
        setErrors({ ...errors, image: 'Please drop a valid image file' });
      }
    }
  };

  // Drag and drop handlers for videos
  const handleVideoDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverVideo(true);
  };

  const handleVideoDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverVideo(false);
  };

  const handleVideoDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverVideo(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('video/')) {
        setVideo(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setVideoPreview(result);
          onVideoSelection?.(result);
        };
        reader.readAsDataURL(file);
        setVideoAssetSelection('new-upload');
        setSelectedVideoAsset(null);
      } else {
        setErrors({ ...errors, video: 'Please drop a valid video file' });
      }
    }
  };

  const handleQuranVerseSelection = (verseId: string) => {
    const isSelected = selectedVerseIds.includes(verseId);
    let newSelectedIds: string[];

    if (isSelected) {
      // Remove from selection
      newSelectedIds = selectedVerseIds.filter((id) => id !== verseId);
    } else {
      // Add to selection
      newSelectedIds = [...selectedVerseIds, verseId];
    }

    setSelectedVerseIds(newSelectedIds);

    // Convert selected IDs to QuranProps array
    const selectedVerses: QuranProps[] = newSelectedIds
      .map((id) => {
        const verse = listQuranVerse.find((v) => v.name === id);
        return verse
          ? { verse: verse.verse, translation: verse.translation }
          : { verse: '', translation: '' };
      })
      .filter((v) => v.verse !== '');

    if (onQuranVerseSelection) {
      onQuranVerseSelection(selectedVerses);
    }
  };

  const handleAnnouncementTypeSelection = (
    type: 'text' | 'image' | 'video'
  ) => {
    if (onAnnouncementTypeSelection) {
      onAnnouncementTypeSelection(type);
    }
  };

  const handleAnnouncementSelection = (announcementId: string) => {
    const isSelected = selectedAnnouncementIds.includes(announcementId);
    let newSelectedIds: string[];

    if (isSelected) {
      // Remove from selection
      newSelectedIds = selectedAnnouncementIds.filter(
        (id) => id !== announcementId
      );
    } else {
      // Add to selection
      newSelectedIds = [...selectedAnnouncementIds, announcementId];
    }

    setSelectedAnnouncementIds(newSelectedIds);

    // Convert selected IDs to Announcement array
    const selectedAnnouncements: Announcement[] = newSelectedIds
      .map((id) => {
        const announcement = announcementList.find((ann) => ann.id === id);
        return announcement;
      })
      .filter((ann): ann is Announcement => ann !== undefined);

    if (onAnnouncementSelection) {
      onAnnouncementSelection(selectedAnnouncements);
    }
  };

  const handleSmallAnnouncementSelection = (announcementId: string) => {
    const isSelected = selectedSmallAnnouncementIds.includes(announcementId);
    let newSelectedIds: string[];

    if (isSelected) {
      // Remove from selection
      newSelectedIds = selectedSmallAnnouncementIds.filter(
        (id) => id !== announcementId
      );
    } else {
      // Add to selection
      newSelectedIds = [...selectedSmallAnnouncementIds, announcementId];
    }

    setSelectedSmallAnnouncementIds(newSelectedIds);

    // Convert selected IDs to Announcement array
    const selectedSmallAnnouncements: Announcement[] = newSelectedIds
      .map((id) => {
        const announcement = smallAnnouncementList.find((ann) => ann.id === id);
        return announcement;
      })
      .filter((ann): ann is Announcement => ann !== undefined);

    if (onSmallAnnouncementSelection) {
      onSmallAnnouncementSelection(selectedSmallAnnouncements);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData: DisplayFormData = {
      displayName: displayName.trim(),
      displayCode: displayCode.trim(),
      image: image,
      video: video,
      selectedVerses: selectedQuranVerse,
    };

    onSubmit?.(formData);
  };

  const showImageSection =
    selectedContent.toLowerCase().includes('image') ||
    ((selectedContent === 'Next Prayer Times' ||
      selectedContent === 'Quran Verse') &&
      selectedStyle &&
      [
        'Light Image Overlay',
        'Dark Image Overlay',
        'Light Imagery',
        'Dark Imagery',
      ].includes(selectedStyle)) ||
    (selectedContent === 'Announcements' &&
      selectedAnnouncementType === 'text');
  const showVideoSection = selectedContent.toLowerCase().includes('video');
  const showQuranVerseSection = selectedContent
    .toLowerCase()
    .includes('quran verse');
  const showAnnouncementSection = selectedContent
    .toLowerCase()
    .includes('announcement');
  const showSmallAnnouncementSection = selectedLayout === 'L-Layout';
  const showBackgroundColorSection =
    (selectedContent === 'Next Prayer Times' ||
      selectedContent === 'Quran Verse' ||
      (selectedContent === 'Announcements' &&
        selectedAnnouncementType === 'text')) &&
    selectedStyle &&
    [
      'Light Image Overlay',
      'Dark Image Overlay',
      'Light Imagery',
      'Dark Imagery',
    ].includes(selectedStyle);

  return (
    <div className={cn('mt-8 rounded-lg border p-6', className)}>
      <h2 className="text-xl font-semibold mb-6">Display Configuration</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Display Name and Code - Grid cols 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Display Name */}
          <div className="space-y-2">
            <Label htmlFor="displayName">
              Display Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="displayName"
              type="text"
              placeholder="Enter display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className={errors.displayName ? 'border-red-500' : ''}
            />
            {errors.displayName && (
              <p className="text-sm text-red-500">{errors.displayName}</p>
            )}
          </div>

          {/* Display Code */}
          <div className="space-y-2">
            <Label htmlFor="displayCode">
              Display Code <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2">
              <Input
                id="displayCode"
                type="text"
                placeholder="8-character code"
                value={displayCode}
                onChange={(e) => setDisplayCode(e.target.value.toUpperCase())}
                className={errors.displayCode ? 'border-red-500' : ''}
                maxLength={8}
              />
              <Button
                type="button"
                variant="outline"
                onClick={generateDisplayCode}
                disabled={isGenerating}
                className="px-3"
              >
                {isGenerating ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  'Generate'
                )}
              </Button>
            </div>
            {errors.displayCode && (
              <p className="text-sm text-red-500">{errors.displayCode}</p>
            )}
          </div>
        </div>

        {/* Image Section - Only show if content includes 'image' */}
        {showImageSection && (
          <div className="space-y-2">
            <Label>
              {selectedContent.includes('image')
                ? 'Image Content'
                : 'Select Background Image'}
            </Label>

            {/* Asset Selection */}
            <div className="space-y-4">
              <Select
                value={imageAssetSelection}
                onValueChange={handleImageAssetSelection}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select image source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="-">No Image</SelectItem>
                  {imageAssets.map((asset) => (
                    <SelectItem key={asset.id} value={asset.id}>
                      {asset.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="new-upload">Upload New Image</SelectItem>
                </SelectContent>
              </Select>

              {/* Image Upload Area */}
              {imageAssetSelection === 'new-upload' && (
                <div className="space-y-4">
                  {imagePreview ? (
                    <div className="relative inline-block w-full">
                      <div className="relative w-full h-64 rounded-lg shadow mx-auto">
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
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        isDragOverImage
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                      onClick={() => imageInputRef.current?.click()}
                      onDragOver={handleImageDragOver}
                      onDragLeave={handleImageDragLeave}
                      onDrop={handleImageDrop}
                    >
                      <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Click to upload image or drag and drop
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
                    <p className="text-sm text-red-500">{errors.image}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Video Section - Only show if content includes 'video' */}
        {showVideoSection && (
          <div className="space-y-2">
            <Label>Video Content</Label>

            {/* Asset Selection */}
            <div className="space-y-4">
              <Select
                value={videoAssetSelection}
                onValueChange={handleVideoAssetSelection}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select video source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="-">No Video</SelectItem>
                  {videoAssets.map((asset) => (
                    <SelectItem key={asset.id} value={asset.id}>
                      {asset.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="new-upload">Upload New Video</SelectItem>
                </SelectContent>
              </Select>

              {/* Video Upload Area */}
              {videoAssetSelection === 'new-upload' && (
                <div className="space-y-4">
                  {videoPreview ? (
                    <div className="relative inline-block w-full">
                      <div className="relative w-full h-64 rounded-lg border bg-black mx-auto">
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
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        isDragOverVideo
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                      onClick={() => videoInputRef.current?.click()}
                      onDragOver={handleVideoDragOver}
                      onDragLeave={handleVideoDragLeave}
                      onDrop={handleVideoDrop}
                    >
                      <Video className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Click to upload video or drag and drop
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
                    <p className="text-sm text-red-500">{errors.video}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Background Color Section - Only show for specific content types */}
        {showBackgroundColorSection && (
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-100">
              Select Background Color
            </Label>
            <div className="relative">
              <div
                ref={backgroundColorRef}
                onClick={() =>
                  setBackgroundColorPopup({
                    isOpen: true,
                    currentColor: selectedBackgroundColor || '#ffffff',
                  })
                }
                className="cursor-pointer px-4 py-2 rounded-md border flex items-center gap-2 dark:bg-input/30 border-input hover:bg-gray-50"
              >
                <div
                  className="w-5 h-5 rounded border border-gray-300"
                  style={{
                    backgroundColor: selectedBackgroundColor || '#ffffff',
                  }}
                />
                <span className="text-sm font-mono text-gray-700 dark:text-gray-100">
                  {selectedBackgroundColor || '#ffffff'}
                </span>
              </div>

              {/* Color Popup */}
              {backgroundColorPopup.isOpen && (
                <div
                  className="absolute"
                  style={{
                    top: `100%`,
                    left: `0`,
                    zIndex: 100,
                  }}
                >
                  <ColorPopup
                    selectedColor={JSON.stringify({
                      backgroundColor: selectedBackgroundColor || '#ffffff',
                    })}
                    selectedStyle=""
                    setSelectedColor={(colorString) => {
                      try {
                        const parsed = JSON.parse(colorString);
                        const newColor =
                          parsed.backgroundColorColor ||
                          parsed.backgroundColor ||
                          selectedBackgroundColor;
                        onBackgroundColorSelection?.(newColor);
                        setBackgroundColorPopup({
                          isOpen: true,
                          currentColor: newColor,
                        });
                      } catch {
                        onBackgroundColorSelection?.(colorString);
                        setBackgroundColorPopup({
                          isOpen: true,
                          currentColor: colorString,
                        });
                      }
                    }}
                    colorType="backgroundColor"
                    currentColor={backgroundColorPopup.currentColor}
                    triggerRef={backgroundColorRef}
                    onClose={() =>
                      setBackgroundColorPopup({
                        isOpen: false,
                        currentColor: selectedBackgroundColor || '#ffffff',
                      })
                    }
                    style={{
                      right: 'unset',
                      left: '0',
                    }}
                  />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2 dark:text-gray-300">
              Choose your background color if you doesnt have any background
              image.
            </p>
          </div>
        )}

        {/* Quran Verse Section - Only show if content includes 'quran verse' */}
        {showQuranVerseSection && (
          <div className="space-y-2">
            <Label>Quran Verse Selection</Label>
            <div className="space-y-4">
              {/* Multiple selection checkboxes */}
              <div className="space-y-2 max-h-64 dark:bg-gray-300 overflow-y-auto border rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-100 mb-3">
                  Select Quran verses (multiple selection allowed):
                </p>
                {listQuranVerse.map((verse) => (
                  <label
                    key={verse.name}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedVerseIds.includes(verse.name)}
                      onChange={() => handleQuranVerseSelection(verse.name)}
                      className="rounded border-gray-300 text-primary focus:ring-primary/50"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-100">
                      {verse.name}
                    </span>
                  </label>
                ))}
              </div>

              {/* Display selected verses preview */}
              {selectedQuranVerse && selectedQuranVerse.length > 0 && (
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-100">
                      Selected Verses ({selectedQuranVerse.length}):
                    </h4>
                    <div className="space-y-4 max-h-48 overflow-y-auto">
                      {selectedQuranVerse.map((verse, index) => (
                        <div
                          key={index}
                          className="space-y-2 pb-3 border-b border-gray-200 last:border-b-0"
                        >
                          <p className="text-right font-noto-sans-arabic text-lg leading-relaxed text-gray-800">
                            {verse.verse}
                          </p>
                          <p className="text-sm italic text-gray-600 leading-relaxed">
                            {verse.translation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Announcement Section - Only show if content includes 'announcement' */}
        {showAnnouncementSection && (
          <div className="space-y-2">
            <Label>Announcement Selection</Label>
            <div className="space-y-4">
              {/* Section 1: Announcement Type Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-100">
                  Announcement Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={selectedAnnouncementType}
                  onValueChange={(value: 'text' | 'image' | 'video') =>
                    handleAnnouncementTypeSelection(value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select announcement type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Section 2: Multiple Announcement Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-100">
                  Select Announcements (multiple selection allowed)
                </Label>
                <div className="space-y-2 max-h-64 dark:bg-gray-300 overflow-y-auto border rounded-lg p-4">
                  {announcementList.map((announcement) => (
                    <label
                      key={announcement.id}
                      className="flex items-start space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAnnouncementIds.includes(
                          announcement.id
                        )}
                        onChange={() =>
                          handleAnnouncementSelection(announcement.id)
                        }
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary/50"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                          {announcement.title}
                        </span>
                        <p className="text-xs text-gray-500 mt-1 dark:text-gray-100">
                          {announcement.content.length > 100
                            ? `${announcement.content.substring(0, 100)}...`
                            : announcement.content}
                        </p>
                        <div className="flex gap-2 text-xs text-gray-400 mt-1">
                          <span>Target: {announcement.target_user}</span>
                          <span>•</span>
                          <span>Location: {announcement.target_location}</span>
                          <span>•</span>
                          <span>
                            Schedule:{' '}
                            {!announcement.date_schedule_from
                              ? '-'
                              : `${announcement.date_schedule_from} - ${announcement.date_schedule_to}`}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preview Selected Announcements */}
              {selectedAnnouncements && selectedAnnouncements.length > 0 && (
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-700">
                      Selected Announcements ({selectedAnnouncements.length}):
                    </h4>
                    <div className="space-y-4 max-h-48 overflow-y-auto">
                      {selectedAnnouncements.map((announcement, index) => (
                        <div
                          key={`${announcement.id}-${index}`}
                          className="space-y-2 pb-3 border-b border-gray-200 last:border-b-0"
                        >
                          <h5 className="font-medium text-gray-800">
                            {announcement.title}
                          </h5>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {announcement.content}
                          </p>
                          <div className="flex gap-4 text-xs text-gray-500">
                            <span>Type: {selectedAnnouncementType}</span>
                            <span>Target: {announcement.target_user}</span>
                            <span>
                              Location: {announcement.target_location}
                            </span>
                          </div>
                          {announcement.date_schedule_from && (
                            <div className="text-xs text-gray-500">
                              Schedule: {announcement.date_schedule_from}
                              {announcement.date_schedule_to &&
                                announcement.date_schedule_to !==
                                  announcement.date_schedule_from &&
                                ` to ${announcement.date_schedule_to}`}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Small Announcement Section - Only show for L-Layout */}
        {showSmallAnnouncementSection && (
          <div className="space-y-2">
            <Label>Small Announcement Selection (for L-Layout sidebar)</Label>
            <div className="space-y-4">
              {/* Multiple selection checkboxes */}
              <div className="space-y-2 max-h-64 dark:bg-gray-300 overflow-y-auto border rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-100 mb-3">
                  Select small announcements for sidebar (multiple selection allowed):
                </p>
                {smallAnnouncementList.map((announcement) => (
                  <label
                    key={announcement.id}
                    className="flex items-start space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSmallAnnouncementIds.includes(
                        announcement.id
                      )}
                      onChange={() =>
                        handleSmallAnnouncementSelection(announcement.id)
                      }
                      className="mt-1 rounded border-gray-300 text-primary focus:ring-primary/50"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                        {announcement.title}
                      </span>
                      <p className="text-xs text-gray-500 mt-1 dark:text-gray-100">
                        {announcement.content.length > 100
                          ? `${announcement.content.substring(0, 100)}...`
                          : announcement.content}
                      </p>
                      <div className="flex gap-2 text-xs text-gray-400 mt-1">
                        <span>Target: {announcement.target_user}</span>
                        <span>•</span>
                        <span>Location: {announcement.target_location}</span>
                        <span>•</span>
                        <span>
                          Schedule:{' '}
                          {!announcement.date_schedule_from
                            ? '-'
                            : `${announcement.date_schedule_from} - ${announcement.date_schedule_to}`}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Preview Selected Small Announcements */}
              {selectedSmallAnnouncements && selectedSmallAnnouncements.length > 0 && (
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-700">
                      Selected Small Announcements ({selectedSmallAnnouncements.length}):
                    </h4>
                    <div className="space-y-4 max-h-48 overflow-y-auto">
                      {selectedSmallAnnouncements.map((announcement, index) => (
                        <div
                          key={`${announcement.id}-${index}`}
                          className="space-y-2 pb-3 border-b border-gray-200 last:border-b-0"
                        >
                          <h5 className="font-medium text-gray-800">
                            {announcement.title}
                          </h5>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {announcement.content}
                          </p>
                          <div className="flex gap-4 text-xs text-gray-500">
                            <span>Target: {announcement.target_user}</span>
                            <span>
                              Location: {announcement.target_location}
                            </span>
                          </div>
                          {announcement.date_schedule_from && (
                            <div className="text-xs text-gray-500">
                              Schedule: {announcement.date_schedule_from}
                              {announcement.date_schedule_to &&
                                announcement.date_schedule_to !==
                                  announcement.date_schedule_from &&
                                ` to ${announcement.date_schedule_to}`}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

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
          >
            {loading ? 'Creating...' : 'Create Display'}
          </Button>
        </div>
      </form>
    </div>
  );
}
