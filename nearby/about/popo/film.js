/* Popo's story as a film (Nov 14, the owner: "rather than the web page, make it an animation").
   Eleven pixel scenes on one 240×135 canvas, Popo's words as subtitles a sentence at a time, and between the scenes a cut
   back to her table tonight, where she is telling it (the asides). The old pictures are sepia and the colour comes back
   with the years. Tap the picture for the next line; ‹‹ ❚❚ ›› and the chapter dots below; ≡ reads it as text instead.
   The words come from the page (window.POPO: D.ch, D.as, D.ui and the language); the animals and Popo tonight are the
   town's own drawings (FBWorld.drawPet / drawPopo from the shell); nothing is fetched or sent. */
(function () {
  var P = window.POPO; if (!P) return;
  var cv = document.getElementById("cv"); if (!cv) return;
  var g = cv.getContext("2d"), W = 240, H = 135; cv.width = W; cv.height = H; g.imageSmoothingEnabled = false;
  var F = null; try { F = (window.parent !== window && window.parent.FBWorld) || window.FBWorld || null; } catch (e) { F = window.FBWorld || null; }
  var STILL = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- drawing ---------- */
  function R(x, y, w, h, c) { if (w <= 0 || h <= 0) return; g.fillStyle = c; g.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); }
  function band(y0, y1, c0, c1, step) { step = step || 3; var a = hx(c0), b = hx(c1); for (var y = y0; y < y1; y += step) { var k = (y - y0) / Math.max(1, y1 - y0); R(0, y, W, step, "rgb(" + ((a[0] + (b[0] - a[0]) * k) | 0) + "," + ((a[1] + (b[1] - a[1]) * k) | 0) + "," + ((a[2] + (b[2] - a[2]) * k) | 0) + ")"); } }
  function hx(c) { var n = parseInt(c.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
  function line(x0, y0, x1, y1, c) { var n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) | 0; for (var i = 0; i <= n; i++) R(x0 + (x1 - x0) * i / (n || 1), y0 + (y1 - y0) * i / (n || 1), 1, 1, c); }
  function disc(cx, cy, r, c) { for (var y = -r; y <= r; y++) { var w = Math.round(Math.sqrt(r * r - y * y)); R(cx - w, cy + y, w * 2 + 1, 1, c); } }
  function rnd(s) { s = Math.sin(s * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }
  function ease(k) { k = Math.max(0, Math.min(1, k)); return k * k * (3 - 2 * k); }
  function seg(p, a, b) { return Math.max(0, Math.min(1, (p - a) / (b - a))); }
  var FONT = { A: "010101111101101", B: "110101110101110", C: "011100100100011", D: "110101101101110", E: "111100110100111", F: "111100110100100", G: "011100101101011", H: "101101111101101", I: "111010010010111", J: "001001001101010", K: "101101110101101", L: "100100100100111", M: "101111111101101", N: "110101101101101", O: "010101101101010", P: "110101110100100", Q: "010101101110011", R: "110101110101101", S: "011100010001110", T: "111010010010010", U: "101101101101111", V: "101101101101010", W: "101101111111101", X: "101101010101101", Y: "101101010010010", Z: "111001010100111",
    "0": "111101101101111", "1": "010110010010111", "2": "110001010100111", "3": "110001010001110", "4": "101101111001001", "5": "111100110001110", "6": "011100111101111", "7": "111001010010010", "8": "111101111101111", "9": "111101111001110", ":": "000010000010000", "!": "010010010000010", ".": "000000000000010", "-": "000000111000000", "/": "001001010100100", " ": "000000000000000" };
  function txt(s, x, y, c, k) { k = k || 1; s = String(s).toUpperCase(); for (var i = 0; i < s.length; i++) { var f = FONT[s[i]] || FONT[" "]; for (var j = 0; j < 15; j++) if (f[j] === "1") R(x + i * 4 * k + (j % 3) * k, y + ((j / 3) | 0) * k, k, k, c); } }
  function txtW(s, k) { return String(s).length * 4 * (k || 1) - (k || 1); }
  function clock(cx, cy, r, h, m, rim) {
    disc(cx, cy, r + 1, rim || "#2a2018"); disc(cx, cy, r, "#f4ecd6");
    for (var i = 0; i < 12; i++) { var a = i / 12 * Math.PI * 2; R(cx + Math.sin(a) * (r - 2), cy - Math.cos(a) * (r - 2), 1, 1, "#3a2a1a"); }
    var am = m / 60 * Math.PI * 2, ah = (h % 12 + m / 60) / 12 * Math.PI * 2;
    line(cx, cy, cx + Math.sin(ah) * r * .5, cy - Math.cos(ah) * r * .5, "#1a120c"); line(cx, cy, cx + Math.sin(am) * r * .82, cy - Math.cos(am) * r * .82, "#1a120c"); R(cx, cy, 1, 1, "#a8322a");
  }
  function note(x, y, c) { R(x + 2, y, 1, 5, c); R(x, y + 4, 3, 2, c); R(x + 3, y, 2, 1, c); }
  function heart(x, y, c) { R(x, y, 2, 1, c); R(x + 3, y, 2, 1, c); R(x - 1, y + 1, 7, 2, c); R(x, y + 3, 5, 1, c); R(x + 1, y + 4, 3, 1, c); R(x + 2, y + 5, 1, 1, c); }

  /* people: x is the middle, fy where the feet touch the ground; sz 0 (a small child) … 1 (a grown-up, about 37 px) */
  function who(x, fy, o) {
    o = o || {}; var sz = o.sz == null ? 1 : o.sz, hd = Math.round(6 + 2 * sz), th = Math.round(6 + 7 * sz), lh = Math.round(6 + 9 * sz), tw = Math.round(7 + 3 * sz);
    var cx = Math.round(x), skin = o.skin || "#eac39c", top = fy - lh - th - hd - 1, f = o.f || 0, st = o.step || 0, L = cx - (tw >> 1), shoe = o.shoe || "#2a1a10";
    var bot = o.bot || "#3a3a48", tc = o.top || "#c8b89a";
    if (o.sit) { lh = Math.round(lh * .5); top = fy - lh - th - hd - 1; }
    /* legs */
    if (o.sit) { R(L + 1, fy - lh, tw - 2, 3, o.skirt ? tc : bot); R(L + (f < 0 ? -3 : tw - 3), fy - lh, 3, lh, o.skirt ? (o.tights || skin) : bot); R(L + (f < 0 ? -4 : tw - 3), fy - 2, 4, 2, shoe); }
    else {
      var a = st % 2 ? 1 : 0, b = st % 2 ? 0 : 1, ll = o.skirt ? (o.tights || skin) : bot;
      R(L + 1 - a, fy - lh, 3, lh, ll); R(L + tw - 4 + b, fy - lh, 3, lh, ll);
      R(L + 1 - a + (f < 0 ? -1 : 0), fy - 2, 4, 2, shoe); R(L + tw - 4 + b + (f < 0 ? -1 : 0), fy - 2, 4, 2, shoe);
      if (o.skirt) { R(L - 1, fy - lh - 1, tw + 2, Math.round(lh * .55) + 1, o.bot || tc); R(L - 2, fy - lh + Math.round(lh * .55) - 1, tw + 4, 1, o.bot || tc); }
    }
    /* body and arms */
    var ty = fy - lh - th; R(L, ty, tw, th + (o.skirt || o.sit ? 0 : 1), tc);
    if (o.apron) { R(L + 2, ty + 3, tw - 4, th - 2, o.apron); R(L + 3, ty + 1, tw - 6, 2, o.apron); }
    if (o.vest) { R(L, ty, 2, th, o.vest); R(L + tw - 2, ty, 2, th, o.vest); }
    if (o.card) { R(L, ty, 3, th, o.card); R(L + tw - 3, ty, 3, th, o.card); }
    var arm = o.arm || "down", ac = o.card || o.sleeve || tc;
    function armAt(side) {
      var ax = side < 0 ? L - 2 : L + tw, mode = side < 0 ? (o.armL || arm) : (o.armR || arm);
      if (mode === "out") { R(side < 0 ? ax - 4 : ax, ty + 3, 6, 2, ac); R(side < 0 ? ax - 6 : ax + 6, ty + 3, 2, 2, skin); }
      else if (mode === "up") { R(ax, ty - 6, 2, 8, ac); R(ax, ty - 8, 2, 2, skin); }
      else if (mode === "mouth") { R(ax, ty + 1, 2, 4, ac); R(side < 0 ? ax + 2 : ax - 2, ty - 2, 3, 2, skin); }
      else if (mode === "hip") { R(side < 0 ? ax - 1 : ax + 1, ty + 2, 2, 5, ac); R(ax, ty + 7, 2, 2, skin); }
      else if (mode === "fold") { R(L + 1, ty + 4, tw - 2, 3, ac); R(L + 2, ty + 5, 2, 1, skin); R(L + tw - 4, ty + 5, 2, 1, skin); }
      else { R(ax, ty + 1, 2, th - 3, ac); R(ax, ty + th - 2, 2, 2, skin); }
    }
    armAt(-1); armAt(1);
    /* head */
    R(cx - 1, top + hd, 2, 1, skin); var hx0 = cx - (hd >> 1); R(hx0, top, hd, hd, skin);
    var hc = o.hairC || "#1a120d", hair = o.hair || "short";
    if (hair === "bob" || hair === "pig") { R(hx0 - 1, top - 1, hd + 2, 3, hc); R(hx0 - 1, top, 2, hd - 1, hc); R(hx0 + hd - 1, top, 2, hd - 1, hc); R(hx0, top + 2, hd, 1, hc); if (hair === "pig") { R(hx0 - 3, top + 2, 2, 5, hc); R(hx0 + hd + 1, top + 2, 2, 5, hc); R(hx0 - 3, top + 2, 2, 1, o.ribbon || "#c8402a"); R(hx0 + hd + 1, top + 2, 2, 1, o.ribbon || "#c8402a"); } }
    else if (hair === "long") { R(hx0 - 1, top - 1, hd + 2, 3, hc); R(hx0 - 1, top, 2, hd + 5, hc); R(hx0 + hd - 1, top, 2, hd + 5, hc); }
    else if (hair === "bun") { R(hx0, top - 1, hd, 3, hc); R(hx0 - 1, top + 1, 1, 4, hc); R(hx0 + hd, top + 1, 1, 4, hc); R(cx - 2, top - 4, 4, 3, hc); R(cx + 2, top - 4, 2, 1, "#4aa07a"); }
    else if (hair === "pink") { R(hx0 - 1, top - 1, hd + 2, 3, hc); R(hx0, top + 2, hd, 1, hc); R(hx0 - 1, top, 2, hd - 2, hc); R(hx0 + hd - 1, top, 2, hd - 2, hc); R(cx + (hd >> 1), top - 3, 3, 6, hc); R(cx + (hd >> 1) + 1, top + 3, 2, 4, "#d9679a"); }
    else if (hair === "cap") { R(hx0 - 1, top - 1, hd + 2, 3, o.capC || "#4a4038"); R(f < 0 ? hx0 - 3 : hx0 + hd - 1, top + 1, 3, 1, o.capC || "#4a4038"); R(hx0, top + 2, 1, 2, hc); R(hx0 + hd - 1, top + 2, 1, 2, hc); }
    else { R(hx0, top - 1, hd, 3, hc); R(hx0, top + 2, 1, 2, hc); R(hx0 + hd - 1, top + 2, 1, 2, hc); }
    var ey = top + Math.round(hd * .55), e1 = f > 0 ? cx + 1 : f < 0 ? cx - 3 : cx - 2, e2 = f > 0 ? cx + 3 : f < 0 ? cx - 1 : cx + 1, ec = "#2a1a10";
    if (o.shut) { R(e1, ey, 2, 1, ec); R(e2, ey, 1, 1, ec); } else { R(e1, ey, 1, 1, ec); R(e2, ey, 1, 1, ec); }
    if (o.gl) { R(e1 - 1, ey - 1, 3, 3, o.gl); R(e2 - 1, ey - 1, 3, 3, o.gl); R(e1, ey, 1, 1, ec); R(e2, ey, 1, 1, ec); }
    if (o.mo) R(cx - 2 + (f > 0 ? 1 : f < 0 ? -1 : 0), ey + 2, 4, 1, hc);
    if (o.smile) R(cx - 1 + (f > 0 ? 1 : f < 0 ? -1 : 0), ey + 3, 2, 1, "#b06a5a");
    if (o.tear) { R(e1, ey + 1 + (o.tear % 3), 1, 1, "#8ac8f0"); }
    return { top: top, hand: [f < 0 ? L - 8 : L + tw + 6, ty + 3] };
  }
  /* the family as the story goes: young Popo (black bob, red dictionary), Josep the clockmaker (flat cap, moustache, blue
     work coat, machine oil), the two girls, Popo later (grey bun, jade, red cardigan over her apron), Wei, Mei */
  var YPOPO = { hair: "bob", top: "#d8cbb0", skirt: 1, bot: "#a89878", skin: "#ecc8a0" };
  var JOSEP = { hair: "cap", capC: "#3c3a40", mo: 1, top: "#3d5a80", bot: "#2e3446", hairC: "#3a2618", skin: "#e2b48a" };
  var GIRL1 = { hair: "pig", top: "#e2a040", skirt: 1, bot: "#c06a2a", ribbon: "#c8402a" }, GIRL2 = { hair: "bob", top: "#6a9ac0", skirt: 1, bot: "#3d5a80" };
  var OPOPO = { hair: "bun", hairC: "#d6d2ca", gl: "#5a8a70", top: "#efe4c8", card: "#8a2a3a", skirt: 1, bot: "#6a4a3a", skin: "#f2cfa8", tights: "#5a4a40" };
  var WEI = { hair: "short", gl: "#e8a838", top: "#f3ead8", vest: "#5a3a26", bot: "#2a2a34" }, MEI = { hair: "pink", hairC: "#f48fb8", top: "#c8303a", bot: "#2a2a3a", skin: "#f6d6b8" };
  function mix(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b) o[k] = b[k]; return o; }

  /* the town's animals, its own drawing (FBWorld.drawPet); x the middle, fy the ground */
  function pet(k, x, fy, o) {
    o = o || {};
    if (F && F.drawPet) { F.drawPet(g, k, x, fy, o.px || 1, o); if (k === "dog" && o.nocollar) { var x0 = Math.round(x - 11), y0 = Math.round(fy - 16 + (o.asleep ? 3 : 0)); R(x0 + (o.flip ? 6 : 14), y0 + 7, 2, 2, "#e8c48a"); } return; }
    var c = k === "dog" ? "#e8c48a" : k === "yuzu" ? "#e8913a" : "#231b17"; R(x - 8, fy - (o.asleep ? 5 : 9), 16, o.asleep ? 5 : 6, c); R(x + (o.flip ? -10 : 5), fy - 12, 6, 5, c);
  }
  function popoNow(x, y, px, o) { if (F && F.drawPopo) return F.drawPopo(g, x, y, px, o); R(x + 14, y + 10, 36, 30, "#f2cfa8"); R(x + 10, y, 44, 12, "#d6d2ca"); R(x + 6, y + 44, 52, 20, "#8a2a3a"); }

  /* the old pictures are black and white gone brown; the colour comes back with the years */
  function tone(a) {
    if (a <= 0) return; var d = g.getImageData(0, 0, W, H), q = d.data;
    for (var j = 0; j < q.length; j += 4) { var r = q[j], gg = q[j + 1], b = q[j + 2], y = .3 * r + .59 * gg + .11 * b; q[j] = r + (Math.min(255, y * 1.07 + 18) - r) * a; q[j + 1] = gg + (y * .92 + 8 - gg) * a; q[j + 2] = b + (y * .72 - b) * a; }
    g.putImageData(d, 0, 0);
  }
  function grain(t, n) { var s = ((t * 12) | 0) * 977 + 13; for (var j = 0; j < n; j++) { s = (s * 1103515245 + 12345) & 0x7fffffff; var x = s % W; s = (s * 1103515245 + 12345) & 0x7fffffff; R(x, s % H, 1, 1, (s & 1) ? "rgba(255,240,210,.16)" : "rgba(30,18,8,.16)"); } }
  function vignette() { for (var i = 0; i < 6; i++) { g.fillStyle = "rgba(14,8,4," + (.22 - i * .035) + ")"; g.fillRect(0, i, W, 1); g.fillRect(0, H - 1 - i, W, 1); g.fillRect(i, 0, 1, H); g.fillRect(W - 1 - i, 0, 1, H); } }
  function dip(k) { if (k > 0) { g.fillStyle = "rgba(10,6,4," + Math.min(1, k) + ")"; g.fillRect(0, 0, W, H); } }
  /* a scene made of shots: fade through dark at each cut */
  function cuts(p, at) { var d = 1; at.forEach(function (c) { d = Math.min(d, Math.abs(p - c) / .035); }); return 1 - Math.min(1, d); }
  function snow(t, n, sp) { for (var i = 0; i < n; i++) { var x = (rnd(i) * W + Math.sin(t * .8 + i) * 4 + t * 3) % W, y = (rnd(i + 50) * H + t * (sp || 9) * (.6 + rnd(i + 9) * .6)) % H; R(x, y, 1, 1, "#f4f2ec"); } }
  function steam(x, y, t, n) { for (var i = 0; i < (n || 3); i++) { var k = (t * .6 + i / (n || 3)) % 1; g.fillStyle = "rgba(255,255,255," + (.55 * (1 - k)) + ")"; g.fillRect(Math.round(x + Math.sin(t * 2 + i * 2) * 2), Math.round(y - k * 12), 2, 2); } }

  /* ---------- the scenes ---------- */
  var late = null;   /* things drawn after the tone, in colour (gold) */
  function sOpen(t, p) {   /* tonight, the blue biscuit tin on the table; the lid lifts and something glows */
    band(0, 86, "#2a1c26", "#4a2c22", 2); R(0, 86, W, 49, "#5a3a22"); for (var x = 0; x < W; x += 30) R(x, 86, 1, 49, "#4a2e1a"); R(0, 86, W, 2, "#7a5434");
    R(176, 10, 34, 40, "#16121e"); R(176, 10, 34, 2, "#3a2a20"); R(192, 10, 2, 40, "#3a2a20"); R(176, 29, 34, 2, "#3a2a20"); disc(201, 20, 3, "#f4ecd2");   /* the window, the moon */
    R(36, 0, 2, 22, "#2a1a10"); R(28, 22, 18, 6, "#c8902a"); g.fillStyle = "rgba(255,210,120,.10)"; g.beginPath(); g.moveTo(26, 28); g.lineTo(48, 28); g.lineTo(100, 90); g.lineTo(-20, 90); g.fill();
    var lift = ease(seg(t, 1.2, 3.2));
    R(84, 66, 72, 34, "#24456e"); R(84, 66, 72, 2, "#e8c46a"); R(84, 97, 72, 3, "#1d3a5e"); R(90, 72, 60, 20, "#2c5280"); txt("POPO", 108, 79, "#e8c46a"); R(86, 92, 68, 1, "#e8c46a");
    if (lift > 0) { g.fillStyle = "rgba(255,226,150," + (.16 * lift) + ")"; g.beginPath(); g.moveTo(88, 66); g.lineTo(152, 66); g.lineTo(166, 20); g.lineTo(74, 20); g.fill(); for (var i = 0; i < 6; i++) { var k = (t * .4 + i / 6) % 1; R(92 + i * 11, 64 - k * 30 * lift, 1, 1, "rgba(255,240,190," + (1 - k) + ")"); } }
    var lx = 80 - lift * 64, ly = 60 + lift * 32; R(lx, ly, 80 - lift * 30, 7 - lift * 3, "#2c5280"); R(lx, ly, 80 - lift * 30, 1, "#e8c46a");
    R(184, 92, 16, 12, "#f4ecd6"); R(200, 95, 3, 5, "#f4ecd6"); R(186, 94, 12, 3, "#b88a4a"); steam(190, 88, t, 3);
  }
  function s1968(t, p) {
    var k;
    if (p < .3) {   /* the ship: Popo at the rail with her suitcase, the sea going gold */
      band(0, 70, "#e8b878", "#a85a4a", 3); disc(150, 58, 9, "#fbe6b0"); R(0, 64, W, 6, "#c88a5a");
      for (var y = 70; y < 104; y += 2) R(0, y, W, 2, y % 4 ? "#6a5a5a" : "#5a4a50");
      for (var i = 0; i < 22; i++) R((rnd(i) * W + t * (6 + i % 4)) % W, 72 + rnd(i + 3) * 30, 3 + i % 3, 1, "#d8b088");
      for (i = 0; i < 4; i++) { var bx = (60 + i * 50 + t * 9) % 260 - 10, by = 24 + rnd(i) * 18 + Math.sin(t * 3 + i) * 2; R(bx, by, 2, 1, "#3a2a2a"); R(bx + 2, by - 1, 1, 1, "#3a2a2a"); R(bx - 1, by - 1, 1, 1, "#3a2a2a"); }
      R(0, 104, W, 31, "#6a4a30"); for (var x = 0; x < W; x += 12) R(x, 104, 1, 31, "#54381f"); R(0, 88, W, 2, "#e8e0d0"); for (x = 4; x < W; x += 16) R(x, 88, 2, 16, "#e8e0d0"); R(0, 96, W, 1, "#c8c0b0");
      who(100, 122, mix(YPOPO, { f: 1, tear: p > .12 ? (t * 3 | 0) : 0, armR: "out" })); R(116, 112, 14, 10, "#6a4a2c"); R(116, 112, 14, 1, "#8a6a44"); R(121, 110, 4, 2, "#2a1a10");
      R(86, 112, 4, 6, "#a52a2a"); R(86, 112, 4, 1, "#e0c070");
    } else if (p < .62) {   /* the train along the coast: she cries as far as Girona, then the salt lemon */
      R(0, 0, W, H, "#4a3a2a"); R(0, 0, W, 6, "#3a2a1c");
      var ox = t * 40;
      g.save(); g.beginPath(); g.rect(46, 18, 150, 66); g.clip();
      band(18, 60, "#c8d8e0", "#e8d8b8", 3); R(46, 60, 150, 24, "#a8b878");
      for (i = 0; i < 6; i++) { var hx = ((i * 70 - ox * .3) % 420 + 420) % 420 - 60; R(hx, 46, 60, 14, "#9aa878"); R(hx + 10, 40, 36, 8, "#9aa878"); }
      for (i = 0; i < 40; i++) { var vx = ((i * 12 - ox) % 480 + 480) % 480; R(vx, 64 + (i % 3) * 6, 6, 3, "#6a8a4a"); }
      if (p > .45) { R(46, 52, 150, 8, "#6a8aa8"); for (i = 0; i < 8; i++) R(((i * 30 - ox * .5) % 200 + 200) % 200 + 46, 55, 6, 1, "#b8d0e0"); }
      for (i = 0; i < 4; i++) { var px = ((i * 120 - ox * 2.2) % 480 + 480) % 480; R(px, 18, 2, 66, "#4a3a2a"); }
      g.restore();
      R(44, 16, 154, 2, "#2a1c10"); R(44, 84, 154, 4, "#2a1c10"); R(44, 16, 2, 70, "#2a1c10"); R(196, 16, 2, 70, "#2a1c10"); R(119, 16, 3, 70, "#2a1c10");
      R(150, 88, 46, 4, "#6a4a2a"); R(160, 80, 8, 8, "#e8d070"); R(161, 79, 6, 2, "#c8a040"); R(162, 82, 2, 2, "#f4e090"); R(165, 84, 2, 2, "#f4e090");   /* the jar of salt lemons */
      R(0, 92, W, 43, "#5a3a2a"); R(52, 74, 30, 46, "#7a2a2a"); R(52, 74, 30, 3, "#5a1a1a"); R(48, 108, 40, 6, "#6a2222");
      var lem = p > .5, chew = lem && p < .56;
      who(92, 116, mix(YPOPO, { sit: 1, f: 1, tear: !lem ? (t * 4 | 0) : 0, armR: chew ? "mouth" : "down", smile: p > .55 }));
      if (chew) R(98, 80, 3, 3, "#f0d040");
    } else {   /* Estació de França, an iron shed and the big clock; she steps down and can't read a single sign */
      k = ease(seg(p, .62, .78));
      band(0, 60, "#e4dccc", "#c8bca4", 3);
      for (i = 0; i < 6; i++) { var ax = i * 48; for (var a = 0; a < 48; a += 2) R(ax + a, 8 + Math.pow((a - 24) / 24, 2) * 14, 2, 2, "#5a4a3a"); R(ax, 8, 2, 52, "#5a4a3a"); }
      for (x = 0; x < W; x += 8) R(x, 2, 1, 14, "rgba(255,255,255,.4)");
      R(0, 60, W, 6, "#8a7a6a"); clock(120, 38, 11, 7, 40 + t * .3);
      R(0, 66, 92, 44, "#2e4a3a"); for (x = 4; x < 92; x += 16) R(x, 72, 10, 8, "#c8d0b0"); R(0, 104, 92, 6, "#1a1a1a");
      R(150, 22, 64, 10, "#2a3a5a"); txt("BARCELONA", 155, 25, "#f4ecd6"); R(30, 22, 44, 8, "#2a3a5a"); txt("ANDEN 2", 34, 24, "#f4ecd6");
      R(0, 110, W, 25, "#7a6a5a"); for (x = 0; x < W; x += 20) R(x, 110, 1, 25, "#6a5a4a");
      for (i = 0; i < 4; i++) who(170 + i * 16 + Math.sin(t + i) * 3, 124, { sz: .9, top: ["#5a5a5a", "#4a3a3a", "#3a4a5a", "#6a5a4a"][i], bot: "#2a2a2a", hair: i % 2 ? "cap" : "short", step: (t * 4 + i) | 0, f: i % 2 ? 1 : -1 });
      who(96 + k * 22, 126, mix(YPOPO, { f: 1, step: k < 1 ? (t * 5) | 0 : 0 })); R(108 + k * 22, 114, 12, 10, "#6a4a2c"); R(108 + k * 22, 114, 12, 1, "#8a6a44");
      if (p > .82) { R(108 + k * 22 - 18, 80, 9, 9, "#f4ecd6"); txt("?", 112 + k * 22 - 18, 82, "#3a2a1a"); }
    }
    return { tone: .88, cut: cuts(p, [.3, .62]) };
  }
  function sJosep(t, p) {
    var i, x;
    if (p < .42) {   /* under the big clock: a young man who smells of machine oil asks where she's going */
      band(0, 70, "#d8d0bc", "#b8ac94", 3); for (i = 0; i < 6; i++) { var ax = i * 48; for (var a = 0; a < 48; a += 2) R(ax + a, 6 + Math.pow((a - 24) / 24, 2) * 12, 2, 2, "#5a4a3a"); }
      R(118, 0, 2, 22, "#3a2a1a"); clock(119, 36, 16, 8, 2 + t * .4, "#3a2a1a"); R(117, 52, 4, 8, "#3a2a1a");
      R(0, 96, W, 39, "#7a6a5a"); for (x = 0; x < W; x += 20) R(x, 96, 1, 39, "#6a5a4a"); R(0, 94, W, 2, "#e8d070");
      var k = ease(seg(p, .02, .22)), jx = 190 - k * 52;
      who(84, 124, mix(YPOPO, { f: 1 })); R(66, 112, 12, 10, "#6a4a2c"); R(66, 112, 12, 1, "#8a6a44");
      who(jx, 124, mix(JOSEP, { f: -1, step: k < 1 ? (t * 5) | 0 : 0, armL: p > .25 ? "out" : "down" }));
      R(jx + 6, 106, 4, 6, "#9a9aa0"); R(jx + 7, 104, 1, 2, "#9a9aa0");   /* his oil can */
      if (p > .25) { g.fillStyle = "rgba(255,255,255,.85)"; g.fillRect(70, 62, 30, 14); txt("?", 76, 66, "#3a2a1a"); txt("?", 84, 66, "#3a2a1a"); txt("?", 92, 66, "#3a2a1a"); }
    } else if (p < .72) {   /* through the old town at night to her cousin's door; he carries the suitcase */
      band(0, 135, "#1a1830", "#2a2440", 3); var sx = (t * 14) % 60;
      for (i = -1; i < 6; i++) { var bx = i * 60 - sx, hh = 24 + rnd(i + 10 + Math.floor(t * 14 / 60)) * 10; R(bx, hh, 58, 110 - hh, "#3a3444"); for (var wy = hh + 8; wy < 96; wy += 16) for (var wx = bx + 8; wx < bx + 52; wx += 14) { R(wx, wy, 6, 9, rnd(wx * 3 + wy) > .6 ? "#e8b860" : "#24202e"); R(wx - 2, wy + 9, 10, 1, "#1a1620"); } }
      for (i = 0; i < 3; i++) { var lx = ((i * 90 - t * 14) % 270 + 270) % 270 - 10; R(lx, 60, 2, 50, "#1a1620"); R(lx - 2, 58, 6, 4, "#f4d48a"); g.fillStyle = "rgba(255,210,130,.12)"; g.fillRect(lx - 14, 62, 30, 48); }
      R(0, 110, W, 25, "#2a2630"); for (x = 0; x < W; x += 10) R(x - sx % 10, 112 + (x / 10 % 2) * 5, 8, 3, "#34303c");
      var st = (t * 4) | 0; who(104, 126, mix(YPOPO, { f: 1, step: st })); who(128, 126, mix(JOSEP, { f: 1, step: st + 1, armR: "out" })); R(136, 112, 12, 10, "#6a4a2c");
      if (p > .62) { R(190, 74, 22, 36, "#5a3a22"); g.fillStyle = "rgba(255,210,130," + (seg(p, .62, .7) * .5) + ")"; g.fillRect(190, 74, 22, 36); }
    } else {   /* years later: the clock that runs slow, "so the good hours last longer" */
      R(0, 0, W, H, "#4a3424"); for (i = 0; i < 9; i++) R(i * 28, 0, 1, 96, "#3e2a1c");
      R(0, 96, W, 39, "#6a4a2c"); R(0, 96, W, 2, "#8a6a44");
      [[40, 30], [200, 40], [60, 62], [180, 70]].forEach(function (c, j) { disc(c[0], c[1], 7, "#2a1a10"); clock(c[0], c[1], 6, j * 3, (t * 60 * (j + 1)) % 60); });
      clock(120, 44, 22, 10, 10 + t * .15, "#2a1a10"); txt("LENT", 112, 56, "#a8322a");
      who(84, 126, mix(JOSEP, { f: 1, hair: "short", armR: "out" })); who(156, 126, mix(YPOPO, { f: -1, armL: "mouth", smile: 1 }));
    }
    return { tone: .86, cut: cuts(p, [.42, .72]) };
  }
  function sRose(t, p) {
    var i, x;
    if (p < .5) {   /* Sant Jordi on the Rambla: roses and books; he gives a rose, she gives him her dictionary */
      band(0, 80, "#d8e4ec", "#e8e0d0", 3);
      for (i = 0; i < 5; i++) { var tx = i * 56 + 10; R(tx + 10, 30, 3, 60, "#6a5a44"); R(tx, 14, 26, 18, "#7a9a5a"); R(tx + 4, 8, 18, 8, "#8aaa62"); }
      for (x = 0; x < W; x += 6) { var by = 22 + Math.sin(x / 20) * 3; R(x, by, 3, 4, (x / 6) % 2 ? "#e8c040" : "#c8302a"); }
      R(0, 90, W, 45, "#b8a890"); for (x = 0; x < W; x += 12) R(x, 92, 10, 1, "#a89878");
      [[18, "#c8302a"], [186, "#5a7aa0"]].forEach(function (s, j) { R(s[0], 70, 40, 22, "#e8dcc4"); R(s[0] - 2, 62, 44, 8, j ? "#3a5a80" : "#a8302a"); for (var r = 0; r < 12; r++) R(s[0] + 3 + (r % 6) * 6, 72 + ((r / 6) | 0) * 6, 3, 3, j ? ["#8a5a3a", "#3a6a5a", "#c8a040", "#6a3a6a"][r % 4] : "#d8303a"); });
      for (i = 0; i < 5; i++) who(((i * 61 + t * (i % 2 ? 8 : -8)) % 280 + 280) % 280 - 20, 104, { sz: .85, top: ["#7a6a5a", "#5a6a7a", "#8a5a5a", "#5a7a5a", "#6a5a7a"][i], bot: "#3a3a3a", hair: i % 2 ? "long" : "short", skirt: i % 2, step: (t * 4 + i) | 0, f: i % 2 ? 1 : -1 });
      var k1 = ease(seg(p, .1, .2)), k2 = ease(seg(p, .26, .36));
      who(104, 128, mix(YPOPO, { f: 1, armR: k2 > 0 && k2 < 1 ? "out" : "down", smile: p > .36 })); who(140, 128, mix(JOSEP, { f: -1, armL: k1 < 1 ? "out" : "down", smile: 1 }));
      var rx = 128 - k1 * 18, ry = 103 + k1 * 2; if (k1 < 1 || p > .2) { R(rx, ry, 1, 8, "#3a6a3a"); R(rx - 1, ry - 2, 3, 3, "#d8202a"); R(rx, ry - 3, 1, 1, "#f05060"); }
      var dx = 112 + k2 * 18; R(dx, 104, 4, 6, "#a52a2a"); R(dx, 104, 4, 1, "#e0c070");
      if (p > .38) heart(120, 72 - (t * 4 % 10), "#d8303a");
    } else {   /* inside the dictionary: beside every English word, Josep's Catalan in pencil; the rose pressed flat */
      R(0, 0, W, H, "#3a2a1c"); R(20, 10, 200, 118, "#5a1a1a"); R(24, 12, 94, 112, "#f0e6cc"); R(122, 12, 94, 112, "#f0e6cc"); R(118, 12, 4, 112, "#c8b896");
      var W2 = [["CLOCK", "RELLOTGE"], ["ROSE", "ROSA"], ["HOME", "CASA"], ["LEARN", "APRENDRE"], ["TALK", "PARLAR"], ["SLOW", "A POC A POC"], ["SOUP", "SOPA"], ["LOVE", "AMOR"]];
      var shown = Math.floor(seg(p, .52, .85) * W2.length * 1.0001);
      W2.forEach(function (w, j) { var y = 20 + j * 12, side = j < 4 ? 0 : 1, bx = side ? 128 : 30, yy = side ? y - 48 : y;
        txt(w[0], bx, yy, "#2a2018"); for (var c = 0; c < 3; c++) R(bx + 26 + c * 5, yy + 1, 4, 3, "#6a5a4a");
        if (j < shown) txt(w[1], bx + 2, yy + 6, "#7a7a80"); else if (j === shown) { var n = Math.floor(((p - .52) / .33 * W2.length - j) * w[1].length); txt(w[1].slice(0, Math.max(0, n)), bx + 2, yy + 6, "#7a7a80"); }
      });
      R(30, 108, 56, 1, "#c8b896"); txt("APRENDE.", 128, 98, "#a8322a"); txt("I PARLA.", 128, 106, "#a8322a");
      if (p > .86) { var k = ease(seg(p, .86, .95)); g.globalAlpha = k; R(150, 60, 2, 30, "#5a6a3a"); disc(151, 56, 5, "#8a2a2a"); disc(150, 55, 3, "#a8323a"); R(144, 70, 6, 3, "#5a6a3a"); g.globalAlpha = 1; }
    }
    return { tone: .8, cut: cuts(p, [.5]) };
  }
  function sShop(t, p) {   /* 1979, after closing: chairs up on the tables, their bolero, the girls asleep on the flour sacks */
    var i, x, sw = Math.sin(t * 1.3);
    R(0, 0, W, 100, "#6a4a32"); for (var y = 0; y < 60; y += 6) for (x = (y / 6 % 2) * 6; x < W; x += 12) R(x, y, 11, 5, "#7a5a3c");
    R(0, 60, W, 2, "#3a2414"); R(0, 62, W, 38, "#5a3a24");
    R(170, 14, 50, 34, "#141a2a"); R(170, 14, 50, 2, "#2a1a10"); R(194, 14, 2, 34, "#2a1a10"); for (i = 0; i < 5; i++) R(174 + i * 9, 40 - (i % 2) * 6, 4, 8, "#2a2a3a"); R(204, 22, 2, 2, "#f4e6a0");
    R(0, 100, W, 35, "#8a6a48"); for (x = 0; x < W; x += 16) R(x, 100, 1, 35, "#7a5a3a");
    R(0, 50, 54, 50, "#4a2c1a"); R(0, 50, 54, 3, "#6a4a2a"); R(6, 40, 14, 10, "#8a8a8a"); R(8, 38, 10, 2, "#aaaaaa"); steam(12, 36, t, 2);
    R(28, 42, 20, 8, "#3a2a20"); disc(38, 44, 5, "#1a1414"); disc(38, 44, 1, "#c8302a"); R(38 + Math.cos(t * 6) * 4, 44 + Math.sin(t * 6) * 4, 1, 1, "#6a5a5a");   /* the record player */
    for (i = 0; i < 4; i++) { var k = (t * .35 + i / 4) % 1; note(36 + Math.sin(t + i) * 8 + i * 8, 34 - k * 30, "rgba(255,226,160," + (1 - k) + ")"); }
    [[64, 96], [196, 96]].forEach(function (c) { R(c[0], c[1] - 14, 26, 3, "#4a2c1a"); R(c[0] + 2, c[1] - 11, 2, 11, "#3a2214"); R(c[0] + 22, c[1] - 11, 2, 11, "#3a2214");
      R(c[0] + 2, c[1] - 22, 2, 8, "#3a2214"); R(c[0] + 2, c[1] - 22, 9, 2, "#3a2214"); R(c[0] + 15, c[1] - 22, 9, 2, "#3a2214"); R(c[0] + 22, c[1] - 22, 2, 8, "#3a2214"); });
    R(118, 0, 2, 16, "#2a1a10"); R(112 + sw, 16, 14, 4, "#c8902a"); g.fillStyle = "rgba(255,210,130,.13)"; g.beginPath(); g.moveTo(110, 20); g.lineTo(130, 20); g.lineTo(160, 130); g.lineTo(80, 130); g.fill();
    var dx = 120 + sw * 4; who(dx - 6, 126, mix(YPOPO, { f: 1, apron: "#f2ead8", armR: "out", top: "#4a5a7a", bot: "#3a4a6a", shut: 1, smile: 1 })); who(dx + 8, 127, mix(JOSEP, { hair: "short", f: -1, armL: "out", shut: 1, smile: 1 }));
    R(196, 110, 40, 14, "#d8ccb0"); R(200, 104, 34, 8, "#e4d8bc"); txt("FARINA", 202, 113, "#8a7a5a");
    who(206, 112, mix(GIRL1, { sz: .15, sit: 1, shut: 1 })); who(222, 112, mix(GIRL2, { sz: .1, sit: 1, shut: 1 }));
    for (i = 0; i < 2; i++) { var z = (t * .5 + i * .5) % 1; txt("Z", 214 + i * 8 + z * 6, 86 - z * 14, "rgba(255,255,255," + (1 - z) + ")"); }
    return { tone: .62 };
  }
  function sLemon(t, p) {   /* the lemon tree in the yard: a line in the bark every summer until the girls are taller than Popo */
    var i, x, yr = 1975 + Math.floor(seg(p, 0, .8) * 18), gz = seg(p, 0, .8);
    band(0, 90, "#cfe2ee", "#f0e6cc", 3); R(0, 74, W, 2, "#b8a080");
    for (x = 0; x < W; x += 20) { R(x, 40, 19, 34, "#e8d8b8"); R(x, 40, 19, 1, "#d0bc98"); } R(0, 36, W, 4, "#c88a5a");
    R(0, 90, W, 45, "#c8b48c"); for (x = 0; x < W; x += 12) for (var y = 92; y < H; y += 8) R(x + ((y / 8) % 2) * 6, y, 10, 1, "#b8a07c");
    R(92, 50, 10, 76, "#6a5034"); R(94, 50, 2, 76, "#7a6044");
    var n = Math.floor(gz * 9);
    for (i = 0; i < n; i++) { var hh = 126 - (16 + i / 8 * 22); R(92, hh, 10, 1, "#3a2a1a"); }
    [[56, 6, 70, 34], [70, 0, 50, 16], [48, 22, 22, 18], [118, 18, 22, 20]].forEach(function (c) { R(c[0], c[1], c[2], c[3], "#5a8a3a"); });
    for (i = 0; i < 14; i++) { var lx = 56 + rnd(i) * 80, ly = 4 + rnd(i + 7) * 34; R(lx, ly, 3, 3, "#f0d040"); R(lx + 1, ly, 1, 1, "#fff090"); }
    var gsz = .1 + gz * .95, gr = p > .55 ? "#c8c4bc" : "#1a120d";
    who(76, 126, mix(GIRL1, { sz: gsz, f: 1, hair: gz > .5 ? "long" : "pig" })); who(114, 126, mix(GIRL2, { sz: Math.max(.05, gsz - .08), f: -1, hair: gz > .5 ? "long" : "bob" }));
    who(150, 126, mix(YPOPO, { sz: .9, f: -1, hairC: gr, hair: p > .55 ? "bun" : "bob", armL: "out", apron: "#f2ead8" }));
    R(140, 104, 4, 1, "#c8c8d0");
    txt(String(yr), 10, 10, "#5a4a3a");
    if (p > .84) { for (i = 0; i < 2; i++) { var k = seg(p, .84 + i * .04, 1), bx = 110 + k * 160, by = 20 - k * 30 + Math.sin(t * 9 + i) * 2; R(bx, by, 3, 1, "#3a3030"); R(bx + 1, by - 1 - ((t * 8 | 0) % 2), 1, 1, "#3a3030"); } }
    return { tone: .45 - p * .1 };
  }
  function sBowl(t, p) {
    var i, x, br = .3;
    if (p < .46) {   /* the night before: two sisters, one bowl, one pulling each way */
      R(0, 0, W, H, "#3a3040"); R(0, 0, W, 64, "#4a3a44"); for (x = 0; x < W; x += 10) R(x, 64, 9, 1, "#3a3036");
      R(20, 14, 40, 30, "#141a2a"); R(20, 14, 40, 2, "#2a1a10"); R(39, 14, 2, 30, "#2a1a10"); disc(30, 24, 2, "#d8d8e8");
      R(80, 30, 80, 3, "#5a3a24"); for (i = 0; i < 5; i++) { R(86 + i * 15, 24, 10, 6, "#f0f0f4"); R(88 + i * 15, 26, 6, 1, "#3a5aa8"); R(90 + i * 15, 28, 2, 1, "#3a5aa8"); }
      R(0, 108, W, 27, "#6a5040");
      var pull = p < br ? Math.sin(t * 7) * 2 : 0, gap = p < br ? 0 : Math.min(14, (p - br) * 200);
      who(96 - gap + pull, 126, mix(GIRL1, { sz: 1, hair: "long", f: 1, armR: "out", tear: (t * 4) | 0, top: "#e2a040", bot: "#4a4a5a", skirt: 0 }));
      who(146 + gap + pull, 126, mix(GIRL2, { sz: 1, hair: "short", f: -1, armL: "out", tear: (t * 4 + 1) | 0, skirt: 0, bot: "#2a3a5a" }));
      if (p < br) { R(115 + pull, 101, 12, 5, "#f0f0f4"); R(116 + pull, 106, 10, 1, "#d0d0dc"); R(117 + pull, 102, 8, 1, "#3a5aa8"); R(119 + pull, 104, 4, 1, "#3a5aa8"); }
      else { var s = (p - br) * 60; for (i = 0; i < 7; i++) { var vx = (rnd(i) - .5) * 30, vy = -10 - rnd(i + 3) * 12, sx = 120 + vx * s * .2, sy = Math.min(126, 102 + vy * s * .2 + 30 * s * s * .02); R(sx, sy, 3, 2, i % 2 ? "#f0f0f4" : "#3a5aa8"); } }
      R(206, 52, 24, 56, "#2a2228"); g.fillStyle = "rgba(255,210,130,.25)"; g.fillRect(206, 52, 24, 56); who(218, 108, mix(YPOPO, { sz: .9, hair: "bun", hairC: "#6a6460", f: -1, armL: "mouth" }));
    } else if (p < .7) {   /* the pieces kept in the biscuit tin for thirty years */
      R(0, 0, W, H, "#3a2a1c"); R(50, 18, 140, 100, "#24456e"); R(54, 22, 132, 92, "#1d3a5e"); R(50, 18, 140, 3, "#e8c46a");
      [[70, 40, 22, 12], [104, 34, 16, 18], [130, 48, 24, 10], [80, 70, 18, 14], [120, 74, 26, 12], [150, 30, 14, 14], [96, 90, 14, 10]].forEach(function (s, j) { R(s[0], s[1], s[2], s[3], "#f0f0f4"); R(s[0] + 2, s[1] + 3, s[2] - 6, 1, "#3a5aa8"); if (j % 2) R(s[0] + 4, s[1] + 6, 3, 1, "#3a5aa8"); });
      txt("30", 200, 110, "#e8c46a");
    } else {   /* last winter Wei mended it with gold */
      R(0, 0, W, H, "#2a2028"); R(0, 96, W, 39, "#4a3a32"); g.fillStyle = "rgba(255,226,170,.12)"; disc(120, 70, 46, "rgba(255,226,170,.06)");
      R(88, 60, 64, 26, "#f2f2f6"); R(92, 86, 56, 6, "#e4e4ec"); R(104, 92, 32, 4, "#d8d8e0"); R(86, 58, 68, 3, "#e8e8f0");
      R(96, 66, 48, 2, "#3a5aa8"); for (i = 0; i < 6; i++) { R(98 + i * 8, 72, 3, 3, "#3a5aa8"); R(99 + i * 8, 76, 1, 4, "#5a7ac8"); }
      var k = seg(p, .72, .95);
      late = function () { var pts = [[100, 58, 106, 70], [106, 70, 104, 82], [104, 82, 112, 92], [128, 58, 124, 68], [124, 68, 132, 78], [132, 78, 130, 92], [140, 60, 146, 72], [146, 72, 144, 86]], n = pts.length * k;
        pts.forEach(function (q, j) { if (j > n) return; var f = Math.min(1, n - j); line(q[0], q[1], q[0] + (q[2] - q[0]) * f, q[1] + (q[3] - q[1]) * f, "#f2c44a"); });
        if (k > .1) { g.fillStyle = "rgba(255,210,90," + (.25 + .15 * Math.sin(t * 3)) + ")"; for (var s = 0; s < 6; s++) { var a = t * .7 + s; R(120 + Math.cos(a) * 34, 74 + Math.sin(a * 1.3) * 18, 1, 1, "#ffe6a0"); } } };
    }
    return { tone: p < .7 ? .4 : .3, cut: cuts(p, [.46, .7]) };
  }
  function sCards(t, p) {   /* thirty years of postcards from New York, tied with kitchen string; the newest in pink pen */
    var i; R(0, 0, W, H, "#6a4a2c"); for (i = 0; i < H; i += 9) R(0, i, W, 1, "#5a3c22");
    var C = [function (x, y) { R(x, y, 34, 22, "#a8c8e0"); R(x + 15, y + 6, 4, 14, "#5aa088"); R(x + 14, y + 3, 6, 3, "#5aa088"); R(x + 19, y + 1, 1, 4, "#5aa088"); R(x, y + 18, 34, 4, "#4a6a8a"); },
      function (x, y) { R(x, y, 34, 22, "#3a3a44"); R(x + 2, y + 6, 30, 10, "#c8c8c0"); for (var w = 0; w < 4; w++) R(x + 4 + w * 7, y + 8, 5, 4, "#f0e8a0"); R(x + 2, y + 14, 30, 2, "#e8c040"); },
      function (x, y) { R(x, y, 34, 22, "#e8eef4"); for (var w = 0; w < 3; w++) { R(x + 5 + w * 10, y + 6, 6, 10, "#4a6a4a"); R(x + 5 + w * 10, y + 6, 6, 2, "#ffffff"); } R(x, y + 17, 34, 5, "#ffffff"); },
      function (x, y) { R(x, y, 34, 22, "#e8b8a0"); R(x, y + 14, 34, 8, "#4a6a8a"); line(x + 2, y + 14, x + 32, y + 8, "#5a4a5a"); R(x + 10, y + 6, 2, 8, "#5a4a5a"); R(x + 24, y + 6, 2, 8, "#5a4a5a"); }];
    var n = Math.min(14, Math.floor(seg(p, 0, .66) * 14) + 1);
    for (i = 0; i < n; i++) { var drop = i === n - 1 && p < .66 ? (1 - ((seg(p, 0, .66) * 14) % 1)) : 0, x = 30 + rnd(i) * 140, y = 20 + rnd(i + 4) * 70 - drop * 40;
      R(x - 1, y - 1, 36, 24, "#f4ecd8"); C[i % 4](x, y); }
    if (p > .68) { var k = ease(seg(p, .68, .8)); g.globalAlpha = k; R(0, 0, W, H, "rgba(60,40,24,.6)"); R(80, 34, 80, 56, "#f4ecd8"); R(82, 36, 76, 52, "#e8f0f8"); R(118, 34, 3, 56, "#e4e0d4"); R(80, 60, 80, 3, "#e4e0d4");
      line(80, 50, 160, 74, "#c8b8a0"); line(80, 74, 160, 50, "#c8b8a0"); g.globalAlpha = 1; }
    if (p > .8) { var k2 = ease(seg(p, .8, .9)); g.globalAlpha = k2; R(60, 26, 120, 76, "#fbf6ea"); R(60, 26, 120, 2, "#e8c040"); R(118, 32, 1, 64, "#d8d0c0");
      for (i = 0; i < 4; i++) R(124, 50 + i * 10, 48, 1, "#d8d0c0"); R(156, 32, 18, 14, "#e88aa8"); R(158, 34, 14, 10, "#f8c8d8");
      g.globalAlpha = 1; late = function () { g.globalAlpha = k2; txt("POPO!!", 70, 40, "#e8508a"); txt("HOLIDAYS", 70, 52, "#e8508a"); txt("SHH WEI", 70, 64, "#e8508a"); heart(74, 78, "#e8508a"); heart(86, 80, "#f48fb8"); g.globalAlpha = 1; }; }
    return { tone: .32 };
  }
  function sMantou(t, p) {   /* the winter Josep died: a dog on platform two under the clock Josep wound, waiting for the 7:40 */
    var i, x, day = Math.floor(seg(p, .1, .62) * 3), dp = (seg(p, .1, .62) * 3) % 1, go = seg(p, .74, 1);
    band(0, 70, "#b8bcc4", "#d8d8dc", 3);
    for (i = 0; i < 6; i++) { var ax = i * 48; for (var a = 0; a < 48; a += 2) R(ax + a, 6 + Math.pow((a - 24) / 24, 2) * 12, 2, 2, "#4a4a50"); }
    R(0, 66, W, 6, "#7a7a80"); R(0, 72, W, 30, "#4a4a52"); R(0, 100, W, 2, "#e8d070");
    if (p > .3 && p < .48) { var k = seg(p, .3, .48), tx = 260 - k * 330; R(tx, 70, 300, 28, "#3a5a4a"); for (x = 0; x < 300; x += 22) R(tx + x + 4, 76, 14, 10, "#c8d0c0"); R(tx, 96, 300, 2, "#1a1a1a"); }
    R(0, 102, W, 33, "#8a8a90"); for (x = 0; x < W; x += 20) R(x, 102, 1, 33, "#7a7a80");
    R(120, 0, 2, 18, "#2a2a2a"); clock(121, 32, 14, 7, 34 + seg(p, 0, .62) * 6, "#2a2a2a"); R(160, 50, 14, 14, "#2a3a5a"); txt("2", 165, 55, "#f4ecd6");
    var dx = 121 + go * 120, walking = go > 0;
    pet("dog", dx, 126, { nocollar: p < .66, flip: false, step: walking ? (t * 6) | 0 : 0 });
    if (p < .62) { var px0 = dp < .5 ? -10 + dp * 2 * 100 : 90 - (dp - .5) * 2 * 100, carry = dp < .5;
      who(px0, 128, mix(OPOPO, { card: "#4a4a5a", top: "#5a5a6a", f: carry ? 1 : -1, step: (t * 5) | 0, armR: carry ? "out" : "down" }));
      if (carry) R(px0 + 8, 112, 6, 3, "#f0f0f4"); if (day > 0 || dp > .5) { R(100, 124, 8, 3, "#f0f0f4"); R(101, 124, 6, 1, "#c8a060"); } }
    else who(dx - 20, 128, mix(OPOPO, { card: "#4a4a5a", top: "#5a5a6a", f: 1, step: walking ? (t * 5) | 0 : 0, armR: "out" }));
    if (p > .66 && p < .74) { var c = seg(p, .66, .74); g.fillStyle = "rgba(200,64,42," + c + ")"; g.fillRect(dx - 4, 112, 3, 3); }
    snow(t, 70, 9);
    return { tone: .28 };
  }
  function sKittens(t, p) {   /* a box at the shop door: MISO / YUZU, two kittens; Wei, ten, names them; Popo says no cats, for an afternoon */
    var i, x;
    if (p < .62) {
      R(0, 0, W, H, "#d8cfb8"); R(0, 0, W, 12, "#c8bca4");
      R(30, 16, 180, 22, "#7b1e1e"); R(34, 19, 172, 16, "#2a1410"); txt("POPO", 104, 24, "#f6d27a", 2);
      R(30, 38, 180, 70, "#e8dcc0"); R(40, 46, 60, 46, "#f4e7c4"); R(40, 46, 60, 2, "#2a1410"); R(56, 70, 20, 14, "#4a3a2a"); steam(64, 66, t, 3);
      R(118, 44, 40, 64, "#5a2c1a"); R(120, 46, 36, 62, "#6a3420"); R(150, 76, 3, 3, "#e8c46a");
      R(0, 108, W, 27, "#a8a090"); for (x = 0; x < W; x += 8) R(x, 108 + (x / 8 % 2) * 4, 6, 2, "#b8b0a0");
      var pop = seg(p, .08, .2), kh = ease(pop) * 8;
      pet("miso", 172, 112 - kh, { px: 1 }); pet("yuzu", 190, 112 - kh, { px: 1, flip: true });
      R(162, 106, 40, 18, "#c8a070"); R(162, 106, 40, 2, "#a88050"); R(162 + Math.sin(t * 8) * (pop < 1 ? 1 : 0), 102, 14, 4, "#b8905e"); R(188, 102, 14, 4, "#b8905e");
      R(168, 112, 28, 7, "#f4ecd6"); txt("MISO/YUZU", 169, 113, "#3a2a1a");
      who(150, 128, mix(WEI, { sz: .55, vest: null, top: "#3a6aa0", gl: null, f: 1, armR: p > .25 ? "out" : "down", smile: 1 }));
      who(96, 128, mix(OPOPO, { f: 1, arm: "fold", card: "#8a2a3a" }));
      if (p > .3 && p < .58) { g.fillStyle = "rgba(255,255,255,.9)"; g.fillRect(70, 70, 34, 12); txt("NO CATS", 72, 73, "#a8322a"); }
    } else {   /* after that, they took her chair */
      R(0, 0, W, H, "#6a4a32"); R(0, 100, W, 35, "#8a6a48"); R(170, 16, 44, 30, "#a8c8d8"); R(170, 16, 44, 2, "#3a2414"); R(191, 16, 2, 30, "#3a2414");
      R(84, 64, 64, 46, "#8a2a3a"); R(80, 70, 8, 40, "#7a2232"); R(144, 70, 8, 40, "#7a2232"); R(86, 92, 60, 10, "#a8384a"); R(88, 110, 4, 10, "#3a2214"); R(140, 110, 4, 10, "#3a2214");
      pet("miso", 104, 94, { asleep: true }); pet("yuzu", 126, 94, { asleep: true, flip: true });
      for (i = 0; i < 2; i++) { var z = (t * .45 + i * .5) % 1; txt("Z", 112 + i * 14 + z * 4, 70 - z * 14, "rgba(255,255,255," + (1 - z) + ")"); }
      who(176, 126, mix(OPOPO, { f: -1, arm: "hip", smile: 1 }));
    }
    return { tone: .15, cut: cuts(p, [.62]) };
  }
  function sCabin(t, p) {
    var i, x;
    if (p < .38) {   /* Sundays, up the hill to the cabin Josep built */
      band(0, 70, "#a8cce4", "#e4ecdc", 3); disc(200, 18, 7, "#fff6d8");
      g.fillStyle = "#7aa05a"; g.beginPath(); g.moveTo(0, 90); g.lineTo(60, 60); g.lineTo(120, 40); g.lineTo(190, 50); g.lineTo(240, 70); g.lineTo(240, 135); g.lineTo(0, 135); g.fill();
      g.fillStyle = "#6a9050"; g.beginPath(); g.moveTo(0, 110); g.lineTo(80, 90); g.lineTo(160, 96); g.lineTo(240, 84); g.lineTo(240, 135); g.lineTo(0, 135); g.fill();
      for (i = 0; i < 9; i++) { var tx = 10 + i * 26, ty = 70 + rnd(i) * 30; R(tx + 3, ty, 2, 6, "#4a3a2a"); R(tx, ty - 8, 8, 9, "#3a6a3a"); R(tx + 2, ty - 11, 4, 3, "#3a6a3a"); }
      R(126, 26, 30, 16, "#8a5a3a"); g.fillStyle = "#5a3a2a"; g.beginPath(); g.moveTo(122, 27); g.lineTo(141, 14); g.lineTo(160, 27); g.fill(); R(137, 32, 6, 10, "#3a2414"); R(147, 30, 6, 5, "#f4e0a0"); R(150, 12, 3, 8, "#4a3a2a"); steam(151, 10, t, 3);
      var k = seg(p, 0, .36), path = [[20, 128], [70, 108], [60, 92], [110, 72], [100, 58], [134, 44]], s = k * (path.length - 1), j = Math.min(path.length - 2, Math.floor(s)), f = s - j;
      for (i = 0; i < path.length - 1; i++) line(path[i][0], path[i][1], path[i + 1][0], path[i + 1][1], "#d8c8a0");
      var px = path[j][0] + (path[j + 1][0] - path[j][0]) * f, py = path[j][1] + (path[j + 1][1] - path[j][1]) * f;
      who(px, py, mix(OPOPO, { sz: .35 + (1 - k) * .45, f: path[j + 1][0] > path[j][0] ? 1 : -1, step: (t * 4) | 0 }));
    } else if (p < .8) {   /* the windowsill where Wei drew the shop, the station, the slow clock, the lemon tree, the lake */
      R(0, 0, W, H, "#6a4a30"); R(20, 8, 200, 74, "#a8c8dc"); R(20, 60, 200, 22, "#8aa86a"); R(20, 8, 200, 3, "#4a3220"); R(118, 8, 3, 74, "#4a3220");
      R(10, 82, 220, 12, "#c8a878"); R(10, 82, 220, 2, "#e0c898"); R(10, 94, 220, 41, "#5a3a24");
      var d = Math.floor(seg(p, .4, .76) * 5.0001), cr = ["#c8302a", "#3a6aa0", "#e8a020", "#3a8a3a", "#5a8ac8"];
      var DR = [function (x, y) { R(x, y + 8, 22, 14, cr[0]); R(x + 8, y + 14, 6, 8, "#3a2a1a"); line(x, y + 8, x + 11, y, cr[0]); line(x + 11, y, x + 22, y + 8, cr[0]); },
        function (x, y) { R(x, y + 6, 26, 16, cr[1]); R(x + 2, y + 10, 4, 4, "#fff"); R(x + 10, y + 10, 4, 4, "#fff"); R(x + 18, y + 10, 4, 4, "#fff"); R(x, y + 22, 26, 1, "#333"); },
        function (x, y) { R(x + 8, y, 10, 22, "#a87a4a"); disc(x + 13, y + 6, 4, "#fff"); line(x + 13, y + 6, x + 13, y + 3, "#333"); line(x + 13, y + 6, x + 15, y + 6, "#333"); },
        function (x, y) { R(x + 10, y + 10, 3, 12, "#6a4a2a"); disc(x + 11, y + 6, 8, cr[3]); R(x + 6, y + 4, 2, 2, "#f0d040"); R(x + 14, y + 8, 2, 2, "#f0d040"); },
        function (x, y) { R(x, y + 12, 26, 10, cr[4]); line(x + 4, y + 14, x + 8, y + 14, "#fff"); R(x + 16, y + 4, 1, 10, "#6a4a2a"); line(x + 16, y + 4, x + 22, y + 14, "#ccc"); }];
      for (i = 0; i < 5; i++) { var bx = 22 + i * 42; if (i < d) { R(bx - 1, 98, 32, 28, "#fbf6ea"); DR[i](bx + 2, 100); } }
      if (p > .74) txt("HOME", 98, 128, "#e8c46a");
    } else {   /* that's how Nearby began: the drawings become the little town, lit */
      band(0, 135, "#141020", "#2a2040", 3); var k2 = seg(p, .8, 1);
      for (i = 0; i < 40; i++) R(rnd(i) * W, rnd(i + 2) * 60, 1, 1, "rgba(255,255,255," + (.4 + .6 * Math.abs(Math.sin(t + i))) + ")");
      R(0, 100, W, 35, "#1e1a2a");
      var B = [[20, 70, 30, 30], [56, 60, 24, 40], [86, 40, 14, 60], [106, 66, 40, 34], [150, 74, 26, 26], [182, 64, 34, 36]];
      B.forEach(function (b, j) { R(b[0], b[1], b[2], b[3], "#2a2438"); for (var y = b[1] + 4; y < b[1] + b[3] - 4; y += 8) for (var x2 = b[0] + 3; x2 < b[0] + b[2] - 3; x2 += 7) if (rnd(x2 * 7 + y) < k2 * 1.2) R(x2, y, 3, 4, "#f2a33a"); });
      clock(93, 48, 5, 7, 40 + t * .2, "#2a2438");
      pet("miso", 110, 66, { asleep: true }); pet("dog", 196, 100, {});
      late = function () { g.globalAlpha = ease(seg(p, .88, .98)); txt("NEARBY", 120 - txtW("NEARBY", 2) / 2, 112, "#f2a33a", 2); g.globalAlpha = 1; };
    }
    return { tone: p < .8 ? .1 : 0, cut: cuts(p, [.38, .8]) };
  }
  function sTonight(t, p) {   /* tonight at Next Door: everyone home, the tin open, one empty chair for you; a flash, and it's a photo */
    var i, x;
    R(0, 0, W, H, "#3a2416"); for (i = 0; i < 3; i++) { R(0, 14 + i * 18, W, 2, "#5a3a22"); for (x = 6; x < W; x += 14) R(x, 4 + i * 18, 4, 10, ["#4a6a8a", "#8a4a3a", "#c8a040", "#3a6a4a"][(x / 14 + i) % 4 | 0]); }
    R(196, 4, 32, 34, "#141a2a"); R(196, 4, 32, 2, "#2a1a10"); R(211, 4, 2, 34, "#2a1a10"); disc(220, 14, 2, "#f4ecd2");
    R(0, 62, W, 16, "#5a3622"); R(0, 62, W, 2, "#7a5434");
    pet("miso", 24, 62, { asleep: true }); pet("yuzu", 218, 62, { flip: true });
    for (i = 0; i < 5; i++) { R(30 + i * 44, 78, 1, 57, "#2a1a10"); } R(0, 110, W, 25, "#4a2e1c");
    who(40, 122, mix(WEI, { f: 1, smile: 1 })); who(200, 122, mix(MEI, { f: -1, armL: "out", smile: 1, step: (t * 2) | 0 }));
    who(82, 118, mix(OPOPO, { sit: 1, f: 1, smile: 1 }));
    R(56, 96, 128, 6, "#8a5a34"); R(60, 102, 4, 24, "#5a3a22"); R(176, 102, 4, 24, "#5a3a22");
    R(96, 88, 18, 8, "#8a8a8a"); steam(104, 84, t, 3);
    R(122, 90, 24, 6, "#24456e"); R(122, 90, 24, 1, "#e8c46a"); for (i = 0; i < 6; i++) R(124 + i * 4, 88, 2, 2, ["#c8302a", "#e8c46a", "#f0f0f4", "#3a6aa0", "#e8913a", "#5a8a3a"][i]);
    var ch = 160; R(ch, 80, 3, 30, "#6a4026"); R(ch, 100, 16, 3, "#6a4026"); R(ch + 13, 100, 3, 26, "#6a4026"); R(ch, 103, 3, 23, "#6a4026");
    if (p > .45) { var gl = .2 + .15 * Math.sin(t * 2); g.fillStyle = "rgba(255,226,150," + gl + ")"; g.fillRect(ch - 4, 76, 24, 52); }
    pet("dog", 120, 126, { asleep: true });
    if (p > .9) { late = function () { g.fillStyle = "rgba(255,255,255," + Math.max(0, 1 - (p - .9) / .06) + ")"; g.fillRect(0, 0, W, H); }; }
    return { tone: 0 };
  }
  var SCENES = [s1968, sJosep, sRose, sShop, sLemon, sBowl, sCards, sMantou, sKittens, sCabin, sTonight];
  /* tonight at her table, telling it: one small thing she does between the chapters (the asides) */
  function sTable(t, p, k) {
    R(0, 0, W, H, "#3a2a30"); for (var x = 0; x < W; x += 24) R(x, 0, 1, 92, "#34262c");
    R(16, 12, 40, 32, "#141a2a"); R(16, 12, 40, 2, "#2a1a10"); R(35, 12, 2, 32, "#2a1a10"); disc(26, 22, 2, "#f4ecd2");
    R(150, 0, 2, 14, "#2a1a10"); R(142, 14, 18, 6, "#c8902a"); g.fillStyle = "rgba(255,210,120,.12)"; g.beginPath(); g.moveTo(140, 20); g.lineTo(162, 20); g.lineTo(230, 92); g.lineTo(72, 92); g.fill();
    if (k === 4) { R(196, 10, 34, 82, "#2a1a14"); g.fillStyle = "rgba(255,226,160,.35)"; g.fillRect(198, 12, 8, 80); }
    if (k === 8) { R(178, 46, 30, 46, "#6a4026"); R(178, 70, 30, 4, "#8a5a34"); }
    var bob = k === 1 ? Math.round(Math.sin(t * 14)) : 0;
    popoNow(88, 28 + bob, 2, {});
    if (k === 1) { R(104, 60 + bob, 22, 6, "#8a2a3a"); }
    R(0, 92, W, 43, "#6a4428"); R(0, 92, W, 2, "#8a6040"); for (x = 0; x < W; x += 40) R(x, 94, 1, 41, "#5a3820");
    R(60, 98, 12, 9, "#f4ecd6"); R(72, 100, 3, 4, "#f4ecd6"); R(62, 100, 8, 2, "#b88a4a");
    if (k === 0) { var tl = Math.min(1, t / 1.2); R(36, 84 - tl * 4, 18, 12, "#3a6a5a"); R(54, 86 - tl * 6, 6, 2, "#3a6a5a"); if (tl >= 1) R(61, 88, 1, 10, "#c8a060"); }
    if (k === 2 || k === 9 || k === 6) { R(150, 96, 40, 18, "#24456e"); R(150, 96, 40, 2, "#e8c46a"); txt("POPO", 162, 103, "#e8c46a"); if (k === 2 && (t * 2 | 0) % 2) { R(158, 90, 1, 3, "#f4ecd6"); R(164, 89, 1, 3, "#f4ecd6"); } }
    if (k === 3) for (var i = 0; i < 3; i++) { var z = (t * .4 + i / 3) % 1; note(150 + i * 10 + Math.sin(t + i) * 4, 50 - z * 30, "rgba(255,226,160," + (1 - z) + ")"); }
    if (k === 5) { R(100, 84, 32, 12, "#f2f2f6"); R(104, 96, 24, 3, "#e4e4ec"); R(102, 86, 28, 1, "#3a5aa8"); line(110, 84, 114, 96, "#f2c44a"); line(122, 84, 120, 96, "#f2c44a"); }
    if (k === 6) { R(96, 100, 28, 10, "#f2f2f6"); R(98, 98, 24, 3, "#e8d8a8"); steam(110, 94, t, 3); }
    if (k === 7) { var th = Math.round(Math.sin(t * 9) * 3); pet("dog", 150, 134, { asleep: true }); R(134 + th, 126 - Math.abs(th), 5, 2, "#e8c48a"); }
    if (k === 8) { var jk = seg(t, .4, 1.6), cx = 194, cy = 92 - Math.sin(jk * Math.PI) * 22 - jk * 22; if (t > 2.4) { cx = 118; cy = 98; } pet("miso", cx, cy, {}); }
    if (k === 9 && (t * 3 | 0) % 2) { line(100, 70, 96, 64, "#f4e0a0"); line(140, 70, 144, 64, "#f4e0a0"); line(120, 66, 120, 58, "#f4e0a0"); }
    return { tone: 0 };
  }

  /* ---------- the words: a sentence at a time ---------- */
  var LANG, CJK;
  function U(k) { return P.U(k); }
  function split(s) {
    s = String(s || "").replace(/<[^>]+>/g, "").trim(); if (!s) return [];
    var out;
    if (CJK) out = s.match(/[^。！？]+[。！？]+[」』”"]?|[^。！？]+$/g) || [s];
    else out = s.split(/(?<=[.!?…]["”»’)]?)\s+(?=["“«¡¿*]?[A-ZÀ-ÖØ-Þ0-9¡¿"“«*])/);
    var m = []; out.forEach(function (x) { x = x.trim(); if (!x) return; var last = m[m.length - 1]; if (last && (CJK ? last.length < 9 : last.length < 22)) m[m.length - 1] = last + (CJK ? "" : " ") + x; else m.push(x); });
    return m;
  }
  function dur(s) { var n = s.replace(/\*[^*]*\*/g, " ").length; return Math.max(2.6, Math.min(10, CJK ? 1.3 + n * .2 : 1.4 + n * .058)); }
  var SHOTS = [];
  function build() {
    LANG = P.lang(); CJK = /^(zh|tw|yue)$/.test(LANG); SHOTS = [];
    function sh(o) { o.lines = o.lines.filter(Boolean); o.d = o.lines.map(dur); o.total = o.d.reduce(function (a, b) { return a + b; }, 0) + (o.pad || 0); SHOTS.push(o); }
    sh({ kind: "open", ch: -1, lines: split(U("say")), pad: 1.6 });
    P.D.ch.forEach(function (c, i) {
      var L = c[LANG] || c.en; sh({ kind: "scene", ch: i, head: [L[0], L[1]], lines: split(L[2]), pad: 2.2 });
      var a = P.D.as && P.D.as[i] && (P.D.as[i][LANG] || P.D.as[i].en); if (a && i < P.D.ch.length - 1) sh({ kind: "aside", ch: i, k: i, lines: [a], pad: .6 });
    });
    sh({ kind: "photo", ch: P.D.ch.length - 1, lines: [U("chair")], pad: .4 });
  }

  /* ---------- the player ---------- */
  var cur = 0, li = 0, lt = 0, st = 0, playing = true, last = 0, raf = 0, frameT = 0, done = false;
  var sub = document.getElementById("line"), cap = document.getElementById("cap"), capW = document.getElementById("capw"), capT = document.getElementById("capt"), fin = document.getElementById("fin"), pp = document.getElementById("pp"), dots = document.getElementById("dots"), face = document.getElementById("face");
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
  function showLine() {
    var S = SHOTS[cur], s = S.lines[li] || "";
    sub.classList.toggle("as", S.kind === "aside" || S.kind === "open");
    sub.innerHTML = esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");
    sub.classList.remove("in"); void sub.offsetWidth; sub.classList.add("in");
  }
  function headShow() {
    var S = SHOTS[cur]; cap.classList.remove("on");
    if (S.kind === "scene") { capW.textContent = S.head[0]; capT.textContent = S.head[1]; void cap.offsetWidth; cap.classList.add("on"); }
    [].forEach.call(dots.children, function (d, j) { d.setAttribute("aria-current", String(j === S.ch + 1)); });
  }
  function go(i, keepLine) { cur = Math.max(0, Math.min(SHOTS.length - 1, i)); li = keepLine ? Math.min(li, SHOTS[cur].lines.length - 1) : 0; lt = 0; st = 0; done = false; fin.hidden = true; headShow(); showLine(); }
  function elapsed() { var S = SHOTS[cur], e = 0; for (var j = 0; j < li; j++) e += S.d[j]; return e + Math.min(lt, S.d[li] || 0); }
  function next() {
    var S = SHOTS[cur];
    if (li < S.lines.length - 1) { li++; lt = 0; showLine(); return; }
    if (cur < SHOTS.length - 1) return go(cur + 1);
    end();
  }
  function end() { done = true; playing = false; paintPP(); fin.hidden = false; try { fin.querySelector("button,a").focus({ preventScroll: true }); } catch (e) {} }
  function chapter(d) { var S = SHOTS[cur], ch = S.ch + d; for (var j = 0; j < SHOTS.length; j++) if (SHOTS[j].ch === ch && SHOTS[j].kind !== "aside") return go(j); if (d < 0) go(0); }
  function paintPP() { pp.textContent = playing ? "❚❚" : "▶"; pp.setAttribute("aria-label", P.T(playing ? "pause" : "play")); }
  function frame(now) {
    raf = requestAnimationFrame(frame);
    var dt = Math.min(.1, (now - (last || now)) / 1000); last = now;
    if (playing && !done && !document.hidden) { lt += dt; st += dt; var S = SHOTS[cur]; if (li === 0 && st < (S.kind === "scene" ? 1.4 : .3)) lt = 0; if (lt >= S.d[li] + (li === S.lines.length - 1 ? .8 : .15)) next(); }
    if (now - frameT < 66) return; frameT = now;
    draw();
  }
  function draw() {
    var S = SHOTS[cur]; if (!S) return; var e = elapsed(), p = Math.min(1, e / Math.max(.1, S.total - (S.pad || 0))), t = STILL ? 0 : st, r; late = null;
    g.globalAlpha = 1;
    if (S.kind === "open") r = sOpen(t, p);
    else if (S.kind === "aside") r = sTable(t, p, S.k);
    else if (S.kind === "photo") { r = sTonight(9, 1); }
    else r = SCENES[S.ch](t, p);
    r = r || {};
    tone(r.tone || 0); if (r.tone) grain(t, 160); if (late) late(); if (r.cut) dip(r.cut);
    if (S.kind === "photo") { tone(.25); g.strokeStyle = "#fbf6ea"; g.lineWidth = 8; g.strokeRect(4, 4, W - 8, H - 8); }
    var since = st; if (since < .5) dip(1 - since / .5);
    vignette();
  }

  /* ---------- the controls ---------- */
  function paintDots() { dots.innerHTML = ""; for (var j = -1; j < P.D.ch.length; j++) { var b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", j < 0 ? U("title") : (P.D.ch[j][LANG] || P.D.ch[j].en)[1]); (function (ch) { b.onclick = function () { for (var k = 0; k < SHOTS.length; k++) if (SHOTS[k].ch === ch && SHOTS[k].kind !== "aside") { playing = true; paintPP(); return go(k); } }; })(j); dots.appendChild(b); } }
  function words() {
    document.getElementById("prev").setAttribute("aria-label", P.T("prev")); document.getElementById("nextc").setAttribute("aria-label", P.T("next"));
    document.getElementById("rd").textContent = P.T("read"); document.getElementById("again").textContent = "↺ " + P.T("again");
    document.getElementById("hint").textContent = P.T("hint"); paintPP(); paintDots();
  }
  document.getElementById("pp").onclick = function () { if (done) { go(0); playing = true; } else playing = !playing; paintPP(); };
  document.getElementById("prev").onclick = function () { playing = true; paintPP(); chapter(-1); };
  document.getElementById("nextc").onclick = function () { playing = true; paintPP(); chapter(1); };
  document.getElementById("again").onclick = function () { playing = true; paintPP(); go(0); };
  document.getElementById("scr").addEventListener("click", function (e) { if (e.target.closest("#fin")) return; if (done) return; if (!playing) { playing = true; paintPP(); return; } next(); document.getElementById("hint").classList.add("gone"); });
  addEventListener("keydown", function (e) {
    if (document.documentElement.classList.contains("read") || e.target.closest && e.target.closest("input,textarea,.lm")) return;
    if (e.key === " ") { e.preventDefault(); document.getElementById("pp").click(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); if (!done) next(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); if (li > 0) { li--; lt = 0; showLine(); } else chapter(-1); }
  });
  document.getElementById("rd").onclick = function () { playing = false; paintPP(); P.read(true); };
  window.addEventListener("popolang", function () { var ch = SHOTS[cur] ? SHOTS[cur].ch : -1, kind = SHOTS[cur] ? SHOTS[cur].kind : "open"; build(); words(); var j = 0; for (var k = 0; k < SHOTS.length; k++) if (SHOTS[k].ch === ch && SHOTS[k].kind === kind) { j = k; break; } go(j); });
  window.addEventListener("popowatch", function () { if (done) go(0); playing = true; paintPP(); });
  build(); words(); go(0); raf = requestAnimationFrame(frame);
  window.POPOFILM = { go: go, shots: function () { return SHOTS; }, at: function () { return { shot: cur, line: li, kind: SHOTS[cur].kind, ch: SHOTS[cur].ch }; }, next: next, end: end, draw: draw, seek: function (i, l, tt) { go(i); li = l || 0; lt = tt || 0; st = 5; showLine(); draw(); }, pause: function () { playing = false; paintPP(); } };
})();
