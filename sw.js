let currentCache = "v1";
let cacheFiles = [
  "index.html",
  "restaurant.html",
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
})
self.addEventListener("activate", function(e){
  console.log("SW is activated");
})
self.addEventListener("fetch", function(e){
  console.log("SW is fetching", e.request.url);
})
