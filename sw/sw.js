var cacheName = 'restaurant-v1';
var cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  // './data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  // './sw/app.js'
];

self.addEventListener("install", function(e) {
  console.log("[ServicerWorker] Installed")

  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  )
})

self.addEventListener("activate", function(e) {
  console.log("[ServicerWorker] Activated")
})

self.addEventListener("fetch", function(e) {
  console.log("[ServicerWorker] Fetching, e.request.url")
});
