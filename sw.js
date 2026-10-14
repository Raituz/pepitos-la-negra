// Service Worker for Pepitos La Negra PWA
const CACHE_NAME = 'pepitos-la-negra-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/logo-opt.jpg',
  './assets/pepito-opt.jpg',
  './assets/hamburguesa-opt.jpg',
  './assets/marquesa-opt.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Network first with cache fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
