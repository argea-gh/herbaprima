const CACHE_NAME = 'herbaprima-v1'; // PENTING: Ubah versi (v1, v2) saat update website
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/style.css',
  './assets/js/main.js',
  './assets/js/products.js',
  './assets/images/icons/logoherba_mob.png',
  './assets/images/icons/logoherba_desk.png',
  './assets/images/icons/herbaprima_ss_desk.png',
  './assets/images/icons/herbaprima_ss_mob.png'
];

// Install Event
self.addEventListener('install', (event) => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Caching assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch((err) => {
      console.log('SW: Cache failed:', err);
    })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('SW: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('SW: Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }).catch((err) => {
      console.log('SW: Fetch failed:', err);
    })
  );
});
