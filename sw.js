// As a guideline for this file I refered to Jake Archibald's
// Simple Service Worker Tutorial:
// https://github.com/jakearchibald/simple-serviceworker-tutorial/blob/gh-pages/sw.js

let currentCache = "v1";
let cacheFiles = [
  "index.html",
  "restaurant.html",
  "/",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/dbhelper.js",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg"
];

self.addEventListener("install", function(e){
  console.log("SW is installed");
  e.waitUntil(caches.open(currentCache)
    .then(function(cache){
      console.log("Serviceworker is adding all cacheFiles");
      return cache.addAll(cacheFiles);
    })
    .catch(function(err){
      console.log("SW couldn't install: ", err);
    })
  );
});

self.addEventListener("fetch", function(e){
  console.log("SW is fetching");
  e.respondWith(
    caches.match(e.request)
      .then(function(response){
        if (response) {
        return response;
        }
        return fetch(e.request);
      })
      .catch(function(err){
        console.log("SW couldn't fetch files:", err);
      })
  );
});
