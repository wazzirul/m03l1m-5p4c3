// Empty service worker to prevent 404 errors
// This file prevents the browser from requesting a non-existent service worker

self.addEventListener('install', function(event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Claim clients immediately
  event.waitUntil(self.clients.claim());
});
