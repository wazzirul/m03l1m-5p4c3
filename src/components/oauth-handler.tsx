'use client';

// CRITICAL: This import enables the OAuth listener for multi-page applications
// It must be imported on the client side to complete social sign-in after redirect
// See: https://docs.amplify.aws/gen1/react/build-a-backend/auth/add-social-provider/#required-for-multi-page-applications-complete-social-sign-in-after-redirect
import 'aws-amplify/auth/enable-oauth-listener';

import { useSearchParams } from 'next/navigation';

export default function OAuthHandler() {
  const searchParams = useSearchParams();
  
  console.log(
    'OAuth handler: Processing OAuth callback with code:',
    searchParams.get('code'),
    '- OAuth listener is enabled'
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground mb-4">
          Completing Google sign in...
        </p>
        <p className="text-sm text-muted-foreground">
          Please wait while we redirect you to your dashboard...
        </p>
      </div>
    </div>
  );
}
