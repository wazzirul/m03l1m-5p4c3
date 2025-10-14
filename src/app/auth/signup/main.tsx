'use client';
import { GalleryVerticalEnd, Moon, Sun } from 'lucide-react';
import { RegisterForm } from '@/components/register-form';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import LoginImage from '@/assets/images/login-images.webp';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';

export default function SignupPage() {
  const { theme, toggleMode } = useTheme();

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-background">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-background">
        <div className="flex justify-between items-center">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              <div className="flex size-6 items-center justify-center rounded-md">
                <Logo className="w-6 h-6 invert dark:invert-0" />
              </div>
              Muslim Space
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMode}
            className="h-9 w-9"
          >
            {theme.mode === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={LoginImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7] dark:grayscale"
        />
      </div>
    </div>
  );
}
