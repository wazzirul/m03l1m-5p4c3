'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import '@/lib/amplify';
import {
  signInWithEmail,
  confirmSignUpCode,
  resendConfirmationCode,
  signInWithGoogle,
  signInWithFacebook,
} from '@/lib/auth';
import { getCurrentUser, fetchUserAttributes } from '@aws-amplify/auth';
import { useProgress } from '@/hooks/use-progress';

import { GoogleLogoIcon, FacebookLogoIcon } from '@phosphor-icons/react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { navigateWithProgress } = useProgress();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [needsConfirm, setNeedsConfirm] = useState(false);
  const [code, setCode] = useState('');
  const [resendCooldown, setResendCooldown] = useState<number>(0);
  const [resendLoading, setResendLoading] = useState(false);

  // Prefetch dashboard on component mount for faster navigation
  useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await signInWithEmail(email, password);
      console.log('signIn result:', result);
      if (result?.isSignedIn) {
        // Log current user and attributes before redirecting
        try {
          const user = await getCurrentUser();
          console.log('Signed-in user:', user);

          // Wait a moment for auth state to sync
          await new Promise((resolve) => setTimeout(resolve, 500));

          try {
            const attrs = await fetchUserAttributes();
            console.log('User attributes:', attrs);

            // Check for redirect parameter first
            // const redirectTo = searchParams.get('redirect');
            // if (redirectTo && redirectTo !== '/auth/login') {
            //   console.log('Redirecting to requested page:', redirectTo);
            //   navigateWithProgress(redirectTo);
            // } else if (!attrs.name || !attrs.phone_number) {
            //   console.log('New user, redirecting to onboarding');
            //   router.prefetch('/auth/onboarding');
            //   navigateWithProgress('/auth/onboarding');
            // } else {
            //   console.log('Existing user, redirecting to dashboard');
            router.prefetch('/dashboard');
            navigateWithProgress('/dashboard');
            // }
          } catch (attrErr) {
            console.warn(
              'Failed to fetch user attributes, redirecting to onboarding',
              attrErr
            );
            router.prefetch('/auth/onboarding');
            navigateWithProgress('/auth/onboarding');
          }
        } catch (userErr) {
          console.warn('Failed to get current user after sign-in', userErr);
          // Still try to redirect to dashboard as fallback
          router.prefetch('/dashboard');
          navigateWithProgress('/dashboard');
        }
      } else {
        console.warn(
          'Not signed in after signIn call. Next step may be required.',
          result?.nextStep
        );
        if (result?.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
          // Switch to confirmation UI and send/resend the code
          setNeedsConfirm(true);
          setError(
            'Please verify your email to continue. We have sent a new verification code.'
          );
          // Prefetch onboarding page for faster navigation after verification
          router.prefetch('/auth/onboarding');
          try {
            await resendConfirmationCode(email);
            // start a 5-minute cooldown similar to register form
            setResendCooldown(300);
            const interval = setInterval(() => {
              setResendCooldown((prev) => {
                if (prev <= 1) {
                  clearInterval(interval);
                  return 0;
                }
                return prev - 1;
              });
            }, 1000);
          } catch (reErr: any) {
            console.warn('Failed to resend verification code', reErr);
          }
        } else {
          setError(
            'Additional verification required. Please follow the next step.'
          );
        }
      }
    } catch (err: any) {
      const message =
        err?.name === 'UserNotConfirmedException'
          ? 'Please confirm your email before logging in.'
          : err?.message || 'Login failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await confirmSignUpCode(email, code);
      // after confirmation, sign in and go to dashboard
      const result = await signInWithEmail(email, password);
      if (result?.isSignedIn) {
        // Redirect to onboarding after successful verification
        router.prefetch('/auth/onboarding');
        navigateWithProgress('/auth/onboarding');
      } else {
        setError('Please try logging in again after verifying.');
      }
    } catch (err: any) {
      setError(err?.message || 'Confirmation failed');
    } finally {
      setLoading(false);
    }
  };

  const onResend = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (resendCooldown > 0 || resendLoading) return;
    setError('');
    setResendLoading(true);
    try {
      await resendConfirmationCode(email);
      setResendCooldown(300);
      const interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err: any) {
      setError(err?.message || 'Failed to resend code');
    } finally {
      setResendLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      await signInWithGoogle();
    } catch (error: any) {
      setError(error?.message || 'Google sign in failed');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      setError('');
      await signInWithFacebook();
    } catch (error: any) {
      setError(error?.message || 'Facebook sign in failed');
    }
  };

  return (
    <form
      onSubmit={needsConfirm ? handleConfirm : handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {needsConfirm
            ? 'Enter the code sent to your email to confirm your account.'
            : 'Log in with your email to continue.'}
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div className="grid gap-6">
        {!needsConfirm ? (
          <>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </>
        ) : (
          <>
            <div className="grid gap-3">
              <Label htmlFor="code">Confirmation Code</Label>
              <Input
                id="code"
                type="text"
                placeholder="Enter the code from your email"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify & Continue'}
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Didn't receive a code?{' '}
              <a
                href="#"
                onClick={onResend}
                className={`underline underline-offset-4 ${
                  resendCooldown > 0 || resendLoading
                    ? 'pointer-events-none opacity-50'
                    : ''
                }`}
              >
                {resendCooldown > 0
                  ? `Resend available in ${Math.floor(
                      resendCooldown / 60
                    )}:${String(resendCooldown % 60).padStart(2, '0')}`
                  : 'Resend code'}
              </a>
            </p>
          </>
        )}
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={handleGoogleSignIn}
            type="button"
          >
            <GoogleLogoIcon className="w-5 h-5" />
            Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={handleFacebookSignIn}
            type="button"
          >
            <FacebookLogoIcon className="w-5 h-5" />
            Login with Facebook
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/auth/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
