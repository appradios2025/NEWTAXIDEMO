const CACHE_NAME = 'michael-taxi-llc-cache-v1';
const urlsToCache = [
  '.',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './assets/logo.png',
  './assets/taxi.svg',
  './assets/whatsapp.svg',
  './assets/facebook.svg',
  './assets/instagram.svg',
  './assets/tiktok.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
