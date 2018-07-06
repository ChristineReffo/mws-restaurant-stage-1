/* Service worker and caching installation*/

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
  '/img/10.jpg',
  '/restaurant.html?id=1',
  '/restaurant.html?id=2',
  '/restaurant.html?id=3',
  '/restaurant.html?id=4',
  '/restaurant.html?id=5',
  '/restaurant.html?id=6',
  '/restaurant.html?id=7',
  '/restaurant.html?id=8',
  '/restaurant.html?id=9',
  '/restaurant.html?id=10'
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(UrlsToCache);
      console.log("[ServiceWorker] found in cache ", event.request.url);
    })
  );
});

// self.addEventListener("fetch", function(event) {
// 	// here the you create a URL object
// 	const url = new URL(event.request.url);
//
//     event.respondWith(
// 		// here you use url.pathname
//         caches.match(url.pathname).then(function(response) {
//             return response || fetch(event.request);
//         })
//     );
// });

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
