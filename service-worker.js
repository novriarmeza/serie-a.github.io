importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if(workbox){
  console.log(`Workbox berhasil dimuat`);
  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '2' },
    { url: '/nav.html', revision: '2' },
    { url: '/index.html', revision: '2' },
    { url: '/player.html', revision: '2' },
    { url: '/team.html', revision: '2' },
    { url: '/manifest.json', revision: '2' },
    { url: '/detail_schedule.html', revision: '2' },
    { url: '/src/pages/home.html', revision: '2' },
    { url: '/src/pages/favorite.html', revision: '2' },
    { url: '/src/pages/schedule.html', revision: '2' },
    { url: '/src/pages/standings.html', revision: '2' },
    { url: '/src/pages/scorers.html', revision: '2' },
    { url: '/src/css/materialize.min.css', revision: '2' },
    { url: '/src/css/style.css', revision: '2' },
    { url: '/src/css/materialicon.css', revision: '2' },
    { url: '/src/js/materialize.min.js', revision: '2' },
    { url: '/src/js/nav.js', revision: '2' },
    { url: '/src/js/api.js', revision: '2' },
    { url: '/src/js/klasemen.js', revision: '2' },
    { url: '/src/js/main.js', revision: '2' },
    { url: '/src/js/schedule.js', revision: '2' },
    { url: '/src/js/detailschedule.js', revision: '2' },
    { url: '/src/js/team.js', revision: '2' },
    { url: '/src/js/scorers.js', revision: '2' },
    { url: '/src/js/idb.js', revision: '2' },
    { url: '/src/js/database.js', revision: '2' },
    { url: '/src/js/index.js', revision: '2' },
    { url: '/src/img/like.png', revision: '2' },
    { url: '/src/img/unlike.png', revision: '2' },
    { url: '/src/img/seriea.png', revision: '2' },
    { url: '/icon.png', revision: '2' },
    { url: '/icon-192.png', revision: '2' },
  ], {
    // Ignore all URL parameters.
    ignoreURLParametersMatching: [/.*/]
  });

  workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg|ico)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images-cache',
        plugins: [
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/'),
    workbox.strategies.staleWhileRevalidate()
  )

  workbox.routing.registerRoute(
    /.*(?:googleapis|gstatic)\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'js',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/src/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'src/pages/'
    })
  );

} else{
  console.log(`Workbox gagal dimuat`);
}

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
