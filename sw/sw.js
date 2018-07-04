var cacheName = 'restaurant-v1';
var cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/sw/app.js',
  '/favicon.ico',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js',
  'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

self.addEventListener("install", function(event) {
  console.log("[ServicerWorker] Installed")

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    console.log("[ServicerWorker] Activated")
  )
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
