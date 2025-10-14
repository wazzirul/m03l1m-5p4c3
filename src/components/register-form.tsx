'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useProgress } from '@/hooks/use-progress';
import '@/lib/amplify';
import {
  signUpWithEmail,
  confirmSignUpCode,
  resendConfirmationCode,
  signInWithEmail,
  signInWithGoogle,
  signInWithFacebook,
} from '@/lib/auth';
import Link from 'next/link';

import {
  GoogleLogoIcon,
  FacebookLogoIcon,
  Eye,
  EyeSlash,
} from '@phosphor-icons/react';

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const { router } = useProgress();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [needsConfirm, setNeedsConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendCooldown, setResendCooldown] = useState<number>(0);
  const [resendLoading, setResendLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    number: false,
    uppercase: false,
    lowercase: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password: string) => {
    const validation = {
      length: password.length >= 8,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
    setPasswordValidation(validation);
    return Object.values(validation).every(Boolean);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const onSubmitSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password does not meet all requirements');
      return;
    }
    setLoading(true);
    try {
      await signUpWithEmail(email, password, name);
      setNeedsConfirm(true);
      // start 5-minute cooldown for resend
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
      setError(err?.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  const onSubmitConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await confirmSignUpCode(email, code);
      await signInWithEmail(email, password);
      router.push('/auth/onboarding');
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
      setError(error?.message || 'Google sign up failed');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      setError('');
      await signInWithFacebook();
    } catch (error: any) {
      setError(error?.message || 'Facebook sign up failed');
    }
  };

  return (
    <form
      onSubmit={needsConfirm ? onSubmitConfirm : onSubmitSignUp}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Get started now</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {needsConfirm
            ? 'Enter the code sent to your email to confirm your account.'
            : 'Enter your details to create an account.'}
        </p>
      </div>
      <div className="grid gap-6">
        {!needsConfirm ? (
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your fullname"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="yourmail@mail.co"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeSlash className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {password && (
                <div className="text-xs space-y-1 mt-2">
                  <div className="text-muted-foreground mb-1">
                    Password requirements:
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.length
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    <span className="text-xs">
                      {passwordValidation.length ? '✓' : '✗'}
                    </span>
                    <span>At least 8 characters</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.number
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    <span className="text-xs">
                      {passwordValidation.number ? '✓' : '✗'}
                    </span>
                    <span>At least 1 number</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.uppercase
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    <span className="text-xs">
                      {passwordValidation.uppercase ? '✓' : '✗'}
                    </span>
                    <span>At least 1 uppercase letter</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.lowercase
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    <span className="text-xs">
                      {passwordValidation.lowercase ? '✓' : '✗'}
                    </span>
                    <span>At least 1 lowercase letter</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      passwordValidation.special
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    <span className="text-xs">
                      {passwordValidation.special ? '✓' : '✗'}
                    </span>
                    <span>At least 1 special character</span>
                  </div>
                </div>
              )}
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="confirm-password">Confirm Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Your confirm password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeSlash className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
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
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify Email'}
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
          </div>
        )}
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or sign up with
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
            Sign up with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={handleFacebookSignIn}
            type="button"
          >
            <FacebookLogoIcon className="w-5 h-5" />
            Sign up with Facebook
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link href="/auth/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
