self.addEventListener('install', event => { event.waitUntil(caches.open('workmeout-v1').then(cache => cache.addAll(['/','/client.html','/styles.css','/manifest.json']))); });self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });