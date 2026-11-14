/* Popo tells each place's chapter (Nov 14, the owner: "like Nearby Station, focus on the storytelling of the family").
   Walking into one of these places, Popo comes up in a small card at the bottom and tells its part of the family's story, a line at a time
   (a tap goes on; otherwise the next line comes after reading time). The place still works under it: the card never covers more than its
   own strip, and the place's own things (the shelves, the notices, the garden) stay where they were. Heard the whole chapter once, later
   visits get one line of it, in passing. Her voices as everywhere: Hong Kong English, a Hong Kong grandmother's Mandarin, Cantonese in
   zh-Hant, broken Spanish, fluent Catalan. While she sleeps (21–5) it's her paper note. Kept on the device (fb_ch_<key>). Nothing sent.
   Loaded by fbg.js in a framed place that has a chapter (CHAPTERS there). Window: FBChapter. New family details are listed in
   handoff/STORY_LINES.md. */
(function () {
  "use strict";
  var C = {
    books: [
      ["Sit, sit. You see that small red book, all tape? My dictionary. Miss Leung, my English teacher in Hong Kong, give it to me. She say: take the words with you.", "坐，坐。看到那本贴满胶布的小红书没有？我的字典。香港的梁老师送我的。她说：把字带走。", "坐，坐。見唔見嗰本貼滿膠紙嘅細紅書？我本字典嚟㗎。香港梁老師送俾我嘅。佢話：啲字要帶埋走。", "Siéntate, siéntate. ¿Ves librito rojo, todo cinta? Mi diccionario. Miss Leung, profesora inglés en Hong Kong, me lo da. Ella dice: llévate las palabras.", "Seu, seu. Veus aquell llibret vermell, tot de cinta? El meu diccionari. Me'l va regalar la Miss Leung, la mestra d'anglès de Hong Kong. Em va dir: emporta't les paraules."],
      ["First Sant Jordi, Josep give me one rose. I got no money for book, so I give him my dictionary. I write inside: Learn. Then talk to me.", "第一个圣乔治节，Josep 送我一枝玫瑰。我没钱买书，就把字典送给他。里面写：学好了，再来跟我讲话。", "第一個聖佐治節，Josep 送咗枝玫瑰俾我。我冇錢買書，咪將本字典送俾佢囉。入面寫住：學識咗，先嚟同我講嘢。", "Primer Sant Jordi, Josep me da una rosa. Yo no tengo dinero para libro, entonces le doy mi diccionario. Escribo dentro: aprende, después hablas conmigo.", "El primer Sant Jordi, en Josep em va regalar una rosa. No tenia diners per a un llibre, així que li vaig donar el diccionari. Hi vaig escriure: aprèn, i després parla'm."],
      ["Every night after the station, he write the Catalan beside every English word. Pencil, very small. Long time, ah. Then one day he talk to me.", "他每天从车站下班，就在每个英文字旁边写上加泰罗尼亚文。铅笔，好小好小。写了好久呀。后来有一天，他就跟我讲话了。", "佢晚晚喺車站收工，就喺每個英文字隔籬寫加泰隆尼亞文。鉛筆，細細粒。寫咗好耐㗎。跟住有一日，佢就同我講嘢囉。", "Cada noche después de estación, él escribe catalán al lado de cada palabra inglesa. Lápiz, muy pequeño. Mucho tiempo, ¿eh? Y un día, habla conmigo.", "Cada vespre, quan plegava de l'estació, escrivia el català al costat de cada paraula anglesa. A llapis, petitíssim. Hi va trigar molt. I un dia em va parlar."],
      ["So this house is for that. Take one book, leave one. Somebody need words, you lend them lah.", "所以这屋子就是做这个的。拿一本，留一本。有人要字，你就借给他啦。", "所以呢間屋就係做呢樣嘢。拎一本，留一本。有人要啲字，你借俾佢啦。", "Por eso esta casa. Coges uno, dejas uno. Alguien necesita palabras, tú presta, ¿vale?", "Per això és aquesta casa. N'agafes un, en deixes un. Si algú necessita paraules, deixa-li les teves."]
    ],
    nest: [
      ["Twelve years ago somebody leave one box at my shop door. Preserving jars, fragile, it say. Inside: two kittens, no jars.", "十二年前，有人在我店门口放了一个箱子。上面写：腌菜罐，易碎。打开一看：两只小猫，一个罐子都没有。", "十二年前，有人喺我舖頭門口放低個箱。寫住：醃菜樽，小心輕放。打開一睇：兩隻貓仔，一個樽都冇。", "Doce años antes alguien deja una caja en puerta de mi tienda. Tarros, frágil, dice. Dentro: dos gatitos, ningún tarro.", "Fa dotze anys algú va deixar una capsa a la porta de la botiga. Pots de conserva, fràgil, deia. A dins: dos gatets i cap pot."],
      ["Wei was ten. He read the labels on the box: MISO, YUZU. So, those are their names lor. Very lazy.", "那时 Wei 才十岁。他念箱子上的字：味噌，柚子。好啦，名字就这样定了。懒死了。", "嗰陣 Wei 先十歲。佢讀箱上面啲字：味噌，柚子。咁就係佢哋個名囉。懶到死。", "Wei tiene diez años. Él lee las etiquetas de la caja: MISO, YUZU. Pues, nombres ya está. Muy vago.", "En Wei tenia deu anys. Va llegir les etiquetes de la capsa: MISO, YUZU. I així es diuen. Quina mandra."],
      ["I say no cats. One whole afternoon I say no cats. Then I warm the milk.", "我说不要猫。整整一个下午我都说不要猫。然后我就去热牛奶了。", "我話唔要貓。成個下晝我都話唔要貓。跟住我就去熱牛奶囉。", "Yo digo no gatos. Toda una tarde digo no gatos. Después caliento la leche.", "Vaig dir que no volia gats. Tota una tarda dient que no. Després vaig escalfar la llet."],
      ["The box still here, too small already. Every night they squeeze in, both. Some people also like that. You grow, still you go sit with them.", "那个箱子还在，早就太小了。每晚两只还是挤进去。有些人也是这样。长大了，还是要回去跟他们坐坐。", "個箱仲喺度，細到死。晚晚兩隻都照迫入去。有啲人都係咁。大個咗，都要返去同佢哋坐吓。", "La caja todavía aquí, ya muy pequeña. Cada noche las dos entran igual. Personas también así. Tú creces, pero vas a sentarte con ellos.", "La capsa encara hi és, ja massa petita. Cada nit s'hi enfilen totes dues. Amb algunes persones passa igual: has crescut, però hi tornes a seure."]
    ],
    sanctuary: [
      ["Mantou come from the station. The winter Josep die, one cream dog sit on platform two, under Josep's clock, and don't move.", "馒头是从车站来的。Josep 走的那个冬天，有只奶白色的狗坐在二号站台，就在 Josep 的钟下面，怎么也不走。", "饅頭係由車站嚟嘅。Josep 走嗰個冬天，有隻奶白色嘅狗坐喺二號月台，就喺 Josep 個鐘下面，點都唔肯走。", "Mantou viene de la estación. El invierno que Josep muere, un perro color crema se sienta en andén dos, debajo del reloj de Josep, y no se mueve.", "En Mantou ve de l'estació. L'hivern que en Josep es va morir, un gos color crema es va asseure a l'andana dos, sota el rellotge d'en Josep, i no es movia."],
      ["Every morning I bring him one bowl. He wait for the 7:40. Me also, a little. Then I buy one red collar and walk him home.", "每天早上我给他带一碗吃的。他在等七点四十那班车。我也在等，一点点啦。后来我买了个红项圈，带他回家。", "我朝朝帶碗嘢俾佢食。佢等七點四十嗰班車。我都等緊，少少啦。之後我買咗個紅頸圈，拖佢返屋企。", "Cada mañana le llevo un bol. Él espera el de las 7:40. Yo también, un poco. Después compro collar rojo y lo llevo a casa.", "Cada matí li portava un bol. Ell esperava el de les 7:40. Jo també, una mica. Després li vaig comprar un collar vermell i el vaig portar a casa."],
      ["That lead on the hook, Josep's. Mantou only let Josep hold it. Now he let you, if you nice to him.", "钩子上那条狗绳，是 Josep 的。馒头只肯让 Josep 牵。现在你也可以了，你对他好就行。", "鈎上面嗰條狗帶，係 Josep 嘅。饅頭淨係肯俾 Josep 拖。而家你都得，你對佢好就得。", "La correa en el gancho, de Josep. Mantou sólo deja Josep cogerla. Ahora te deja a ti, si eres bueno con él.", "La corretja del penjador era d'en Josep. En Mantou només deixava que l'agafés ell. Ara te la deixa a tu, si el tractes bé."],
      ["Other animals here also waiting. Real ones, real homes they need. Maybe not yours. But maybe.", "这里还有别的动物在等。真的动物，要真的家。也许不是你家。不过也说不定喔。", "呢度仲有其他動物等緊。真嘅動物，要真嘅屋企。未必係你屋企。不過都話唔定㗎。", "Aquí otros animales esperando también. De verdad, necesitan casa de verdad. Quizás no la tuya. Pero quizás.", "Aquí hi ha altres animals esperant. De debò, i necessiten una casa de debò. Potser no la teva. Però potser sí."]
    ],
    garden: [
      ["This tree come from one seed, from my jar of salt lemons. From the boat. Very long way for one seed.", "这棵树是从一颗籽长出来的，就是我那罐咸柠檬里的。坐船带来的。一颗籽，走好远的路呀。", "呢棵樹係由一粒核生出嚟嘅，我嗰樽鹹檸檬入面嘅。坐船帶嚟㗎。一粒核，行咗好遠路。", "Este árbol sale de una semilla, de mi tarro de limones con sal. Del barco. Mucho camino para una semilla.", "Aquest arbre va néixer d'una llavor del meu pot de llimones salades. Del vaixell. Molt de camí per a una llavor."],
      ["Every summer I stand the two girls against it and scratch one line. Wei's mum, Mei's mum. Look, still there.", "每年夏天，我让两个女儿靠着树站好，刻一道线。Wei 的妈妈，Mei 的妈妈。你看，还在呢。", "每年夏天，我叫兩個女企埋樹度，刻一條線。Wei 阿媽，Mei 阿媽。你睇，仲喺度。", "Cada verano pongo las dos niñas contra el árbol y hago una raya. Mamá de Wei, mamá de Mei. Mira, todavía.", "Cada estiu posava les dues nenes contra l'arbre i hi feia una ratlla. La mare d'en Wei, la mare de la Mei. Mira, encara hi són."],
      ["The lines stop the year they taller than me. Then they go far. One all the way to New York.", "那些线到她们比我高的那年就停了。后来她们就走远了。一个一直走到纽约。", "啲線去到佢哋高過我嗰年就停咗。之後佢哋就行遠咗。一個行到去紐約。", "Las rayas paran el año que son más altas que yo. Después se van lejos. Una hasta Nueva York.", "Les ratlles s'acaben l'any que em van passar d'alçada. Després van marxar lluny. Una, fins a Nova York."],
      ["So here, plant next to somebody. Outside, go measure somebody you love. With the eyes only also can.", "所以在这里，种在别人旁边。出去以后，去量量你爱的人。用眼睛量也行。", "所以喺度，種喺人哋隔籬。出到去，去度吓你錫嘅人。用眼度都得。", "Entonces aquí, planta al lado de alguien. Fuera, ve a medir alguien que quieres. Con los ojos también vale.", "Així que aquí planta al costat d'algú. I fora, ves a mesurar algú que estimes. Amb els ulls ja n'hi ha prou."]
    ],
    tower: [
      ["Josep fix clocks. The big one at the station also, he wind it every week, many years.", "Josep 是修钟的。车站那个大钟也是他管，每个礼拜上一次发条，好多年咯。", "Josep 係整鐘嘅。車站個大鐘都係佢睇，每個禮拜上一次鏈，上咗好多年。", "Josep arregla relojes. El grande de estación también, él da cuerda cada semana, muchos años.", "En Josep arreglava rellotges. El gran de l'estació també: hi donava corda cada setmana, molts anys."],
      ["When our first girl born, he run to the station to tell the big clock first. True! Then he come back to tell me.", "我们第一个女儿出生，他先跑去车站告诉那个大钟。真的！然后才回来告诉我。", "我哋第一個女出世，佢走去車站先話俾個大鐘聽。真㗎！之後先返嚟話俾我知。", "Cuando nace nuestra primera niña, él corre a estación a decir al reloj grande primero. ¡Verdad! Después vuelve a decirme.", "Quan va néixer la nostra primera filla, va córrer a l'estació a dir-ho primer al rellotge gran. És veritat! Després va tornar a dir-m'ho a mi."],
      ["This one he build himself, slow on purpose. So the good hours last longer, he say.", "这个是他自己做的，故意做得慢一点。他说，这样好时光就长一点。", "呢個係佢自己整嘅，特登整慢啲。佢話，咁好時光就長啲。", "Este él construye solo, lento a propósito. Así las horas buenas duran más, dice.", "Aquest el va fer ell mateix, lent expressament. Perquè les hores bones durin més, deia."],
      ["He always say: somebody must wind the clock. In a family also. Today maybe is you.", "他常说：总要有人上发条。一家人也是。今天也许轮到你啦。", "佢成日話：總要有人上鏈。一家人都係。今日可能輪到你啦。", "Él siempre dice: alguien tiene que dar cuerda al reloj. En familia también. Hoy quizás tú.", "Sempre deia: algú ha de donar corda al rellotge. En una família també. Avui potser et toca a tu."]
    ],
    cabin: [
      ["Josep build this with his own hands. Roof leak a little. Still standing, like me.", "这是 Josep 亲手盖的。屋顶有点漏。还站着呢，跟我一样。", "呢間係 Josep 親手起嘅。屋頂有少少漏。仲企得穩，同我一樣。", "Josep construye esto con sus manos. Techo gotea un poco. Todavía de pie, como yo.", "En Josep la va fer amb les seves mans. El teulat degota una mica. Però aguanta, com jo."],
      ["Every Sunday we come up. He make coffee, very bad, grounds and all. Rain on the roof. I drink it anyway.", "每个礼拜天我们都上来。他煮咖啡，难喝死了，渣都在里面。雨打在屋顶上。我还是喝光。", "個個禮拜日我哋都上嚟。佢煲咖啡，難飲到死，啲渣都喺入面。雨打落屋頂。我照飲晒。", "Cada domingo subimos. Él hace café, muy malo, con todo el poso. Lluvia en el techo. Yo bebo igual.", "Cada diumenge pujàvem. Ell feia un cafè dolentíssim, amb tot el pòsit. La pluja al teulat. Me'l bevia igualment."],
      ["The albums is everybody. The girls, the shop, Mantou under the clock. Look slowly, nobody hurry here.", "相册里是一家人。两个女儿，铺子，钟下面的馒头。慢慢看，这里没人赶。", "相簿入面係一家人。兩個女，間舖，鐘下面個饅頭。慢慢睇，呢度冇人趕。", "Los álbumes son todos. Las niñas, la tienda, Mantou debajo del reloj. Mira despacio, aquí nadie corre.", "Als àlbums hi som tots. Les nenes, la botiga, en Mantou sota el rellotge. Mira-ho a poc a poc, aquí ningú no té pressa."],
      ["I still come up Sundays. You sit a while also. Then go home and call somebody.", "我礼拜天还是会上来。你也坐一会儿。然后回家，打个电话给人。", "我禮拜日都仲會上嚟。你都坐吓。跟住返屋企，打個電話俾人。", "Yo todavía subo domingos. Tú siéntate un rato también. Después a casa, y llama a alguien.", "Encara hi pujo els diumenges. Seu una estona tu també. Després torna a casa i truca a algú."]
    ],
    plaza: [
      ["Every Sant Jordi, Josep buy me one rose, here. Only one, never a bunch.", "每年圣乔治节，Josep 都在这里给我买一枝玫瑰。就一枝，从来不买一束。", "每年聖佐治節，Josep 都喺度買一枝玫瑰俾我。一枝咋，從來唔買一紮。", "Cada Sant Jordi, Josep me compra una rosa, aquí. Sólo una, nunca ramo.", "Cada Sant Jordi, en Josep em comprava una rosa, aquí. Només una, mai un ram."],
      ["Since he gone, Wei buy it. Same stall, same one rose. He think I don't notice he cry a little.", "他走了以后，就是 Wei 买。同一个摊子，同样一枝。他以为我没看见他眼红。", "佢走咗之後，就係 Wei 買。同一檔，同一枝。佢以為我睇唔到佢眼紅紅。", "Desde que él no está, Wei la compra. Mismo puesto, misma una rosa. Él cree que no veo que llora un poco.", "Des que ell no hi és, la compra en Wei. La mateixa parada, la mateixa rosa. Es pensa que no veig que plora una mica."],
      ["People throw coin in the fountain and wish big. I wish only small things. Small ones come true more.", "大家往喷泉里丢硬币，许大愿。我只许小愿。小的比较会成真。", "啲人掟銀仔落噴水池，許大願。我淨係許細願。細嘅易成真啲。", "Gente tira moneda en fuente y desea cosas grandes. Yo deseo sólo pequeñas. Las pequeñas salen más.", "La gent tira monedes a la font i demana coses grans. Jo només en demano de petites. Les petites es compleixen més."]
    ],
    forest: [
      ["This is the path up to my cabin. Every Sunday: Josep in front, the girls behind, me last with the food.", "这条就是上我小屋的路。每个礼拜天：Josep 走前面，两个女儿跟着，我拿着吃的走最后。", "呢條就係上我間小屋嘅路。個個禮拜日：Josep 行前面，兩個女跟住，我攞住啲餸行最尾。", "Este camino sube a mi cabaña. Cada domingo: Josep delante, niñas detrás, yo última con la comida.", "Aquest és el camí que puja a la meva cabana. Cada diumenge: en Josep al davant, les nenes darrere i jo l'última, amb el menjar."],
      ["The girls run ahead and hide behind the pines. Josep always pretend he can't find them. Every week, same pine.", "两个女儿跑到前面，躲在松树后面。Josep 每次都假装找不到。每个礼拜都是同一棵。", "兩個女跑前面，匿喺松樹後面。Josep 次次都扮搵唔到。個個禮拜都係同一棵。", "Las niñas corren y se esconden detrás de los pinos. Josep siempre hace que no las encuentra. Cada semana, mismo pino.", "Les nenes corrien endavant i s'amagaven darrere els pins. En Josep sempre feia veure que no les trobava. Cada setmana, el mateix pi."],
      ["Walk slow. Nothing up there run away. The kettle can wait for you.", "慢慢走。上面没有东西会跑掉。水壶会等你的。", "慢慢行。上面冇嘢會走甩。煲水會等你嘅。", "Camina despacio. Arriba nada se escapa. La tetera te espera.", "Camina a poc a poc. Allà dalt res no s'escapa. El bullidor t'esperarà."]
    ]
  };
  var TITLE = { books: 0, nest: 0, sanctuary: 0, garden: 0, tower: 0, cabin: 0, plaza: 0, forest: 0 };
  var W = {
    says: ["Popo, beside you", "婆婆，在你身边", "婆婆，喺你身邊", "Popo, a tu lado", "La Popo, al teu costat"],
    note: ["Popo's note (she's asleep)", "婆婆留的纸条（她睡了）", "婆婆留低嘅紙仔（佢瞓咗）", "Nota de Popo (duerme)", "Nota de la Popo (dorm)"],
    go: ["Tap to go on", "点一下继续", "點一下繼續", "Toca para seguir", "Toca per seguir"]
  };
  var LI = { en: 0, zh: 1, "zh-Hant": 2, es: 3, ca: 4 };
  function li() { return LI[(window.FBL && FBL.get && FBL.get()) || "en"] || 0; }
  function tx(a) { return a[li()] || a[0]; }
  function asleep() { try { var h = window.FBWorld && FBWorld.hour ? FBWorld.hour() : new Date().getHours(); return FBWorld.sleeps ? FBWorld.sleeps("popo", h) : (h >= 21 || h < 5); } catch (e) { return false; } }
  function get(k) { try { return JSON.parse(localStorage.getItem("fb_ch_" + k) || "{}"); } catch (e) { return {}; } }
  function put(k, o) { try { localStorage.setItem("fb_ch_" + k, JSON.stringify(o)); } catch (e) {} }
  var CSS = ".fbch{position:fixed;left:50%;bottom:max(12px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:9000;width:min(540px,calc(100vw - 20px));box-sizing:border-box;display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#2a1d14;color:#fbeedd;border:3px solid #000;box-shadow:4px 4px 0 #000;font:400 19px/1.35 VT323,'PingFang SC','Microsoft YaHei',monospace;cursor:pointer;animation:fbchIn .5s steps(4);-webkit-tap-highlight-color:transparent}" +
    ".fbch.out{opacity:0;transition:opacity .6s;pointer-events:none}@keyframes fbchIn{from{opacity:0;transform:translate(-50%,10px)}}" +
    ".fbch canvas{flex:none;width:48px;height:48px;image-rendering:pixelated;border:2px solid #000;background:#3a2414}" +
    ".fbch b{display:block;font:400 9px/1.6 'Press Start 2P',monospace;color:#f6b73c;letter-spacing:.04em;margin-bottom:3px}" +
    ".fbch small{display:block;margin-top:4px;font-size:15px;opacity:.6}.fbch.paper{background:#f4ead2;color:#2a1d14}.fbch.paper b{color:#8a3a1c}" +
    "html:lang(zh-Hans) .fbch,html:lang(zh-Hant) .fbch{font-size:17px;line-height:1.55}" +
    "@media (prefers-reduced-motion:reduce){.fbch{animation:none}}";
  var card = null, timer = 0, key = "", lines = [], at = 0, end = 0, once = false;
  function face(cv, nap) { try { var g = cv.getContext("2d"); g.fillStyle = "#3a2414"; g.fillRect(0, 0, 32, 32); if (window.FBWorld && FBWorld.drawPopo) FBWorld.drawPopo(g, 0, 0, 1, { asleep: nap }); } catch (e) {} }
  function show() {
    var nap = asleep();
    if (!card) {
      if (!document.getElementById("fbch-css")) { var st = document.createElement("style"); st.id = "fbch-css"; st.textContent = CSS; document.head.appendChild(st); }
      card = document.createElement("div"); card.className = "fbch"; card.setAttribute("role", "status"); card.setAttribute("aria-live", "polite"); card.setAttribute("data-fbt-skip", "");
      card.innerHTML = '<canvas width="32" height="32" aria-hidden="true"></canvas><div><b></b><span></span><small></small></div>';
      card.addEventListener("click", function (e) { e.stopPropagation(); next(); });
      document.body.appendChild(card);
    }
    card.classList.toggle("paper", nap); face(card.querySelector("canvas"), nap);
    var name = window.FBWorld && FBWorld.name ? FBWorld.name(key) : "";
    card.querySelector("b").textContent = tx(nap ? W.note : W.says) + (name ? " · " + name : "");
    card.querySelector("span").textContent = tx(lines[at]);
    card.querySelector("small").textContent = once ? "" : tx(W.go) + " ›";
    clearTimeout(timer); var n = tx(lines[at]).length; timer = setTimeout(next, Math.max(9000, Math.min(20000, n * 140)));
  }
  function next() {
    clearTimeout(timer);
    if (once || at >= end) { if (!once) { var s = get(key); s.done = 1; put(key, s); } return hide(); }
    at++; var s2 = get(key); s2.at = at; put(key, s2); show();
  }
  function hide() { clearTimeout(timer); if (!card) return; var c = card; card = null; c.classList.add("out"); setTimeout(function () { c.remove(); }, 700); }
  function start(k) {
    if (!C[k] || document.querySelector(".fbch")) return;
    key = k; lines = C[k]; var s = get(k);
    if (s.done) { once = true; at = (Math.random() * lines.length) | 0; end = at; }
    else { once = false; at = Math.min(s.at || 0, lines.length - 1); end = lines.length - 1; }
    show();
  }
  addEventListener("keydown", function (e) { if (card && e.key === "Escape") hide(); });
  addEventListener("fbl:lang", function () { if (card) show(); });
  window.FBChapter = { start: start, hide: hide, has: function (k) { return !!C[k]; }, keys: Object.keys(TITLE) };
})();
