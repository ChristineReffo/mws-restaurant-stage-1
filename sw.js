// Service worker and caching installation

var cacheName = "restaurant-cache-v1"
var UrlsToCache = [
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
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(UrlsToCache);
    })
  );
});



self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
//
// self.addEventListener('activate', function(event) {
//
//   var cacheWhitelist = ['restaurant-cache-v1'];
//
//   event.waitUntil(
//     caches.keys().then(function(cacheName) {
//       return Promise.all(
//         cacheName.map(function(cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
