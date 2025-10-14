'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  XIcon,
  ImageIcon,
  VideoIcon,
  CalendarIcon,
  FileIcon,
  PencilIcon,
  CheckIcon,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Asset } from '../types/assetTypes';
import { formatDate, getAssetPreviewUrl } from '../utils/assetUtils';

interface AssetPreviewModalProps {
  asset: Asset | null;
  isOpen: boolean;
  onClose: () => void;
  onAssetUpdate?: (updatedAsset: Asset) => void;
}

export function AssetPreviewModal({
  asset,
  isOpen,
  onClose,
  onAssetUpdate,
}: AssetPreviewModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    if (asset) {
      setIsLoading(true);
      setEditedName(asset.name);
    }
  }, [asset]);

  if (!asset) return null;

  const previewUrl = getAssetPreviewUrl(asset.sourceUrl);
  const isImage = asset.type === 'image';
  const isVideo = asset.type === 'video';

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
    setEditedName(asset?.name || '');
  };

  const handleSaveName = () => {
    if (asset && editedName.trim() && editedName.trim() !== asset.name) {
      const updatedAsset = { ...asset, name: editedName.trim() };

      // Call the update callback if provided
      if (onAssetUpdate) {
        onAssetUpdate(updatedAsset);
      }

      // TODO: Implement actual API call to update asset name
      console.log('Updating asset name:', {
        id: asset.id,
        newName: editedName.trim(),
      });
    }

    setIsEditingName(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveName();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  // Fullscreen Image Modal
  if (isFullscreen && isImage) {
    return (
      <Dialog open={isFullscreen} onOpenChange={() => setIsFullscreen(false)}>
        <DialogContent
          className="!max-w-full w-screen h-screen p-0 border-0 bg-black/70 rounded-none"
          showCloseButton={false}
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close button overlay */}
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 h-12 w-12 p-0 hover:bg-black/70 text-white hover:text-white border-0 rounded-full cursor-pointer"
            >
              <XIcon className="h-6 w-6" />
            </Button>

            {/* Full screen image */}
            <div
              className="relative w-full h-full p-8"
              onClick={() => setIsFullscreen(false)}
            >
              <Image
                src={previewUrl}
                alt={asset.name}
                fill
                className="object-contain !w-auto !h-auto max-w-full max-h-full m-auto"
                sizes="100vw"
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-6xl w-[90vw] h-[90vh] flex flex-col p-0 overflow-hidden"
        showCloseButton={false}
      >
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant={isImage ? 'default' : 'secondary'}>
                {isImage ? (
                  <ImageIcon className="h-3 w-3 mr-1" />
                ) : (
                  <VideoIcon className="h-3 w-3 mr-1" />
                )}
                {asset.type}
              </Badge>
              <DialogTitle className="text-lg font-semibold truncate">
                {asset.name}
              </DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 cursor-pointer"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Main Content - Vertical Layout */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Large Media Preview Area - Takes most of the space */}
          <div className="flex-1 flex items-center justify-center bg-black relative min-h-0">
            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}

            {isImage ? (
              <div
                className="relative w-full h-full flex items-center justify-center p-4 cursor-pointer group"
                onClick={toggleFullscreen}
              >
                <Image
                  src={previewUrl}
                  alt={asset.name}
                  fill
                  className={cn(
                    'object-contain transition-all duration-300',
                    isLoading ? 'opacity-0' : 'opacity-100'
                  )}
                  sizes="90vw"
                  onLoad={handleImageLoad}
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="bg-black/50 text-white px-3 py-1 rounded text-sm">
                    Click to view fullscreen
                  </div>
                </div>
              </div>
            ) : isVideo ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <video
                  className={cn(
                    'max-w-full max-h-full transition-opacity duration-300 w-full',
                    isLoading ? 'opacity-0' : 'opacity-100'
                  )}
                  controls
                  preload="metadata"
                  onLoadedData={handleVideoLoad}
                >
                  <source src={previewUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-white">
                <FileIcon className="h-16 w-16 mb-4" />
                <p>Preview not available for this file type</p>
              </div>
            )}
          </div>

          {/* Asset Information Panel - Bottom */}
          <div className="border-t flex-shrink-0 max-h-80 overflow-y-auto">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Asset Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Name
                      </label>
                      {isEditingName ? (
                        <div className="mt-1 flex items-center gap-2">
                          <Input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            onKeyDown={handleKeyPress}
                            className="flex-1 text-sm"
                            autoFocus
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleSaveName}
                            className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                            title="Save changes"
                          >
                            <CheckIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleCancelEdit}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                            title="Cancel editing"
                          >
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-sm text-gray-900 break-words flex-1">
                            {asset.name}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleEditName}
                            className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            title="Edit asset name"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        ID
                      </label>
                      <p className="mt-1 text-sm text-gray-900 font-mono break-all">
                        {asset.id}
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Type
                      </label>
                      <p className="mt-1 text-sm text-gray-900 capitalize">
                        {asset.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    File Details
                  </h3>
                  <div className="space-y-3">
                    {asset.fileSize && (
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          File Size
                        </label>
                        <p className="mt-1 text-sm text-gray-900">
                          {asset.fileSize}
                        </p>
                      </div>
                    )}

                    {asset.dimensions && (
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Dimensions
                        </label>
                        <p className="mt-1 text-sm text-gray-900">
                          {asset.dimensions}
                        </p>
                      </div>
                    )}

                    {asset.duration && (
                      <div>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Duration
                        </label>
                        <p className="mt-1 text-sm text-gray-900">
                          {asset.duration}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Created | Last Updated
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Created
                      </label>
                      <div className="mt-1 flex items-center text-sm text-gray-900">
                        <CalendarIcon className="h-3 w-3 mr-1 text-gray-500" />
                        {formatDate(asset.created_at)}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Last Updated
                      </label>
                      <div className="mt-1 flex items-center text-sm text-gray-900">
                        <CalendarIcon className="h-3 w-3 mr-1 text-gray-500" />
                        {formatDate(asset.updated_at)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
