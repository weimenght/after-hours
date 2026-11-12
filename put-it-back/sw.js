/* Put It Back: works offline once opened. Keeps only what this app needs to draw itself (its own folder, the kit, the fonts),
   always asks the network first and falls back to the copy it kept. Never touches anything off the site; sends nothing. */
var V = "pb-1";
var OWN = /^\/(put-it-back|fbkit|fonts)\//;
self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(["./", "./words.js", "./manifest.webmanifest", "./icon.svg", "./icon-192.png"].map(function (u) { return new Request(u, { cache: "reload" }); })); }).catch(function () {}));
});
self.addEventListener("activate", function (e) {
  /* old copies go, and a page still open from an older version is reloaded once; a tidy in progress is kept on the device */
  e.waitUntil(caches.keys().then(function (ks) {
    var old = ks.filter(function (k) { return k.indexOf("pb-") === 0 && k !== V; });
    return Promise.all(old.map(function (k) { return caches.delete(k); })).then(function () { return self.clients.claim(); }).then(function () {
      if (!old.length) return;
      return self.clients.matchAll({ type: "window" }).then(function (cs) { cs.forEach(function (c) { if (c.navigate) c.navigate(c.url).catch(function () {}); }); });
    });
  }));
});
self.addEventListener("fetch", function (e) {
  var r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin || !OWN.test(u.pathname) || /\/sw\.js$/.test(u.pathname)) return;
  e.respondWith(fetch(r).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(V).then(function (c) { c.put(r, copy); }); }
    return res;
  }).catch(function () { return caches.match(r, { ignoreSearch: true }).then(function (m) { return m || (r.mode === "navigate" ? caches.match("./") : Response.error()); }); }));
});
