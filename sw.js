const CACHE_NAME = 'herbaprima-v2'; // PENTING: Ubah versi dari v1 ke v2
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './produk.html',
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

// Fetch Event (Dengan penanganan navigasi)
self.addEventListener('fetch', (event) => {
  // Hanya tangkap request GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ada di cache, return dari cache
      if (response) {
        return response;
      }
      
      // Jika tidak ada di cache, fetch dari network
      return fetch(event.request).then((networkResponse) => {
        // Clone response untuk disimpan di cache
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback jika offline dan tidak ada di cache
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
