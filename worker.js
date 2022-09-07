self.addEventListener('install', function(event) {
  // Activate right away
  self.skipWaiting();

  // Cache your core stuff...
  event.waitUntil(caches.open(coreID).then(function(cache) {
    cache.add(new Request('/'));
    // ...
    return cache;
  }));

});