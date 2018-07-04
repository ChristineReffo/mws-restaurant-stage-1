
// Service worker and caching installation

self.addEventListener("install", function(event) {

  console.log("[ServicerWorker] Installed");

  event.waitUntil(
    caches.open('restaurant-v1').then(function(cache) {
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll([
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
        '/img/10.jpg'
      ]);
    })
  );
});

self.addEventListener("activate", function(event) {
    console.log("[ServicerWorker] Activated")
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
