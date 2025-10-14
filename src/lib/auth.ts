'use client';

import {
  signIn,
  signUp,
  confirmSignUp,
  getCurrentUser,
  signOut,
  resetPassword,
  confirmResetPassword,
  resendSignUpCode,
  signInWithRedirect,
} from '@aws-amplify/auth';

export async function signInWithEmail(email: string, password: string) {
  try {
    return await signIn({ username: email, password });
  } catch (error: any) {
    console.log('error signIn : ', error);
    // Add specific error handling for network issues
    if (error.name === 'NetworkError' || error.code === 'NetworkError') {
      throw new Error(
        'Network connection failed. Please check your internet connection and try again.'
      );
    }
    if (error.name === 'TimeoutError') {
      throw new Error('Request timed out. Please try again.');
    }
    // Re-throw original error for other cases
    throw error;
  }
}

export async function signUpWithEmail(
  email: string,
  password: string,
  name?: string
) {
  return await signUp({
    username: email,
    password,
    options: {
      userAttributes: name ? { email, name } : { email },
      // autoSignIn: true, // enable if you want automatic sign-in post confirmation when configured
    },
  });
}

export async function confirmSignUpCode(email: string, code: string) {
  return await confirmSignUp({ username: email, confirmationCode: code });
}

export async function resendConfirmationCode(email: string) {
  return await resendSignUpCode({ username: email });
}

export async function getCurrentUserSafe() {
  try {
    return await getCurrentUser();
  } catch {
    return null;
  }
}

export async function signOutCurrent() {
  try {
    // For federated users (Google/Facebook), we need to use global signout
    await signOut({ global: true });
  } catch (error) {
    console.log('Signout error:', error);
    // Force redirect to login even if signout fails
    window.location.href = '/auth/login?reason=signed-out';
  }
}

export async function signOutGlobal() {
  try {
    await signOut({ global: true });
  } catch (error) {
    console.log('Global signout error:', error);
    // Force redirect to login even if signout fails
    window.location.href = '/auth/login?reason=signed-out';
  }
}

export async function requestPasswordReset(email: string) {
  return await resetPassword({ username: email });
}

export async function confirmPasswordReset(
  email: string,
  code: string,
  newPassword: string
) {
  return await confirmResetPassword({
    username: email,
    confirmationCode: code,
    newPassword,
  });
}

// Social Authentication Functions
export async function signInWithGoogle() {
  try {
    return await signInWithRedirect({ provider: 'Google' });
  } catch (error: any) {
    if (error.name === 'NetworkError' || error.code === 'NetworkError') {
      throw new Error(
        'Network connection failed. Please check your internet connection and try again.'
      );
    }
    if (error.name === 'TimeoutError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw error;
  }
}

export async function signInWithFacebook() {
  try {
    return await signInWithRedirect({ provider: 'Facebook' });
  } catch (error: any) {
    if (error.name === 'NetworkError' || error.code === 'NetworkError') {
      throw new Error(
        'Network connection failed. Please check your internet connection and try again.'
      );
    }
    if (error.name === 'TimeoutError') {
      throw new Error('Request timed out. Please try again.');
    }
    throw error;
  }
}
