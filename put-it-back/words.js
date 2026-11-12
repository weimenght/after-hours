/* Put It Back: every word, five languages [en, zh, zh-Hant, es, ca].
   Popo keeps her voice (Hong Kong English, broken Spanish, a Hong Kong grandmother's Mandarin in zh, her own Cantonese in zh-Hant,
   fluent Catalan). Wei acts in small acts, Mei is sixteen, Miso, Yuzu and Mantou only act. The interface itself is plain.
   ITEMS keep their order: a found line is kept by the spot's key, never by an item's index, but keep them stable anyway. */
window.PB_W = {
  title: ["Put It Back", "归位", "歸位", "Cada Cosa en su Sitio", "Cada Cosa al seu Lloc"],
  sub: ["Everyone's things wandered off today. Help them home, then do one spot of your own, for real.", "今天大家的东西都跑丢了。帮它们回家，然后真的去收拾一个你自己的角落。", "今天大家的東西都跑丟了。幫它們回家，然後真的去收拾一個你自己的角落。", "Hoy las cosas de todos se han ido de paseo. Ayúdalas a volver y luego ordena un rincón tuyo, de verdad.", "Avui les coses de tothom han marxat a passejar. Ajuda-les a tornar i després endreça un racó teu, de debò."],
  start: ["Let's tidy", "开始收拾", "開始收拾", "A ordenar", "A endreçar"],
  names: { popo: ["Popo", "婆婆", "婆婆", "Popo", "Popo"], wei: ["Wei", "Wei", "Wei", "Wei", "Wei"], mei: ["Mei", "Mei", "Mei", "Mei", "Mei"], miso: ["Miso", "Miso", "Miso", "Miso", "Miso"], yuzu: ["Yuzu", "Yuzu", "Yuzu", "Yuzu", "Yuzu"], mantou: ["Mantou", "馒头", "饅頭", "Mantou", "Mantou"], cats: ["Miso & Yuzu", "Miso 和 Yuzu", "Miso 和 Yuzu", "Miso y Yuzu", "Miso i Yuzu"], note: ["Popo's note", "婆婆的纸条", "婆婆的紙條", "Nota de Popo", "Nota de la Popo"] },

  /* the header and its two buttons */
  help: ["How it works", "怎么玩", "怎麼玩", "Cómo va", "Com va"],
  more: ["More", "更多", "更多", "Más", "Més"],
  back: ["Back", "返回", "返回", "Atrás", "Enrere"],
  homeA: ["Put It Back, home", "归位，首页", "歸位，首頁", "Cada Cosa en su Sitio, inicio", "Cada Cosa al seu Lloc, inici"],
  drawerM: ["The found drawer", "失物抽屉", "失物抽屜", "El cajón de lo encontrado", "El calaix de les troballes"],
  sound: ["Sound", "声音", "聲音", "Sonido", "So"],
  on: ["on", "开", "開", "sí", "sí"], off: ["off", "关", "關", "no", "no"],
  lang: ["Language", "语言", "語言", "Idioma", "Idioma"],
  privacy: ["Your privacy", "你的隐私", "你的隱私", "Tu privacidad", "La teva privadesa"],
  h1: ["Help everyone's things find their way home.", "帮大家的东西各回各家。", "幫大家的東西各回各家。", "Ayuda a que las cosas de todos vuelvan a su sitio.", "Ajuda que les coses de tothom tornin al seu lloc."],
  h2: ["Pick one real spot, and one song.", "挑一个真实的角落，再挑一首歌。", "挑一個真實的角落，再挑一首歌。", "Elige un rincón de verdad y una canción.", "Tria un racó de debò i una cançó."],
  h3: ["Tidy it, with someone if you can. Then put the phone down.", "去收拾它，最好叫上一个人。然后放下手机。", "去收拾它，最好叫上一個人。然後放下手機。", "Ordénalo, con alguien si puedes. Luego deja el móvil.", "Endreça'l, amb algú si pots. Després deixa el mòbil."],
  gotIt: ["Got it", "知道了", "知道了", "Entendido", "Entesos"],

  /* home: whoever is up says hello (everyone keeps the town's hours) */
  homeLines: {
    popo: ["Aiya, so messy today! Never mind lah. One thing at a time, everything go home.", "哎呀，今天好乱啊！没关系啦。一样一样来，东西都回家。", "哎呀，今日好亂呀！唔緊要啦。一樣一樣嚟，啲嘢全部歸位。", "¡Aiya, hoy muy desorden! No pasa nada. Una cosa cada vez, todo vuelve a casa.", "Aiya, quin desordre avui! No passa res. Una cosa cada vegada, i tot torna a casa."],
    wei: ["*steps over a sock* Nine things out of place. Give me a hand?", "*跨过一只袜子* 九样东西不在原位。搭把手？", "*跨過一隻襪子* 九樣東西不在原位。搭把手？", "*pasa por encima de un calcetín* Nueve cosas fuera de su sitio. ¿Me echas una mano?", "*passa per sobre d'un mitjó* Nou coses fora de lloc. Em dones un cop de mà?"],
    mei: ["Okay, nobody panic. It's basically a game. A very small, very boring game. Kidding.", "好，大家别慌。这基本上是个游戏。一个很小、很无聊的游戏。开玩笑的。", "好，大家別慌。這基本上是個遊戲。一個很小、很無聊的遊戲。開玩笑的。", "Vale, que nadie se agobie. Es básicamente un juego. Uno muy pequeño y muy aburrido. Es broma.", "D'acord, que ningú s'estressi. És bàsicament un joc. Un de molt petit i molt avorrit. És broma."],
    cats: ["*Miso sits on the one clean cushion and stares at you*", "*Miso 坐在唯一干净的那个靠垫上，盯着你看*", "*Miso 坐在唯一乾淨的那個靠墊上，盯著你看*", "*Miso se sienta en el único cojín ordenado y te mira fijamente*", "*En Miso s'asseu a l'únic coixí endreçat i et mira fixament*"],
    note: ["Late already. Tidy tomorrow lah. Go sleep!", "这么晚了。明天再收拾啦。快去睡！", "咁夜喇。聽日先執啦。快啲去瞓！", "Ya muy tarde. Ordenas mañana. ¡A dormir!", "Ja és molt tard. Endreça demà. Cap a dormir!"]
  },

  /* the room */
  hint: ["Tap a thing to send it home.", "点一样东西，送它回家。", "點一樣東西，送它回家。", "Toca una cosa para mandarla a su sitio.", "Toca una cosa per enviar-la al seu lloc."],
  roomA: ["The living room after a long day: things scattered on the floor, a sock on the lamp. Popo in her armchair, Wei and Mei on the sofa, Miso on top of the bookshelf, Yuzu asleep in the laundry basket, Mantou by his bed.", "忙了一天后的客厅：东西散了一地，台灯上挂着一只袜子。婆婆坐在扶手椅上，Wei 和 Mei 坐在沙发上，Miso 趴在书架顶上，Yuzu 在脏衣篮里睡着了，馒头站在他的窝旁边。", "忙了一天後的客廳：東西散了一地，檯燈上掛著一隻襪子。婆婆坐在扶手椅上，Wei 和 Mei 坐在沙發上，Miso 趴在書架頂上，Yuzu 在髒衣籃裡睡著了，饅頭站在他的窩旁邊。", "El salón después de un día largo: cosas por el suelo y un calcetín en la lámpara. Popo en su sillón, Wei y Mei en el sofá, Miso encima de la estantería, Yuzu dormida en el cesto de la ropa y Mantou junto a su cama.", "La sala després d'un dia llarg: coses per terra i un mitjó al llum. La Popo a la butaca, en Wei i la Mei al sofà, en Miso dalt de la prestatgeria, la Yuzu adormida a la cistella de la roba i en Mantou al costat del seu llit."],
  sends: ["{x} → {p}", "{x} → {p}", "{x} → {p}", "{x} → {p}", "{x} → {p}"],
  asleepLine: ["*fast asleep* It goes back anyway, quietly.", "*睡得正香* 东西还是悄悄放回去了。", "*睡得正香* 東西還是悄悄放回去了。", "*duerme a pierna suelta* Vuelve a su sitio igual, sin hacer ruido.", "*dorm com un tronc* Torna al seu lloc igualment, sense fer soroll."],
  ITEMS: [
    { id: "glasses", who: "popo", n: ["Popo's glasses", "婆婆的眼镜", "婆婆的眼鏡", "las gafas de Popo", "les ulleres de la Popo"], p: ["the side table", "小茶几", "小茶几", "la mesita", "la tauleta"],
      l: ["Aiya, my glasses! I look everywhere already. Thank you ah.", "哎呀，我的眼镜！到处都找过啦。多谢喔。", "哎呀，我副眼鏡！周圍都搵過喇。多謝晒。", "¡Aiya, mis gafas! Yo busca en todas partes. Gracias, ¿eh?", "Aiya, les meves ulleres! Les he buscat per tot arreu. Moltes gràcies."] },
    { id: "knitting", who: "popo", n: ["Popo's knitting", "婆婆的毛线活", "婆婆的毛線活", "el punto de Popo", "la labor de la Popo"], p: ["her basket", "她的针线篮", "她的針線籃", "su cesta", "la seva cistella"],
      l: ["My scarf for Mei! Not finish yet. Don't tell her lah.", "给 Mei 织的围巾！还没织完呢，别告诉她啦。", "織俾 Mei 嘅頸巾！未織完㗎，咪話俾佢知呀。", "¡La bufanda para Mei! No termina todavía. No dices nada, ¿eh?", "La bufanda per a la Mei! Encara no està acabada. No li diguis res, eh?"] },
    { id: "keys", who: "wei", n: ["Wei's keys", "Wei 的钥匙", "Wei 的鑰匙", "las llaves de Wei", "les claus d'en Wei"], p: ["the hook by the door", "门边的钩子", "門邊的鉤子", "el gancho junto a la puerta", "el ganxo del costat de la porta"],
      l: ["*hangs them on the hook* So that's where they went.", "*把钥匙挂回钩子上* 原来跑这儿来了。", "*把鑰匙掛回鉤子上* 原來跑這兒來了。", "*las cuelga del gancho* Así que estaban aquí.", "*les penja al ganxo* Així que eren aquí."] },
    { id: "record", who: "wei", n: ["Wei's record", "Wei 的唱片", "Wei 的唱片", "el disco de Wei", "el disc d'en Wei"], p: ["the middle shelf", "书架中间那层", "書架中間那層", "el estante del medio", "el prestatge del mig"],
      l: ["*slides it in next to the jazz* That's its spot. Always has been.", "*把唱片插回爵士乐旁边* 它就该在这儿，一直都是。", "*把唱片插回爵士樂旁邊* 它就該在這兒，一直都是。", "*lo mete junto al jazz* Ese es su sitio. Siempre lo ha sido.", "*el posa al costat del jazz* Aquest és el seu lloc. Sempre ho ha estat."] },
    { id: "sock", who: "wei", n: ["Wei's sock", "Wei 的袜子", "Wei 的襪子", "el calcetín de Wei", "el mitjó d'en Wei"], p: ["the laundry basket", "脏衣篮", "髒衣籃", "el cesto de la ropa", "la cistella de la roba"],
      l: ["One sock. On the lamp. *looks at Mantou* The other one's a mystery.", "一只袜子，挂在台灯上。*看了看馒头* 另一只是个谜。", "一隻襪子，掛在檯燈上。*看了看饅頭* 另一隻是個謎。", "Un calcetín. En la lámpara. *mira a Mantou* El otro es un misterio.", "Un mitjó. Al llum. *mira en Mantou* L'altre és un misteri."] },
    { id: "book", who: "mei", n: ["Mei's book", "Mei 的书", "Mei 的書", "el libro de Mei", "el llibre de la Mei"], p: ["the top shelf", "书架最上层", "書架最上層", "el estante de arriba", "el prestatge de dalt"],
      l: ["My book! I was literally at the good part.", "我的书！我刚好看到最精彩的地方。", "我的書！我剛好看到最精彩的地方。", "¡Mi libro! Estaba literalmente en la mejor parte.", "El meu llibre! Estava literalment a la millor part."] },
    { id: "scarf", who: "mei", n: ["Mei's scarf", "Mei 的围巾", "Mei 的圍巾", "la bufanda de Mei", "la bufanda de la Mei"], p: ["the coat hook", "挂衣钩", "掛衣鉤", "el perchero", "el penjador"],
      l: ["On the hook by the door, so I actually find it tomorrow.", "挂在门边，这样我明天才真的找得到。", "掛在門邊，這樣我明天才真的找得到。", "En el gancho de la puerta, para encontrarla mañana de verdad.", "Al penjador de la porta, perquè demà la trobi de debò."] },
    { id: "ball", who: "mantou", n: ["Mantou's ball", "馒头的球", "饅頭的球", "la pelota de Mantou", "la pilota d'en Mantou"], p: ["his bed", "他的窝", "他的窩", "su cama", "el seu llit"],
      l: ["*drops into his bed with the ball, tail going like a fan*", "*叼着球趴进窝里，尾巴摇得像扇子*", "*叼著球趴進窩裡，尾巴搖得像扇子*", "*se echa en su cama con la pelota, moviendo la cola como un abanico*", "*s'estira al llit amb la pilota, movent la cua com un ventall*"] },
    { id: "mouse", who: "miso", n: ["Miso's toy mouse", "Miso 的玩具老鼠", "Miso 的玩具老鼠", "el ratón de juguete de Miso", "el ratolí de joguina d'en Miso"], p: ["his basket", "他的猫篮", "他的貓籃", "su cesta", "la seva cistella"],
      l: ["*pretends not to care. Checks it's there anyway.*", "*假装不在乎，还是偷偷看了一眼在不在*", "*假裝不在乎，還是偷偷看了一眼在不在*", "*finge que le da igual. Igualmente comprueba que está ahí.*", "*fa veure que no li importa. Igualment comprova que hi és.*"] }
  ],
  mischief: {
    miso: ["*Miso knocks {x} off again. Of course.*", "*Miso 又把{x}拍了下来。当然了。*", "*Miso 又把{x}拍了下來。當然了。*", "*Miso vuelve a tirar {x}. Cómo no.*", "*En Miso torna a tirar {x}. Com no.*"],
    mantou: ["*Mantou trots off with {x} again.*", "*馒头又叼着{x}跑了。*", "*饅頭又叼著{x}跑了。*", "*Mantou se vuelve a llevar {x} al trote.*", "*En Mantou se'n torna a endur {x} trotant.*"]
  },
  almost: ["Everything's home. Well, almost: Yuzu's asleep in the laundry. Lift her out gently.", "都回家了。嗯，差一点：Yuzu 在脏衣篮里睡着了。轻轻把她抱出来吧。", "都回家了。嗯，差一點：Yuzu 在髒衣籃裡睡著了。輕輕把她抱出來吧。", "Todo en su sitio. Bueno, casi: Yuzu duerme en el cesto de la ropa. Sácala con cuidado.", "Tot al seu lloc. Bé, gairebé: la Yuzu dorm a la cistella de la roba. Treu-la amb compte."],
  yuzuA: ["Yuzu, asleep in the laundry basket", "在脏衣篮里睡着的 Yuzu", "在髒衣籃裡睡著的 Yuzu", "Yuzu, dormida en el cesto de la ropa", "La Yuzu, adormida a la cistella de la roba"],
  settled: ["The room settles.", "房间安静下来了。", "房間安靜下來了。", "La sala se calma.", "La sala es calma."],
  settleLines: {
    popo: ["Wah, see? So nice already. Sit, sit. Now your turn lor.", "哇，你看，多好。坐，坐。现在轮到你咯。", "嘩，你睇，幾靚。坐，坐。而家到你喇。", "¡Wah, mira! Muy bonito ya. Sienta, sienta. Ahora tu turno.", "Wah, mira! Ja està ben bonic. Seu, seu. Ara et toca a tu."],
    wei: ["*puts the kettle on* Better. Your turn now.", "*把水壶放上炉子* 好多了。现在轮到你了。", "*把水壺放上爐子* 好多了。現在輪到你了。", "*pone el hervidor* Mejor. Ahora te toca a ti.", "*posa el bullidor* Millor. Ara et toca a tu."],
    mei: ["Okay, that was weirdly satisfying. Your turn.", "好吧，这居然有点爽。轮到你了。", "好吧，這居然有點爽。輪到你了。", "Vale, eso ha sido raramente satisfactorio. Te toca.", "D'acord, això ha estat estranyament satisfactori. Et toca."],
    cats: ["*both cats curl up on the tidy sofa*", "*两只猫在收拾好的沙发上蜷成一团*", "*兩隻貓在收拾好的沙發上蜷成一團*", "*los dos gatos se acurrucan en el sofá ordenado*", "*els dos gats s'arrauleixen al sofà endreçat*"]
  },
  yourTurn: ["Your turn", "轮到你了", "輪到你了", "Te toca", "Et toca"],

  /* your spot */
  spotQ: ["Pick one spot.", "挑一个地方。", "挑一個地方。", "Elige un rincón.", "Tria un racó."],
  spotSub: ["Just one. Small is the point.", "只挑一个。小，才是重点。", "只挑一個。小，才是重點。", "Solo uno. Lo pequeño es la gracia.", "Només un. La gràcia és que sigui petit."],
  SPOTS: [
    { k: "shelf", n: ["A shelf", "一个架子", "一個架子", "Una estantería", "Una prestatgeria"], d: ["the one you look at most", "你最常看到的那个", "你最常看到的那個", "la que más miras", "la que més mires"], s: ["the shelf", "架子", "架子", "la estantería", "la prestatgeria"] },
    { k: "drawer", n: ["A drawer", "一个抽屉", "一個抽屜", "Un cajón", "Un calaix"], d: ["the one that won't close", "关不上的那个", "關不上的那個", "el que no cierra", "el que no tanca"], s: ["the drawer", "抽屉", "抽屜", "el cajón", "el calaix"] },
    { k: "table", n: ["The table", "桌子", "桌子", "La mesa", "La taula"], d: ["where everything lands", "什么都往上放的地方", "什麼都往上放的地方", "donde aterriza todo", "on aterra tot"], s: ["the table", "桌子", "桌子", "la mesa", "la taula"] },
    { k: "door", n: ["The doorway", "门口", "門口", "La entrada", "L'entrada"], d: ["keys, shoes, bags", "钥匙、鞋子、包", "鑰匙、鞋子、包", "llaves, zapatos, bolsos", "claus, sabates, bosses"], s: ["the doorway", "门口", "門口", "la entrada", "l'entrada"] }
  ],

  /* whose things */
  whoseQ: ["Whose things live there?", "那里住着谁的东西？", "那裡住著誰的東西？", "¿De quién son las cosas que viven ahí?", "De qui són les coses que hi viuen?"],
  whose1: ["As you go, give each thing back to its person.", "收拾的时候，把每样东西还给它的主人。", "收拾的時候，把每樣東西還給它的主人。", "Mientras ordenas, devuelve cada cosa a su persona.", "Mentre endreces, torna cada cosa a la seva persona."],
  whose2: ["Someone's book goes back to their side, not into a pile. A borrowed thing goes back to whoever lent it. Your own things go home too.", "别人的书放回他那一边，别堆成一堆。借来的东西还给借你的人。你自己的东西也各回各位。", "別人的書放回他那一邊，別堆成一堆。借來的東西還給借你的人。你自己的東西也各回各位。", "El libro de alguien vuelve a su lado, no a un montón. Lo prestado vuelve a quien te lo prestó. Tus cosas también vuelven a casa.", "El llibre d'algú torna al seu costat, no a una pila. El que t'han deixat torna a qui te'l va deixar. Les teves coses també tornen a casa."],
  whoseLines: {
    popo: ["Everything got its home lah. Even the odd sock.", "每样东西都有它的家啦。连单只袜子也有。", "樣樣嘢都有佢屋企㗎。連單隻襪都有。", "Cada cosa tiene su casa. Hasta el calcetín solo.", "Cada cosa té la seva casa. Fins i tot el mitjó desaparellat."],
    wei: ["*hands you a small basket* For anything that isn't yours. Give it back in person.", "*递给你一个小篮子* 不是你的东西放这儿。当面还回去。", "*遞給你一個小籃子* 不是你的東西放這兒。當面還回去。", "*te da una cestita* Para lo que no es tuyo. Devuélvelo en persona.", "*et dona una cistelleta* Per al que no és teu. Torna-ho en persona."],
    mei: ["If you find my hoodie, it's mine. If you find anyone's hoodie, it's probably mine.", "如果你找到我的卫衣，那是我的。如果你找到任何人的卫衣，大概也是我的。", "如果你找到我的帽T，那是我的。如果你找到任何人的帽T，大概也是我的。", "Si encuentras mi sudadera, es mía. Si encuentras la sudadera de cualquiera, probablemente también.", "Si trobes la meva dessuadora, és meva. Si trobes la dessuadora de qualsevol, probablement també."],
    cats: ["*Yuzu drops a hair tie at your feet. It isn't hers.*", "*Yuzu 把一根发圈丢在你脚边。那不是她的。*", "*Yuzu 把一根髮圈丟在你腳邊。那不是她的。*", "*Yuzu deja una goma del pelo a tus pies. No es suya.*", "*La Yuzu et deixa una goma dels cabells als peus. No és seva.*"]
  },
  ok: ["OK", "好", "好", "Vale", "D'acord"],

  /* how long */
  timeQ: ["How long?", "多久？", "多久？", "¿Cuánto rato?", "Quanta estona?"],
  song: ["One song", "一首歌", "一首歌", "Una canción", "Una cançó"],
  songD: ["Put on one song. Stop when it ends.", "放一首歌。歌停了，你就停。", "放一首歌。歌停了，你就停。", "Pon una canción. Para cuando acabe.", "Posa una cançó. Para quan s'acabi."],
  ten: ["Ten minutes", "十分钟", "十分鐘", "Diez minutos", "Deu minuts"],
  tenD: ["A soft chime when it's done.", "时间到了会轻轻响一声。", "時間到了會輕輕響一聲。", "Un aviso suave cuando acabe.", "Un avís suau quan s'acabi."],

  /* one song */
  songQ: ["Pick the song.", "挑一首歌。", "挑一首歌。", "Elige la canción.", "Tria la cançó."],
  songSub: ["Not a playlist. Just one.", "不是歌单，就一首。", "不是歌單，就一首。", "No una lista. Solo una.", "No una llista. Només una."],
  CUES: [
    ["A song someone in your family used to hum.", "一首家里某个人以前常哼的歌。", "一首家裡某個人以前常哼的歌。", "Una canción que alguien de tu familia tarareaba.", "Una cançó que algú de la teva família taral·lejava."],
    ["The first song you ever bought.", "你买的第一首歌。", "你買的第一首歌。", "La primera canción que compraste.", "La primera cançó que vas comprar."],
    ["Whatever comes on the radio next. No skipping.", "收音机接下来放什么就是什么。不许跳过。", "收音機接下來放什麼就是什麼。不許跳過。", "Lo que salga ahora en la radio. Sin saltar.", "El que soni ara a la ràdio. Sense saltar."],
    ["A song from the year you moved in.", "你搬进来那一年的一首歌。", "你搬進來那一年的一首歌。", "Una canción del año en que te mudaste aquí.", "Una cançó de l'any que t'hi vas mudar."],
    ["One you both know all the words to.", "一首你们两个都会唱全的歌。", "一首你們兩個都會唱全的歌。", "Una que os sepáis los dos de memoria.", "Una que us sapigueu tots dos de memòria."],
    ["Something that would get Popo up to dance.", "一首能让婆婆站起来跳舞的歌。", "一首能讓婆婆站起來跳舞的歌。", "Algo que haría bailar a Popo.", "Alguna cosa que faria ballar la Popo."],
    ["Something slow. Tidying doesn't need to be fast.", "慢一点的歌。收拾不用赶。", "慢一點的歌。收拾不用趕。", "Algo lento. Ordenar no tiene prisa.", "Alguna cosa lenta. Endreçar no té pressa."]
  ],
  another: ["Another idea", "换一个", "換一個", "Otra idea", "Una altra idea"],
  gotOne: ["Got one", "选好了", "選好了", "La tengo", "La tinc"],
  songLines: {
    wei: ["Like closing the bar: when the music stops, you're done.", "就像酒吧打烊：音乐一停，你就收工。", "就像酒吧打烊：音樂一停，你就收工。", "Como cerrar el bar: cuando para la música, has terminado.", "Com tancar el bar: quan para la música, has acabat."],
    popo: ["One song only ah. Then come eat.", "就一首歌喔。然后来吃饭。", "一首歌咋。之後過嚟食飯。", "Una canción solo, ¿eh? Luego vienes a comer.", "Només una cançó, eh? Després vine a menjar."],
    mei: ["Pick a good one. I'm judging.", "挑首好的。我在打分哦。", "挑首好的。我在打分喔。", "Elige una buena. Te estoy juzgando.", "Tria'n una de bona. T'estic jutjant."],
    cats: ["*Miso's tail keeps time*", "*Miso 的尾巴打着拍子*", "*Miso 的尾巴打著拍子*", "*la cola de Miso lleva el ritmo*", "*la cua d'en Miso marca el ritme*"]
  },

  /* do it with someone */
  inviteQ: ["Do it with someone?", "叫上一个人一起？", "叫上一個人一起？", "¿Lo haces con alguien?", "Ho fas amb algú?"],
  inviteSub: ["Alone it's a chore. Together it's half a game.", "一个人是家务。两个人就有一半是游戏。", "一個人是家務。兩個人就有一半是遊戲。", "Solo es una tarea. Juntos es medio juego.", "Sol és una feina. Junts és mig joc."],
  inviteText: ["Tidy {s} with me? {l}, then we sit down.", "陪我收拾一下{s}？{l}，然后我们坐下来。", "陪我收拾一下{s}？{l}，然後我們坐下來。", "¿Ordenas {s} conmigo? {l} y luego nos sentamos.", "Endrecem {s} junts? {l} i després seiem."],
  sendIt: ["Send it", "发给 TA", "發給 TA", "Envíalo", "Envia-ho"],
  begin: ["Start", "开始", "開始", "Empezar", "Començar"],
  copied: ["Copied. Send it, or just say it out loud.", "已复制。发出去，或者直接喊一声。", "已複製。發出去，或者直接喊一聲。", "Copiado. Envíalo, o dilo en voz alta.", "Copiat. Envia-ho, o digues-ho en veu alta."],

  /* go */
  goT: ["Go. The phone stays here.", "去吧。手机留在这儿。", "去吧。手機留在這兒。", "Ve. El móvil se queda aquí.", "Vés. El mòbil es queda aquí."],
  goSong: ["Press play. Tidy {s}. Come back when the song ends.", "按下播放。去收拾{s}。歌放完了再回来。", "按下播放。去收拾{s}。歌放完了再回來。", "Dale al play. Ordena {s}. Vuelve cuando acabe la canción.", "Prem play. Endreça {s}. Torna quan s'acabi la cançó."],
  goTen: ["Tidy {s}. A soft chime when it's done.", "去收拾{s}。时间到了会轻轻响一声。", "去收拾{s}。時間到了會輕輕響一聲。", "Ordena {s}. Un aviso suave cuando acabe.", "Endreça {s}. Un avís suau quan s'acabi."],
  back2: ["I'm back", "我回来了", "我回來了", "Ya estoy", "Ja hi soc"],

  /* how does it look */
  checkQ: ["How does it look?", "看起来怎么样？", "看起來怎麼樣？", "¿Cómo ha quedado?", "Com ha quedat?"],
  nicer: ["Nicer", "好多了", "好多了", "Mejor", "Millor"],
  nicerD: ["It feels a bit lighter in here.", "这里感觉轻松了一点。", "這裡感覺輕鬆了一點。", "Se respira un poco mejor.", "S'hi respira una mica millor."],
  same: ["About the same", "差不多", "差不多", "Más o menos igual", "Més o menys igual"],
  sameD: ["And that's OK. It got some care.", "也没关系。它被照顾过了。", "也沒關係。它被照顧過了。", "Y no pasa nada. Ha recibido un poco de cariño.", "I no passa res. Ha rebut una mica d'afecte."],
  found: ["I found something", "我找到了东西", "我找到了東西", "He encontrado algo", "He trobat una cosa"],
  foundD: ["A coin, a photo, a lost thing.", "一枚硬币、一张照片、一样丢了的东西。", "一枚硬幣、一張照片、一樣丟了的東西。", "Una moneda, una foto, algo perdido.", "Una moneda, una foto, una cosa perduda."],

  /* found */
  foundQ: ["What did you find?", "你找到了什么？", "你找到了什麼？", "¿Qué has encontrado?", "Què has trobat?"],
  foundSub: ["One line. It goes in the found drawer, and that's all this app keeps.", "写一行就好。它会放进失物抽屉，这也是这个应用唯一保存的东西。", "寫一行就好。它會放進失物抽屜，這也是這個應用唯一保存的東西。", "Una línea. Va al cajón de lo encontrado, y es lo único que guarda esta app.", "Una línia. Va al calaix de les troballes, i és l'únic que guarda aquesta app."],
  foundPh: ["the remote, under the cushion", "遥控器，在靠垫底下", "遙控器，在靠墊底下", "el mando, debajo del cojín", "el comandament, sota el coixí"],
  foundLines: {
    mei: ["I once found a birthday card from my grandma in a coat pocket. Best tidy ever.", "我有一次在外套口袋里找到外婆给我的生日卡。史上最好的一次收拾。", "我有一次在外套口袋裡找到外婆給我的生日卡。史上最好的一次收拾。", "Una vez encontré una tarjeta de cumpleaños de mi abuela en el bolsillo de un abrigo. El mejor orden de la historia.", "Una vegada vaig trobar una postal d'aniversari de la meva àvia a la butxaca d'un abric. La millor endreçada de la història."],
    popo: ["Last time I find Josep's handwriting in a recipe. I keep it in the tin.", "上次我在一张菜谱里找到 Josep 的字。我放进铁盒里了。", "上次我喺張食譜度搵到 Josep 啲字。我收咗喺鐵罐度。", "La última vez yo encuentra la letra de Josep en una receta. La guardo en la lata.", "L'última vegada vaig trobar la lletra d'en Josep en una recepta. La guardo a la llauna."],
    wei: ["*holds up a bottle cap* Not treasure. But I'm keeping it.", "*举起一个瓶盖* 不是宝贝。但我要留着。", "*舉起一個瓶蓋* 不是寶貝。但我要留著。", "*levanta una chapa* No es un tesoro. Pero me la quedo.", "*aixeca un tap* No és cap tresor. Però me'l quedo."],
    cats: ["*Miso bats a lost button out from under the sofa*", "*Miso 从沙发底下拍出一颗丢了的纽扣*", "*Miso 從沙發底下拍出一顆丟了的鈕扣*", "*Miso saca de un zarpazo un botón perdido de debajo del sofá*", "*En Miso treu d'una urpada un botó perdut de sota el sofà*"]
  },
  keepIt: ["Keep it", "收好", "收好", "Guárdalo", "Desa-ho"],
  skip: ["Skip", "跳过", "跳過", "Saltar", "Saltar"],

  /* done */
  doneNicerT: ["Nicer. Good.", "好多了。很好。", "好多了。很好。", "Mejor. Bien.", "Millor. Bé."],
  doneSameT: ["That's OK.", "没关系。", "沒關係。", "No pasa nada.", "No passa res."],
  doneFoundT: ["Into the drawer.", "放进抽屉了。", "放進抽屜了。", "Al cajón.", "Al calaix."],
  doneNicer: ["Everything's back where it lives. Go and sit with whoever's home.", "东西都回到它住的地方了。去和家里的人坐一会儿吧。", "東西都回到它住的地方了。去和家裡的人坐一會兒吧。", "Todo ha vuelto a donde vive. Ve a sentarte con quien esté en casa.", "Tot ha tornat on viu. Vés a seure amb qui sigui a casa."],
  doneSame: ["It got some care, and that counts. Go and sit with whoever's home.", "它被照顾过了，这就够了。去和家里的人坐一会儿吧。", "它被照顧過了，這就夠了。去和家裡的人坐一會兒吧。", "Ha recibido un poco de cariño, y eso cuenta. Ve a sentarte con quien esté en casa.", "Ha rebut una mica d'afecte, i això compta. Vés a seure amb qui sigui a casa."],
  doneFound: ["“{x}” is kept. Go and show it to someone.", "“{x}”收好了。拿去给某个人看看吧。", "「{x}」收好了。拿去給某個人看看吧。", "«{x}» está guardado. Ve a enseñárselo a alguien.", "«{x}» està desat. Vés a ensenyar-ho a algú."],
  putDown: ["Put the phone down", "放下手机", "放下手機", "Deja el móvil", "Deixa el mòbil"],
  lights: ["Lights off in the living room. Everything where it lives.", "客厅关灯了。每样东西都在它住的地方。", "客廳關燈了。每樣東西都在它住的地方。", "Luces apagadas en el salón. Cada cosa en su sitio.", "Llums apagats a la sala. Cada cosa al seu lloc."],
  tapWake: ["Tap to come back", "点一下回来", "點一下回來", "Toca para volver", "Toca per tornar"],

  /* the drawer */
  drawerT: ["The found drawer", "失物抽屉", "失物抽屜", "El cajón de lo encontrado", "El calaix de les troballes"],
  drawerSub: ["Small things that turned up while you tidied.", "收拾时冒出来的小东西。", "收拾時冒出來的小東西。", "Cosas pequeñas que aparecieron mientras ordenabas.", "Coses petites que van aparèixer mentre endreçaves."],
  drawerEmpty: ["Nothing yet. Things turn up when you tidy.", "还没有。收拾的时候东西自己会冒出来。", "還沒有。收拾的時候東西自己會冒出來。", "Nada todavía. Las cosas aparecen cuando ordenas.", "Res encara. Les coses apareixen quan endreces."],
  takeOut: ["Take it out", "拿出来", "拿出來", "Sacarlo", "Treure-ho"],
  closeDrawer: ["Close the drawer", "关上抽屉", "關上抽屜", "Cerrar el cajón", "Tancar el calaix"],

  /* an invitation opened from a link */
  recvT: ["{n} asked you to tidy {s} together.", "{n}约你一起收拾{s}。", "{n}約你一起收拾{s}。", "{n} te pide que ordenéis {s} juntos.", "{n} et demana d'endreçar {s} junts."],
  recvSome: ["Someone", "有人", "有人", "Alguien", "Algú"],
  recvSub: ["{l}, then you both sit down.", "{l}，然后你们一起坐下来。", "{l}，然後你們一起坐下來。", "{l} y luego os sentáis.", "{l} i després seieu."],
  recvSay: ["I'm in", "我来了", "我來了", "Me apunto", "M'hi apunto"],
  recvReply: ["I'm in. Put the song on, I'll bring a bag for the odd socks.", "我来了。放歌吧，我带个袋子装单只袜子。", "我來了。放歌吧，我帶個袋子裝單隻襪子。", "Me apunto. Pon la canción, yo traigo una bolsa para los calcetines sueltos.", "M'hi apunto. Posa la cançó, jo porto una bossa per als mitjons desaparellats."],
  recvOwn: ["Tidy my own", "收拾我自己的", "收拾我自己的", "Ordenar lo mío", "Endreçar el meu"],
  recvLines: {
    popo: ["Somebody want help! Go lah, two people faster.", "有人要帮忙！去吧，两个人快一点。", "有人要幫手！去啦，兩個人快啲。", "¡Alguien quiere ayuda! Ve, dos personas más rápido.", "Algú vol ajuda! Vés, dues persones van més de pressa."],
    wei: ["*holds the door* Go on. Bring a bag.", "*扶着门* 去吧。带个袋子。", "*扶著門* 去吧。帶個袋子。", "*sujeta la puerta* Venga, ve. Lleva una bolsa.", "*aguanta la porta* Au, vés. Porta una bossa."],
    mei: ["Someone wants company for tidying. That's actually cute.", "有人想找人陪着收拾。其实挺可爱的。", "有人想找人陪著收拾。其實挺可愛的。", "Alguien quiere compañía para ordenar. Es hasta mono.", "Algú vol companyia per endreçar. És fins i tot bonic."],
    cats: ["*Mantou is already at the door with his lead*", "*馒头已经叼着牵绳等在门口了*", "*饅頭已經叼著牽繩等在門口了*", "*Mantou ya está en la puerta con la correa*", "*En Mantou ja és a la porta amb la corretja*"]
  },

  /* the footer and the share card */
  device: ["Stays on this device", "只保存在这台设备上", "只保存在這台裝置上", "Se queda en este dispositivo", "Es queda en aquest dispositiu"],
  ah: ["After hours ↗", "下班以后 ↗", "下班以後 ↗", "Fuera de horario ↗", "Fora d'hores ↗"],
  cardLine: ["Tidy one spot with me? One song, then we sit down.", "陪我收拾一个角落？一首歌，然后坐下来。", "陪我收拾一個角落？一首歌，然後坐下來。", "¿Ordenamos un rincón juntos? Una canción y nos sentamos.", "Endrecem un racó junts? Una cançó i seiem."]
};
