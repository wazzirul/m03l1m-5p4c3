import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginImage from '@/assets/images/login-images.webp';
import Illustration404 from '@/assets/images/404-illustration.webp';

export default function AccessDenied() {
  const router = useRouter();

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md">
              <svg
                width="133"
                height="133"
                viewBox="0 0 133 133"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="invert dark:invert-0"
              >
                <path
                  d="M51.7333 2.13333C26 8.26667 6.53334 29.0667 1.20001 55.7333C-1.19999 67.4667 1.06667 82.6667 7.33334 95.7333C19.3333 121.2 48.1333 136.533 75.7333 132.267C105.467 127.6 127.6 105.467 132.267 75.7333C139.2 30.6667 96.1333 -8.66667 51.7333 2.13333ZM72.2667 37.3333C78.1333 39.0667 84.6667 44.2667 87.3333 49.4667C89.7333 53.8667 90 65.6 87.8667 69.7333C81.4667 82 66.8 86.6667 55.0667 80.1333C34.5333 68.5333 42 38.5333 66 36.1333C66.8 36.1333 69.6 36.6667 72.2667 37.3333ZM86.6667 96V101.333H66H45.3333V96V90.6667H66H86.6667V96Z"
                  fill="white"
                />
                <path
                  d="M57.2 50.5333C54.1334 53.6 53.3334 55.6 53.3334 60C53.3334 67.0666 58.9334 73.3333 65.3334 73.3333C76.6667 73.3333 83.0667 63.2 78 53.3333C73.8667 45.4666 63.7334 44.1333 57.2 50.5333Z"
                  fill="white"
                />
              </svg>
            </div>
            Muslim Space
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md space-y-4 text-center md:text-center">
            <div className="relative">
              <Image
                src={Illustration404}
                alt="Access Denied Illustration"
                className="w-full h-full object-cover max-w-[400px] max-h-[400px] rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                <div className="bg-red-500 text-white p-4 rounded-full">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m0 0v2m0-2h2m-2 0H10m9-7a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl text-red-600">
              403 - Access Denied
            </h1>
            <p className="text-muted-foreground max-w-[350px] mx-auto">
              You don't have permission to access this page. Please log in or
              contact an administrator if you believe this is an error.
            </p>
            <div className="pt-2 space-y-2">
              <div>
                <Link
                  href="/auth/login"
                  className="inline-block text-white hover:text-slate-500 px-6 py-2 rounded-md font-medium transition-all duration-200 ease-out mr-3"
                >
                  Login
                </Link>
                <button
                  onClick={() => router.back()}
                  className="inline-block underline underline-offset-4 hover:text-slate-500 font-medium transition-all duration-200 ease-out"
                >
                  Go back
                </button>
              </div>
              <div>
                <Link
                  href="/"
                  className="underline underline-offset-4 hover:text-slate-500 font-medium transition-all duration-200 ease-out"
                >
                  Go to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted relative hidden lg:block">
        <Image
          src={LoginImage}
          alt="Illustration"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7] dark:grayscale"
          priority
        />
      </div>
    </div>
  );
}
