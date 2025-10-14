import type { Metadata } from 'next';
import { AuthProvider } from '@/components/auth-provider';
import { ToastProvider } from '@/components/toast-provider';
import ProgressBar from '@/components/progress-bar';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { Suspense } from 'react';

import './globals.css';
import '@/assets/fonts/Inter/stylesheet.css';
import '@/assets/fonts/Outfit/stylesheet.css';
import '@/assets/fonts/Krungthep/stylesheet.css';
import '@/assets/fonts/Noto Sans Arabic/stylesheet.css';

export const metadata: Metadata = {
  title: 'Muslim Spaces',
  description: 'Connecting Communities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body
        className={`font-sans antialiased bg-background md:bg-muted min-h-screen flex flex-col items-stretch`}
      >
        <ProgressBar />
        <NuqsAdapter>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthProvider>
              <ThemeProvider>
                <NavigationProvider>
                  {children}
                  <ToastProvider />
                </NavigationProvider>
              </ThemeProvider>
            </AuthProvider>
          </Suspense>
        </NuqsAdapter>
      </body>
    </html>
  );
}
