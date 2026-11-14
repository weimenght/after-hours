/* Popo's line, 1968 (Nov 14, the owner: "Nearby Station should tell the story of how Popo took the ship from Hong Kong to Marseille
   then on train to Barcelona"). In town only (never with app=1): every fresh boarding starts on her journey. First the ship, seen
   through a porthole (Hong Kong, Singapore, the Indian Ocean, Cape Town, because the Suez Canal was shut from 1967 to 1975, then
   Marseille), then the train in the station's own window, braking at each real stop: Marseille Saint-Charles, Narbonne, Perpignan,
   Portbou (everyone changed trains at the border: Spain's rails were wider), Girona (where she stopped crying), Barcelona, Estació
   de França, where Josep found her. One line from Popo at each, in her own voice in five languages (fluent Catalan, Cantonese as
   Traditional Chinese, a Hong Kong grandmother's Mandarin, Hong Kong English, broken Spanish). A tap on her card goes on; 🔀 leaves
   the line at once; the station's own director is paused while it runs and handed back after. Nothing kept, nothing sent. */
(function () {
  "use strict";
  if (/[?&]app=1/.test(location.search) || window.__popoLine) return; window.__popoLine = 1;
  var LI = { en: 0, zh: 1, "zh-Hant": 2, es: 3, ca: 4 };
  function li() { return LI[(window.FBL && FBL.get && FBL.get()) || "en"] || 0; }
  function T(a) { return a[li()] || a[0]; }
  /* each beat: where (five languages), Popo's line (five), and for the ship a scene, for the train a stop */
  var SHIP = [
    { s: "hk", w: ["Hong Kong", "香港", "香港", "Hong Kong", "Hong Kong"],
      t: ["Hong Kong at night, all the lights on the water. I stand at the back of the ship and watch, until no more lights. Nineteen years old. One suitcase, one jar salt lemon.",
          "晚上的香港，灯光都在水上。我站在船尾一直看，看到一点灯都没有了。十九岁。一个箱子，一罐咸柠檬。",
          "夜晚嘅香港，啲燈全部喺海面度。我企喺船尾一路望，望到一點燈都冇。十九歲。一個喼，一樽鹹檸檬。",
          "Hong Kong de noche, todas luces en el agua. Yo de pie atrás del barco, miro, miro, hasta no más luces. Diecinueve años. Una maleta, un tarro limones con sal.",
          "Hong Kong de nit, tots els llums sobre l'aigua. Em vaig quedar a popa mirant fins que no en vaig veure cap més. Dinou anys. Una maleta i un pot de llimones en sal."] },
    { s: "sg", w: ["Singapore", "新加坡", "新加坡", "Singapur", "Singapur"],
      t: ["Singapore, wah, so hot! Ship stop one day. I don't go down, I keep my money for Barcelona. I just watch from the rail, everybody so busy.",
          "新加坡，哗，好热呀！船停一天。我没有下船，钱留着去巴塞罗那用。就在栏杆边看，大家都好忙。",
          "新加坡，嘩，熱到死！船停一日。我冇落船，啲錢留返去巴塞隆拿使。我淨係喺欄杆度望，個個都好忙。",
          "Singapur, ¡mucho calor! Barco para un día. Yo no bajo, guardo dinero para Barcelona. Solo miro desde la barandilla, todos muy ocupados.",
          "Singapur, quina calor! El vaixell s'hi va aturar un dia. No vaig baixar: guardava els diners per a Barcelona. Mirava des de la barana, tothom tan enfeinat."] },
    { s: "ocean", w: ["The Indian Ocean", "印度洋", "印度洋", "El océano Índico", "L'oceà Índic"],
      t: ["Many nights, only water and stars. I study my little dictionary under the lamp. English, English, English. Nobody tell me, over there, at home and at the market, they speak Catalan.",
          "好多个晚上，只有水和星星。我在灯下读我的小字典。英文，英文，英文。没有人告诉我，那边的人在家里、在市场讲加泰罗尼亚话呀。",
          "好多晚，得水同星。我喺盞燈下面讀我本細字典。英文，英文，英文。冇人話俾我知，嗰邊啲人喺屋企、喺街市講加泰隆尼亞話㗎。",
          "Muchas noches, solo agua y estrellas. Yo estudio mi diccionario pequeño debajo de la lámpara. Inglés, inglés, inglés. Nadie me dice que allí, en casa y en mercado, hablan catalán.",
          "Moltes nits, només aigua i estrelles. Estudiava el meu diccionari petit sota el llum. Anglès, anglès, anglès. Ningú no em va dir que allà, a casa i al mercat, parlaven català."] },
    { s: "cape", w: ["Cape Town", "开普敦", "開普敦", "Ciudad del Cabo", "Ciutat del Cap"],
      t: ["The canal in Egypt was closed, so the ship go the long way, round all of Africa. Cape Town got one mountain flat like a table. Wind so strong, my hair all go one side.",
          "埃及的运河关了，船只好绕远路，绕过整个非洲。开普敦有一座山，平平的像张桌子。风好大，头发都吹到一边去咯。",
          "埃及條運河閂咗，隻船要兜遠路，兜成個非洲。開普敦有座山，平到好似張枱咁。風好大，啲頭髮全部吹晒去一邊。",
          "El canal de Egipto cerrado, entonces barco va camino largo, toda África alrededor. Ciudad del Cabo tiene montaña plana como mesa. Viento muy fuerte, mi pelo todo a un lado.",
          "El canal d'Egipte era tancat, així que el vaixell va fer la volta llarga, tota l'Àfrica. Ciutat del Cap té una muntanya plana com una taula. Feia tant de vent que tenia tots els cabells cap a un costat."] },
    { s: "mrs", w: ["Marseille", "马赛", "馬賽", "Marsella", "Marsella"],
      t: ["One month on the sea. Then Marseille! A church on the hill with a gold lady on top. My legs still think they on the ship. I walk like a duck lor.",
          "在海上一个月。然后，马赛！山上有座教堂，顶上有个金色的圣母。我的脚还以为在船上，走路像只鸭子咯。",
          "喺海上一個月。跟住，馬賽！山頂有間教堂，上面有個金色嘅聖母。我對腳仲以為喺船度，行路好似隻鴨咁。",
          "Un mes en el mar. ¡Luego Marsella! Una iglesia en la colina con una señora de oro encima. Mis piernas todavía piensan que están en barco. Camino como pato.",
          "Un mes al mar. I després, Marsella! Una església dalt del turó amb una mare de Déu daurada al capdamunt. Les cames encara es pensaven que eren al vaixell: caminava com un ànec."] }
  ];
  var TRAIN = [
    { n: "MARSEILLE-ST-CHARLES", lk: "fr", r: "S.N.C.F.", b: "metropolis", tm: "afternoon", w: ["Marseille Saint-Charles", "马赛圣夏尔站", "馬賽聖查理站", "Marsella Saint-Charles", "Marsella Saint-Charles"],
      t: ["The station got big, big stairs. I carry my suitcase up all by myself. Nobody help. OK, one man help at the top.",
          "火车站有好大好大的楼梯。我自己一个人提着箱子上去，没人帮。好啦，到最上面有个人帮了一下。",
          "車站有條好大好大嘅樓梯。我自己一個挽個喼上去，冇人幫。好啦，去到頂有個男人幫咗下。",
          "La estación tiene escaleras grandes, grandes. Yo subo maleta sola. Nadie ayuda. Bueno, un señor ayuda arriba.",
          "L'estació tenia unes escales enormes. Vaig pujar la maleta tota sola. Ningú no em va ajudar. Bé, un home, ja a dalt de tot."] },
    { n: "NARBONNE", lk: "fr", r: "S.N.C.F.", b: "countryside", tm: "sunset", w: ["Narbonne", "纳博讷", "納博訥", "Narbona", "Narbona"],
      t: ["Out the window: vines, vines, vines. When the sun go down, everything purple. I never see so many grapes in my life.",
          "窗外：葡萄藤，葡萄藤，葡萄藤。太阳下山的时候，什么都变成紫色。我这辈子没见过那么多葡萄。",
          "窗外：葡萄藤，葡萄藤，葡萄藤。日落嗰陣，乜都變晒紫色。我一世都未見過咁多提子。",
          "Por la ventana: viñas, viñas, viñas. Cuando el sol baja, todo morado. Yo nunca veo tantas uvas en mi vida.",
          "Per la finestra: vinyes, vinyes i més vinyes. Quan es pon el sol, tot es torna morat. No havia vist mai tant de raïm."] },
    { n: "PERPIGNAN", lk: "fr", r: "S.N.C.F.", b: "countryside", tm: "night", w: ["Perpignan", "佩皮尼昂", "佩皮尼昂", "Perpiñán", "Perpinyà"],
      t: ["Night already. The old lady across from me give me bread and sausage. I give her one salt lemon. She make a face like this! Ha.",
          "天已经黑了。对面的老太太给我面包和香肠。我给她一颗咸柠檬。她的脸就皱成这样！哈。",
          "天都黑咗。對面個伯母俾麵包同香腸我食。我俾粒鹹檸檬佢。佢塊面皺到咁樣！哈。",
          "Ya de noche. La señora mayor de enfrente me da pan y salchichón. Yo le doy un limón salado. ¡Ella pone una cara así! Ja.",
          "Ja era de nit. La senyora gran del davant em va donar pa i llonganissa. Jo li vaig donar una llimona en sal. Quina cara que va fer! Ha."] },
    { n: "PORT-BOU", lk: "es", r: "RENFE · FRONTERA", b: "coastal", tm: "night", w: ["Portbou · the border", "波尔特沃 · 边境", "波爾特沃 · 邊境", "Portbou · la frontera", "Portbou · la frontera"],
      t: ["At the border, everybody get off with their luggage. The rails in Spain are a different size, so you change train. Middle of the night, cold, police check passports. I hold mine so tight.",
          "到了边境，大家都拿着行李下车。西班牙的铁轨宽度不一样，要换火车。半夜，好冷，警察查护照。我把护照抓得紧紧的。",
          "到咗邊境，個個都挽住行李落車。西班牙啲路軌闊啲，要轉車。半夜，好凍，警察查護照。我揸到本護照實一實。",
          "En la frontera todos bajan con maletas. Las vías en España otro tamaño, entonces cambias de tren. Medianoche, frío, policía mira pasaportes. Yo agarro el mío muy fuerte.",
          "A la frontera tothom baixava amb l'equipatge: les vies d'Espanya són més amples i calia canviar de tren. Mitjanit, fred, la policia mirant els passaports. Jo m'agafava el meu ben fort."] },
    { n: "GERONA", lk: "es", r: "RENFE", b: "countryside", tm: "dawn", w: ["Girona", "赫罗纳", "赫羅納", "Gerona", "Girona"],
      t: ["From the border I cry, cry, cry. At Girona the sun come up. I eat one salt lemon. Finish crying. Sour, but OK lah.",
          "从边境开始我一直哭，哭，哭。到了赫罗纳，太阳出来了。我食了一颗咸柠檬。不哭咯。酸，但是没事啦。",
          "由邊境開始我喊，喊，喊。到赫羅納，太陽出嚟。我食咗粒鹹檸檬。唔喊喇。酸，不過冇事嘅。",
          "Desde la frontera lloro, lloro, lloro. En Girona sale el sol. Como un limón salado. Ya no lloro. Ácido, pero bien.",
          "Des de la frontera vaig plorar i plorar. A Girona va sortir el sol. Em vaig menjar una llimona en sal i vaig deixar de plorar. Àcid, però bé."] },
    { n: "BARCELONA-TÉRMINO", lk: "es", r: "RENFE", b: "metropolis", tm: "afternoon", w: ["Barcelona · Estació de França", "巴塞罗那 · 法国站", "巴塞隆拿 · 法國站", "Barcelona · Estación de Francia", "Barcelona · Estació de França"],
      t: ["Barcelona. The signs, I cannot read one. Then one young man, smell of machine oil, ask me where I go. That one is Josep. The rest you know already lah.",
          "巴塞罗那。站牌，我一个字都看不懂。然后有个年轻人，一身机油味，问我去哪里。那个就是 Josep。后面的你都知道啦。",
          "巴塞隆拿。啲牌，我一個字都睇唔明。跟住有個後生仔，成身機油味，問我去邊。嗰個就係 Josep。之後嘅你都知㗎喇。",
          "Barcelona. Los carteles, no entiendo ninguno. Luego un chico joven, huele aceite de máquina, pregunta dónde voy. Ese es Josep. Lo demás ya sabes.",
          "Barcelona. Els rètols, no n'entenia ni un. Llavors un noi jove, que feia olor d'oli de màquina, em va preguntar on anava. Era en Josep. La resta ja la saps."] }
  ];
  var KICK = ["Popo's line · 1968", "婆婆的路 · 1968", "婆婆條路 · 1968", "El camino de Popo · 1968", "El camí de la Popo · 1968"];
  var ON = ["Tap here to go on", "点这里继续", "撳呢度繼續", "Toca aquí para seguir", "Toca aquí per seguir"];
  var CSS = ".pl-port{position:fixed;inset:0;z-index:60;display:grid;place-items:center;background:#2a1d14;transition:opacity 1s}" +
    ".pl-port.out{opacity:0;pointer-events:none}.pl-port canvas{width:min(78vmin,560px);height:min(78vmin,560px);image-rendering:pixelated;margin-top:-14vmin;filter:sepia(.3) saturate(.85)}" +
    ".pl-card{position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:61;width:min(560px,calc(100vw - 24px));box-sizing:border-box;display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#2a1d14;color:#fbeedd;border:3px solid #000;box-shadow:5px 5px 0 #000,inset 0 0 0 2px #5a3a22;font:400 20px/1.25 'VT323','PingFang SC','Noto Sans SC',monospace;cursor:pointer;animation:plIn .4s steps(4)}" +
    "@keyframes plIn{from{opacity:0;transform:translate(-50%,10px)}}.pl-card canvas{flex:none;width:48px;height:48px;image-rendering:pixelated;border:2px solid #000;background:#3a2414}" +
    ".pl-card b{display:block;font:400 9px/1.6 'Press Start 2P',monospace;color:#f6b73c;letter-spacing:.04em;margin-bottom:4px}.pl-card small{display:block;margin-top:4px;font-size:15px;opacity:.6}" +
    "html:lang(zh-Hans) .pl-card,html:lang(zh-Hant) .pl-card{font-size:17px;line-height:1.5}" +
    "@media (hover:none),(pointer:coarse){.pl-card small{display:none}}@media (prefers-reduced-motion:reduce){.pl-card{animation:none}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var on = false, grace = 0, beat = -1, card = null, port = null, pc = null, timer = 0, raf = 0, scene = "hk", t0 = 0, nextAt = 0;
  function popoFace(cv) { try { var g = cv.getContext("2d"); g.fillStyle = "#3a2414"; g.fillRect(0, 0, 32, 32); if (window.FBWorld && FBWorld.drawPopo) FBWorld.drawPopo(g, 0, 0, 1, {}); } catch (e) {} }
  function say(where, line) {
    if (card) card.remove();
    card = document.createElement("div"); card.className = "pl-card"; card.setAttribute("role", "status");
    var cv = document.createElement("canvas"); cv.width = cv.height = 32; popoFace(cv); card.appendChild(cv);
    var tx = document.createElement("div"); var b = document.createElement("b"); b.textContent = T(KICK) + " · " + where; tx.appendChild(b);
    tx.appendChild(document.createTextNode(line)); var sm = document.createElement("small"); sm.textContent = T(ON); tx.appendChild(sm); card.appendChild(tx);
    card.onclick = function () { nextAt = 0; tick(true); };
    document.body.appendChild(card);
  }
  /* ---- the porthole: a round window on the sea, a pixel scene for each port, the sea moving ---- */
  function hash(n) { var x = Math.sin(n * 127.1) * 43758.5453; return x - Math.floor(x); }
  function draw(now) {
    if (!pc) return; var g = pc.getContext("2d"), N = 96, f = (now - t0) / 1000;
    var night = scene === "hk" || scene === "ocean", dusk = scene === "cape", morn = scene === "mrs";
    var sky = night ? ["#0b1026", "#1a2350"] : dusk ? ["#f2a35a", "#f6d38a"] : morn ? ["#9ad0f0", "#f6e2b8"] : ["#6ab8ec", "#bfe4f6"];
    for (var y = 0; y < 52; y++) { g.fillStyle = y < 26 ? sky[0] : sky[1]; g.fillRect(0, y, N, 1); }
    if (night) for (var s = 0; s < 40; s++) { if (hash(s + Math.floor(f * 2) * 0.01) > .2) { g.fillStyle = "#fff6c0"; g.fillRect((hash(s) * N) | 0, (hash(s + 50) * 44) | 0, 1, 1); } }
    else { g.fillStyle = "#fff8d0"; g.fillRect(dusk ? 60 : 70, dusk ? 38 : 12, 7, 7); }
    var land = night ? "#141a30" : dusk ? "#6a4a3a" : "#4a6a5a";
    if (scene === "hk") { [[6, 30], [14, 22], [20, 34], [26, 18], [34, 28], [40, 24], [48, 32], [56, 20], [64, 30], [72, 26]].forEach(function (b, i) { g.fillStyle = "#1c2238"; g.fillRect(b[0], 52 - (52 - b[1]) * .55, 7, (52 - b[1]) * .55); for (var k = 0; k < 6; k++) if (hash(i * 9 + k) > .35) { g.fillStyle = ["#f6c84a", "#ff6a8a", "#7affc1", "#fff3c0"][k % 4]; g.fillRect(b[0] + 1 + (k % 3) * 2, 52 - (52 - b[1]) * .55 + 2 + ((k / 3) | 0) * 4, 1, 1); } });
      g.fillStyle = "#101428"; for (var x = 0; x < N; x++) { var h = 10 + Math.abs(((x * 3) % 40) - 20) * .3; if (x > 74) { g.fillRect(x, 52 - h, 1, h); } } }
    if (scene === "sg") { for (var x2 = 0; x2 < 40; x2++) { g.fillStyle = "#3a6a4a"; g.fillRect(x2, 46 - Math.sin(x2 / 6) * 2, 1, 8); } [[50, 40, 14], [70, 42, 10]].forEach(function (s2) { g.fillStyle = "#5a4a3a"; g.fillRect(s2[0], s2[1], s2[2], 5); g.fillStyle = "#c8302a"; g.fillRect(s2[0] + 3, s2[1] - 4, 3, 4); }); }
    if (scene === "cape") { g.fillStyle = "#5a4a4a"; g.fillRect(14, 30, 46, 22); g.fillRect(10, 36, 4, 16); g.fillRect(60, 36, 6, 16); g.fillStyle = "#fbeedd"; g.fillRect(14, 28, 46, 3); g.fillStyle = "#e8d2b0"; for (var c = 0; c < 4; c++) g.fillRect(16 + c * 10 + ((f * 6) % 10), 26, 6, 2); }
    if (scene === "mrs") { g.fillStyle = "#8a7a5a"; for (var x3 = 0; x3 < N; x3++) { var h3 = 8 + Math.max(0, 20 - Math.abs(x3 - 46) * .7); g.fillRect(x3, 52 - h3, 1, h3); } g.fillStyle = "#e8dcc4"; g.fillRect(42, 24, 8, 8); g.fillRect(45, 16, 2, 8); g.fillStyle = "#f6c84a"; g.fillRect(45, 12, 2, 4); g.fillStyle = "#c86a4a"; for (var r = 0; r < 8; r++) g.fillRect(8 + r * 10, 46, 7, 2); }
    var sea = night ? ["#0e1a3a", "#16285a"] : dusk ? ["#3a5a7a", "#5a7a9a"] : ["#2a6aa8", "#3a8ac8"];
    for (var y2 = 52; y2 < N; y2++) { g.fillStyle = sea[(y2 + ((f * 4) | 0)) % 6 < 3 ? 0 : 1]; g.fillRect(0, y2, N, 1); }
    for (var w = 0; w < 14; w++) { var wx = (hash(w + 3) * N + f * (8 + w % 3 * 3)) % (N + 10) - 10, wy = 56 + hash(w + 9) * 38; g.fillStyle = night ? "rgba(246,200,74,.4)" : "rgba(255,255,255,.6)"; g.fillRect(wx | 0, wy | 0, 5, 1); }
    if (scene === "ocean" && ((f * 10) | 0) % 50 < 6) { g.fillStyle = "#c8d4dc"; g.fillRect((30 + (f * 30) % 30) | 0, 62 - (((f * 10) | 0) % 50), 3, 1); }   /* a flying fish */
    var roll = Math.sin(f * .9) * 2;   /* the ship rolls a little */
    g.save(); var img = g.getImageData(0, 0, N, N); g.clearRect(0, 0, N, N); g.putImageData(img, 0, roll | 0); g.restore();
    /* the porthole: brass ring, rivets, dark outside the glass */
    for (var py = 0; py < N; py++) for (var px = 0; px < N; px++) { var d = Math.hypot(px - 47.5, py - 47.5); if (d > 46) { g.fillStyle = "#2a1d14"; g.fillRect(px, py, 1, 1); } else if (d > 40) { g.fillStyle = d > 44 ? "#5a3a14" : d > 42 ? "#c8902a" : "#f6c84a"; g.fillRect(px, py, 1, 1); } }
    for (var rv = 0; rv < 12; rv++) { var a = rv / 12 * Math.PI * 2; g.fillStyle = "#3a2410"; g.fillRect((47.5 + Math.cos(a) * 43) | 0, (47.5 + Math.sin(a) * 43) | 0, 2, 2); }
    g.fillStyle = "rgba(255,255,255,.18)"; g.fillRect(28, 20, 10, 2); g.fillRect(26, 22, 3, 8);
    raf = requestAnimationFrame(draw);
  }
  function portOpen() { port = document.createElement("div"); port.className = "pl-port"; pc = document.createElement("canvas"); pc.width = pc.height = 96; port.appendChild(pc); document.body.appendChild(port); t0 = performance.now(); raf = requestAnimationFrame(draw); }
  function portClose() { if (!port) return; port.classList.add("out"); var p = port; setTimeout(function () { cancelAnimationFrame(raf); p.remove(); }, 1100); port = null; pc = null; }
  /* ---- the train: each stop of hers, braking in the station's own window ---- */
  /* the signs as they read in 1968: SNCF enamel in France; over the border, under Franco, in Spanish (Port-Bou, Gerona, Barcelona-Término) */
  function stopOf(s) { return { name: s.n, sub: s.r, region: s.r, look: s.lk, biome: s.b, ink: "#b3261e", icon: "fa-train", code: "1968", __popo: 1 }; }
  function trainTo(s) { try { state.station = stopOf(s); setBiome(s.b, false); setTimeOfDay(s.tm); setWeather("clear"); syncHUDAndButtons(); } catch (e) {} }
  var phase = "";   /* "ship" | "cruise" | "brake" | "stop" */
  function tick(force) {
    if (!on) return; var now = Date.now();
    try { if (window.FBCabin && FBCabin.director && FBCabin.director.on) FBCabin.director.stop(); } catch (e) {}   /* boarding may start it again: it waits till her line ends */
    if (beat >= SHIP.length && now > grace && state && state.station && !state.station.__popo) return end();   /* 🔀 took the window somewhere else */
    if (!force && now < nextAt) return;
    if (phase === "ship" || beat < 0) {
      beat++;
      if (beat < SHIP.length) { phase = "ship"; scene = SHIP[beat].s; say(T(SHIP[beat].w), T(SHIP[beat].t)); sfx(scene); nextAt = now + 40000; return; }
      portClose(); phase = "cruise"; old(true); trainTo(TRAIN[0]); try { if (state.trainState !== "CRUISING") state.trainState = "CRUISING"; } catch (e) {}
      sfx("whistle"); nextAt = now + (force ? 12000 : 30000); return;
    }
    var i = beat - SHIP.length, s = TRAIN[i];
    if (phase === "cruise") { if (state.trainState === "CRUISING") { triggerStationStopOrDepart(); phase = "brake"; sfx("brake"); } nextAt = now + 1500; return; }
    if (phase === "brake") { if (state.trainState === "STOPPED") { phase = "stop"; sfx("door"); say(T(s.w), T(s.t)); nextAt = now + 30000; } else nextAt = now + 1000; return; }
    if (phase === "stop") {
      if (i >= TRAIN.length - 1) return end(true);
      beat++; var nx = TRAIN[i + 1]; grace = now + 4500; triggerStationStopOrDepart();   /* depart; the station picks a random next stop after 2.8 s, so ours is set after that */
      setTimeout(function () { if (on) trainTo(nx); }, 3200);
      sfx("whistle"); phase = "cruise"; nextAt = now + (force ? 12000 : 40000);   /* her card stays up while the train rides on; a tap on it goes on sooner */
    }
  }
  /* 1968 in the window: the city low and without neon, no express (view.js reads __nb1968), and colour faded like her photos */
  function old(onoff) { window.__nb1968 = !!onoff; var v = document.getElementById("windowViewport"); if (v) { v.style.transition = "filter 2s"; v.style.filter = onoff ? "sepia(.38) saturate(.78) contrast(.94) brightness(.98)" : ""; } }
  /* sounds that belong to 1968, made here (Web Audio, nothing fetched); the shell's sound switch mutes them like everything else */
  var AC = null, sea = null;
  function ac() { try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === "suspended") AC.resume(); } catch (e) {} return AC; }
  addEventListener("pointerdown", function () { ac(); }, { capture: true, passive: true });
  function soundOn() { try { return !(window.parent !== window && window.parent.FBSound && !window.parent.FBSound.on()); } catch (e) { return true; } }
  function noise(a, dur) { var b = a.createBuffer(1, Math.max(1, a.sampleRate * dur | 0), a.sampleRate), d = b.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; var n = a.createBufferSource(); n.buffer = b; return n; }
  function env(a, g, t, at, hold, rel, v) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + at); g.gain.setValueAtTime(v, t + at + hold); g.gain.exponentialRampToValueAtTime(0.0001, t + at + hold + rel); }
  function horn(a, t) { [92, 138].forEach(function (f) { var o = a.createOscillator(), lp = a.createBiquadFilter(), g = a.createGain(); o.type = "sawtooth"; o.frequency.value = f; lp.type = "lowpass"; lp.frequency.value = 420; o.connect(lp); lp.connect(g); g.connect(a.destination); env(a, g, t, 0.25, 2.2, 1.2, 0.06); o.start(t); o.stop(t + 4); }); }
  function gull(a, t) { for (var k = 0; k < 3; k++) { var o = a.createOscillator(), g = a.createGain(), tk = t + k * 0.32; o.type = "triangle"; o.frequency.setValueAtTime(1500, tk); o.frequency.exponentialRampToValueAtTime(2400, tk + 0.08); o.frequency.exponentialRampToValueAtTime(1100, tk + 0.24); o.connect(g); g.connect(a.destination); env(a, g, tk, 0.02, 0.12, 0.12, 0.018); o.start(tk); o.stop(tk + 0.32); } }
  function waves(a) {   /* the sea against the hull, slow swells while the porthole is up */
    if (sea) return; var n = noise(a, 4), lp = a.createBiquadFilter(), g = a.createGain(), lfo = a.createOscillator(), lg = a.createGain();
    n.loop = true; lp.type = "lowpass"; lp.frequency.value = 520; g.gain.value = 0.022; lfo.frequency.value = 0.11; lg.gain.value = 0.018; lfo.connect(lg); lg.connect(g.gain);
    n.connect(lp); lp.connect(g); g.connect(a.destination); n.start(); lfo.start(); sea = { n: n, lfo: lfo, g: g };
  }
  function hush() { if (!sea) return; try { var a = AC, t = a.currentTime; sea.g.gain.cancelScheduledValues(t); sea.g.gain.setTargetAtTime(0.0001, t, 0.8); var s0 = sea; setTimeout(function () { try { s0.n.stop(); s0.lfo.stop(); } catch (e) {} }, 4000); } catch (e) {} sea = null; }
  function sfx(k) {
    if (!soundOn()) return; var a = ac(); if (!a || a.state !== "running") return; var t = a.currentTime + 0.05;
    if (k === "hk") { waves(a); horn(a, t + 0.4); gull(a, t + 4); }
    else if (k === "sg" || k === "cape") { waves(a); gull(a, t + 0.6); if (k === "cape") gull(a, t + 2.2); }
    else if (k === "ocean") { waves(a); }
    else if (k === "mrs") { waves(a); gull(a, t + 0.3); horn(a, t + 1.6); }
    else if (k === "whistle") { hush();   /* the guard's whistle: a pea whistle, two blasts, then the train pulls out */
      [0, 0.75].forEach(function (d, i) { var o = a.createOscillator(), lfo = a.createOscillator(), lg = a.createGain(), g = a.createGain(), td = t + d; o.type = "sine"; o.frequency.value = 2650; lfo.frequency.value = 28; lg.gain.value = 140; lfo.connect(lg); lg.connect(o.frequency); o.connect(g); g.connect(a.destination); env(a, g, td, 0.02, i ? 0.55 : 0.25, 0.08, 0.035); o.start(td); lfo.start(td); o.stop(td + 0.8); lfo.stop(td + 0.8); }); }
    else if (k === "brake") {   /* steel on steel as the train slows */
      var o = a.createOscillator(), o2 = a.createOscillator(), g = a.createGain(); o.type = "sine"; o2.type = "sine"; o.frequency.setValueAtTime(3400, t + 1); o.frequency.linearRampToValueAtTime(2900, t + 5); o2.frequency.value = 4210; o.connect(g); o2.connect(g); g.connect(a.destination); env(a, g, t + 1, 0.6, 2.6, 1.6, 0.012); o.start(t + 1); o2.start(t + 1); o.stop(t + 6); o2.stop(t + 6);
      var n = noise(a, 5), bp = a.createBiquadFilter(), gn = a.createGain(); bp.type = "bandpass"; bp.frequency.value = 1800; bp.Q.value = 2; n.connect(bp); bp.connect(gn); gn.connect(a.destination); env(a, gn, t + 1, 0.5, 2.5, 1.2, 0.02); n.start(t + 1); }
    else if (k === "door") {   /* a carriage door swung open and slammed, on a stopped train */
      var n2 = noise(a, 0.4), lp2 = a.createBiquadFilter(), g2 = a.createGain(), td2 = t + 1.2; lp2.type = "lowpass"; lp2.frequency.value = 380; n2.connect(lp2); lp2.connect(g2); g2.connect(a.destination); env(a, g2, td2, 0.005, 0.03, 0.25, 0.25); n2.start(td2);
      var o3 = a.createOscillator(), g3 = a.createGain(); o3.type = "triangle"; o3.frequency.setValueAtTime(140, td2); o3.frequency.exponentialRampToValueAtTime(60, td2 + 0.2); o3.connect(g3); g3.connect(a.destination); env(a, g3, td2, 0.004, 0.02, 0.2, 0.08); o3.start(td2); o3.stop(td2 + 0.3); }
  }
  var iv = 0;
  function end(done) { on = false; clearInterval(iv); portClose(); old(false); hush(); if (card) { var c = card; setTimeout(function () { c.remove(); }, done ? 12000 : 0); card = null; } try { window.FBCabin && FBCabin.director && FBCabin.director.start(); } catch (e) {} }
  function start() {
    if (on || typeof state === "undefined" || typeof triggerStationStopOrDepart !== "function") return;
    on = true; beat = -1; phase = "";
    try { window.FBCabin && FBCabin.director && FBCabin.director.stop(); } catch (e) {}
    portOpen(); tick(true); iv = setInterval(tick, 500);
  }
  window.FBPopoLine = { start: start, end: end, next: function () { nextAt = 0; tick(true); }, get beat() { return beat; }, get phase() { return phase; } };
  /* every fresh boarding in town starts on her line, once the window is up */
  function go() { var n = 0, w = setInterval(function () { n++; if (n > 40) return clearInterval(w); if (typeof state !== "undefined" && window.FBCabin && document.getElementById("windowViewport")) { clearInterval(w); setTimeout(start, 1200); } }, 250); }
  if (document.readyState === "complete") go(); else addEventListener("load", go);
})();
