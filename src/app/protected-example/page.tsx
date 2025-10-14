'use client';

import { useEffect, useState } from 'react';
import { useAuthGuard } from '@/lib/auth-utils';

export default function ProtectedExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  // Simulate auth check - replace with your actual auth logic
  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = () => {
      // For testing: set to false to trigger access denied
      const userLoggedIn = false; // Change this to true to test authenticated state
      const userHasPermission = false; // Change this to true to test permission state
      
      setIsAuthenticated(userLoggedIn);
      setHasPermission(userHasPermission);
    };

    checkAuth();
  }, []);

  // This will redirect to /access-denied if user is not authenticated or lacks permission
  useAuthGuard(isAuthenticated, hasPermission);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Protected Page</h1>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-semibold">Success!</p>
          <p>You have access to this protected content.</p>
        </div>
        <div className="mt-6 space-y-4">
          <p>This page is only accessible to authenticated users with proper permissions.</p>
          <p>Current auth status: {isAuthenticated ? 'Authenticated' : 'Not authenticated'}</p>
          <p>Current permission status: {hasPermission ? 'Has permission' : 'No permission'}</p>
        </div>
      </div>
    </div>
  );
}
