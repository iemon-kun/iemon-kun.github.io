self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
});

// 必須記述
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});