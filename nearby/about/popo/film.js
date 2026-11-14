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
    if (o.coat) { R(L - 1, ty, tw + 2, th + Math.round(lh * .55), o.coat); R(cx, ty + 2, 1, th - 2, "rgba(0,0,0,.25)"); if (o.scarf) R(L, ty, tw, 2, o.scarf); }
    else if (o.scarf) { R(L, ty, tw, 2, o.scarf); R(L + tw - 3, ty + 2, 2, 4, o.scarf); }
    var arm = o.arm || "down", ac = o.card || o.coat || o.sleeve || tc;
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
    var hx1 = f < 0 ? L - 3 : L + tw + 1, hy1 = ty + th - 1;
    if (o.paper) { R(hx1 - 2, hy1 - 6, 6, 8, "#ece6d6"); R(hx1 - 1, hy1 - 4, 4, 1, "#9a948a"); R(hx1 - 1, hy1 - 2, 3, 1, "#9a948a"); }
    if (o.bag) { R(hx1 - 1, hy1, 5, 6, o.bag); R(hx1, hy1 - 2, 3, 1, o.bag); }
    if (o.cane) { R(hx1 + 1, hy1, 1, fy - hy1, "#5a3a22"); }
    if (o.flowers) { R(hx1, hy1 - 6, 1, 6, "#3a6a3a"); R(hx1 - 1, hy1 - 8, 3, 3, o.flowers); }
    /* head */
    R(cx - 1, top + hd, 2, 1, skin); var hx0 = cx - (hd >> 1); R(hx0, top, hd, hd, skin);
    var hc = o.hairC || "#1a120d", hair = o.hair || "short";
    if (hair === "bob" || hair === "pig") { R(hx0 - 1, top - 1, hd + 2, 3, hc); R(hx0 - 1, top, 2, hd - 1, hc); R(hx0 + hd - 1, top, 2, hd - 1, hc); R(hx0, top + 2, hd, 1, hc); if (hair === "pig") { R(hx0 - 3, top + 2, 2, 5, hc); R(hx0 + hd + 1, top + 2, 2, 5, hc); R(hx0 - 3, top + 2, 2, 1, o.ribbon || "#c8402a"); R(hx0 + hd + 1, top + 2, 2, 1, o.ribbon || "#c8402a"); } }
    else if (hair === "long") { R(hx0 - 1, top - 1, hd + 2, 3, hc); R(hx0 - 1, top, 2, hd + 5, hc); R(hx0 + hd - 1, top, 2, hd + 5, hc); }
    else if (hair === "bun") { R(hx0, top - 1, hd, 3, hc); R(hx0 - 1, top + 1, 1, 4, hc); R(hx0 + hd, top + 1, 1, 4, hc); R(cx - 2, top - 4, 4, 3, hc); R(cx + 2, top - 4, 2, 1, "#4aa07a"); }
    else if (hair === "pink") { R(hx0 - 1, top - 1, hd + 2, 3, hc); R(hx0, top + 2, hd, 1, hc); R(hx0 - 1, top, 2, hd - 2, hc); R(hx0 + hd - 1, top, 2, hd - 2, hc); R(cx + (hd >> 1), top - 3, 3, 6, hc); R(cx + (hd >> 1) + 1, top + 3, 2, 4, "#d9679a"); }
    else if (hair === "cap") { R(hx0 - 1, top - 1, hd + 2, 3, o.capC || "#4a4038"); R(f < 0 ? hx0 - 3 : hx0 + hd - 1, top + 1, 3, 1, o.capC || "#4a4038"); R(hx0, top + 2, 1, 2, hc); R(hx0 + hd - 1, top + 2, 1, 2, hc); }
    else if (hair === "hat") { var hcc = o.capC || "#3a3030"; R(hx0, top + 2, 1, 3, hc); R(hx0 + hd - 1, top + 2, 1, 3, hc); R(hx0 - 2, top + 1, hd + 4, 1, hcc); R(hx0, top - 3, hd, 4, hcc); R(hx0, top - 1, hd, 1, o.band || "#8a2a2a"); }
    else if (hair === "beret") { R(hx0, top + 2, 1, 2, hc); R(hx0 + hd - 1, top + 2, 1, 2, hc); R(hx0 - 1, top - 2, hd + 2, 4, o.capC || "#2a2a3a"); R(cx, top - 3, 1, 1, o.capC || "#2a2a3a"); }
    else if (hair === "bald") { R(hx0, top + 2, 1, 3, hc); R(hx0 + hd - 1, top + 2, 1, 3, hc); }
    else { R(hx0, top - 1, hd, 3, hc); R(hx0, top + 2, 1, 2, hc); R(hx0 + hd - 1, top + 2, 1, 2, hc); }
    if (o.hood) { R(hx0 - 1, top - 2, hd + 2, 3, o.hood); R(hx0 - 2, top, 2, hd, o.hood); R(hx0 + hd, top, 2, hd, o.hood); }
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
  /* anyone else on the street: a different person each visit (VS), all ages, skins, hair, coats, skirts and hats */
  var VS = (Math.random() * 997) | 0;
  var SKINS = ["#f4d6b4", "#eac39c", "#e0b088", "#c99468", "#a8734a", "#7e4f30", "#5a3620"], HAIRC = ["#1a120d", "#2a1c12", "#4a2e1c", "#7a4a26", "#b0844a", "#d8b878", "#8a2e1e"];
  var TOPS = ["#c8b89a", "#7a6a5a", "#5a6a7a", "#8a5a5a", "#5a7a5a", "#6a5a7a", "#b88a4a", "#3a4a6a", "#a84a3a", "#d8d0c0", "#4a6a6a"], BOTS = ["#3a3a48", "#4a3a2a", "#2a2a2a", "#5a4a3a", "#3a4a3a", "#6a5a4a", "#7a3a3a", "#3a3a5a"];
  var COATS = ["#5a4a3a", "#3a3a48", "#7a6248", "#4a5a4a", "#6a3a32", "#8a7a62"], HATS = ["short", "long", "bun", "bob", "cap", "hat", "beret", "pig", "short", "long", "bald"];
  function folk(sd, x, fy, o) {
    var r = function (k) { return rnd(sd * 13.71 + k * 7.3); }, old = r(1) < .2, kid = !old && r(2) < .16, h = HATS[(r(4) * HATS.length) | 0];
    if (kid && (h === "hat" || h === "bald" || h === "beret")) h = "pig"; if (!old && h === "bald") h = "short";
    var skirt = r(6) < .45, cold = o && o.cold;
    var base = { sz: kid ? .42 + r(7) * .22 : .84 + r(7) * .16, skin: SKINS[(r(3) * SKINS.length) | 0], hair: h, hairC: old ? (r(5) < .5 ? "#c8c4bc" : "#9a948a") : HAIRC[(r(5) * HAIRC.length) | 0],
      top: TOPS[(r(8) * TOPS.length) | 0], bot: BOTS[(r(9) * BOTS.length) | 0], skirt: skirt, tights: skirt && r(10) < .55 ? (r(11) < .5 ? "#3a3036" : "#6a5a5a") : null,
      capC: ["#3a3030", "#5a4a3a", "#2a2a3a", "#7a2a2a", "#c8b48a"][(r(12) * 5) | 0], f: r(13) < .5 ? 1 : -1,
      coat: (cold ? r(14) < .8 : r(14) < .25) ? COATS[(r(15) * COATS.length) | 0] : null, scarf: cold && r(16) < .5 ? ["#a8302a", "#3a6aa0", "#e8c46a", "#5a8a5a"][(r(17) * 4) | 0] : null,
      paper: !kid && r(18) < .14, bag: !kid && r(19) < .22 ? ["#6a4a2c", "#2a2a2a", "#a8402a", "#c8a870"][(r(20) * 4) | 0] : null, cane: old && r(21) < .5, smile: r(22) < .4, gl: !kid && r(23) < .18 ? "#5a5a5a" : null };
    return who(x, fy, mix(base, o || {}));
  }
  function pigeon(x, y, t, sd) { var pk = Math.sin(t * 6 + sd) > .6 ? 1 : 0; R(x, y - 3, 5, 3, "#8a8a92"); R(x + (sd % 2 ? -1 : 4), y - 4 - pk + 1, 2, 2, "#6a6a74"); R(x + 1, y, 1, 1, "#c86a5a"); R(x + 3, y, 1, 1, "#c86a5a"); R(x + 1, y - 2, 3, 1, "#7a9a8a"); }
  function bird(x, y, t, c) { var w = Math.sin(t * 9 + x) > 0; R(x, y, 1, 1, c); R(x - 2, y - (w ? 1 : 0), 2, 1, c); R(x + 1, y - (w ? 1 : 0), 2, 1, c); }
  function puff(x, y, t, n, c) { for (var i = 0; i < n; i++) { var k = (t * .25 + i / n) % 1; g.fillStyle = (c || "rgba(240,236,228,") + (.7 * (1 - k)) + ")"; var r2 = 2 + k * 6; disc(Math.round(x + k * 14 + Math.sin(i) * 2), Math.round(y - k * 18), Math.round(r2), g.fillStyle); } }
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
      var fsx = 200 - t * 2; R(fsx, 60, 22, 4, "#4a3a3a"); R(fsx + 4, 56, 12, 4, "#5a4a44"); R(fsx + 8, 50, 3, 6, "#3a2a2a"); puff(fsx + 9, 48, t, 4, "rgba(90,80,80,");
      R(0, 0, W, 3, "#3a2a2a"); for (var fl = 0; fl < 12; fl++) R(8 + fl * 20, 3 + (fl % 2), 6, 4, ["#c8302a", "#e8c040", "#3a6aa0", "#f4ecd6"][fl % 4]);
      R(0, 104, W, 31, "#6a4a30"); for (var x = 0; x < W; x += 12) R(x, 104, 1, 31, "#54381f"); R(0, 88, W, 2, "#e8e0d0"); for (x = 4; x < W; x += 16) R(x, 88, 2, 16, "#e8e0d0"); R(0, 96, W, 1, "#c8c0b0");
      disc(30, 96, 6, "#e8e0d0"); disc(30, 96, 4, "#c8302a"); disc(30, 96, 2, "#6a4a30"); R(24, 95, 12, 2, "#e8e0d0");   /* the lifebuoy */
      folk(VS + 1, 170, 124, { f: -1, sz: .95 }); folk(VS + 2, 196, 124, { f: -1 }); folk(VS + 3, 58, 124, { f: 1, armR: "out" });
      R(140, 118, 18, 6, "#5a4a3a"); R(142, 114, 14, 4, "#6a5a48");   /* a trunk */
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
      R(44, 8, 154, 2, "#2a1c10"); for (var lr = 46; lr < 196; lr += 4) R(lr, 10, 1, 4, "#2a1c10"); R(60, 2, 30, 8, "#6a4a2c"); R(150, 4, 22, 6, "#3a4a5a");   /* the luggage rack */
      R(46, 18, 8, 66, "#8a3a2a"); R(188, 18, 8, 66, "#8a3a2a"); R(50, 18, 2, 66, "#6a2a20"); R(190, 18, 2, 66, "#6a2a20");   /* curtains */
      R(150, 88, 46, 4, "#6a4a2a"); R(160, 80, 8, 8, "#e8d070"); R(161, 79, 6, 2, "#c8a040"); R(162, 82, 2, 2, "#f4e090"); R(165, 84, 2, 2, "#f4e090");   /* the jar of salt lemons */
      R(0, 92, W, 43, "#5a3a2a"); R(52, 74, 30, 46, "#7a2a2a"); R(52, 74, 30, 3, "#5a1a1a"); R(48, 108, 40, 6, "#6a2222");
      R(158, 74, 38, 46, "#7a2a2a"); R(158, 74, 38, 3, "#5a1a1a"); R(154, 108, 46, 6, "#6a2222"); folk(VS + 4, 176, 116, { sit: 1, f: -1, shut: 1, hair: "hat" });
      if ((t * .5 | 0) % 2) txt("Z", 184, 70 - (t * 4 % 6), "rgba(255,255,255,.7)");
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
      puff(70, 64, t, 5); puff(40, 62, t + 2, 4);
      R(196, 70, 30, 34, "#5a3a24"); R(198, 72, 26, 14, "#e8dcc0"); for (i = 0; i < 4; i++) R(200 + i * 6, 74, 4, 10, ["#c8302a", "#3a6aa0", "#e8c040", "#f4ecd6"][i]); txt("PRENSA", 199, 88, "#f4ecd6");   /* the kiosk */
      for (i = 0; i < 5; i++) folk(VS + 10 + i, ((148 + i * 22 + t * (i % 2 ? 6 : -5)) % 260 + 260) % 260 - 10, 124 + (i % 2), { step: (t * 4 + i) | 0, f: i % 2 ? 1 : -1 });
      var px2 = 20 + (t * 6) % 80; R(px2, 118, 18, 3, "#4a3a2a"); disc(px2 + 3, 122, 2, "#2a2a2a"); disc(px2 + 15, 122, 2, "#2a2a2a"); R(px2 + 1, 108, 8, 10, "#6a4a2c"); R(px2 + 10, 112, 7, 6, "#3a4a5a"); folk(VS + 20, px2 - 6, 124, { hair: "cap", capC: "#2a2a3a", top: "#3a3a48", bot: "#3a3a48", f: 1, step: (t * 4) | 0, armR: "out", sz: 1 });   /* a porter */
      for (i = 0; i < 3; i++) pigeon(150 + i * 13 + (Math.sin(t + i) * 3 | 0), 132, t, i);
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
      for (i = 0; i < 3; i++) folk(VS + 30 + i, ((i * 90 + t * (i % 2 ? 7 : -7)) % 280 + 280) % 280 - 20, 112, { sz: .7, step: (t * 4 + i) | 0, f: i % 2 ? 1 : -1 });
      for (i = 0; i < 2; i++) pigeon(20 + i * 14 + (Math.sin(t * .7 + i) * 4 | 0), 128, t, i + 3);
      R(0, 96, W, 39, "#7a6a5a"); for (x = 0; x < W; x += 20) R(x, 96, 1, 39, "#6a5a4a"); R(0, 94, W, 2, "#e8d070");
      var k = ease(seg(p, .02, .22)), jx = 190 - k * 52;
      who(84, 124, mix(YPOPO, { f: 1 })); R(66, 112, 12, 10, "#6a4a2c"); R(66, 112, 12, 1, "#8a6a44");
      who(jx, 124, mix(JOSEP, { f: -1, step: k < 1 ? (t * 5) | 0 : 0, armL: p > .25 ? "out" : "down" }));
      R(jx + 6, 106, 4, 6, "#9a9aa0"); R(jx + 7, 104, 1, 2, "#9a9aa0");   /* his oil can */
      if (p > .25) { g.fillStyle = "rgba(255,255,255,.85)"; g.fillRect(70, 62, 30, 14); txt("?", 76, 66, "#3a2a1a"); txt("?", 84, 66, "#3a2a1a"); txt("?", 92, 66, "#3a2a1a"); }
    } else if (p < .72) {   /* through the old town at night to her cousin's door; he carries the suitcase */
      band(0, 135, "#1a1830", "#2a2440", 3); var sx = (t * 14) % 60;
      for (i = -1; i < 6; i++) { var bx = i * 60 - sx, hh = 24 + rnd(i + 10 + Math.floor(t * 14 / 60)) * 10; R(bx, hh, 58, 110 - hh, "#3a3444"); for (var wy = hh + 8; wy < 96; wy += 16) for (var wx = bx + 8; wx < bx + 52; wx += 14) { R(wx, wy, 6, 9, rnd(wx * 3 + wy) > .6 ? "#e8b860" : "#24202e"); R(wx - 2, wy + 9, 10, 1, "#1a1620"); } }
      for (i = 0; i < 3; i++) { var wl = ((i * 80 + 30 - t * 14) % 240 + 240) % 240 - 20; line(wl, 30, wl + 50, 34, "#5a5468"); for (var cl = 0; cl < 4; cl++) R(wl + 6 + cl * 11, 32, 5, 6, ["#c8c0b0", "#a85a4a", "#5a7aa0", "#d8c070"][(cl + i) % 4]); }
      for (i = 0; i < 3; i++) { var lx = ((i * 90 - t * 14) % 270 + 270) % 270 - 10; R(lx, 60, 2, 50, "#1a1620"); R(lx - 2, 58, 6, 4, "#f4d48a"); g.fillStyle = "rgba(255,210,130,.12)"; g.fillRect(lx - 14, 62, 30, 48); }
      R(0, 110, W, 25, "#2a2630"); for (x = 0; x < W; x += 10) R(x - sx % 10, 112 + (x / 10 % 2) * 5, 8, 3, "#34303c");
      var st = (t * 4) | 0; who(104, 126, mix(YPOPO, { f: 1, step: st })); who(128, 126, mix(JOSEP, { f: 1, step: st + 1, armR: "out" })); R(136, 112, 12, 10, "#6a4a2c");
      if (p > .62) { R(190, 74, 22, 36, "#5a3a22"); g.fillStyle = "rgba(255,210,130," + (seg(p, .62, .7) * .5) + ")"; g.fillRect(190, 74, 22, 36); }
    } else {   /* years later: the clock that runs slow, "so the good hours last longer" */
      R(0, 0, W, H, "#4a3424"); for (i = 0; i < 9; i++) R(i * 28, 0, 1, 96, "#3e2a1c");
      R(0, 96, W, 39, "#6a4a2c"); R(0, 96, W, 2, "#8a6a44");
      [[40, 30], [200, 40], [60, 62], [180, 70]].forEach(function (c, j) { disc(c[0], c[1], 7, "#2a1a10"); clock(c[0], c[1], 6, j * 3, (t * 60 * (j + 1)) % 60); });
      clock(120, 44, 22, 10, 10 + t * .15, "#2a1a10"); txt("LENT", 112, 56, "#a8322a");
      var pa = Math.sin(t * 1.6) * .35; line(120, 67, 120 + Math.sin(pa) * 20, 67 + Math.cos(pa) * 20, "#c8a040"); disc(Math.round(120 + Math.sin(pa) * 20), Math.round(67 + Math.cos(pa) * 20), 3, "#e8c46a");
      R(10, 92, 60, 4, "#5a3a22"); R(14, 86, 8, 6, "#8a8a90"); R(26, 88, 3, 4, "#c8a040"); R(34, 89, 10, 3, "#3a3a3a"); R(50, 84, 6, 8, "#9a9aa0"); R(52, 82, 1, 2, "#9a9aa0");
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
      for (i = 0; i < 7; i++) folk(VS + 40 + i, ((i * 47 + t * (i % 2 ? 8 : -8)) % 290 + 290) % 290 - 25, 104 + (i % 3), { sz: .8 + (i % 2) * .1, step: (t * 4 + i) | 0, f: i % 2 ? 1 : -1, flowers: i % 3 === 0 ? "#d8303a" : null, paper: i % 3 === 1 });
      for (i = 0; i < 4; i++) { R(66 + i * 7, 84, 5, 6, "#5a4a3a"); disc(68 + i * 7, 82, 2, "#d8303a"); }   /* buckets of roses */
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
      R(30, 108, 56, 1, "#c8b896"); for (var cr = 0; cr < 24; cr++) { var ca = cr / 24 * Math.PI * 2; R(78 + Math.cos(ca) * 9, 88 + Math.sin(ca) * 9, 1, 1, "rgba(120,80,40,.35)"); } txt("APRENDE.", 128, 98, "#a8322a"); txt("I PARLA.", 128, 106, "#a8322a");
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
    R(64, 18, 40, 30, "#2a1a10"); R(66, 20, 36, 26, "#f2e6c8"); for (i = 0; i < 4; i++) { R(70, 23 + i * 6, 6, 4, "#7b1e1e"); R(80, 24 + i * 6, 18, 1, "#5a4a3a"); }   /* the menu board, in red characters */
    R(108, 26, 2, 22, "#2a1a10"); for (i = 0; i < 6; i++) R(105 + i, 30, 1, 14 + (i % 3) * 2, "#f2e2a8");   /* noodles drying */
    [[150, 8], [234, 8]].forEach(function (l) { R(l[0], 0, 1, l[1], "#2a1a10"); R(l[0] - 3, l[1], 7, 8, "#c8302a"); R(l[0] - 2, l[1] + 1, 5, 6, "#e8603a"); R(l[0] - 1, l[1] + 8, 3, 2, "#e8c040"); });
    for (i = 0; i < 4; i++) { R(24, 92 - i * 3, 14, 3, "#f2f2f6"); R(25, 93 - i * 3, 12, 1, "#3a5aa8"); }   /* blue-and-white bowls stacked */
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
    line(150, 48, 236, 44, "#8a7a6a"); for (i = 0; i < 4; i++) R(158 + i * 18, 47 - i, 9, 11 - (i % 2) * 3, ["#f4ecd6", "#e2a040", "#6a9ac0", "#c8302a"][i]);   /* the washing */
    [[180, "#c8402a"], [196, "#e8c040"], [212, "#d8303a"]].forEach(function (f) { R(f[0], 118, 10, 8, "#b8623a"); R(f[0] + 1, 116, 8, 2, "#3a6a3a"); R(f[0] + 2, 112, 2, 4, "#3a6a3a"); R(f[0] + 6, 113, 2, 3, "#3a6a3a"); R(f[0] + 1, 111, 3, 2, f[1]); R(f[0] + 6, 112, 3, 2, f[1]); });
    var bf = t * .7; R(30 + Math.sin(bf) * 20, 60 + Math.sin(bf * 2.3) * 8, 2, 1, "#f4ecd6"); R(30 + Math.sin(bf) * 20 + ((t * 8 | 0) % 2 ? -1 : 1), 59 + Math.sin(bf * 2.3) * 8, 1, 1, "#f4ecd6");
    disc(36, 124, 3, gz < .5 ? "#c8302a" : "#3a6aa0"); R(35, 122, 2, 1, "#f4ecd6");
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
      R(176, 94, 20, 14, "#5a3a2a"); R(176, 94, 20, 2, "#7a5a3a"); R(184, 91, 4, 3, "#2a1a10"); R(180, 98, 6, 4, "#e8dcc0"); txt("NY", 181, 99, "#a8302a");   /* her suitcase, packed, NY on the tag */
      R(200, 46, 2, 3, "#2a1a10"); R(197, 49, 8, 16, "#3a4a6a");   /* her coat on the hook */
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
      function (x, y) { R(x, y, 34, 22, "#e8b8a0"); R(x, y + 14, 34, 8, "#4a6a8a"); line(x + 2, y + 14, x + 32, y + 8, "#5a4a5a"); R(x + 10, y + 6, 2, 8, "#5a4a5a"); R(x + 24, y + 6, 2, 8, "#5a4a5a"); },
      function (x, y) { R(x, y, 34, 22, "#b8c4cc"); R(x + 2, y + 3, 7, 12, "#8a7a70"); R(x + 11, y + 1, 8, 14, "#6a6a78"); R(x + 21, y + 5, 10, 10, "#9a8a7a"); for (var w = 0; w < 3; w++) { R(x + 13, y + 3 + w * 4, 1, 2, "#e8e0b0"); R(x + 16, y + 3 + w * 4, 1, 2, "#e8e0b0"); } R(x, y + 15, 34, 7, "#4a4a50"); R(x + 9, y + 14, 15, 5, "#f0c020"); R(x + 12, y + 11, 9, 3, "#f0c020"); R(x + 13, y + 12, 3, 2, "#a8d8e8"); R(x + 17, y + 12, 3, 2, "#a8d8e8"); R(x + 11, y + 18, 3, 3, "#1a1a1e"); R(x + 20, y + 18, 3, 3, "#1a1a1e"); R(x + 15, y + 10, 3, 1, "#ffffff"); },   /* a yellow cab */
      function (x, y) { R(x, y, 34, 22, "#1a2040"); R(x + 27, y + 2, 4, 4, "#f4ecc0"); R(x + 28, y + 2, 3, 3, "#1a2040"); var hs = [9, 14, 7, 16, 11, 13, 8]; for (var w = 0; w < 7; w++) { R(x + 1 + w * 5, y + 22 - hs[w], 4, hs[w], w % 2 ? "#2a3058" : "#0e1228"); for (var q = 0; q < hs[w] - 3; q += 3) R(x + 2 + w * 5 + (q + w) % 2, y + 24 - hs[w] + q, 1, 1, "#f2c44a"); } R(x + 5, y + 2, 1, 1, "#ffffff"); R(x + 14, y + 4, 1, 1, "#ffffff"); R(x + 21, y + 1, 1, 1, "#ffffff"); },   /* the skyline at night */
      function (x, y) { R(x, y, 34, 22, "#f0a860"); R(x, y + 8, 34, 6, "#f4c080"); R(x, y + 14, 34, 8, "#e88a5a"); R(x + 13, y + 9, 8, 13, "#5a4a5a"); R(x + 14, y + 6, 6, 3, "#5a4a5a"); R(x + 15, y + 4, 4, 2, "#5a4a5a"); R(x + 16, y + 1, 2, 3, "#5a4a5a"); R(x + 17, y - 0, 1, 2, "#5a4a5a"); R(x + 3, y + 15, 7, 7, "#7a5a5a"); R(x + 24, y + 13, 8, 9, "#7a5a5a"); R(x + 26, y + 5, 4, 2, "#f8dca0"); },   /* the tall one at sunset */
      function (x, y) { R(x, y, 34, 22, "#c8dce8"); R(x, y + 15, 34, 7, "#b8a060"); R(x + 12, y + 15, 8, 7, "#e0d0a8"); [[4, 5, "#e8913a"], [22, 4, "#c8302a"], [13, 2, "#e8c040"]].forEach(function (q) { R(x + q[0], y + q[1], 9, 7, q[2]); R(x + q[0] + 1, y + q[1] - 1, 7, 9, q[2]); R(x + q[0] + 4, y + q[1] + 7, 1, 5, "#5a3c22"); }); R(x + 22, y + 17, 7, 1, "#5a3c22"); R(x + 22, y + 18, 1, 2, "#5a3c22"); R(x + 28, y + 18, 1, 2, "#5a3c22"); R(x + 6, y + 19, 2, 1, "#e8913a"); R(x + 16, y + 20, 2, 1, "#c8302a"); },   /* the park in October */
      function (x, y) { R(x, y, 34, 22, "#a8d8e8"); R(x, y + 17, 34, 5, "#f0dca8"); R(x, y + 15, 34, 2, "#4a8ab0"); var cx = x + 12, cy = y + 9; for (var w = 0; w < 12; w++) { var an = w * Math.PI / 6; R(Math.round(cx + Math.cos(an) * 7), Math.round(cy + Math.sin(an) * 7), 2, 2, ["#c8302a", "#e8c040", "#3a6aa0"][w % 3]); R(Math.round(cx + Math.cos(an) * 3.5), Math.round(cy + Math.sin(an) * 3.5), 1, 1, "#7a7a80"); } R(cx, cy, 1, 9, "#7a7a80"); R(x + 23, y + 10, 9, 7, "#e8508a"); R(x + 23, y + 8, 9, 2, "#ffffff"); R(x + 25, y + 8, 2, 2, "#e8508a"); R(x + 29, y + 8, 2, 2, "#e8508a"); },   /* the big wheel by the beach */
      function (x, y) { R(x, y, 34, 22, "#d8d0c0"); R(x, y + 17, 34, 5, "#8a8a8a"); for (var w = 0; w < 5; w++) R(x + 6 + w * 4, y + 3 + Math.abs(w - 2), 4, 4 - Math.abs(w - 2) + 2, w % 2 ? "#ffffff" : "#c8302a"); R(x + 15, y + 7, 1, 6, "#5a4a3a"); R(x + 8, y + 12, 16, 6, "#e8e0d0"); R(x + 8, y + 12, 16, 1, "#3a6aa0"); R(x + 10, y + 18, 3, 3, "#3a3a3a"); R(x + 19, y + 18, 3, 3, "#3a3a3a"); R(x + 11, y + 14, 3, 2, "#b87a3a"); R(x + 12, y + 14, 1, 1, "#e8e0d0"); R(x + 16, y + 14, 3, 2, "#b87a3a"); R(x + 17, y + 14, 1, 1, "#e8e0d0"); R(x + 27, y + 11, 3, 3, "#e8c8a0"); R(x + 26, y + 14, 5, 5, "#3a6aa0"); },   /* the pretzel cart */
      function (x, y) { R(x, y, 34, 22, "#8a5a44"); for (var w = 0; w < 3; w++) { R(x + 3 + w * 11, y + 2, 6, 7, "#f0e0a8"); R(x + 5 + w * 11 + 0.5 | 0, y + 2, 1, 7, "#5a3a2c"); R(x + 2 + w * 11, y + 9, 8, 1, "#c8b8a0"); } R(x + 13, y + 12, 7, 10, "#2a4a3a"); R(x + 18, y + 17, 1, 1, "#e8c040"); for (var q = 0; q < 4; q++) R(x + 14 - q * 3 + 8, y + 18 + q, 10 + q * 0, 1, "#c8b8a0"); R(x + 24, y + 14, 1, 8, "#1a1a1e"); R(x + 3, y + 13, 6, 6, "#f0e0a8"); R(x + 4, y + 20, 4, 2, "#4a8a3a"); },   /* her stoop */
      function (x, y) { R(x, y, 34, 22, "#c8e0f0"); R(x, y + 11, 34, 11, "#3a7a9a"); R(x + 4, y + 7, 3, 4, "#8a8a98"); R(x + 8, y + 5, 3, 6, "#9a9aa8"); R(x + 12, y + 8, 4, 3, "#8a8a98"); R(x + 8, y + 13, 20, 5, "#e8913a"); R(x + 10, y + 10, 16, 3, "#f4ecd8"); for (var w = 0; w < 5; w++) R(x + 11 + w * 3, y + 11, 2, 1, "#3a4a5a"); R(x + 17, y + 7, 3, 3, "#3a3a3a"); R(x + 6, y + 18, 24, 1, "#ffffff"); R(x + 2, y + 15, 3, 1, "#ffffff"); R(x + 29, y + 3, 2, 1, "#ffffff"); R(x + 30, y + 2, 1, 1, "#ffffff"); },   /* the orange ferry */
      function (x, y) { R(x, y, 34, 22, "#18141e"); R(x + 1, y + 1, 9, 17, "#2a2430"); R(x + 12, y + 3, 10, 15, "#2a2430"); R(x + 24, y + 1, 9, 17, "#2a2430"); R(x + 2, y + 2, 7, 4, "#e8302a"); R(x + 2, y + 7, 7, 3, "#f2c44a"); R(x + 2, y + 11, 7, 5, "#3ab0e0"); R(x + 13, y + 4, 8, 5, "#f4f0e0"); R(x + 13, y + 10, 8, 3, "#e8508a"); R(x + 13, y + 14, 8, 3, "#5ac85a"); R(x + 25, y + 2, 7, 6, "#f2913a"); R(x + 25, y + 9, 7, 3, "#a85ae0"); R(x + 25, y + 13, 7, 4, "#f4e04a"); R(x, y + 18, 34, 4, "#3a3440"); for (var w = 0; w < 6; w++) { R(x + 3 + w * 5, y + 18, 1, 1, "#e8c8a0"); R(x + 3 + w * 5, y + 19, 1, 2, ["#c8302a", "#3a6aa0", "#e8e0d0"][w % 3]); } },   /* the square of lights */
      function (x, y) { R(x, y, 34, 22, "#2a3a5a"); R(x, y + 14, 34, 8, "#e8f0f8"); R(x + 2, y + 15, 30, 5, "#c8e0f0"); for (var w = 0; w < 6; w++) { R(x + 16 - w, y + 2 + w * 2, 2 + w * 2, 2, "#2a6a3a"); R(x + 16 - w + (w * 3) % (2 + w * 2), y + 2 + w * 2, 1, 1, ["#f2c44a", "#e8302a", "#ffffff"][w % 3]); R(x + 17 + (w * 5) % (1 + w), y + 3 + w * 2, 1, 1, ["#e8302a", "#ffffff", "#f2c44a"][w % 3]); } R(x + 16, y, 2, 2, "#f2c44a"); R(x + 16, y + 14, 2, 1, "#5a3c22"); [[6, "#c8302a"], [11, "#e8c040"], [24, "#3ab0e0"], [28, "#e8508a"]].forEach(function (q) { R(x + q[0], y + 15, 1, 1, "#e8c8a0"); R(x + q[0], y + 16, 1, 2, q[1]); }); R(x + 4, y + 3, 1, 1, "#ffffff"); R(x + 28, y + 5, 1, 1, "#ffffff"); R(x + 9, y + 8, 1, 1, "#ffffff"); R(x + 25, y + 10, 1, 1, "#ffffff"); }];   /* the rink under the big tree */
    var n = Math.min(14, Math.floor(seg(p, 0, .66) * 14) + 1);
    for (i = 0; i < n; i++) { var drop = i === n - 1 && p < .66 ? (1 - ((seg(p, 0, .66) * 14) % 1)) : 0, sl = (i * 3 + 5) % 14, x = 8 + (sl % 5) * 41 + rnd(i) * 8, y = 9 + Math.floor(sl / 5) * 31 + rnd(i + 4) * 7 - drop * 40;
      R(x - 1, y - 1, 36, 24, "#f4ecd8"); C[(i * 5 + VS) % C.length](x, y); R(x + 27, y + 1, 6, 7, ["#c8302a", "#3a6aa0", "#5a8a3a", "#e8913a"][i % 4]); R(x + 28, y + 2, 4, 5, "#f4ecd8"); R(x + 29, y + 3, 2, 3, ["#c8302a", "#3a6aa0", "#5a8a3a", "#e8913a"][i % 4]); for (var pm = 0; pm < 3; pm++) R(x + 20 + pm * 2, y + 3 + pm, 5, 1, "rgba(40,30,30,.35)"); }
      R(180, 92, 40, 30, "#f4ecd8"); R(180, 92, 40, 30, "rgba(0,0,0,0)"); for (i = 0; i < 6; i++) R(181, 94 + i * 4, 38, 3, i % 2 ? "#e8dcc4" : "#f4ecd8"); R(199, 92, 2, 30, "#c8a870"); R(180, 106, 40, 2, "#c8a870"); R(196, 103, 8, 3, "#c8a870");   /* the bundle tied with kitchen string */
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
    R(196, 116, 36, 3, "#5a4a3a"); R(198, 119, 2, 8, "#3a2a1a"); R(228, 119, 2, 8, "#3a2a1a");   /* a bench */
    if (p < .3 || p > .48) for (i = 0; i < 3; i++) { var cx2 = 168 + i * 20; folk(VS + 60 + i, cx2, 127, { cold: 1, f: -1, paper: i === 1 }); if (((t * 1.2 + i) % 3) < 1) R(cx2 - 6, 104 - (t * 6 % 4), 3, 2, "rgba(240,240,248,.6)"); } clock(121, 32, 14, 7, 34 + seg(p, 0, .62) * 6, "#2a2a2a"); R(160, 50, 14, 14, "#2a3a5a"); txt("2", 165, 55, "#f4ecd6");
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
      var bk = ((t * 18) % 320) - 40; disc(bk, 124, 5, "#2a2a2a"); disc(bk, 124, 3, "#a8a090"); disc(bk + 20, 124, 5, "#2a2a2a"); disc(bk + 20, 124, 3, "#a8a090"); line(bk, 124, bk + 9, 114, "#a8302a"); line(bk + 9, 114, bk + 20, 124, "#a8302a"); line(bk + 9, 114, bk + 17, 113, "#a8302a"); folk(VS + 70, bk + 10, 118, { sit: 1, f: 1, sz: .9 });
      folk(VS + 71, 16 + Math.sin(t * .3) * 4, 128, { f: 1, bag: "#c8a870" });
      var pop = seg(p, .08, .2), kh = ease(pop) * 8;
      pet("miso", 173, 119 - kh, { px: 1 }); pet("yuzu", 191, 119 - kh, { px: 1, flip: true });   /* inside the box: only their heads and backs show over its rim */
      R(162, 106, 40, 18, "#c8a070"); R(162, 106, 40, 2, "#a88050"); R(162 + Math.sin(t * 8) * (pop < 1 ? 1 : 0), 102, 14, 4, "#b8905e"); R(188, 102, 14, 4, "#b8905e");
      R(163, 111, 38, 9, "#f4ecd6"); txt("MISO/YUZU", 165, 113, "#3a2a1a");
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
      for (i = 0; i < 3; i++) { var clx = ((i * 90 + t * 3) % 300) - 40; R(clx, 14 + i * 9, 30, 5, "#f8f6ee"); R(clx + 6, 11 + i * 9, 16, 4, "#f8f6ee"); }
      for (i = 0; i < 3; i++) bird(((i * 50 + t * 10) % 280) - 20, 30 + i * 6 + Math.sin(t + i) * 2, t, "#3a3a3a");
      g.fillStyle = "#7aa05a"; g.beginPath(); g.moveTo(0, 90); g.lineTo(60, 60); g.lineTo(120, 40); g.lineTo(190, 50); g.lineTo(240, 70); g.lineTo(240, 135); g.lineTo(0, 135); g.fill();
      g.fillStyle = "#6a9050"; g.beginPath(); g.moveTo(0, 110); g.lineTo(80, 90); g.lineTo(160, 96); g.lineTo(240, 84); g.lineTo(240, 135); g.lineTo(0, 135); g.fill();
      for (i = 0; i < 9; i++) { var tx = 10 + i * 26, ty = 70 + rnd(i) * 30; R(tx + 3, ty, 2, 6, "#4a3a2a"); R(tx, ty - 8, 8, 9, "#3a6a3a"); R(tx + 2, ty - 11, 4, 3, "#3a6a3a"); }
      for (i = 0; i < 26; i++) R(rnd(i + 90) * W, 96 + rnd(i + 40) * 36, 1, 1, ["#f4ecd6", "#e8c040", "#c86aa0"][i % 3]);
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
    for (x = 0; x < W; x += 12) { var ly = 50 + Math.sin(x / 38 * Math.PI) * 4; R(x, ly, 12, 1, "#2a1a10"); R(x + 5, ly + 1, 2, 2, ["#f2a33a", "#f4e6a0", "#e8603a"][(x / 12) % 3 | 0]); }
    [[160, 40], [178, 38]].forEach(function (f) { R(f[0], f[1], 12, 10, "#c8a040"); R(f[0] + 1, f[1] + 1, 10, 8, "#d8cbb0"); R(f[0] + 4, f[1] + 3, 3, 5, "#6a5a4a"); });
    R(0, 62, W, 16, "#5a3622"); R(0, 62, W, 2, "#7a5434");
    pet("miso", 24, 62, { asleep: true }); pet("yuzu", 218, 62, { flip: true });
    for (i = 0; i < 5; i++) { R(30 + i * 44, 78, 1, 57, "#2a1a10"); } R(0, 110, W, 25, "#4a2e1c");
    who(40, 122, mix(WEI, { f: 1, smile: 1 })); who(200, 122, mix(MEI, { f: -1, armL: "out", smile: 1, step: (t * 2) | 0 }));
    who(82, 118, mix(OPOPO, { sit: 1, f: 1, smile: 1 }));
    R(56, 96, 128, 6, "#8a5a34"); R(60, 102, 4, 24, "#5a3a22"); R(176, 102, 4, 24, "#5a3a22");
    R(96, 88, 18, 8, "#8a8a8a"); steam(104, 84, t, 3); [66, 150].forEach(function (b) { R(b, 93, 12, 3, "#f2f2f6"); R(b + 1, 94, 10, 1, "#3a5aa8"); R(b + 14, 90, 1, 6, "#c8a040"); R(b + 16, 90, 1, 6, "#c8a040"); });
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
    if (k === 1) { R(130, 66 + bob, 8, 26, "#7a2232"); R(116, 61 + bob, 22, 8, "#8a2a3a"); R(116, 61 + bob, 22, 1, "#a8384a"); R(112, 62 + bob, 5, 6, "#f2cfa8"); R(117, 62 + bob, 2, 6, "#efe4c8"); }   /* her arm comes up from her side, the sleeve across her mouth */
    R(0, 92, W, 43, "#6a4428"); R(0, 92, W, 2, "#8a6040"); for (x = 0; x < W; x += 40) R(x, 94, 1, 41, "#5a3820");
    R(60, 98, 12, 9, "#f4ecd6"); R(72, 100, 3, 4, "#f4ecd6"); R(62, 100, 8, 2, "#b88a4a");
    if (k === 0) { var tl = Math.min(1, t / 1.2); R(36, 84 - tl * 4, 18, 12, "#3a6a5a"); R(54, 86 - tl * 6, 6, 2, "#3a6a5a"); if (tl >= 1) R(61, 88, 1, 10, "#c8a060"); }
    if (k === 2 || k === 9 || k === 6) { R(150, 96, 40, 18, "#24456e"); R(150, 96, 40, 2, "#e8c46a"); txt("POPO", 162, 103, "#e8c46a"); if (k === 2 && (t * 2 | 0) % 2) { R(158, 90, 1, 3, "#f4ecd6"); R(164, 89, 1, 3, "#f4ecd6"); } }
    if (k === 3) for (var i = 0; i < 3; i++) { var z = (t * .4 + i / 3) % 1; note(150 + i * 10 + Math.sin(t + i) * 4, 50 - z * 30, "rgba(255,226,160," + (1 - z) + ")"); }
    if (k === 5) { R(100, 84, 32, 12, "#f2f2f6"); R(104, 96, 24, 3, "#e4e4ec"); R(102, 86, 28, 1, "#3a5aa8"); line(110, 84, 114, 96, "#f2c44a"); line(122, 84, 120, 96, "#f2c44a"); }
    if (k === 6) { R(96, 100, 28, 10, "#f2f2f6"); R(98, 98, 24, 3, "#e8d8a8"); steam(110, 94, t, 3); }
    if (k === 7) { var th = Math.round(Math.sin(t * 9) * 3); pet("dog", 150, 134, { asleep: true }); var up = Math.abs(th) > 1 ? 2 : 0; R(137, 125, 4, 2, "#e8c48a"); R(135 - (up ? 0 : 1), 125 - up, 4, 2, "#e8c48a"); R(133 - (up ? 0 : 2), 125 - up * 2, 4, 2, "#e8c48a"); R(133 - (up ? 0 : 2), 125 - up * 2, 2, 1, "#fbf3e2"); }   /* the tail in three joined pieces from his back, thumping */
    if (k === 8) { var jk = seg(t, .4, 1.6), cx = 194, cy = 92 - Math.sin(jk * Math.PI) * 22 - jk * 22; if (t > 2.4) { cx = 118; cy = 98; } pet("miso", cx, cy, {}); }
    if (k === 9 && (t * 3 | 0) % 2) { line(100, 70, 96, 64, "#f4e0a0"); line(140, 70, 144, 64, "#f4e0a0"); line(120, 66, 120, 58, "#f4e0a0"); }
    return { tone: 0 };
  }

  /* ---------- sound (Nov 14, the owner: "add soundtrack + sound effects"): all made here with Web Audio, nothing fetched.
     A small score per chapter (Popo's theme on a music box, piano or guitar; their bolero in 1979), each place's air (the sea,
     the train, the hall, the market, the yard, the snow) and a few things you'd hear (the ship's horn, a crack, a meow, a
     shutter). It starts at the first tap (browsers ask for one), follows the town's sound switch and ♪ below, and hushes the
     town's own sound while it plays. */
  var AU = null, SND = (function () { try { var v = localStorage.getItem("fb_popo_snd"); if (v) return v === "1"; var P0 = parent.FBSound; return P0 ? P0.on() : localStorage.getItem("fb_sound") !== "0"; } catch (e) { return true; } })();
  function au() {
    if (AU || !SND) return AU; var C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
    var A = new C(), m = A.createGain(), comp = A.createDynamicsCompressor(); m.gain.value = 0; m.connect(comp); comp.connect(A.destination);
    var vb = A.createConvolver(), len = A.sampleRate * 2.4 | 0, ib = A.createBuffer(2, len, A.sampleRate);
    for (var c = 0; c < 2; c++) { var d = ib.getChannelData(c); for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
    vb.buffer = ib; var vg = A.createGain(); vg.gain.value = .32; vb.connect(vg); vg.connect(m);
    var mus = A.createGain(), fx = A.createGain(), air = A.createGain(); mus.gain.value = .42; fx.gain.value = .55; air.gain.value = .0;
    [mus, fx, air].forEach(function (b) { b.connect(m); }); mus.connect(vb); fx.connect(vb);
    var nb = A.createBuffer(1, A.sampleRate * 2, A.sampleRate), nd = nb.getChannelData(0); for (i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    AU = { A: A, m: m, mus: mus, fx: fx, air: air, nb: nb, cue: null, amb: null, ambStop: null, nextT: 0, step: 0 };
    m.gain.setTargetAtTime(1, A.currentTime, .6); hush(true);
    return AU;
  }
  function hush(b) { try { if (parent.FBSound) parent.FBSound.busy(!!b); } catch (e) {} }
  function T0() { return AU.A.currentTime; }
  function env(gn, t, a, peak, dec) { gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(peak, t + a); gn.gain.exponentialRampToValueAtTime(0.0001, t + a + dec); }
  function osc(type, f, t, dur, vol, bus, o) {
    o = o || {}; var A = AU.A, x = A.createOscillator(), gn = A.createGain(); x.type = type; x.frequency.setValueAtTime(f, t);
    if (o.to) x.frequency.exponentialRampToValueAtTime(o.to, t + (o.glide || dur));
    if (o.vib) { var l = A.createOscillator(), lg = A.createGain(); l.frequency.value = o.vib; lg.gain.value = f * .012; l.connect(lg); lg.connect(x.frequency); l.start(t); l.stop(t + dur + .1); }
    var node = x; if (o.lp) { var fl = A.createBiquadFilter(); fl.type = "lowpass"; fl.frequency.value = o.lp; x.connect(fl); node = fl; }
    node.connect(gn); gn.connect(bus || AU.mus); env(gn, t, o.a || .005, vol, dur); x.start(t); x.stop(t + (o.a || .005) + dur + .05);
  }
  function noise(t, dur, vol, ft, f, q, bus, o) {
    o = o || {}; var A = AU.A, src = A.createBufferSource(), fl = A.createBiquadFilter(), gn = A.createGain(); src.buffer = AU.nb; src.loop = true;
    fl.type = ft; fl.frequency.setValueAtTime(f, t); if (o.to) fl.frequency.exponentialRampToValueAtTime(o.to, t + dur); fl.Q.value = q || 1;
    src.connect(fl); fl.connect(gn); gn.connect(bus || AU.fx); env(gn, t, o.a || .005, vol, dur); src.start(t, Math.random()); src.stop(t + (o.a || .005) + dur + .05);
  }
  /* instruments */
  var hz = function (m) { return 440 * Math.pow(2, (m - 69) / 12); };
  var INS = {
    box: function (m, t, v) { var f = hz(m); osc("sine", f, t, 1.6, .16 * v); osc("sine", f * 2, t, .5, .05 * v); osc("sine", f * 5.4, t, .12, .02 * v); },
    piano: function (m, t, v) { var f = hz(m); osc("triangle", f, t, 1.4, .13 * v, null, { lp: 2400 }); osc("sine", f * 2, t, .6, .04 * v); },
    guitar: function (m, t, v) { var f = hz(m); osc("sawtooth", f, t, .9, .07 * v, null, { lp: 1400 }); osc("triangle", f, t, 1.1, .06 * v); },
    flute: function (m, t, v, d) { osc("sine", hz(m), t, d || .5, .1 * v, null, { a: .06, vib: 5 }); },
    harm: function (m, t, v, d) { osc("sawtooth", hz(m), t, d || 1, .022 * v, null, { a: .25, lp: 900 }); },
    pad: function (m, t, v, d) { osc("triangle", hz(m), t, d || 2, .035 * v, null, { a: .5, lp: 1200 }); osc("sine", hz(m) * 1.003, t, d || 2, .03 * v, null, { a: .6 }); },
    bass: function (m, t, v) { osc("sine", hz(m), t, .8, .14 * v, null, { a: .01 }); },
    pizz: function (m, t, v) { osc("triangle", hz(m), t, .22, .1 * v, null, { lp: 1800 }); }
  };
  var MAJ = [0, 2, 4, 5, 7, 9, 11], MIN = [0, 2, 3, 5, 7, 8, 10];
  function dg(root, sc, d) { var o = Math.floor(d / 7), i = ((d % 7) + 7) % 7; return root + o * 12 + sc[i]; }
  /* Popo's theme: two bars a phrase, eighth notes, scale steps (null rests); A then B */
  var THEME = [[4, null, 2, 3, 4, null, 7, null, 6, null, 4, 2, 3, null, null, null], [2, null, 1, 2, 3, null, 4, 2, 1, null, 0, -1, 0, null, null, null],
    [4, 5, 7, null, 6, 4, 5, null, 3, null, 2, 3, 4, null, null, null], [7, null, 6, 4, 5, null, 3, 2, 1, null, 2, null, 0, null, null, null]];
  /* the cues: key, scale, tempo, lead, comping, chords (scale degrees, one a bar), how much of the tune plays */
  var CUES = {
    open: { r: 65, sc: MAJ, bpm: 66, lead: "box", comp: "arp", ch: [0, 5, 3, 4], den: .55, v: .8 },
    sea: { r: 69, sc: MIN, bpm: 62, lead: "flute", comp: "harm", ch: [0, 5, 2, 4], den: .5, v: .8 },
    train: { r: 69, sc: MIN, bpm: 76, lead: "box", comp: "arp", ch: [0, 3, 5, 4], den: .6, v: .8 },
    hall: { r: 60, sc: MAJ, bpm: 70, lead: "piano", comp: "arp", ch: [0, 4, 5, 3], den: .45, v: .7 },
    josep: { r: 60, sc: MAJ, bpm: 74, lead: "piano", comp: "arp", ch: [0, 5, 3, 4], den: .7, v: .8 },
    clocks: { r: 60, sc: MAJ, bpm: 74, lead: "box", comp: "pizz", ch: [0, 3, 4, 0], den: .7, v: .8 },
    rose: { r: 62, sc: MAJ, bpm: 84, lead: "flute", comp: "strum", ch: [0, 4, 5, 3], den: .75, v: .9 },
    book: { r: 62, sc: MAJ, bpm: 70, lead: "box", comp: "arp", ch: [0, 5, 3, 4], den: .5, v: .7 },
    bolero: { r: 57, sc: MIN, bpm: 72, lead: "piano", comp: "bolero", ch: [0, 3, 4, 0], den: .85, v: .9, harm: 1 },
    lemon: { r: 67, sc: MAJ, bpm: 92, lead: "box", comp: "pizz", ch: [0, 3, 4, 0], den: .7, v: .8 },
    fight: { r: 64, sc: MIN, bpm: 58, lead: "piano", comp: "pad", ch: [0, 5, 3, 4], den: .35, v: .7 },
    gold: { r: 64, sc: MAJ, bpm: 60, lead: "box", comp: "pad", ch: [0, 5, 3, 4], den: .55, v: .8 },
    cards: { r: 65, sc: MAJ, bpm: 80, lead: "box", comp: "arp", ch: [0, 5, 1, 4], den: .65, v: .8 },
    snow: { r: 62, sc: MIN, bpm: 54, lead: "piano", comp: "pad", ch: [0, 5, 3, 4], den: .3, v: .7 },
    kittens: { r: 60, sc: MAJ, bpm: 108, lead: "pizz", comp: "pizz", ch: [0, 4, 0, 4], den: .6, v: .8 },
    cabin: { r: 67, sc: MAJ, bpm: 68, lead: "flute", comp: "pad", ch: [0, 3, 5, 4], den: .5, v: .8 },
    nearby: { r: 67, sc: MAJ, bpm: 72, lead: "box", comp: "arp", ch: [3, 4, 0, 0], den: .9, v: .9 },
    tonight: { r: 65, sc: MAJ, bpm: 72, lead: "piano", comp: "strum", ch: [0, 5, 3, 4], den: .9, v: 1 },
    table: { r: 65, sc: MAJ, bpm: 60, lead: "box", comp: "none", ch: [0, 5, 3, 4], den: .35, v: .55 },
    photo: { r: 65, sc: MAJ, bpm: 60, lead: "box", comp: "pad", ch: [0, 0, 0, 0], den: .2, v: .7 }
  };
  function setCue(k) {
    if (!AU) return; var c = CUES[k] || null; if (AU.cue === c) return;
    var A = AU.A; AU.mus.gain.cancelScheduledValues(A.currentTime); AU.mus.gain.setTargetAtTime(0, A.currentTime, .25);
    AU.cue = c; AU.step = 0; AU.nextT = A.currentTime + .7; setTimeout(function () { if (AU && AU.cue === c) AU.mus.gain.setTargetAtTime(.42, AU.A.currentTime, .4); }, 650);
  }
  function seqTick() {
    if (!AU || !AU.cue || AU.A.state !== "running") return; var c = AU.cue, A = AU.A, e8 = 60 / c.bpm / 2;
    while (AU.nextT < A.currentTime + .35) {
      var t = AU.nextT, s = AU.step, bar = (s >> 3) % 4, pos = s & 7, chord = c.ch[bar], ph = THEME[((s >> 4) % 4)][s & 15];
      var tri = [dg(c.r - 12, c.sc, chord), dg(c.r - 12, c.sc, chord + 2), dg(c.r - 12, c.sc, chord + 4)];
      if (c.harm && chord === 4) tri[1] += 1;   /* a raised third on the dominant: the bolero's own colour */
      var v = c.v;
      if (pos === 0 && c.comp !== "none") INS.bass(dg(c.r - 24, c.sc, chord), t, v);
      if (c.comp === "arp") INS.box(tri[[0, 1, 2, 1][pos % 4]] + 12, t, .45 * v);
      else if (c.comp === "pizz" && pos % 2 === 0) INS.pizz(tri[(pos >> 1) % 3] + 12, t, .8 * v);
      else if (c.comp === "strum" && (pos === 0 || pos === 4)) tri.forEach(function (n, j) { INS.guitar(n + 12, t + j * .025, .7 * v); });
      else if (c.comp === "bolero" && [0, 2, 3, 4, 6].indexOf(pos) >= 0) tri.forEach(function (n, j) { INS.guitar(n + 12, t + j * .018, (pos === 0 ? .8 : .5) * v); });
      else if ((c.comp === "pad" || c.comp === "harm") && pos === 0) tri.forEach(function (n) { INS[c.comp === "harm" ? "harm" : "pad"](n + 12, t, v, e8 * 8); });
      if (ph != null && (rnd(s * 3.1 + c.bpm) < c.den || pos === 0)) INS[c.lead](dg(c.r, c.sc, ph), t, v, e8 * 1.8);
      if (c.comp === "bolero" && (pos === 3 || pos === 7)) noise(t, .05, .05, "highpass", 6000, 1, AU.mus);   /* a soft maraca */
      AU.nextT += e8 * (pos % 2 ? .9 : 1.1); AU.step++;   /* a little swing */
    }
  }
  /* the air of each place: a loop of filtered noise and small things now and then */
  function loopN(ft, f, q, vol, lfo, lfoAmt) {
    var A = AU.A, src = A.createBufferSource(), fl = A.createBiquadFilter(), gn = A.createGain(); src.buffer = AU.nb; src.loop = true; fl.type = ft; fl.frequency.value = f; fl.Q.value = q || 1; gn.gain.value = vol;
    src.connect(fl); fl.connect(gn); gn.connect(AU.air); src.start(0, Math.random());
    if (lfo) { var l = A.createOscillator(), lg = A.createGain(); l.frequency.value = lfo; lg.gain.value = vol * (lfoAmt || .8); l.connect(lg); lg.connect(gn.gain); l.start(); return [src, l]; }
    return [src];
  }
  var AIRS = {
    sea: { n: [["lowpass", 500, .7, .5, .11, .9], ["bandpass", 1800, .6, .05, .23]], every: [3, 6, function (t) { var f = 1700 + Math.random() * 500; osc("triangle", f, t, .25, .05, AU.fx, { to: f * .65 }); osc("triangle", f * .95, t + .3, .2, .04, AU.fx, { to: f * .6 }); }] },
    train: { n: [["lowpass", 260, .7, .7]], every: [1.1, 1.1, function (t) { noise(t, .04, .25, "bandpass", 900, 2); noise(t + .14, .04, .2, "bandpass", 800, 2); }] },
    hall: { n: [["bandpass", 550, .6, .35, .07, .5]], every: [1, 1, function (t) { noise(t, .02, .05, "highpass", 3500, 1); }] },
    night: { n: [["bandpass", 300, .5, .25, .05, .6]], every: [2.2, 3, function (t) { noise(t, .05, .08, "bandpass", 500, 3); noise(t + .45, .05, .07, "bandpass", 460, 3); }] },
    clocks: { n: [["lowpass", 180, .5, .15]], every: [.5, .5, function (t) { noise(t, .02, .06 + Math.random() * .04, "bandpass", 2500 + Math.random() * 3000, 4); }] },
    market: { n: [["bandpass", 700, .5, .4, .09, .5]], every: [2, 4, chirp] },
    room: { n: [["lowpass", 160, .5, .25]], every: [.25, .9, function (t) { noise(t, .008, .12, "highpass", 3000, 1); }] },
    yard: { n: [["bandpass", 5200, 3, .06, 22, .9]], every: [1.5, 3.5, chirp] },
    house: { n: [["lowpass", 200, .5, .2]] },
    tin: { n: [["lowpass", 160, .5, .15]] },
    snow: { n: [["bandpass", 420, .8, .5, .08, .8]], every: [1, 1, function (t) { noise(t, .02, .05, "highpass", 3500, 1); }] },
    street: { n: [["bandpass", 600, .5, .25, .06, .5]], every: [3, 6, chirp] },
    hill: { n: [["bandpass", 700, .6, .25, .05, .7]], every: [1.5, 3, chirp] },
    stars: { n: [["lowpass", 300, .5, .12]], every: [2.5, 4, function (t) { osc("sine", hz(84 + [0, 4, 7, 12][Math.random() * 4 | 0]), t, .8, .03, AU.fx); }] },
    tonight: { n: [["bandpass", 600, .5, .3, .1, .5]], every: [2.5, 5, function (t) { var f = 2600 + Math.random() * 1200; osc("sine", f, t, .5, .03, AU.fx); osc("sine", f * 1.5, t, .3, .015, AU.fx); }] },
    table: { n: [["lowpass", 180, .5, .2]], every: [1, 1, function (t) { noise(t, .015, .03, "highpass", 3500, 1); }] }
  };
  function chirp(t) { var f = 2600 + Math.random() * 1600, n = 2 + (Math.random() * 3 | 0); for (var i = 0; i < n; i++) osc("sine", f, t + i * .11, .07, .035, AU.fx, { to: f * (1.15 + Math.random() * .2), glide: .06 }); }
  function setAir(k) {
    if (!AU || AU.amb === k) return; AU.amb = k; var A = AU.A, old = AU.ambStop; AU.air.gain.setTargetAtTime(0, A.currentTime, .3);
    setTimeout(function () { if (old) old(); if (!AU || AU.amb !== k) return; var a = AIRS[k]; if (!a) return;
      var nodes = []; a.n.forEach(function (q) { nodes = nodes.concat(loopN(q[0], q[1], q[2], q[3], q[4], q[5])); });
      var tm = null; if (a.every) (function go() { tm = setTimeout(function () { if (AU && AU.A.state === "running") a.every[2](AU.A.currentTime + .02); go(); }, (a.every[0] + Math.random() * (a.every[1] - a.every[0])) * 1000); })();
      AU.ambStop = function () { clearTimeout(tm); nodes.forEach(function (n) { try { n.stop(); } catch (e) {} }); };
      AU.air.gain.setTargetAtTime(.32, AU.A.currentTime, .6); }, 900);
  }
  /* things you hear */
  var FX = {
    horn: function (t) { osc("sawtooth", 110, t, 1.8, .09, AU.fx, { a: .15, lp: 500 }); osc("sawtooth", 138, t, 1.8, .07, AU.fx, { a: .15, lp: 500 }); },
    whistle: function (t) { osc("sine", 1180, t, 1.2, .07, AU.fx, { a: .05, vib: 7 }); osc("sine", 1480, t, 1.2, .05, AU.fx, { a: .05 }); noise(t, 1.2, .06, "bandpass", 2500, 2, AU.fx, { a: .05 }); },
    steam: function (t) { noise(t, 1.4, .18, "highpass", 2000, .7, AU.fx, { a: .05, to: 5000 }); },
    brakes: function (t) { osc("sine", 2300, t, 1.3, .03, AU.fx, { to: 1900, a: .2 }); noise(t, 1.5, .1, "bandpass", 3000, 8, AU.fx, { a: .2 }); },
    bite: function (t) { noise(t, .06, .2, "bandpass", 1800, 1.5); noise(t + .12, .05, .15, "bandpass", 1500, 1.5); },
    sparkle: function (t) { [0, 4, 7, 12, 16].forEach(function (d, i) { osc("sine", hz(84 + d), t + i * .07, .6, .035, AU.fx); }); },
    page: function (t) { noise(t, .25, .1, "bandpass", 2500, .8, AU.fx, { a: .05, to: 1200 }); },
    pencil: function (t) { for (var i = 0; i < 6; i++) noise(t + i * .07, .05, .05, "bandpass", 4000 + Math.random() * 1500, 4); },
    crash: function (t) { noise(t, .5, .4, "highpass", 2500, .7); for (var i = 0; i < 7; i++) osc("sine", 2400 + Math.random() * 3000, t + i * .03 + Math.random() * .05, .25, .05, AU.fx); noise(t + .25, .3, .15, "bandpass", 3500, 2); },
    rattle: function (t) { for (var i = 0; i < 8; i++) noise(t + i * .06 + Math.random() * .02, .03, .1, "bandpass", 3000 + Math.random() * 2000, 3); },
    knock: function (t) { noise(t, .06, .25, "lowpass", 600, 1); noise(t + .18, .06, .22, "lowpass", 600, 1); },
    paper: function (t) { noise(t, .15, .12, "bandpass", 3000, .7, AU.fx, { a: .03 }); },
    scratch: function (t) { noise(t, .3, .1, "bandpass", 2500, 2, AU.fx, { a: .02, to: 1500 }); },
    clink: function (t) { osc("sine", 3200, t, .5, .05, AU.fx); osc("sine", 4600, t, .3, .03, AU.fx); },
    pour: function (t) { noise(t, 1.6, .12, "bandpass", 900, 3, AU.fx, { a: .1, to: 1500 }); },
    thump: function (t) { osc("sine", 90, t, .15, .25, AU.fx, { to: 60 }); },
    woof: function (t) { osc("sawtooth", 260, t, .16, .12, AU.fx, { to: 160, lp: 900 }); noise(t, .12, .1, "bandpass", 500, 1); },
    meow: function (t, hi) { var b = hi ? 900 : 700; osc("sawtooth", b, t, .45, .05, AU.fx, { to: b * 1.3, glide: .2, lp: 1800, a: .05 }); osc("sine", b * 1.3, t + .2, .3, .03, AU.fx, { to: b * .8 }); },
    purr: function (t) { for (var i = 0; i < 10; i++) noise(t + i * .045, .03, .06, "lowpass", 180, 1); },
    creak: function (t) { osc("sawtooth", 140, t, .6, .03, AU.fx, { to: 220, lp: 700, a: .1 }); },
    shutter: function (t) { noise(t, .03, .3, "highpass", 2000, 1); noise(t + .09, .03, .2, "highpass", 2500, 1); osc("sine", 3000, t + .12, .15, .02, AU.fx); },
    clap: function (t) { noise(t, .04, .3, "bandpass", 1500, 1); noise(t + .22, .04, .3, "bandpass", 1600, 1); },
    lid: function (t) { osc("sine", 520, t, .4, .05, AU.fx, { to: 480 }); noise(t, .2, .08, "bandpass", 2000, 3); },
    steps: function (t) { for (var i = 0; i < 4; i++) noise(t + i * .4, .06, .14, "bandpass", 480, 2.4); },
    chime: function (t) { [0, 7, 12].forEach(function (d, i) { osc("sine", hz(72 + d), t + i * .3, 2, .05, AU.fx); }); },
    trainby: function (t) { noise(t, 3, .25, "lowpass", 400, .7, AU.fx, { a: .8 }); for (var i = 0; i < 6; i++) noise(t + .4 + i * .35, .04, .15, "bandpass", 900, 2); }
  };
  /* for each scene: which air and score where, and what you hear when (p = how far through the scene) */
  var PLAN = [
    { air: function (p) { return p < .3 ? "sea" : p < .62 ? "train" : "hall"; }, cue: function (p) { return p < .3 ? "sea" : p < .62 ? "train" : "hall"; }, ev: [[.02, "horn"], [.31, "whistle"], [.5, "bite"], [.63, "brakes"], [.65, "steam"]] },
    { air: function (p) { return p < .42 ? "hall" : p < .72 ? "night" : "clocks"; }, cue: function (p) { return p < .72 ? "josep" : "clocks"; }, ev: [[.44, "steps"], [.56, "steps"], [.64, "knock"], [.74, "chime"]] },
    { air: function (p) { return p < .5 ? "market" : "tin"; }, cue: function (p) { return p < .5 ? "rose" : "book"; }, ev: [[.2, "sparkle"], [.36, "page"], [.52, "page"], [.6, "pencil"], [.7, "pencil"], [.8, "pencil"], [.88, "sparkle"]] },
    { air: function () { return "room"; }, cue: function () { return "bolero"; }, ev: [] },
    { air: function () { return "yard"; }, cue: function () { return "lemon"; }, ev: [[.1, "scratch"], [.2, "scratch"], [.3, "scratch"], [.4, "scratch"], [.5, "scratch"], [.6, "scratch"], [.7, "scratch"], [.8, "scratch"]] },
    { air: function () { return "house"; }, cue: function (p) { return p < .7 ? "fight" : "gold"; }, ev: [[.3, "crash"], [.47, "rattle"], [.72, "sparkle"], [.9, "sparkle"]] },
    { air: function () { return "house"; }, cue: function () { return "cards"; }, ev: [[.05, "paper"], [.12, "paper"], [.2, "paper"], [.28, "paper"], [.36, "paper"], [.44, "paper"], [.52, "paper"], [.6, "paper"], [.68, "page"], [.8, "sparkle"]] },
    { air: function () { return "snow"; }, cue: function () { return "snow"; }, ev: [[.3, "trainby"], [.27, "clink"], [.45, "clink"], [.6, "clink"], [.67, "woof"], [.75, "steps"], [.85, "steps"]] },
    { air: function () { return "street"; }, cue: function () { return "kittens"; }, ev: [[.1, "meow"], [.13, "meowhi"], [.65, "purr"], [.8, "purr"]] },
    { air: function (p) { return p < .38 ? "hill" : p < .8 ? "house" : "stars"; }, cue: function (p) { return p < .8 ? "cabin" : "nearby"; }, ev: [[.1, "steps"], [.25, "steps"], [.36, "creak"], [.42, "pencil"], [.5, "pencil"], [.58, "pencil"], [.66, "pencil"], [.74, "pencil"], [.82, "sparkle"], [.9, "chime"]] },
    { air: function () { return "tonight"; }, cue: function () { return "tonight"; }, ev: [[.15, "clink"], [.4, "woof"], [.55, "clink"], [.9, "shutter"]] }
  ];
  var TABLE = [[.3, "pour"], [.3, "clap"], [.2, "rattle"], null, [.4, "creak"], [.3, "clink"], [.3, "clink"], [.2, "thump"], [.2, "meow"], [.3, "clap"]];   /* what each aside sounds like */
  var fired = {}, lastP = -1;
  function soundFor(S, p, t) {
    if (!AU || !S) return;
    if (S.kind === "scene") { var P1 = PLAN[S.ch]; setAir(P1.air(p)); setCue(P1.cue(p));
      P1.ev.forEach(function (e, i) { if (p >= e[0] && lastP < e[0] && !fired[i]) { fired[i] = 1; var f = e[1] === "meowhi" ? function (x) { FX.meow(x, 1); } : FX[e[1]]; f(T0() + .02); } }); }
    else if (S.kind === "aside") { setAir("table"); setCue(S.k === 3 ? "bolero" : "table"); var a = TABLE[S.k]; if (a && t >= a[0] && !fired.a) { fired.a = 1; FX[a[1]](T0() + .02); if (S.k === 7) { FX.thump(T0() + .35); FX.thump(T0() + .7); } } }
    else if (S.kind === "open") { setAir("table"); setCue("open"); if (t >= 1.2 && !fired.o) { fired.o = 1; FX.lid(T0() + .02); FX.sparkle(T0() + .5); } }
    else if (S.kind === "photo") { setAir("tonight"); setCue("photo"); }
    lastP = p;
  }
  function soundReset() { fired = {}; lastP = -1; }
  function soundOn(on) {
    SND = on; try { localStorage.setItem("fb_popo_snd", on ? "1" : "0"); } catch (e) {}
    if (on) { au(); if (AU) { AU.A.resume(); AU.m.gain.setTargetAtTime(1, AU.A.currentTime, .4); hush(true); } }
    else if (AU) { AU.m.gain.setTargetAtTime(0, AU.A.currentTime, .2); hush(false); }
  }
  function soundRun(run) { if (!AU) return; if (run && SND) { AU.A.resume(); hush(true); } else { AU.A.suspend(); hush(false); } }
  setInterval(seqTick, 120);
  addEventListener("pagehide", function () { hush(false); });
  ["pointerdown", "keydown"].forEach(function (ev) { addEventListener(ev, function () { if (SND && !AU) { au(); soundReset(); } else if (AU && SND && AU.A.state !== "running" && !document.documentElement.classList.contains("read")) AU.A.resume(); }, true); });

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
  function go(i, keepLine) { soundReset(); cur = Math.max(0, Math.min(SHOTS.length - 1, i)); li = keepLine ? Math.min(li, SHOTS[cur].lines.length - 1) : 0; lt = 0; st = 0; done = false; fin.hidden = true; headShow(); showLine(); }
  function elapsed() { var S = SHOTS[cur], e = 0; for (var j = 0; j < li; j++) e += S.d[j]; return e + Math.min(lt, S.d[li] || 0); }
  function next() {
    var S = SHOTS[cur];
    if (li < S.lines.length - 1) { li++; lt = 0; showLine(); return; }
    if (cur < SHOTS.length - 1) return go(cur + 1);
    end();
  }
  function end() { done = true; playing = false; paintPP(); setTimeout(function () { if (done && AU) { AU.m.gain.setTargetAtTime(0, AU.A.currentTime, 1.5); setTimeout(function () { if (done) { soundRun(false); if (AU && SND) AU.m.gain.value = 1; } }, 5000); } }, 6000); fin.hidden = false; try { fin.querySelector("button,a").focus({ preventScroll: true }); } catch (e) {} }
  function chapter(d) { var S = SHOTS[cur], ch = S.ch + d; for (var j = 0; j < SHOTS.length; j++) if (SHOTS[j].ch === ch && SHOTS[j].kind !== "aside") return go(j); if (d < 0) go(0); }
  function paintPP() { soundRun(playing || done); pp.textContent = playing ? "❚❚" : "▶"; pp.setAttribute("aria-label", P.T(playing ? "pause" : "play")); }
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
    r = r || {}; if (playing && !done) soundFor(S, p, st);
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
    document.getElementById("hint").textContent = P.T("hint"); paintPP(); paintDots(); paintSnd();
  }
  function paintSnd() { var b = document.getElementById("snd"); if (!b) return; b.setAttribute("aria-pressed", String(SND)); b.setAttribute("aria-label", P.T("sound")); b.classList.toggle("off", !SND); }
  document.getElementById("snd").onclick = function () { soundOn(!SND); paintSnd(); };
  document.addEventListener("visibilitychange", function () { soundRun(!document.hidden && (playing || done)); });
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
  document.getElementById("rd").onclick = function () { playing = false; paintPP(); soundRun(false); P.read(true); };
  window.addEventListener("popolang", function () { var ch = SHOTS[cur] ? SHOTS[cur].ch : -1, kind = SHOTS[cur] ? SHOTS[cur].kind : "open"; build(); words(); var j = 0; for (var k = 0; k < SHOTS.length; k++) if (SHOTS[k].ch === ch && SHOTS[k].kind === kind) { j = k; break; } go(j); });
  window.addEventListener("popowatch", function () { if (done) go(0); playing = true; paintPP(); });
  build(); words(); go(0); raf = requestAnimationFrame(frame);
  window.POPOFILM = { _au: function () { return AU && { st: AU.A.state, amb: AU.amb, cue: Object.keys(CUES).filter(function (k) { return CUES[k] === AU.cue; })[0] }; }, _fx: function () { Object.keys(FX).forEach(function (k) { FX[k](T0() + .1); }); Object.keys(AIRS).forEach(function (k, i) { setTimeout(function () { setAir(k); }, i * 50); }); return 1; }, _cue: function (k) { setCue(k); }, go: go, shots: function () { return SHOTS; }, at: function () { return { shot: cur, line: li, kind: SHOTS[cur].kind, ch: SHOTS[cur].ch }; }, next: next, end: end, draw: draw, seek: function (i, l, tt) { go(i); li = l || 0; lt = tt || 0; st = 5; showLine(); draw(); }, pause: function () { playing = false; paintPP(); } };
})();
