/* The town's skin for places that were drawn in their own style (the owner, Nov 14: every place in Nearby follows the Nearby
   design, scenes included). Loaded first in the head of Mended, Borrowed Pages, the station and Lie Back.
   1. Pixel scenes: canvases render at about a third of their size and are scaled up without smoothing (the page reads a low
      devicePixelRatio; townskin.css sets image-rendering: pixelated), so painted scenes come out as pixel art.
   2. Marks <html> with nb-skin so townskin.css can put every control, panel and label in the town's wood, borders and type.
   ?skin=0 turns it off for comparison. The Station app (app=1) keeps its own frame for now: only the town's station is skinned. */
(function () {
  if (/[?&]skin=0\b/.test(location.search) || /[?&]app=1\b/.test(location.search)) return;   /* the standalone apps framing a town page keep their own look */
  var PX = window.NB_PX || 3;   /* one scene pixel = PX screen pixels */
  try { Object.defineProperty(window, "devicePixelRatio", { configurable: true, get: function () { return 1 / PX; } }); } catch (e) {}
  document.documentElement.classList.add("nb-skin");
  /* a place names its scene objects (books, slots, cats…) so they keep their own drawing, and round things that stay round:
     <html data-nb-plain=".bk,.slot" data-nb-round=".porthole"> */
  function mark() {
    var de = document.documentElement, pl = ".fbwalk,.fbwalk *,.fbb,.fbg-glint,.fbg-glint *,.fbhint" + (de.getAttribute("data-nb-plain") ? "," + de.getAttribute("data-nb-plain") : ""), rd = de.getAttribute("data-nb-round");
    try { if (pl) document.querySelectorAll(pl).forEach(function (e) { if (!e.classList.contains("nb-plain")) e.classList.add("nb-plain"); }); } catch (e) {}
    try { if (rd) document.querySelectorAll(rd).forEach(function (e) { if (!e.classList.contains("nb-keep-round")) e.classList.add("nb-keep-round"); }); } catch (e) {}
  }
  var queued = false;
  function soon() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; mark(); }); }
  /* <html data-nb-poster>: the canvases' soft shading steps into a few flat bands, like painted pixel art */
  function poster() {
    if (!document.documentElement.hasAttribute("data-nb-poster") || document.getElementById("nbPoster")) return;
    var v = Array.apply(null, Array(13)).map(function (_, i) { return (i / 12).toFixed(3); }).join(" "), d = document.createElement("div");
    d.innerHTML = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="nbPoster" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="discrete" tableValues="' + v + '"/><feFuncG type="discrete" tableValues="' + v + '"/><feFuncB type="discrete" tableValues="' + v + '"/></feComponentTransfer></filter></svg>';
    document.body.appendChild(d.firstChild);
    var st = document.createElement("style"); st.textContent = "html.nb-skin canvas{filter:url(#nbPoster)}"; document.head.appendChild(st);
  }
  document.addEventListener("DOMContentLoaded", function () { mark(); poster(); new MutationObserver(soon).observe(document.body, { childList: true, subtree: true }); });
  /* no blur in pixel scenes: canvas filters and shadow blur are dropped (soft clouds come out as hard-edged shapes) */
  try {
    var P2 = CanvasRenderingContext2D.prototype, fd = Object.getOwnPropertyDescriptor(P2, "filter"), sd = Object.getOwnPropertyDescriptor(P2, "shadowBlur");
    if (fd && fd.set) Object.defineProperty(P2, "filter", { configurable: true, get: fd.get, set: function (v) { fd.set.call(this, /blur\(/.test(String(v)) ? String(v).replace(/blur\([^)]*\)/g, "").trim() || "none" : v); } });
    if (sd && sd.set) Object.defineProperty(P2, "shadowBlur", { configurable: true, get: sd.get, set: function () { sd.set.call(this, 0); } });
  } catch (e) {}
  var gc = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (t, o) {
    var c = gc.call(this, t, o);
    if (c && t === "2d") { try { c.imageSmoothingEnabled = false; } catch (e) {} }
    return c;
  };
})();
