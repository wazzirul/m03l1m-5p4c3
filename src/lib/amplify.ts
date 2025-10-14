'use client';

import { Amplify } from 'aws-amplify';
import type { ResourcesConfig } from 'aws-amplify';

// Check if we're in localhost or production
const isLocalhost = Boolean(
  typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  )
);

// Set redirect URLs based on environment
const getRedirectSignIn = () => {
  if (typeof window === 'undefined') {
    return 'http://localhost:3000/'; // SSR fallback
  }
  
  if (isLocalhost) {
    return 'http://localhost:3000/';
  } else {
    return 'https://admin.sandbox.goodbricks.com/';
  }
};

const getRedirectSignOut = () => {
  if (typeof window === 'undefined') {
    return 'http://localhost:3000/auth/login'; // SSR fallback
  }
  
  if (isLocalhost) {
    return 'http://localhost:3000/auth/login';
  } else {
    return 'https://admin.sandbox.goodbricks.com/auth/login';
  }
};

const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
      loginWith: {
        oauth: {
          domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
          scopes: ['openid', 'email', 'profile', 'aws.cognito.signin.user.admin'],
          redirectSignIn: [getRedirectSignIn()],
          redirectSignOut: [getRedirectSignOut()],
          responseType: 'code',
          providers: ['Google', 'Facebook'],
        },
      },
    },
  },
};

Amplify.configure(amplifyConfig, { ssr: true });

// no exports needed; importing this file initializes Amplify on the client
export {};
