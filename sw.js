const CACHE_NAME = 'kanchan-nagar-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/YFyWCMFG/1771334338777.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
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
