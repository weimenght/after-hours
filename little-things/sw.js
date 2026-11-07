/* Little Things' and Paw Reading's reminders live only on the after-hours phone now (the owner, Nov 7: no notification through
   the browser). A worker someone registered earlier takes its push subscription down and unregisters itself; nothing else. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(self.registration.pushManager.getSubscription().then(function (s) { return s && s.unsubscribe(); }).catch(function () {})
    .then(function () { return self.registration.unregister(); }));
});
