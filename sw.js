const cacheName = 'canvas-editor-v1';
const assetsToCache = [
  '/', '/index.html', '/styles.css', '/script.js',
  '/icons/192.png', '/icons/512.png', '/manifest.json'
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
