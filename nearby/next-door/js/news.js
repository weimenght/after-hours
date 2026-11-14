/* Wei knows everywhere and everything in town, and always shares: live news from every place, plus where to go next. */
(function () {
  /* Fallback names only: the real names come from FBWorld.PLACES (build/fbl.js). [EN, 简中, ES, CA, url] */
  const P = {
    bar: ["Next Door", "隔壁", "Al Lado", "Al Costat", "/nearby/next-door/"], popo: ["Popo's House", "婆婆家", "Casa de Popo", "Cal Popo", "/nearby/popos-house/"], books: ["Josep's Books", "外公书房", "Libros de Josep", "Llibres d'en Josep", "/nearby/borrowed-pages/"],
    jukebox: ["Same Song", "同一首歌", "La Misma Canción", "La Mateixa Cançó", "/nearby/same-song/"], postcard: ["Say Hello", "问个好", "Di Hola", "Digues Hola", "/nearby/say-hello/"], kintsugi: ["Mended", "金缮坊", "Remendado", "Adobat", "/nearby/mended/"],
    tower: ["Josep's Clock", "外公的钟", "Reloj de Josep", "Rellotge d'en Josep", "/nearby/slow-clock/"], train: ["Estació de França", "法兰西车站", "Estación de Francia", "Estació de França", "/nearby/station/"], dj: ["Late Light", "夜灯", "Luz Tardía", "Llum Tardana", "/nearby/late-light/"],
    climb: ["Hold On", "抓稳", "Agárrate", "Agafa't", "/nearby/hold-on/"], cloud: ["Lie Back Park", "看云坡", "Parque Panza Arriba", "Parc Panxa Enlaire", "/nearby/lie-back/"], nest: ["Miso & Yuzu's", "味噌和柚子家", "Casa de Miso y Yuzu", "Cal Miso i la Yuzu", "/nearby/miso-and-yuzu/"],
    garden: ["the Lemon Tree", "柠檬树", "el Limonero", "el Llimoner", "/nearby/plant-a-friend/"], sanctuary: ["Mantou's Yard", "馒头的院子", "Patio de Mantou", "Pati d'en Mantou", "/nearby/come-home/"], brewery: ["Neighbours' Brew", "邻家酿", "Cerveza Vecina", "Cervesa Veïna", "/nearby/neighbours-brew/"],
    restaurant: ["Two Candles", "双烛小馆", "Dos Velas", "Dues Espelmes", "/nearby/two-candles/"], cabin: ["Popo's Cabin", "不急", "Cabaña de Popo", "Cabana de la Popo", "/nearby/no-hurry/"], meadow: ["Wildflower Meadow", "野花草甸", "Prado de Flores", "Prat de Flors", "/nearby/lie-back/?place=meadow"],
    lake: ["Mirror Lake", "镜湖", "Lago Espejo", "Llac Mirall", "/nearby/lie-back/?place=lake"], sea: ["Sandy Cove", "沙湾", "Cala de Arena", "Cala de Sorra", "/nearby/lie-back/?place=sea"], forest: ["Pine Wood", "松林", "Pinar", "Pineda", "/nearby/lie-back/?place=forest"],
    pasture: ["High Pasture", "高山牧场", "Pasto Alto", "Pastura Alta", "/nearby/lie-back/?place=mountain"], peaks: ["Snow Peaks", "雪峰", "Picos Nevados", "Cims Nevats", "/nearby/lie-back/?place=snow"]
  };
  const pn = k => (window.FBWorld && FBWorld.name && FBWorld.PLACES[k]) ? FBWorld.name(k, { en: 'en', zh: 'zh', tw: 'zh-Hant', yue: 'zh-Hant', es: 'es', ca: 'ca' }[AppState.lang] || 'en') : L(lx([P[k][0], P[k][1], '', '', P[k][2], P[k][3]]));
  const S = (en, zh, es, ca) => lx([en, zh, '', '', es, ca]);
  const fill = (o, v) => L(o).replace(/\{(\w+)\}/g, (m, k) => v[k] != null ? v[k] : m);
  const UI = { go: S("Take me there →", "带我去 →", "Llévame →", "Porta-m'hi →"), more: S("And what else?", "还有呢？", "¿Y qué más?", "I què més?"), back: S("← Back", "← 返回", "← Volver", "← Tornar") };
  const LINE = {
    cats: S("\"Miso's at {a} today and Yuzu's at {b}. They'll be back for dinner. They always are.\"", "\"今天味噌在{a}，柚子在{b}。晚饭前会回来的，每次都是。\"", "\"Hoy Miso está en {a} y Yuzu en {b}. Volverán para cenar. Siempre vuelven.\"", "\"Avui la Miso és a {a} i la Yuzu a {b}. Tornaran per sopar. Sempre tornen.\""),
    catsTogether: S("\"Miso and Yuzu wandered off to {a} together. Go and say hi.\"", "\"味噌和柚子一起溜去{a}了。去打个招呼吧。\"", "\"Miso y Yuzu se fueron juntas a {a}. Ve a saludarlas.\"", "\"La Miso i la Yuzu han marxat juntes a {a}. Ves a saludar-les.\""),
    dog: S("\"Mantou's at {a}. Bring a ball. He'll pretend he doesn't want it.\"", "\"馒头在{a}。带个球去，它会假装不想玩。\"", "\"Mantou está en {a}. Llévale una pelota. Fingirá que no la quiere.\"", "\"En Mantou és a {a}. Porta-li una pilota. Farà veure que no la vol.\""),
    beerNew: S("\"{b} just brewed {n}, a fresh {s}. {w}\"", "\"{b} 刚酿了一款叫{n}的{s}。{w}\"", "\"{b} acaba de elaborar {n}, una {s} recién hecha. {w}\"", "\"{b} acaba d'elaborar {n}, una {s} acabada de fer. {w}\""),
    beerHere: S("I've got it on tap.", "我这儿就有。", "La tengo de barril.", "La tinc de barril."), beerClub: S("Late Light has it.", "“夜灯”那边有。", "La tienen en Luz Tardía.", "La tenen a Llum Tardana."), beerNone: S("Nobody's pouring it yet.", "还没地方卖。", "Aún nadie la sirve.", "Encara ningú la serveix."),
    noBeer: S("\"The kettles at Neighbours' Brew are cold. Nobody has brewed a beer yet. Be the first; I'll put it on tap.\"", "\"“邻家酿”的锅还是凉的，还没人酿过。你来当第一个吧，我给你上架。\"", "\"Las ollas de Cerveza Vecina están frías. Nadie ha elaborado aún. Sé el primero; la pongo de barril.\"", "\"Les olles de Cervesa Veïna són fredes. Encara ningú n'ha elaborat. Sigues el primer; la poso de barril.\""),
    garden: S("\"Things are growing at the Lemon Tree. Somebody planted near the edge this morning.\"", "\"“柠檬树”里长着好些东西。今早还有人在边上种了新的。\"", "\"Crecen cosas en el Limonero. Esta mañana alguien plantó cerca del borde.\"", "\"Creixen coses al Llimoner. Aquest matí algú ha plantat a prop de la vora.\""),
    gardenNone: S("\"the Lemon Tree is still bare soil. One seed and it starts.\"", "\"“柠檬树”还是一片空地。种下一颗种子，它就开始了。\"", "\"el Limonero aún es tierra. Una semilla y empieza.\"", "\"el Llimoner encara és terra. Una llavor i comença.\""),
    sanctuary: S("\"Animals waiting for a home at Mantou's Yard: {n}. Real ones. Have a look.\"", "\"“馒头的院子”有 {n} 只动物在等一个家，都是真的。去看看吧。\"", "\"Animales esperando hogar en Patio de Mantou: {n}. De verdad. Echa un vistazo.\"", "\"Animals esperant llar a Pati d'en Mantou: {n}. De debò. Fes-hi un cop d'ull.\""),
    sanctuaryNone: S("\"The adoption board at Mantou's Yard is empty today. That's good news, mostly.\"", "\"今天“馒头的院子”的领养板是空的。多半是好消息。\"", "\"El tablón de adopciones de Patio de Mantou está vacío hoy. Buena señal, casi siempre.\"", "\"El tauler d'adopcions de Pati d'en Mantou és buit avui. Bon senyal, gairebé sempre.\""),
    wall: S("\"There are postcards on our Wall. One of them made me laugh.\"", "\"我们墙上挂着明信片，有一张把我逗笑了。\"", "\"Hay postales en nuestro muro. Una me hizo reír.\"", "\"Hi ha postals al nostre mur. Una m'ha fet riure.\""),
    wallNone: S("\"Our Wall's waiting for its first postcard. Popo keeps thirty years of them in her front room, if you want to see how it's done.\"", "\"墙上还在等第一张明信片。婆婆的前厅里收着三十年的明信片，想看看人家怎么写的，就去看看。\"", "\"Nuestro muro espera su primera postal. Popo guarda treinta años de ellas en su sala, por si quieres ver cómo se hace.\"", "\"El nostre mur espera la primera postal. La Popo en guarda trenta anys a la sala, per si vols veure com es fa.\""),
    weather: S("\"It's {w} out there tonight. Don't like it? Josep's Clock can change the sky.\"", "\"今晚外面{w}。不喜欢？“外公的钟”可以换天。\"", "\"Esta noche está {w}. ¿No te gusta? El Reloj de Josep cambia el cielo.\"", "\"Aquesta nit fa {w}. No t'agrada? El Rellotge d'en Josep canvia el cel.\"")
  };
  const WX = { clear: S("clear", "晴", "despejado", "serè"), cloudy: S("cloudy", "多云", "nublado", "ennuvolat"), rain: S("raining", "下雨", "lloviendo", "plovent"), storm: S("stormy", "有雷雨", "tormentoso", "tempestuós"), snow: S("snowing", "下雪", "nevando", "nevant"), fog: S("foggy", "起雾", "con niebla", "boirós") };
  const TIPS = [
    ["popo", S("\"Popo's house is two doors down. The kitchen's warm, and her box of postcards is in the front room.\"", "\"婆婆家就在隔两间。厨房很暖，她的明信片盒在前厅。\"", "\"La casa de Popo está a dos puertas. La cocina está caliente y su caja de postales, en la sala.\"", "\"La casa de la Popo és a dues portes. La cuina és calenta i la capsa de postals, a la sala.\"")],
    ["books", S("\"Josep's Books, across the lane, gets quiet after nine. Best time to find something you weren't looking for.\"", "\"巷子对面的“外公书房”九点以后就安静了，最适合找到你没在找的书。\"", "\"Libros de Josep, enfrente, se queda tranquila después de las nueve. El mejor momento para encontrar lo que no buscabas.\"", "\"Llibres d'en Josep, al davant, es queda tranquil·la després de les nou. El millor moment per trobar el que no buscaves.\"")],
    ["kintsugi", S("\"Broke something? Mended puts it back together with gold. Works on bad days too.\"", "\"打碎了什么？“金缮坊”会用金子补好。坏日子也一样。\"", "\"¿Rompiste algo? En Remendado lo reparan con oro. También sirve para los días malos.\"", "\"Has trencat alguna cosa? A Adobat la reparen amb or. També serveix per als dies dolents.\"")],
    ["train", S("\"Estació de França, at the bottom of the hill, rides Popo's line first: Hong Kong to Barcelona, 1968, the way she came. Ride it once.\"", "\"山脚的“法兰西车站”，第一程先走婆婆的路：一九六八年，从香港到巴塞罗那，她当年就是这样来的。坐一次吧。\"", "\"La Estación de Francia, al pie de la colina, hace primero el camino de Popo: de Hong Kong a Barcelona, 1968, como llegó ella. Haz el viaje una vez.\"", "\"L'Estació de França, al peu del turó, fa primer el camí de la Popo: de Hong Kong a Barcelona, 1968, com va arribar ella. Fes el viatge un cop.\"")],
    ["cloud", S("\"Up in Lie Back Park you lie in the grass and watch the clouds go over. The lake at dusk is my favourite.\"", "\"在“看云坡”躺在草地上，看云飘过去。我最喜欢黄昏的湖。\"", "\"En el Parque Panza Arriba te tumbas en la hierba a ver pasar las nubes. El lago al atardecer es mi favorito.\"", "\"Al Parc Panxa Enlaire t'estires a l'herba a veure passar els núvols. El llac al capvespre és el meu preferit.\"")],
    ["cabin", S("\"When it all gets loud, Popo's Cabin is Popo's cabin up the hill, the one Avi built, with a big window. Her albums are on the shelf. I leave a candle.\"", "\"太吵的时候，山上有婆婆的小屋“婆婆的小屋”，是外公盖的，有扇大窗。她的相簿在架子上。我留了一支蜡烛。\"", "\"Cuando todo hace ruido, Cabaña de Popo es la cabaña de Popo en la colina, la que construyó el avi, con una ventana grande. Sus álbumes están en el estante. Yo dejo una vela.\"", "\"Quan tot fa soroll, Cabana de la Popo és la cabana de la Popo dalt del turó, la que va fer l'avi, amb una finestra gran. Els seus àlbums són al prestatge. Jo hi deixo una espelma.\"")]
  ];
  let news = null;
  function get(fn, q) { const u = SUPABASE_CONFIG.url; if (!u) return Promise.resolve(null); return fetch(u + '/rest/v1/rpc/' + fn + (q ? '?' + q : ''), { headers: { apikey: SUPABASE_CONFIG.anonKey, Authorization: 'Bearer ' + SUPABASE_CONFIG.anonKey } }).then(r => r.ok ? r.json() : null).catch(() => null); }
  function gather() {
    if (news) return news;
    return news = Promise.all([get('beer_list', 'p_sort=new'), Promise.resolve(null), get('garden_stats'), get('sanctuary_list'), get('postcard_wall', 'p_limit=40')]).then(([bn, bl, gs, sl, pw]) => {
      const out = [], W = window.FBWorld;
      try { const c = W && W.cats && W.cats(); if (c && P[c.miso] && P[c.yuzu]) out.push(c.miso === c.yuzu ? [() => fill(LINE.catsTogether, { a: pn(c.miso) }), c.miso] : [() => fill(LINE.cats, { a: pn(c.miso), b: pn(c.yuzu) }), c.miso === 'bar' ? c.yuzu : c.miso]); } catch (e) {}
      try { const d = W && W.dog && W.dog(); if (d && P[d]) out.push([() => fill(LINE.dog, { a: pn(d) }), d]); } catch (e) {}
      /* Neighbours' Brew is retired (Nov 14): no beer news */
      if (gs && typeof gs.count === 'number') out.push([() => fill(gs.count ? LINE.garden : LINE.gardenNone, { n: gs.count }), 'garden']);
      if (Array.isArray(sl)) out.push([() => fill(sl.length ? LINE.sanctuary : LINE.sanctuaryNone, { n: sl.length }), 'sanctuary']);
      if (Array.isArray(pw)) out.push([() => fill(pw.length ? LINE.wall : LINE.wallNone, { n: pw.length }), pw.length ? 'wall' : 'postcard']);
      try { const w = W && W.weather && W.weather(); if (w && WX[w]) out.push([() => fill(LINE.weather, { w: L(WX[w]) }), 'tower']); } catch (e) {}
      TIPS.slice().sort(() => Math.random() - .5).forEach(t => out.push([() => L(t[1]), t[0]]));
      return out;
    });
  }
  let i = 0;
  const W0 = window.FBWorld || {};
  function say(list) {
    const item = list[i++ % list.length], where = item[1];
    const btns = [];
    if (where === 'menu') btns.push({ label: '🍺 ' + L(lx(["On tap", "生啤", "", "", "De barril", "De barril"])), onClick: () => { toggleCodexModal(true); switchAlbumTab('tap'); } });
    else if (where === 'wall') btns.push({ label: '🧱 ' + L(lx(["The Wall", "留言墙", "", "", "El muro", "El mur"])), onClick: () => go('wall') });
    else if (P[where] && where !== 'bar' && !(W0.state && W0.state(where) === 'shut')) btns.push({ label: L(UI.go).replace('→', '· ' + pn(where) + ' →'), onClick: () => { const u = W0.url ? W0.url(where) : P[where][4]; try { if (window.parent !== window && window.parent.FBShell) return window.parent.FBShell.open(u); } catch (e) {} location.href = u; } });   /* never to a shut place; through the town */
    btns.push({ label: L(UI.more), onClick: () => say(list) }, { label: L(UI.back), onClick: backToOrder });
    try { setExpression('grin', 1800); } catch (e) {}
    renderWei(item[0](), btns, "grid grid-cols-1 sm:grid-cols-3 gap-1.5 mt-2", 'town');
  }
  window.townTalk = function () { renderWei(L(lx(["\"Let me think…\"", "\"我想想…\"", "", "\"諗吓先…\"", "\"Déjame pensar…\"", "\"Deixa'm pensar…\""])), [], "grid grid-cols-1 gap-1.5 mt-2", 'town'); gather().then(say); };
})();
