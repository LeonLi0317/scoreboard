// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/index.css',
                '/script/index.js',
                '/image/favicon.ico',
                '/image/favicon.ico'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
