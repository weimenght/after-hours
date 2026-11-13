/* Paw Reading lives on Next Door's counter now (the owner, Nov 14: the stall by the Plaza folded in here).
   No card yet today: a little deck lies by whichever cat is on the counter; a tap and she paws one card across (asleep, you ease
   one out from under her). Today's card (fb_paw, shared with the Paw Reading app) then stays under her paw; a tap reads it again.
   One card a day, the same for everyone that date (FBPaw.deal: the database's card, or the deck's if it can't be reached);
   only the date is sent. Nothing counted. */
(function () {
  var W = {
    k: ["Today's card, {c}. {n} is keeping it under a paw for you. {a}", "今天的牌，{c}。{n}用爪子替你压着。{a}", "今天的牌，{c}。{n}用爪子替你壓著。{a}", "La carta de hoy, {c}. {n} te la guarda bajo la pata. {a}", "La carta d'avui, {c}. {n} te la guarda sota la pota. {a}"],
    deal: ["*{n} looks at you, then paws one card across the counter.* {c}: {a}", "*{n}看了你一眼，用爪子把一张牌推过柜台。*{c}：{a}", "*{n}看了你一眼，用爪子把一張牌推過櫃台。*{c}：{a}", "*{n} te mira y empuja una carta por la barra con la pata.* {c}: {a}", "*{n} et mira i empeny una carta per la barra amb la pota.* {c}: {a}"],
    zz: ["{n} is asleep on the deck. You ease one card out from under her: {c}. {a}", "{n}趴在牌上睡着了。你从她身下轻轻抽出一张：{c}。{a}", "{n}趴在牌上睡著了。你從她身下輕輕抽出一張：{c}。{a}", "{n} duerme sobre la baraja. Sacas una carta de debajo con cuidado: {c}. {a}", "{n} dorm sobre la baralla. N'estires una carta de sota amb compte: {c}. {a}"],
    miso: ["Miso", "味噌", "味噌", "Miso", "La Miso"], yuzu: ["Yuzu", "柚子", "柚子", "Yuzu", "La Yuzu"],
    lab: ["Today's card", "今天的牌", "今天的牌", "La carta de hoy", "La carta d'avui"],
    deck: ["The cats' deck: today's card", "猫的牌：今天的一张", "貓的牌：今天的一張", "La baraja de los gatos: la carta de hoy", "La baralla dels gats: la carta d'avui"] };
  function li() { var l = (window.FBL && FBL.get && FBL.get()) || "en"; return Math.max(0, ["en", "zh", "zh-Hant", "es", "ca"].indexOf(l)); }
  function X(a) { return a[li()] || a[0]; }
  function day() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function today() { try { var v = JSON.parse(localStorage.getItem("fb_paw") || "null"); return v && v.d === day() && v.i >= 0 && v.i < 54 ? v : null; } catch (e) { return null; } }
  function src(i) { return "/nearby/paw-reading/cards/" + (i < 10 ? "0" : "") + i + ".png"; }
  var st = document.createElement("style"); st.textContent =
    ".nd-paw{position:absolute;left:58%;bottom:1px;width:15px;height:21px;padding:0;margin:0;border:1px solid #000;background:#fbf3e2;box-shadow:1px 1px 0 rgba(0,0,0,.6);transform:rotate(-14deg);z-index:3;cursor:pointer;overflow:hidden}" +
    ".nd-paw img{display:block;width:100%;height:100%;object-fit:cover;image-rendering:auto}.nd-paw:focus-visible,.nd-deck:focus-visible{outline:2px solid #f6b73c;outline-offset:2px}" +
    ".nd-deck{position:absolute;left:62%;bottom:1px;width:15px;height:21px;padding:0;margin:0;border:0;background:transparent;z-index:3;cursor:pointer}" +
    ".nd-deck img{position:absolute;left:0;top:0;width:15px;height:21px;border:1px solid #000;box-sizing:border-box;box-shadow:1px 1px 0 rgba(0,0,0,.6)}" +
    ".nd-deck img+img{left:2px;top:-2px}.nd-deck img+img+img{left:4px;top:-4px}.nd-deck.go img:last-child{transition:transform .5s ease-in;transform:translate(-14px,2px) rotate(-14deg)}" +
    "@media(prefers-reduced-motion:reduce){.nd-deck.go img:last-child{transition:none}}";
  document.head.appendChild(st);
  var tag = null, deck = null, busy = false, PJS = null;
  function paw(cb) {   /* the deck's own code, loaded the first time it's needed */
    if (window.FBPaw) return cb();
    if (!PJS) { PJS = []; var sc = document.createElement("script"); sc.src = "/nearby/paw-reading/paw.js"; sc.onload = function () { var q = PJS; PJS = null; q.forEach(function (f) { f(); }); }; sc.onerror = function () { PJS = null; busy = false; }; document.head.appendChild(sc); }
    PJS.push(cb);
  }
  function words(v, w, key) { var c = FBPaw.cardName(FBPaw.cardOf(v.i), li()), a = FBPaw.askFor(v); if (key === "deal") c = c.charAt(0).toUpperCase() + c.slice(1); return X(W[key]).replace("{c}", c).replace("{n}", X(W[w])).replace("{a}", a ? X(a) : "").trim(); }
  function say(t) { if (!(window.NDSay && NDSay(t))) try { if (window.FBG && FBG.note) FBG.note({ icon: "🔮", text: t.replace(/\*/g, "") }); } catch (x) {} }
  function catNow() { var who = null; ["yuzu", "miso"].some(function (id) {   /* Yuzu is drawn in front, so her paw first: nothing can cover the card */ var e = document.getElementById("cat-" + id); if (e && e.style.display !== "none" && e.offsetParent) { who = id; return true; } return false; }); return who; }
  function asleep() { try { var Wd = window.FBWorld; return !!(Wd && Wd.sleeps && Wd.sleeps("cats", Wd.hour ? Wd.hour() : new Date().getHours())); } catch (e) { return false; } }
  function stop(e) { e.stopPropagation(); }
  function draw() {
    if (busy || today()) return place(); busy = true;
    var who = deck && deck.dataset.who, zz = asleep();
    if (deck) deck.classList.add("go");
    paw(function () {
      FBPaw.deal().then(function (v) { busy = false; if (deck) { deck.remove(); deck = null; } place(); say(words(v, who || "yuzu", zz ? "zz" : "deal")); }, function () { busy = false; });
    });
  }
  function place() {
    var v = today(), who = catNow();
    if (v && tag && tag.dataset.i !== String(v.i)) { tag.remove(); tag = null; }
    if (!who) { if (tag) { tag.remove(); tag = null; } if (deck && !busy) { deck.remove(); deck = null; } return; }
    var cat = document.getElementById("cat-" + who);
    if (!v) {   /* no card yet today: the deck lies by her */
      if (tag) { tag.remove(); tag = null; }
      if (!deck) { deck = document.createElement("button"); deck.type = "button"; deck.className = "nd-deck"; deck.setAttribute("data-fbt-skip", "");
        deck.innerHTML = '<img alt="" src="/nearby/paw-reading/cards/back.png"><img alt="" src="/nearby/paw-reading/cards/back.png"><img alt="" src="/nearby/paw-reading/cards/back.png">';
        deck.addEventListener("pointerdown", stop); deck.addEventListener("click", function (e) { e.stopPropagation(); e.preventDefault(); draw(); }); }
      deck.dataset.who = who; deck.setAttribute("aria-label", X(W.deck));
      if (deck.parentNode !== cat && !busy) cat.appendChild(deck);
      return;
    }
    if (deck && !busy) { deck.remove(); deck = null; }
    if (!tag) { tag = document.createElement("button"); tag.type = "button"; tag.className = "nd-paw"; tag.setAttribute("data-fbt-skip", ""); tag.dataset.i = String(v.i); tag.innerHTML = '<img alt="" src="' + src(v.i) + '">';
      tag.addEventListener("pointerdown", stop); tag.addEventListener("click", function (e) { e.stopPropagation(); e.preventDefault(); var w = tag.dataset.who, t = today(); if (t) paw(function () { say(words(t, w, "k")); }); }); }
    tag.dataset.who = who; tag.setAttribute("aria-label", X(W.lab));
    if (tag.parentNode !== cat) cat.appendChild(tag);
  }
  window.NDPaw = { draw: draw, place: place };   /* test hook */
  setTimeout(place, 1200); setInterval(place, 4000); addEventListener("storage", function (e) { if (e.key === "fb_paw") place(); }); addEventListener("fbback", place);
})();
