'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  UploadIcon,
  TrashIcon,
  ImageIcon,
  VideoIcon,
  FileIcon,
  PencilSimpleIcon,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface UploadedAsset {
  id: string;
  file: File;
  name: string;
  type: 'image' | 'video';
  preview: string;
  size: string;
  dimensions?: string;
  duration?: string;
}

export function AssetUploadForm() {
  const router = useRouter();
  const [uploadedAssets, setUploadedAssets] = useState<UploadedAsset[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [editingAsset, setEditingAsset] = useState<string | null>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const generateId = () => Math.random().toString(36).substring(2, 15);

  const getImageDimensions = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.onload = () => {
        resolve(`${img.width} x ${img.height}`);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const getVideoDuration = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.onloadedmetadata = () => {
        const duration = video.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        resolve(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      };
      video.src = URL.createObjectURL(file);
    });
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newAssets: UploadedAsset[] = [];

    for (const file of acceptedFiles) {
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');

      if (!isImage && !isVideo) continue;

      const id = generateId();
      const preview = URL.createObjectURL(file);
      const size = formatFileSize(file.size);
      const name = file.name.replace(/\.[^/.]+$/, ''); // Remove extension

      let dimensions: string | undefined;
      let duration: string | undefined;

      if (isImage) {
        dimensions = await getImageDimensions(file);
      } else if (isVideo) {
        duration = await getVideoDuration(file);
        dimensions = '1280 x 720'; // Default for videos, could be detected
      }

      newAssets.push({
        id,
        file,
        name,
        type: isImage ? 'image' : 'video',
        preview,
        size,
        dimensions,
        duration,
      });
    }

    setUploadedAssets((prev) => [...prev, ...newAssets]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'video/*': ['.mp4', '.mov', '.avi', '.mkv', '.webm'],
    },
    multiple: true,
  });

  const removeAsset = (id: string) => {
    setUploadedAssets((prev) => {
      const asset = prev.find((a) => a.id === id);
      if (asset) {
        URL.revokeObjectURL(asset.preview);
      }
      return prev.filter((a) => a.id !== id);
    });
  };

  const updateAssetName = (id: string, newName: string) => {
    setUploadedAssets((prev) =>
      prev.map((asset) =>
        asset.id === id ? { ...asset, name: newName } : asset
      )
    );
    setEditingAsset(null);
  };

  const handleSubmit = async () => {
    if (uploadedAssets.length === 0) return;

    setIsUploading(true);

    try {
      // TODO: Implement actual upload logic here
      // This would typically involve uploading files to your storage service
      // and saving asset metadata to your database

      console.log('Uploading assets:', uploadedAssets);

      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clean up preview URLs
      uploadedAssets.forEach((asset) => {
        URL.revokeObjectURL(asset.preview);
      });

      // Redirect back to assets list
      router.push('/display-management/assets');
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto space-y-6">
      {/* Dropzone */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={cn(
              'border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-colors',
              isDragActive && 'border-gray-800 bg-gray-50',
              'hover:border-gray-400 hover:bg-gray-50'
            )}
          >
            <input {...getInputProps()} />
            <UploadIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            {isDragActive ? (
              <p className="text-lg text-blue-600">Drop the files here...</p>
            ) : (
              <div>
                <p className="text-lg text-gray-600 mb-2">
                  Drag & drop images or videos here, or click to select files
                </p>
                <p className="text-sm text-gray-500">
                  Supports: JPEG, PNG, GIF, WebP, MP4, MOV, AVI, MKV, WebM
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Assets */}
      {uploadedAssets.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Assets ({uploadedAssets.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {uploadedAssets.map((asset) => (
              <div
                key={asset.id}
                className="flex items-start gap-4 p-4 border rounded-lg"
              >
                {/* Preview */}
                <div className="relative h-16 w-16 rounded border flex-shrink-0">
                  {asset.type === 'image' ? (
                    <Image
                      src={asset.preview}
                      alt={asset.name}
                      fill
                      className="object-cover rounded"
                      sizes="64px"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-100 rounded flex items-center justify-center">
                      <VideoIcon className="h-6 w-6 text-gray-500" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={asset.type === 'image' ? 'default' : 'secondary'}
                    >
                      {asset.type === 'image' ? (
                        <ImageIcon className="h-3 w-3 mr-1" />
                      ) : (
                        <VideoIcon className="h-3 w-3 mr-1" />
                      )}
                      {asset.type}
                    </Badge>
                    <span className="text-sm text-gray-500">{asset.size}</span>
                    {asset.dimensions && (
                      <span className="text-sm text-gray-500">
                        {asset.dimensions}
                      </span>
                    )}
                    {asset.duration && (
                      <span className="text-sm text-gray-500">
                        {asset.duration}
                      </span>
                    )}
                  </div>

                  {/* Editable Name */}
                  {editingAsset === asset.id ? (
                    <div className="flex items-center gap-2">
                      <Input
                        defaultValue={asset.name}
                        className="flex-1"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            updateAssetName(asset.id, e.currentTarget.value);
                          } else if (e.key === 'Escape') {
                            setEditingAsset(null);
                          }
                        }}
                        onBlur={(e) =>
                          updateAssetName(asset.id, e.target.value)
                        }
                        autoFocus
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingAsset(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{asset.name}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setEditingAsset(asset.id)}
                      >
                        <PencilSimpleIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <div className="text-sm text-gray-500">
                    Original: {asset.file.name}
                  </div>
                </div>

                {/* Actions */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeAsset(asset.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}

            {/* Upload Actions */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-gray-500">
                {uploadedAssets.length} asset
                {uploadedAssets.length !== 1 ? 's' : ''} ready to upload
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => router.back()}
                  disabled={isUploading}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isUploading || uploadedAssets.length === 0}
                >
                  {isUploading ? 'Uploading...' : 'Upload Assets'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
