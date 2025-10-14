'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import '@/lib/amplify';
import Link from 'next/link';

export function ForgotPassForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const { router } = useProgress();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [deliveryMedium, setDeliveryMedium] = useState<string>('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const output = await resetPassword({ username: email });
      const { nextStep } = output;

      switch (nextStep.resetPasswordStep) {
        case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
          const codeDeliveryDetails = nextStep.codeDeliveryDetails;
          setDeliveryMedium(codeDeliveryDetails.deliveryMedium || 'email');
          setStep('code');
          break;
        case 'DONE':
          router.push('/auth/login');
          break;
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to send reset code');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await confirmResetPassword({
        username: email,
        confirmationCode: code,
        newPassword: newPassword,
      });

      // Redirect to login with success message
      router.push('/auth/login?message=Password reset successful');
    } catch (err: any) {
      setError(err?.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={step === 'email' ? handleEmailSubmit : handleCodeSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {step === 'email' ? 'Forgot Password?' : 'Reset Password'}
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          {step === 'email'
            ? 'Enter your email below and we will send a message to reset your password'
            : `Enter the code sent to your ${deliveryMedium} and your new password`}
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div className="grid gap-6">
        {step === 'email' ? (
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Code'}
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
            <div className="grid gap-3">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setStep('email')}
            >
              Back to Email
            </Button>
          </>
        )}
      </div>
      <div className="text-center text-sm">
        Remember your password?{' '}
        <Link href="/auth/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
