'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MapPin, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import { type Announcement } from '../../../components/dataTable';

interface MainContentProps {
  announcement: Announcement;
  formatDate: (dateString: string | null) => string;
  formatDateTime: (dateString: string) => string;
  getTargetUserLabel: (target: string) => string;
  getLocationLabel: (location: string) => string;
}

export default function MainContent({
  announcement,
  formatDate,
  formatDateTime,
  getTargetUserLabel,
  getLocationLabel,
}: MainContentProps) {
  return (
    <div className="space-y-6">
      {/* Main Content Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold">
                {announcement.title}
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary" className="capitalize">
                  <Clock className="w-3 h-3 mr-1" />
                  {`Created : ${formatDateTime(announcement.created_at)}`}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-foreground leading-relaxed">
              {announcement.content}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Scheduled From - To:
                </span>
                <span className="font-medium">
                  {formatDate(announcement.date_schedule_from)} to{' '}
                  {formatDate(announcement.date_schedule_to)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Target Audience:</span>
                <span className="font-medium">
                  {getTargetUserLabel(announcement.target_user)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">
                  {getLocationLabel(announcement.target_location)}
                </span>
              </div>
            </div>
          </div>

          {/* Media Grid */}
          {(announcement.image || announcement.video) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image */}
              {announcement.image && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Image</h3>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Video */}
              {announcement.video && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Video</h3>
                  <div className="relative w-full">
                    <video controls className="w-full h-64 rounded-lg">
                      <source src={announcement.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
