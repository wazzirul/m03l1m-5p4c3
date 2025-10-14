'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

import InstructionOne from '@/assets/images/import/muslim-space-import-1.png';
import InstructionTwo from '@/assets/images/import/muslim-space-import-2.png';
import InstructionThree from '@/assets/images/import/muslim-space-import-3.png';
import InstructionFour from '@/assets/images/import/muslim-space-import-4.png';
import InstructionFive from '@/assets/images/import/muslim-space-import-5.png';

export default function ImportForm() {
  const [shareLink, setShareLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!shareLink.trim()) return;

    setIsLoading(true);
    // TODO: Add API call to validate and import the sheet
    console.log('Importing from:', shareLink);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Import functionality coming soon!');
    }, 2000);
  };

  const instructions = [
    {
      step: 1,
      text: 'Download / make a copy from our template',
      image: InstructionOne,
      link: 'https://docs.google.com/spreadsheets/d/1o9dngtGJbfkFGZK_M7xdlo2PtRuQknGEQU3FxpiPVbg/copy',
      linkText: 'Make a copy'
    },
    {
      step: 2,
      text: 'Edit data with your own prayer times',
      image: InstructionTwo,
    },
    {
      step: 3,
      text: 'Click Share on top right',
      image: InstructionThree,
    },
    {
      step: 4,
      text: 'Change General access to "Anyone with the link"',
      image: InstructionFour,
    },
    {
      step: 5,
      text: 'Copy link and paste it to above input text',
      image: InstructionFive,
    }
  ];

  return (
    <div className="mx-auto space-y-6">
      {/* Import Form */}
      <Card>
        <CardHeader>
          <CardTitle>Import Prayer Times</CardTitle>
          <CardDescription>
            Paste your Google Sheets share link below to import prayer times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shareLink">Google Sheets Share Link</Label>
              <Input
                id="shareLink"
                type="url"
                placeholder="https://docs.google.com/spreadsheets/d/..."
                value={shareLink}
                onChange={(e) => setShareLink(e.target.value)}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">
                Make sure your sheet is publicly accessible with "Anyone with the link" permission
              </p>
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={!shareLink.trim() || isLoading}
              style={{ backgroundColor: theme.primary }}
            >
              {isLoading ? 'Importing...' : 'Import Prayer Times'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Import</CardTitle>
          <CardDescription>
            Follow these steps to prepare your Google Sheet for import
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {instructions.map((instruction) => (
              <div key={instruction.step} className="space-y-3">
                {/* Step Header */}
                <div className="flex items-start gap-3">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-primary-foreground"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {instruction.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      {instruction.text}
                      {instruction.link && (
                        <Link 
                          href={instruction.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center gap-1 hover:underline transition-colors duration-200"
                          style={{ color: theme.primary }}
                        >
                          {instruction.linkText}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </p>
                  </div>
                </div>
                
                {/* Step Image */}
                <div className="ml-9">
                  <div className="relative overflow-hidden rounded-lg border border-border shadow-sm bg-card">
                    <Image
                      src={instruction.image}
                      alt={`Step ${instruction.step}: ${instruction.text}`}
                      className="w-full h-auto object-cover"
                      placeholder="blur"
                      quality={85}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Example Link Format */}
      <Card className="bg-muted/50">
        <CardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Example Link Format:</h4>
            <code className="block text-xs bg-card p-2 rounded border border-border text-muted-foreground break-all">
              https://docs.google.com/spreadsheets/d/1ABC123.../edit?usp=sharing
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
