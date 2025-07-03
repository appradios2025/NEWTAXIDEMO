
const CACHE_NAME = 'michael-taxi-llc-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  './script.js',
  './assets/michaellogo.png',
  './assets/taximichael.png',
  './iconologo.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

// INSTALACIÓN: guarda en caché archivos necesarios
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error('Error al guardar en caché:', err))
  );
});

// ACTIVACIÓN: limpia cachés viejos si los hay
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

// FETCH: responde desde caché si está disponible, si no, lo busca online
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});