const CACHE_NAME = 'gth-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/manifest.json',
  '/main-visual.png'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// ネットワーク優先、だめならキャッシュを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
