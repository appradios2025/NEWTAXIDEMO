
const CACHE_NAME = 'michael-taxi-llc-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  './script.js',
  './assets/michaellogo.webp',
  './taximichael.webp',
  './iconologo.webp', // usa WEBP
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// INSTALACIÓN
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error('❌ Error al guardar en caché:', err))
  );
});

// ACTIVACIÓN
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// FETCH
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});