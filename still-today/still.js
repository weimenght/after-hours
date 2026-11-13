/* Still Today's flow (FBStill), shared by the app (/still-today/) and the town (Slow Clock, /nearby/slow-clock/).
   Pretend for one minute that today was your last day: one of Nearby's six asks one question (the people in words, the animals
   only in acts), the answer stays on the screen, then "it isn't: Josep's clock is running slow" and one thing to do today.
   Too late, or "not today": one thing on Popo's paper for the morning (the only thing kept, with Josep's log page and the day
   it was last played, in sl_v1 on this device). Behind the clock face: Josep's winding log, one page a turn, never counted.
   Nothing is sent: a message goes in the person's own messages (FBC.tell). Words in SL_W (words.js, loaded first).
   FBStill.mount(el, {hour, slow(done), dim(on), screen(name), root}) → {home, log, render, state}. */
(function () {
  "use strict";
  if (window.FBStill) return;
  var LANGS = ["en", "zh", "zh-Hant", "es", "ca"];
  function W() { return window.SL_W; }
  function li() { var l = window.FBL && FBL.get ? FBL.get() : (document.documentElement.lang || "en"); var i = LANGS.indexOf(l); return i < 0 ? 0 : i; }
  function T(a) { return a == null ? "" : typeof a === "string" ? a : (a[li()] || a[0]); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function acts(s) { return esc(s).replace(/\*([^*]+)\*/g, "<i>*$1*</i>"); }
  function fill(s, a) { return String(s || "").split("{a}").join(a); }
  function ymd(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

  /* on the device: the morning paper, Josep's last page, the day it was last played */
  var KEY = "sl_v1";
  function load() { try { var o = JSON.parse(localStorage.getItem(KEY) || "null"); return o && typeof o === "object" ? o : {}; } catch (e) { return {}; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  function played() { var v = load(); v.at = ymd(new Date()); save(v); }

  /* the town's own drawings (FBWorld in /fbkit/fb.js; Wei's pixels copied from the town) */
  var WEI = [[9,3,14,4,"#1c1917"],[7,5,4,5,"#1c1917"],[21,5,4,5,"#1c1917"],[11,2,10,2,"#292524"],[9,7,14,12,"#f5d49a"],[8,10,1,4,"#e9be78"],[23,10,1,4,"#e9be78"],
    [10,10,4,4,"rgba(125,178,168,.3)"],[10,9,4,1,"#e0a043"],[10,14,4,1,"#e0a043"],[9,10,1,4,"#e0a043"],[14,10,1,4,"#e0a043"],[11,10,1,1,"rgba(255,255,255,.8)"],[12,12,1,2,"#1b0f07"],[15,11,2,1,"#e0a043"],
    [18,10,4,4,"rgba(125,178,168,.3)"],[18,9,4,1,"#e0a043"],[18,14,4,1,"#e0a043"],[17,10,1,4,"#e0a043"],[22,10,1,4,"#e0a043"],[19,10,1,1,"rgba(255,255,255,.8)"],[20,12,1,2,"#1b0f07"],
    [7,10,2,1,"#b9772c"],[23,10,2,1,"#b9772c"],[14,16,4,1,"#a0521d"],[13,19,6,2,"#f5d49a"],
    [11,21,10,2,"#f3ead8"],[15,22,2,2,"#6b3a1b"],[8,23,16,11,"#1c1410"],[12,23,8,10,"#4a2410"],[14,24,4,7,"#f3ead8"],[15,27,2,1,"#e0a043"],[15,30,2,1,"#e0a043"]];
  function FW() { return window.FBWorld || {}; }
  function face(who) {
    var c = document.createElement("canvas"); c.width = 32; c.height = 32; c.setAttribute("aria-hidden", "true"); var g = c.getContext("2d"), f = FW();
    if (who === "wei") WEI.forEach(function (r) { g.fillStyle = r[4]; g.fillRect(r[0], r[1] - 1, r[2], r[3]); });
    else if (who === "mei" && f.drawMei) f.drawMei(g, 0, 0, 1, {});
    else if (who === "popo" && f.drawPopo) f.drawPopo(g, 0, 0, 1, {});
    else if (who === "note") { g.fillStyle = "#f3ead8"; g.fillRect(6, 4, 20, 24); g.fillStyle = "#c8b89a"; for (var y = 9; y < 26; y += 4) g.fillRect(9, y, 14, 1); g.fillStyle = "#c8303a"; g.fillRect(14, 2, 4, 4); }
    else if (f.drawPetBust) f.drawPetBust(g, who, 0, 0, 1, {});   /* an animal in a person's seat wears its outfit */
    return c;
  }

  var CSS = '.sl{display:flex;flex-direction:column;gap:14px;font-family:var(--vt,"VT323",ui-monospace,monospace)}' +
    '.sl i{font-style:normal}.sl .sl-say i,.sl-log .sl-pp i{color:#e8cfa8}' +
    '.sl-say{background:#3a2214;color:#fbeedd;border:3px solid #000;box-shadow:inset -3px -3px 0 rgba(0,0,0,.38),inset 3px 3px 0 rgba(255,220,170,.16),3px 3px 0 #000;padding:10px 12px 12px;display:grid;grid-template-columns:48px 1fr;gap:12px;align-items:start}' +
    '.sl-say canvas{width:48px;height:48px;image-rendering:pixelated;border:2px solid #000;background:#2b1a10}' +
    '.sl-say .sl-who{font:400 9px/1.3 "Press Start 2P",ui-monospace,monospace;color:#f6b73c;letter-spacing:.06em;text-transform:uppercase;margin:0 0 5px}' +
    ':lang(zh) .sl-say .sl-who,:lang(zh-Hant) .sl-say .sl-who{font:400 17px/1 var(--vt,"VT323",monospace);letter-spacing:0}' +
    '.sl-say p{margin:0;font-size:22px;line-height:1.15;text-wrap:pretty}.sl-say > div{min-width:0}' +
    '.sl-say .sl-card{margin-top:10px;padding-top:10px;border-top:2px dashed rgba(251,238,221,.2);font-size:24px;line-height:1.1;color:#fff3c0}' +
    '.sl-p{margin:0;font-size:22px;line-height:1.2;color:var(--sl-ink,#fbeedd);text-wrap:pretty}.sl-p.sl-big{font-size:28px;line-height:1.05}' +
    '.sl-in{width:100%;min-width:0;box-sizing:border-box;font:400 23px/1.1 var(--vt,"VT323",monospace);color:#1d130d;background:#fffaf0;border:3px solid #000;border-radius:0;padding:10px;box-shadow:inset 2px 2px 0 rgba(0,0,0,.12)}' +
    '.sl-in:focus{outline:3px solid #f6b73c;outline-offset:1px}.sl-in::placeholder{color:#a08a70}' +
    '.sl-acts{display:flex;flex-direction:column;gap:10px}.sl-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}' +
    '.sl-b{-webkit-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;min-height:48px;border:3px solid #000;border-radius:0;background:#3a2214;color:#fbeedd;font:400 22px/1 var(--vt,"VT323",monospace);padding:0 14px;box-shadow:inset -3px -3px 0 rgba(0,0,0,.38),inset 3px 3px 0 rgba(255,220,170,.16),3px 3px 0 #000;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:100%;box-sizing:border-box}' +
    '.sl-b:hover{background:#4d2e1a}.sl-b:active{transform:translate(2px,2px);box-shadow:inset -3px -3px 0 rgba(0,0,0,.38),1px 1px 0 #000}.sl-b:focus-visible{outline:3px solid #f6b73c;outline-offset:2px}' +
    '.sl-b.sl-pri{background:#f6b73c;color:#1d130d;box-shadow:inset -3px -3px 0 rgba(0,0,0,.22),inset 3px 3px 0 rgba(255,255,255,.42),3px 3px 0 #000}.sl-b.sl-pri:hover{background:#ffc95a}.sl-b.sl-lg{min-height:58px;font-size:25px}' +
    '.sl-q{-webkit-appearance:none;appearance:none;background:none;border:0;color:var(--sl-dim,#b8a890);font:400 20px/1 var(--vt,"VT323",monospace);text-decoration:underline;text-underline-offset:3px;cursor:pointer;min-height:44px;padding:0 4px;align-self:center}.sl-q:focus-visible{outline:3px solid #f6b73c}' +
    '.sl-paper{background:#f4e8cf;color:#2b1a0f;border:3px solid #000;box-shadow:3px 3px 0 #000;padding:14px 16px;transform:rotate(-1deg);display:flex;flex-direction:column;gap:10px}' +
    '.sl-paper .sl-pl{font:400 9px/1.3 "Press Start 2P",ui-monospace,monospace;color:#8a2a3a;text-transform:uppercase;letter-spacing:.04em}' +
    ':lang(zh) .sl-paper .sl-pl,:lang(zh-Hant) .sl-paper .sl-pl{font:400 17px/1 var(--vt,"VT323",monospace)}' +
    '.sl-paper p{margin:0;font-size:23px;line-height:1.15}' +
    /* behind the clock: a brass plate, Josep's page, Popo underneath */
    '.sl-scr{position:fixed;inset:0;z-index:60;background:rgba(8,6,12,.62);display:flex;align-items:flex-end;justify-content:center;padding:16px;box-sizing:border-box}' +
    '@media (min-width:720px){.sl-scr{align-items:center}}' +
    '.sl-log{width:100%;max-width:440px;max-height:calc(100dvh - 32px);overflow:auto;box-sizing:border-box;background:#6b4a1e;border:3px solid #000;box-shadow:inset -3px -3px 0 rgba(0,0,0,.35),inset 3px 3px 0 rgba(255,230,160,.25),3px 3px 0 #000;padding:12px;display:flex;flex-direction:column;gap:12px;font-family:var(--vt,"VT323",ui-monospace,monospace);color:#fbeedd}' +
    '.sl-log h2{margin:2px 2px 0;font:400 10px/1.4 "Press Start 2P",ui-monospace,monospace;color:#ffe6a8;text-transform:uppercase;letter-spacing:.04em}' +
    ':lang(zh) .sl-log h2,:lang(zh-Hant) .sl-log h2{font:400 19px/1.1 var(--vt,"VT323",monospace)}' +
    '.sl-pg{background:#efe2c4;color:#2b1a0f;border:3px solid #000;padding:12px 14px;display:flex;flex-direction:column;gap:4px}' +
    '.sl-pg .ca{margin:0;font-size:24px;line-height:1.1;color:#3a2414}.sl-pg .tr{margin:0;font-size:20px;line-height:1.15;color:#6a5440}' +
    '.sl-pg .did{margin-top:8px;padding-top:10px;border-top:2px dashed #b89a6a;display:flex;flex-direction:column;gap:4px}' +
    '.sl-pg .did b{font:400 9px/1.3 "Press Start 2P",ui-monospace,monospace;color:#8a2a3a;text-transform:uppercase}' +
    ':lang(zh) .sl-pg .did b,:lang(zh-Hant) .sl-pg .did b{font:400 17px/1 var(--vt,"VT323",monospace)}' +
    '.sl-pg .did .ca{font-size:21px}' +
    '.sl-pp{display:grid;grid-template-columns:48px 1fr;gap:10px;align-items:start}.sl-pp canvas{width:48px;height:48px;image-rendering:pixelated;background:#2a180e;border:3px solid #000}.sl-pp p{margin:0;font-size:21px;line-height:1.15}' +
    '.sl-yours{margin:0 2px;font-size:21px;color:#ffe6a8}' +
    /* the lights go down */
    '.sl-dark{position:fixed;inset:0;z-index:55;background:#0c0912;color:#8a7a6a;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;cursor:pointer;padding:24px;box-sizing:border-box;font-family:var(--vt,"VT323",monospace)}' +
    '.sl-dark canvas{width:132px;height:96px;image-rendering:pixelated;margin:0 auto 14px}.sl-dark .sl-bigt{font:400 22px/1.5 "Press Start 2P",ui-monospace,monospace;color:#f3e6d2;margin:0 0 10px}' +
    ':lang(zh) .sl-dark .sl-bigt,:lang(zh-Hant) .sl-dark .sl-bigt{font:400 40px/1.1 var(--vt,"VT323",monospace)}' +
    '.sl-dark p{font-size:23px;margin:0 0 10px;max-width:26ch}.sl-dark small{font-size:16px;opacity:.6}' +
    '@media (prefers-reduced-motion:no-preference){.sl > *{animation:slin .3s steps(4) both}@keyframes slin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}}';
  function css() { if (document.getElementById("sl-css")) return; var s = document.createElement("style"); s.id = "sl-css"; s.textContent = CSS; (document.head || document.documentElement).appendChild(s); }

  function mount(root, o) {
    o = o || {}; css(); root.classList.add("sl");
    var hourNow = o.hour || function () { var m = /[?&]h=([\d.]+)/.exec(location.search); if (m) return +m[1] % 24; var d = new Date(); return d.getHours() + d.getMinutes() / 60; };
    function asleep(w) {
      var h = hourNow(), k = w === "miso" || w === "yuzu" ? "cats" : w;
      if (FW().sleeps) return FW().sleeps(k, h);
      return k === "popo" ? h >= 21 || h < 5 : k === "wei" ? h < 6 || (h >= 12 && h < 14) : k === "mei" ? h >= 2 && h < 12 : k === "mantou" ? h >= 22 || h < 6 || (h >= 14 && h < 15.5) : h >= 23 || h < 5;
    }
    /* late is by the person's own clock, not the town's */
    function late() { var d = new Date(), h = /[?&]h=([\d.]+)/.exec(location.search) ? hourNow() : d.getHours() + d.getMinutes() / 60; return h >= 23 || h < 5; }
    var ORDER = ["popo", "wei", "mei", "miso", "yuzu", "mantou"];
    function awake() { return ORDER.filter(function (w) { return !asleep(w); }); }
    function pick(not) { var A = awake().filter(function (w) { return w !== not; }); if (!A.length) return null; var w = A[(Math.random() * A.length) | 0]; try { sessionStorage.setItem("sl_who", w); } catch (e) {} return w; }
    function current() { var w = null; try { w = sessionStorage.getItem("sl_who"); } catch (e) {} return w && W().H[w] && !asleep(w) ? w : pick(); }
    var S = { who: null, a: "", cur: "" };
    function name(w) { return T(W().names[w]); }
    function short(a) { a = (a || "").trim(); return a && a.length <= 24 ? a : ""; }

    function show(name, html, first) {
      S.cur = name; root.innerHTML = html; if (o.screen) o.screen(name);
      root.querySelectorAll("[data-face]").forEach(function (h) { h.parentNode.replaceChild(face(h.getAttribute("data-face")), h); });
      var f = root.querySelector(first || "[data-first]"); if (f) setTimeout(function () { try { f.focus({ preventScroll: true }); } catch (e) {} }, 40);
    }
    function say(w, line, extra) {
      return '<div class="sl-say"><span data-face="' + w + '"></span><div><div class="sl-who">' + esc(name(w)) + "</div><p>" + acts(line) + "</p>" + (extra || "") + "</div></div>";
    }
    function on(sel, fn) { var e = root.querySelector(sel); if (e) e.onclick = fn; return e; }
    function btn(id, label, cls) { return '<button class="sl-b ' + (cls || "") + '" type="button" id="' + id + '">' + esc(label) + "</button>"; }

    function home() {
      if (o.dim) o.dim(false);
      var v = load();
      if (v.morn && ymd(new Date()) >= v.morn.due && !late()) return paperBack(v);
      if (late()) return paper(T(W().paperLate));
      S.who = current(); S.a = "";
      if (!S.who) return paper(T(W().paperLate));
      var H = W().H[S.who], op = H.open[(Math.random() * H.open.length) | 0];
      show("home", say(S.who, T(op)) + '<p class="sl-p">' + esc(T(W().pretend)) + '</p><div class="sl-acts">' + btn("sl-go", T(W().play), "sl-pri sl-lg") + "</div>", "#sl-go");
      on("#sl-go", ask);
    }
    function ask() {
      var H = W().H[S.who];
      show("ask", say(S.who, T(H.ask), H.card ? '<p class="sl-card">' + esc(T(H.card)) + "</p>" : "") +
        '<input class="sl-in" id="sl-ans" type="text" maxlength="80" autocomplete="off" enterkeyhint="go" aria-label="' + esc(T(W().answerA)) + '" placeholder="' + esc(T(H.ph)) + '">' +
        '<div class="sl-two">' + btn("sl-ok", T(W().keep), "sl-pri") + btn("sl-none", T(W().nothing)) + '</div><button class="sl-q" type="button" id="sl-other">' + esc(T(W().other)) + "</button>", "#sl-ans");
      var inp = root.querySelector("#sl-ans"); inp.onkeydown = function (e) { if (e.key === "Enter") root.querySelector("#sl-ok").click(); };
      on("#sl-ok", function () { S.a = inp.value.trim().slice(0, 80); turn(); });
      on("#sl-none", nothing);
      var oth = on("#sl-other", function () { var w = pick(S.who); if (w) { S.who = w; ask(); } });
      if (awake().length < 2 && oth) oth.hidden = true;
    }
    function nothing() {
      played();
      show("end", say(S.who, T(W().H[S.who].none)) + '<p class="sl-p">' + esc(T(W().nothingPlain)) + '</p><div class="sl-acts">' + btn("sl-down", T(W().putDown), "sl-pri sl-lg") +
        '<button class="sl-q" type="button" id="sl-josep">' + esc(T(W().turnRound)) + "</button></div>", "#sl-down");
      on("#sl-down", down); on("#sl-josep", log);
    }
    function turn() {
      var H = W().H[S.who], a = short(S.a);
      show("turn", say(S.who, T(H.turn)) + '<p class="sl-p sl-big">' + esc(T(W().goodNews)) + "</p>");
      var go = function () {
        if (S.cur !== "turn") return;
        var todo = fill(T(a && H.todo0 ? H.todo : (H.todo0 || H.todo)), a);
        var box = document.createElement("div"); box.className = "sl"; box.style.display = "contents";
        box.innerHTML = '<p class="sl-p">' + acts(todo) + "</p>" + (H.plain ? '<p class="sl-p">' + esc(T(H.plain)) + "</p>" : "") +
          '<div class="sl-acts">' + btn("sl-do", T(H.btn), "sl-pri sl-lg") + '<button class="sl-q" type="button" id="sl-later">' + esc(T(W().notToday)) + "</button></div>";
        root.appendChild(box); var d = root.querySelector("#sl-do"); try { d.focus({ preventScroll: true }); } catch (e) {}
        on("#sl-do", function () { if (H.msg) tell(S.who === "wei" ? (S.a || T(H.msg)) : T(H.msg)); else end(); });
        on("#sl-later", function () { paper(T(W().paperLater)); });
      };
      if (o.slow) o.slow(go); else setTimeout(go, 900);
    }
    /* the words go in the person's own messages (FBC.tell); without the kit, the share sheet or a copy */
    function tell(text) {
      var H = W().H[S.who];
      if (window.FBC && FBC.tell) { FBC.tell({ px: 1, root: o.root, title: T(H.btn), choices: [{ label: T(H.btn), text: text, done: end }] }); return; }
      if (navigator.share) navigator.share({ text: text }).then(end, function () {}); else { try { navigator.clipboard.writeText(text); } catch (e) {} end(); }
    }
    function end() {
      played();
      var H = W().H[S.who], a = short(S.a), line = T(a ? H.end : (H.end0 || H.end));
      show("end", say(S.who, fill(line, a)) + (H.plainEnd ? '<p class="sl-p">' + esc(T(H.plainEnd)) + "</p>" : "") + '<div class="sl-acts">' + btn("sl-down", T(W().putDown), "sl-pri sl-lg") + "</div>", "#sl-down");
      on("#sl-down", down);
    }
    /* Put the phone down: the lights go, everyone curls up; a tap comes back */
    function down() {
      if (o.dim) o.dim(true);
      var d = document.createElement("div"); d.className = "sl-dark"; d.setAttribute("role", "button"); d.tabIndex = 0;
      d.innerHTML = '<canvas width="66" height="48" aria-hidden="true"></canvas><div class="sl-bigt">' + esc(T(W().seeTomorrow)) + "</div><p>" + esc(T(W().asleepAll)) + "</p><small>" + esc(T(W().tapWake)) + "</small>";
      var g = d.querySelector("canvas").getContext("2d"), f = FW(); g.fillStyle = "#050308"; g.fillRect(0, 0, 66, 48);
      if (f.drawPet) { f.drawPet(g, "miso", 16, 40, 1, { asleep: true }); f.drawPet(g, "yuzu", 34, 40, 1, { asleep: true, flip: true }); f.drawPet(g, "dog", 52, 42, 1, { asleep: true, flip: true }); }
      g.fillStyle = "#3a3448"; g.fillRect(28, 20, 1, 1); g.fillRect(30, 17, 2, 1); g.fillRect(33, 13, 3, 1);
      var at = Date.now(), wake = function () { if (Date.now() - at < 450) return; d.remove(); home(); };
      d.onclick = wake; d.onkeydown = function (e) { if (e.key === "Enter" || e.key === " " || e.key === "Escape") { at = 0; wake(); } };
      document.body.appendChild(d); d.focus();
      if (o.screen) o.screen("down");
    }
    /* one thing for the morning, on Popo's paper (written after midnight it's for this morning, otherwise tomorrow's) */
    function paper(line) {
      var up = !asleep("popo");
      show("paper", '<div class="sl-paper"><div class="sl-pl">' + esc(up ? name("popo") : T(W().paperNote)) + "</div><p>" + esc(line) + "</p>" +
        '<input class="sl-in" id="sl-mo" type="text" maxlength="80" autocomplete="off" enterkeyhint="done" aria-label="' + esc(T(W().paperA)) + '" placeholder="' + esc(T(W().paperPh)) + '"></div>' +
        '<div class="sl-acts">' + btn("sl-keep", T(W().keepIt), "sl-pri sl-lg") + (late() ? "" : '<button class="sl-q" type="button" id="sl-back">' + esc(T(W().back)) + "</button>") + "</div>", "#sl-mo");
      var inp = root.querySelector("#sl-mo"); inp.onkeydown = function (e) { if (e.key === "Enter") root.querySelector("#sl-keep").click(); };
      on("#sl-keep", function () {
        var t = inp.value.trim().slice(0, 80); if (!t) { inp.focus(); return; }
        var d = new Date(); if (d.getHours() >= 5) d.setDate(d.getDate() + 1);
        var v = load(); v.morn = { due: ymd(d), t: t }; v.at = ymd(new Date()); save(v);
        show("end", '<div class="sl-paper"><div class="sl-pl">' + esc(T(W().onTable)) + "</div><p>" + esc(t) + '</p></div><p class="sl-p">' + esc(T(W().there)) + '</p><div class="sl-acts">' + btn("sl-down", T(W().putDown), "sl-pri sl-lg") + "</div>", "#sl-down");
        on("#sl-down", down);
      });
      on("#sl-back", home);
    }
    function paperBack(v) {
      show("home", '<div class="sl-paper"><div class="sl-pl">' + esc(T(W().fromNight)) + "</div><p>" + esc(v.morn.t) + '</p></div><p class="sl-p">' + esc(T(W().stillToday)) + "</p>" +
        '<div class="sl-two">' + btn("sl-did", T(W().illDo), "sl-pri") + btn("sl-drop", T(W().letGo)) + "</div>", "#sl-did");
      var clear = function () { var x = load(); delete x.morn; save(x); };
      on("#sl-did", function () { clear(); played(); show("end", '<p class="sl-p sl-big">' + esc(T(W().goOn)) + '</p><div class="sl-acts">' + btn("sl-down", T(W().putDown), "sl-pri sl-lg") + "</div>", "#sl-down"); on("#sl-down", down); });
      on("#sl-drop", function () { clear(); home(); });
    }
    function render() {
      if (S.cur === "ask") { var inp = root.querySelector("#sl-ans"), v = inp ? inp.value : ""; ask(); root.querySelector("#sl-ans").value = v; }
      else if (S.cur === "turn" || S.cur === "end" || S.cur === "paper") { /* mid-flow: keep what's there; the next screen speaks the new language */ }
      else home();
    }
    addEventListener("fbl:lang", render);
    return { home: home, log: log, render: render, state: function () { return { cur: S.cur, who: S.who, a: S.a, v: load() }; }, pick: function (w) { S.who = w; try { sessionStorage.setItem("sl_who", w); } catch (e) {} } };
  }

  /* Josep's winding log: the first turn ever shows the last page (why the clock runs slow); after that one at random, never the
     same twice running, and the two tender pages never straight after that first one. Never numbered, never counted. */
  function logPick() {
    var L = W().LOG, v = load(), prev = typeof v.log === "number" ? v.log : null, n;
    if (prev == null) { n = L.length - 1; v.logFirst = 1; }
    else { var ok = []; L.forEach(function (e, i) { if (i !== prev && !(e.tender && v.logFirst)) ok.push(i); }); n = ok[(Math.random() * ok.length) | 0]; v.logFirst = 0; }
    v.log = n; save(v); return L[n];
  }
  function log() {
    css(); var e = logPick(), l = li(), back = document.activeElement, at = Date.now();
    var tr = function (a) { return l === 4 ? "" : '<p class="tr">' + esc(a[Math.min(l, 3)] || a[0]) + "</p>"; };
    var sc = document.createElement("div"); sc.className = "sl-scr";
    sc.innerHTML = '<div class="sl-log" role="dialog" aria-modal="true" aria-label="' + esc(T(W().logA)) + '"><h2>' + esc(T(W().behind)) + "</h2>" +
      '<div class="sl-pg"><p class="ca" lang="ca">' + esc(e.ca) + "</p>" + tr(e.t) + '<div class="did"><b>' + esc(T(W().whatDid)) + '</b><p class="ca" lang="ca">' + esc(e.dca) + "</p>" + tr(e.d) + "</div></div>" +
      '<div class="sl-pp"><span data-face="popo"></span><p>' + acts(T(e.popo)) + '</p></div><p class="sl-yours">' + esc(T(W().yours)) + "</p>" +
      '<button class="sl-b sl-pri" type="button" id="sl-lx">' + esc(T(W().turnBack)) + "</button></div>";
    var ph = sc.querySelector("[data-face]"); ph.parentNode.replaceChild(face("popo"), ph);
    function shut() { sc.remove(); document.removeEventListener("keydown", key, true); try { if (back && back.focus) back.focus({ preventScroll: true }); } catch (x) {} }
    function key(ev) { if (ev.key === "Escape") { ev.preventDefault(); ev.stopPropagation(); shut(); } }
    sc.addEventListener("click", function (ev) { if (ev.target === sc && Date.now() - at > 450) shut(); });
    document.addEventListener("keydown", key, true);
    document.body.appendChild(sc); var b = sc.querySelector("#sl-lx"); b.onclick = shut; b.focus();
    return e;
  }

  window.FBStill = { mount: mount, log: log, face: face, played: function () { var v = load(); return v.at || ""; }, KEY: KEY };
})();
