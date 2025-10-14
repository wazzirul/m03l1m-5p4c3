import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import type { ResourcesConfig } from 'aws-amplify';

const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
      loginWith: {
        oauth: {
          domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
          scopes: ['openid', 'email', 'profile', 'aws.cognito.signin.user.admin'],
          redirectSignIn: [
            'http://localhost:3000/',
            'https://admin.sandbox.goodbricks.com/'
          ],
          redirectSignOut: [
            'http://localhost:3000/auth/login',
            'https://admin.sandbox.goodbricks.com/auth/login'
          ],
          responseType: 'code',
          providers: ['Google', 'Facebook'],
        },
      },
    },
  },
};

export const { runWithAmplifyServerContext, createAuthRouteHandlers } =
  createServerRunner({
    config: amplifyConfig,
    runtimeOptions: {
      cookies: {
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // Extended to 30 days for better persistence
      },
    },
  });
