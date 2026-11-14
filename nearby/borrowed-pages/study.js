/* Josep's study (Nov 14, the owner: "redesign Josep's Books so it fits in one screen; more details for the books and artifacts in the story").
   In town the four-room house becomes one room on one screen: a bookcase whose top shelf is the family's own (Popo's pocket dictionary,
   the pressed rose, her night-school Spanish primer, Josep's clockmaker's manual and his pencil tin, Ah Fong's letters, the girls' Catalan
   readers), each opening a page of the story told by Popo in her five voices; under it the neighbours' books on two shelves (the same
   books and sheets as before: BP.spine / BP.open, ask and lend unchanged); and the window seat with the house's reading copy, 歲月地圖.
   On its own (?solo=1, outside the town) the house stays as it was. New family details are listed in handoff/STORY_LINES.md. */
(function () {
  "use strict";
  var H = document.documentElement;
  var inTown = H.classList.contains("fbsh-in") || (function () { try { return window.parent !== window && !!window.parent.FBShell; } catch (e) { return false; } })();
  if (!inTown || !window.BP || /[?&]rooms=1/.test(location.search)) return;
  H.classList.add("bp-study");
  var LI = { en: 0, zh: 1, "zh-Hant": 2, es: 3, ca: 4 };
  function L(a) { return a[LI[BP.lang()] || 0] || a[0]; }
  var esc = BP.esc;
  var W = {
    fam: ["The family's shelf", "家里的书", "家裡的書", "Los libros de la familia", "Els llibres de la família"],
    nb: ["The neighbours' books", "邻居们的书", "鄰居們的書", "Los libros de los vecinos", "Els llibres dels veïns"],
    popo: ["Popo", "婆婆", "婆婆", "Popo", "La Popo"],
    lend: ["Bring a book to lend", "带一本书来借给人", "帶一本書來借給人", "Trae un libro para prestar", "Porta un llibre per deixar"],
    seat: ["The window seat", "窗边的座位", "窗邊的座位", "El asiento de la ventana", "El seient de la finestra"],
    pages: ["Turn the pages", "翻翻看", "翻翻看", "Pasa las páginas", "Passa les pàgines"]
  };
  /* the family's things: a spine (c colour, h height 0–1, w px) or a keepsake drawn in pixels (svg) */
  var K = "#1a1410";
  function PX(w, h, r) { return '<svg viewBox="0 0 ' + w + " " + h + '" shape-rendering="crispEdges" aria-hidden="true">' + r.map(function (q) { return '<rect x="' + q[0] + '" y="' + q[1] + '" width="' + q[2] + '" height="' + q[3] + '" fill="' + q[4] + '"/>'; }).join("") + "</svg>"; }
  var ROSE = PX(10, 16, [[3, 0, 4, 1, K], [2, 1, 6, 1, K], [1, 2, 1, 3, K], [8, 2, 1, 3, K], [2, 2, 6, 3, "#7a1e2a"], [3, 3, 3, 1, "#a8323e"], [2, 5, 6, 1, K], [4, 6, 1, 9, "#4a6a3a"], [5, 8, 3, 2, "#5a7a42"], [2, 11, 2, 2, "#5a7a42"]]);
  var TIN = PX(12, 14, [[3, 0, 1, 6, "#c9a24a"], [5, 1, 1, 5, "#3a7a3a"], [7, 0, 1, 6, "#b3261e"], [8, 2, 1, 4, "#c9a24a"], [0, 5, 12, 1, K], [0, 6, 1, 8, K], [11, 6, 1, 8, K], [0, 13, 12, 1, K], [1, 6, 10, 7, "#5a6a7a"], [1, 6, 10, 1, "#8a9aaa"], [3, 9, 6, 2, "#c8b48a"]]);
  var LETTERS = PX(16, 12, [[0, 2, 16, 1, K], [0, 3, 1, 9, K], [15, 3, 1, 9, K], [0, 11, 16, 1, K], [1, 3, 14, 8, "#e8dcc0"], [1, 5, 14, 1, "#d8c8a8"], [1, 8, 14, 1, "#d8c8a8"], [7, 2, 2, 10, "#b3261e"], [1, 6, 14, 1, "#b3261e"], [11, 3, 3, 2, "#3a6aa8"], [6, 0, 4, 2, "#b3261e"]]);
  var FAM = [
    { id: "dict", c: "#a8282e", h: .62, w: 26, tape: 1, lab: "英粵",
      t: ["Popo's pocket dictionary", "婆婆的袖珍字典", "婆婆的袖珍字典", "El diccionario de bolsillo de Popo", "El diccionari de butxaca de la Popo"],
      m: "《英粵袖珍字典》 · Hong Kong, 1967",
      s: [["Miss Leung, my English teacher, give me this. Inside: English, my Cantonese, and Josep's pencil beside every word. Back page, I write the day I arrive.", "梁老师，我的英文老师，送我的。里面：英文，我的广东话，每个字旁边都有 Josep 的铅笔字。最后一页，我写了我到的那天。", "梁老師，我嘅英文老師，送俾我嘅。入面：英文，我嘅廣東話，每個字隔籬都有 Josep 嘅鉛筆字。最尾嗰頁，我寫低我到嗰日。", "Miss Leung, mi profesora de inglés, me lo da. Dentro: inglés, mi cantonés, y el lápiz de Josep al lado de cada palabra. Última página, escribo el día que llego.", "Me'l va regalar la Miss Leung, la meva mestra d'anglès. A dins: l'anglès, el meu cantonès i el llapis d'en Josep al costat de cada paraula. A l'última pàgina hi vaig escriure el dia que vaig arribar."],
        ["Josep lend me his words, one by one. You have a book somebody need? Lend it lah.", "Josep 把他的字一个一个借给我。你有书别人用得上？借出去啦。", "Josep 將佢啲字一個一個借俾我。你有書人哋用得著？借出去啦。", "Josep me presta sus palabras, una por una. ¿Tienes un libro que alguien necesita? Préstalo, ¿eh?", "En Josep em va deixar les seves paraules, una a una. Tens un llibre que algú necessita? Deixa'l."]],
      spreads: 1, lend: 1 },
    { id: "rose", art: ROSE, w: 24, lie: 1,
      t: ["The first Sant Jordi rose", "第一个圣乔治节的玫瑰", "第一個聖佐治節的玫瑰", "La rosa del primer Sant Jordi", "La rosa del primer Sant Jordi"],
      m: "Sant Jordi · 23.IV",
      s: [["The rose from the first Sant Jordi. Dry now, very thin. I press it in the dictionary, at the word love. Don't laugh ah.", "第一个圣乔治节的那枝玫瑰。现在干了，好薄。我把它夹在字典里，就夹在 love 那个字。不许笑喔。", "第一個聖佐治節嗰枝玫瑰。而家乾晒，好薄。我夾咗喺本字典入面，就喺 love 嗰個字。唔准笑呀。", "La rosa del primer Sant Jordi. Ahora seca, muy fina. La pongo dentro del diccionario, en la palabra love. No te ríes, ¿eh?", "La rosa del primer Sant Jordi. Ara seca, primíssima. La vaig premsar al diccionari, a la paraula love. No riguis, eh."],
        ["I got no money for a book, so I give him my dictionary. Every year after, one rose. Never a bunch.", "我没钱买书，就把字典给了他。后来每年，一枝玫瑰。从来不是一束。", "我冇錢買書，咪將本字典俾咗佢囉。之後年年，一枝玫瑰。從來唔係一紮。", "Yo no tengo dinero para libro, entonces le doy mi diccionario. Cada año después, una rosa. Nunca ramo.", "Jo no tenia diners per a un llibre, així que li vaig donar el diccionari. Cada any, després, una rosa. Mai un ram."]] },
    { id: "primer", c: "#c9a24a", h: .52, w: 20, lab: "ESP",
      t: ["Popo's night-school Spanish primer", "婆婆夜校的西班牙语课本", "婆婆夜校的西班牙語課本", "El libro de español de la escuela nocturna de Popo", "El llibre d'espanyol de l'escola nocturna de la Popo"],
      m: "Kowloon, 1967",
      s: [["Night school in Kowloon, after the sewing factory. I learn Spanish for the papers. Then I arrive and everybody talk Catalan at home. Aiya, wrong book!", "在九龙上夜校，下了工厂的班就去。学西班牙文，为了办证件。结果一到，大家在家都讲加泰罗尼亚话。哎呀，书买错啦！", "喺九龍讀夜校，車衣廠收工就去。學西班牙文，為咗啲證件。點知一到，大家喺屋企都講加泰隆尼亞話。哎呀，買錯書囉！", "Escuela de noche en Kowloon, después de la fábrica. Aprendo español para los papeles. Después llego y todos en casa hablan catalán. ¡Ay, libro equivocado!", "Escola nocturna a Kowloon, després de la fàbrica de costura. Vaig aprendre castellà per als papers. I quan vaig arribar, tothom a casa parlava català. Ai, llibre equivocat!"]] },
    { id: "manual", c: "#3f6a4a", h: .78, w: 30, lab: "J.P.",
      t: ["Josep's clockmaker's manual", "外公的修钟手册", "外公的修鐘手冊", "El manual de relojero de Josep", "El manual de rellotger d'en Josep"],
      m: "Manual del rellotger · J. Puig",
      s: [["Josep's book, all oil. He read it at the station between trains. The pages with the big clock, he fold the corner.", "Josep 的书，全是油印子。他在车站等车的空当看。讲大钟那几页，他都折了角。", "Josep 本書，成本都係油漬。佢喺車站等車嘅空檔睇。講大鐘嗰幾頁，佢摺晒角。", "El libro de Josep, todo aceite. Él lee en la estación entre trenes. Las páginas del reloj grande, dobla la esquina.", "El llibre d'en Josep, tot d'oli. El llegia a l'estació entre tren i tren. Les pàgines del rellotge gran, les tenia amb la punta doblegada."]] },
    { id: "letters", art: LETTERS, w: 46, lie: 1,
      t: ["Ah Fong's letters", "阿芳的信", "阿芳的信", "Las cartas de Ah Fong", "Les cartes de l'Ah Fong"],
      m: "Hong Kong → Barcelona",
      s: [["Ah Fong, my best friend from the factory. Thirty years she write me. Every letter start the same: Did you eat?", "阿芳，我在工厂最好的朋友。她给我写了三十年信。每封信开头都一样：吃饭了没有？", "阿芳，我喺工廠最好嘅朋友。佢寫咗三十年信俾我。封封開頭都一樣：食咗飯未呀？", "Ah Fong, mi mejor amiga de la fábrica. Treinta años me escribe. Cada carta empieza igual: ¿Has comido?", "L'Ah Fong, la meva millor amiga de la fàbrica. Em va escriure trenta anys. Totes les cartes començaven igual: Has menjat?"],
        ["Somebody wrote to you long time ago? Write back. Even late is OK.", "很久以前有人写信给你？回一封吧。晚了也没关系。", "好耐之前有人寫信俾你？回一封啦。遲咗都冇所謂。", "¿Alguien te escribe hace mucho? Contesta. Tarde también vale.", "Algú et va escriure fa temps? Contesta-li. Tard també val."]] },
    { id: "readers", c: "#2f5aa8", h: .58, w: 24, two: 1, lab: "CAT",
      t: ["The girls' Catalan readers", "两个女儿的加泰罗尼亚语课本", "兩個女兒的加泰隆尼亞語課本", "Los libros de catalán de las niñas", "Els llibres de català de les nenes"],
      m: "Barcelona, 1980s",
      s: [["The girls learn Catalan at school. I learn from their homework at the shop table. They correct my spelling, very proud of themselves.", "两个女儿在学校学加泰罗尼亚语。我就在铺子的桌上跟着她们的功课学。她们帮我改拼写，得意得很。", "兩個女喺學校學加泰隆尼亞文。我就喺舖頭張枱度跟住佢哋啲功課學。佢哋幫我改串字，好得戚。", "Las niñas aprenden catalán en la escuela. Yo aprendo de sus deberes en la mesa de la tienda. Corrigen mi ortografía, muy orgullosas.", "Les nenes aprenien català a l'escola. Jo l'aprenia dels seus deures, a la taula de la botiga. Em corregien l'ortografia, ben orgulloses."]] },
    { id: "pencil", art: TIN, w: 30,
      t: ["Josep's pencil tin", "外公的铅笔盒", "外公的鉛筆盒", "La lata de lápices de Josep", "La llauna de llapis d'en Josep"],
      m: "",
      s: [["His pencil. Every Catalan word in my dictionary, this one pencil. Very short now. I don't sharpen anymore, I want it to last.", "他的铅笔。我字典里每一个加泰罗尼亚字，都是这一支写的。现在好短了。我不削了，想让它留久一点。", "佢枝鉛筆。我本字典每個加泰隆尼亞字，都係呢枝寫嘅。而家好短喇。我唔再刨，想佢留耐啲。", "Su lápiz. Cada palabra catalana en mi diccionario, este lápiz. Ahora muy corto. Ya no saco punta, quiero que dure.", "El seu llapis. Cada paraula catalana del meu diccionari, aquest llapis. Ara és curtíssim. Ja no li faig punta; vull que duri."]] }
  ];
  /* three spreads of the dictionary (canon: the flyleaf, a page with Josep's pencil, the back page) */
  var SPREAD = '<div class="sd-pages">' +
    '<div class="sd-pg"><i>Take the words with you.</i><span class="sd-sig">Miss Leung, 1967</span></div>' +
    '<div class="sd-pg"><b>home</b> · 家 <span class="sd-pen">casa</span><br><b>friend</b> · 朋友 <span class="sd-pen">amic</span><br><b>rose</b> · 玫瑰 <span class="sd-pen">rosa</span><br><b>love</b> · 愛 <span class="sd-pen">amor</span></div>' +
    '<div class="sd-pg sd-back"><span>到咗。巴塞隆拿，1968。</span></div></div>';
  var CSS = [
    "html.bp-study #house,html.bp-study .floors{display:none!important}",
    "html.bp-study,html.bp-study body{height:100%;overflow:hidden}",
    "html.bp-study body{display:flex;flex-direction:column}",
    "#study{flex:1;min-height:0;width:100%;max-width:920px;margin:0 auto;box-sizing:border-box;padding:56px 10px 10px;display:flex;flex-direction:column;gap:8px}",
    "#study .sd-case{flex:1;min-height:0;display:grid;grid-template-rows:minmax(96px,30%) 1fr 1fr;background:#24160d;border:6px solid #4a2d19;box-shadow:inset 0 0 0 2px #000,0 0 0 2px #000,4px 4px 0 #000;position:relative}",
    "#study .sd-sh{position:relative;display:flex;align-items:flex-end;gap:5px;padding:20px 10px 0;border-bottom:9px solid #6b4426;box-shadow:inset 0 -2px 0 #000,0 2px 0 #000;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;min-height:0}",
    "#study .sd-sh .lab{position:absolute;left:8px;top:3px;font:400 14px/1 VT323,'PingFang SC','Microsoft YaHei',monospace;color:#f3d79a;letter-spacing:.04em;pointer-events:none}",
    "#study .sd-fam{background:linear-gradient(#2e1c10,#24160d);justify-content:flex-start;gap:8px}",
    "#study .sd-it{flex:none;position:relative;padding:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent;transform-origin:50% 100%;transition:transform .15s}",
    "#study .sd-it:hover,#study .sd-it:focus-visible{transform:translateY(-4px)}",
    "#study .sd-it:focus-visible{outline:2px solid #f6b73c;outline-offset:2px}",
    "#study .sd-sp{display:flex;align-items:center;justify-content:center;border:2px solid #000;box-shadow:inset -3px 0 0 rgba(0,0,0,.3),inset 2px 0 0 rgba(255,255,255,.15);box-sizing:border-box}",
    "#study .sd-sp b{writing-mode:vertical-rl;font:400 12px/1 VT323,'PingFang SC',monospace;color:#f6ecd2;letter-spacing:.06em}",
    "#study .sd-sp .tp{position:absolute;left:-2px;right:-2px;height:5px;background:rgba(240,230,190,.75);border:1px solid rgba(0,0,0,.4)}",
    "#study .sd-it svg{display:block;width:100%;height:auto;image-rendering:pixelated;filter:drop-shadow(1px 1px 0 rgba(0,0,0,.6))}",
    "#study .sd-nb .bk{flex:none}",
    "#study .sd-nb .slot{display:flex;align-items:flex-end}",
    "#study .sd-ghost{flex:none;align-self:flex-end;margin-bottom:2px;min-width:44px;height:60%;border:2px dashed rgba(243,215,154,.5);background:none;color:#f3d79a;font:400 15px/1.1 VT323,monospace;cursor:pointer;padding:4px}",
    "#study .sd-seat{flex:none;height:92px;display:flex;align-items:flex-end;gap:12px;padding:0 10px;position:relative}",
    "#study .sd-win{flex:none;width:96px;height:86px;border:5px solid #4a2d19;box-shadow:0 0 0 2px #000;background:linear-gradient(90deg,transparent 48%,#4a2d19 48% 52%,transparent 52%),linear-gradient(0deg,transparent 48%,#4a2d19 48% 52%,transparent 52%),linear-gradient(#151026,#2c1f3a);position:relative;overflow:hidden}",
    "html.bp-day #study .sd-win{background:linear-gradient(90deg,transparent 48%,#4a2d19 48% 52%,transparent 52%),linear-gradient(0deg,transparent 48%,#4a2d19 48% 52%,transparent 52%),linear-gradient(#9cc6dc,#f1d8a8)}",
    "#study .sd-cush{flex:1;height:30px;background:#7a2a2a;border:3px solid #000;box-shadow:inset 0 3px 0 rgba(255,255,255,.15);position:relative;display:flex;align-items:flex-end;padding:0 0 26px 12px;gap:10px}",
    "#study .sd-cush .bk{transform:rotate(-2deg)!important}",
    ".sheet .sd-obj{display:flex;justify-content:center;margin:2px 0 8px}.sheet .sd-obj .sd-sp{height:110px}.sheet .sd-obj svg{width:72px;height:auto;image-rendering:pixelated}",
    ".sheet .sd-say{margin:8px 0;padding:8px 10px;border-left:3px solid #f6b73c;background:rgba(246,183,60,.08)}",
    ".sheet .sd-say small{display:block;font-size:.8em;opacity:.7;margin-bottom:2px}",
    ".sheet .sd-pages{display:flex;gap:6px;overflow-x:auto;margin:6px 0 4px;scroll-snap-type:x mandatory}",
    ".sheet .sd-pg{flex:none;width:150px;min-height:110px;padding:10px;background:#f4ead2;color:#2a1d14;border:2px solid #000;box-shadow:inset -6px 0 0 rgba(0,0,0,.06);font:400 16px/1.35 VT323,'PingFang SC',monospace;scroll-snap-align:start}",
    ".sheet .sd-pg i{font-style:italic;display:block}.sheet .sd-sig{display:block;margin-top:10px;font:400 18px/1 Caveat,cursive}",
    ".sheet .sd-pen{font:400 18px/1 Caveat,cursive;color:#5a5a6a;margin-left:4px}",
    ".sheet .sd-back{display:flex;align-items:flex-end;justify-content:flex-end}.sheet .sd-back span{font:400 17px/1.3 'PingFang TC','Microsoft JhengHei',serif;color:#3a2a6a}",
    "@media (max-height:520px){#study .sd-seat{display:none}#study{padding-top:50px}#study .sd-case{grid-template-rows:minmax(70px,34%) 1fr 1fr}}",
    "@media (min-width:761px){#study{padding-top:58px}#study .sd-seat{height:104px}#study .sd-win{width:120px;height:96px}#study .sd-fam{gap:14px;padding-left:18px}}"
  ].join("");
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
  var root = document.createElement("main"); root.id = "study"; root.setAttribute("aria-label", BP.t("name"));
  root.innerHTML = '<div class="sd-case"><div class="sd-sh sd-fam"><span class="lab" data-w="fam"></span></div><div class="sd-sh sd-nb" id="sd-nb1"><span class="lab" data-w="nb"></span></div><div class="sd-sh sd-nb" id="sd-nb2"></div></div>' +
    '<div class="sd-seat"><div class="sd-win" aria-hidden="true"></div><div class="sd-cush" id="sd-cush"></div></div>';
  var house = document.getElementById("house"); house.parentNode.insertBefore(root, house);
  try { var h = window.FBWorld && FBWorld.hour ? FBWorld.hour() : new Date().getHours(); H.classList.toggle("bp-day", h >= 7 && h < 19); } catch (e) {}

  function famEl(f) {
    var b = document.createElement("button"); b.type = "button"; b.className = "sd-it"; b.id = "sd-" + f.id;
    if (f.art) { b.innerHTML = f.art; b.style.width = f.w + "px"; }
    else {
      var sp = '<span class="sd-sp" style="width:' + f.w + "px;background:" + f.c + '">' + (f.tape ? '<span class="tp" style="top:22%"></span><span class="tp" style="top:64%"></span>' : "") + "<b>" + esc(f.lab || "") + "</b></span>";
      b.innerHTML = f.two ? '<span style="display:flex;gap:2px;align-items:flex-end">' + sp + sp.replace(f.c, "#c84a3a") + "</span>" : sp;
    }
    b.addEventListener("click", function (e) { e.stopPropagation(); open(f); });
    return b;
  }
  function famPaint() {
    var sh = root.querySelector(".sd-fam"), hh = sh.clientHeight - 24;
    [].forEach.call(sh.querySelectorAll(".sd-it"), function (x) { x.remove(); });
    var k = Math.max(1, Math.min(1.8, hh / 110)), sum = 0;
    FAM.forEach(function (f) { sum += f.w * (f.two ? 2 : 1); });
    k = Math.max(.7, Math.min(k, (sh.clientWidth - 44 - (FAM.length - 1) * 8) / sum));
    FAM.forEach(function (f) { var el = famEl(f); sh.appendChild(el); if (f.art) el.style.width = Math.round(f.w * k) + "px"; else [].forEach.call(el.querySelectorAll(".sd-sp"), function (s) { s.style.width = Math.round(f.w * k) + "px"; }); [].forEach.call(el.querySelectorAll(".sd-sp"), function (s, i) { s.style.height = Math.max(40, Math.round(hh * (f.h + (i ? .08 : 0)))) + "px"; }); el.setAttribute("aria-label", L(f.t)); });
  }
  function open(f) {
    try { if (window.FBChapter) FBChapter.hide(); } catch (e) {}
    var sp = f.art ? f.art : '<span class="sd-sp" style="width:' + (f.w * 1.6) + "px;background:" + f.c + '">' + (f.tape ? '<span class="tp" style="top:22%"></span><span class="tp" style="top:64%"></span>' : "") + "<b>" + esc(f.lab || "") + "</b></span>";
    var html = '<div class="open"><div class="pg"><div class="sd-obj">' + sp + "</div><h3>" + esc(L(f.t)) + '</h3><div class="meta">' + esc(f.m || "") + "</div>" +
      (f.spreads ? SPREAD : "") +
      f.s.map(function (l) { return '<div class="sd-say"><small>' + esc(L(W.popo)) + "</small>" + esc(L(l)) + "</div>"; }).join("") +
      (f.lend ? '<div class="row"><button class="btn pri" type="button" data-lend>＋ ' + esc(L(W.lend)) + "</button></div>" : "") + "</div></div>";
    var s = BP.sheet(html, "book");
    var lb = s && s.querySelector("[data-lend]"); if (lb) lb.onclick = function () { BP.close(); BP.bring(); };
    try { navigator.vibrate && navigator.vibrate(8); } catch (e) {}
  }
  function scaleSpine(el, max) {
    var hv = parseFloat(el.style.getPropertyValue("--h")) || 140;
    if (hv > max) el.style.setProperty("--h", Math.max(36, max) + "px");
  }
  function nbPaint() {
    var all = BP.books(), house = all.filter(function (b) { return b.house; }), them = all.filter(function (b) { return !b.house; });
    var r1 = document.getElementById("sd-nb1"), r2 = document.getElementById("sd-nb2"), cush = document.getElementById("sd-cush");
    [r1, r2, cush].forEach(function (r) { [].forEach.call(r.querySelectorAll(".slot,.bk,.sd-ghost"), function (x) { x.remove(); }); });
    var max1 = r1.clientHeight - 26, max2 = r2.clientHeight - 14;
    them.forEach(function (b, i) { var r = i % 2 ? r2 : r1, el = BP.spine(b); el.classList.remove("lie"); scaleSpine(el, i % 2 ? max2 : max1); var w = document.createElement("div"); w.className = "slot"; w.appendChild(el); r.appendChild(w); });
    var g = document.createElement("button"); g.type = "button"; g.className = "sd-ghost"; g.textContent = "＋ " + BP.t("bring"); g.onclick = function () { BP.bring(); };
    (them.length % 2 ? r2 : r1).appendChild(g);
    var seatShown = root.querySelector(".sd-seat").offsetHeight > 0;
    house.forEach(function (b) { var el = BP.spine(b); if (seatShown) cush.appendChild(el); else { el.classList.remove("lie"); el.style.transform = ""; el.style.setProperty("--h", Math.max(36, max1) + "px"); el.style.setProperty("--w", "30px"); var w = document.createElement("div"); w.className = "slot"; w.appendChild(el); r1.insertBefore(w, r1.querySelector(".slot,.sd-ghost")); } });
  }
  function words() { [].forEach.call(root.querySelectorAll("[data-w]"), function (e) { e.textContent = L(W[e.dataset.w]); }); famPaint(); }
  function paint() { try { words(); nbPaint(); } catch (e) {} }
  BP.onRender = paint;
  paint(); requestAnimationFrame(paint);
  var rt = 0; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(paint, 120); });
  addEventListener("fbl:lang", paint);
  window.BPStudy = { paint: paint, FAM: FAM };
})();
