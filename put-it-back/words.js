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
  h1: ["Help everyone's things find their way home. Tap anyone in the room.", "帮大家的东西各回各家。点房间里的谁都行。", "幫大家的東西各回各家。點房間裡的誰都行。", "Ayuda a que las cosas de todos vuelvan a su sitio. Toca a quien quieras.", "Ajuda que les coses de tothom tornin al seu lloc. Toca qui vulguis."],
  h2: ["Pick one real spot, and one song.", "挑一个真实的角落，再挑一首歌。", "挑一個真實的角落，再挑一首歌。", "Elige un rincón de verdad y una canción.", "Tria un racó de debò i una cançó."],
  h3: ["Tidy it, with someone if you can. Then put the phone down.", "去收拾它，最好叫上一个人。然后放下手机。", "去收拾它，最好叫上一個人。然後放下手機。", "Ordénalo, con alguien si puedes. Luego deja el móvil.", "Endreça'l, amb algú si pots. Després deixa el mòbil."],
  gotIt: ["Got it", "知道了", "知道了", "Entendido", "Entesos"],

  /* home: whoever is up says hello (everyone keeps the town's hours) */
  homeLines: {
    popo: ["Aiya, so messy today! Never mind lah. One thing at a time, everything go home.", "哎呀，今天好乱啊！没关系啦。一样一样来，东西都回家。", "哎呀，今日好亂呀！唔緊要啦。一樣一樣嚟，啲嘢全部歸位。", "¡Aiya, hoy muy desorden! No pasa nada. Una cosa cada vez, todo vuelve a casa.", "Aiya, quin desordre avui! No passa res. Una cosa cada vegada, i tot torna a casa."],
    wei: ["*steps over something* A few things out of place. Give me a hand?", "*跨过地上的什么东西* 好几样东西不在原位。搭把手？", "*跨過地上的什麼東西* 好幾樣東西不在原位。搭把手？", "*pasa por encima de algo* Unas cuantas cosas fuera de su sitio. ¿Me echas una mano?", "*passa per sobre d'alguna cosa* Unes quantes coses fora de lloc. Em dones un cop de mà?"],
    mei: ["Okay, nobody panic. It's basically a game. A very small, very boring game. Kidding.", "好，大家别慌。这基本上是个游戏。一个很小、很无聊的游戏。开玩笑的。", "好，大家別慌。這基本上是個遊戲。一個很小、很無聊的遊戲。開玩笑的。", "Vale, que nadie se agobie. Es básicamente un juego. Uno muy pequeño y muy aburrido. Es broma.", "D'acord, que ningú s'estressi. És bàsicament un joc. Un de molt petit i molt avorrit. És broma."],
    cats: ["*Miso sits on the one clean cushion and stares at you*", "*Miso 坐在唯一干净的那个靠垫上，盯着你看*", "*Miso 坐在唯一乾淨的那個靠墊上，盯著你看*", "*Miso se sienta en el único cojín ordenado y te mira fijamente*", "*En Miso s'asseu a l'únic coixí endreçat i et mira fixament*"],
    note: ["Late already. Tidy tomorrow lah. Go sleep!", "这么晚了。明天再收拾啦。快去睡！", "咁夜喇。聽日先執啦。快啲去瞓！", "Ya muy tarde. Ordenas mañana. ¡A dormir!", "Ja és molt tard. Endreça demà. Cap a dormir!"]
  },

  /* the room */
  hint: ["Tap a thing to send it home.", "点一样东西，送它回家。", "點一樣東西，送它回家。", "Toca una cosa para mandarla a su sitio.", "Toca una cosa per enviar-la al seu lloc."],
  roomA: ["The living room after a long day, things scattered about. Popo in her armchair, Wei and Mei on the sofa, Miso on top of the bookshelf, Yuzu asleep in the laundry basket, Mantou by his bed. Tap anyone and they'll say something.", "忙了一天后的客厅，东西散了一地。婆婆坐在扶手椅上，Wei 和 Mei 坐在沙发上，Miso 趴在书架顶上，Yuzu 在脏衣篮里睡着了，馒头在他的窝旁边。点谁，谁就会说话。", "忙了一天後的客廳，東西散了一地。婆婆坐在扶手椅上，Wei 和 Mei 坐在沙發上，Miso 趴在書架頂上，Yuzu 在髒衣籃裡睡著了，饅頭在他的窩旁邊。點誰，誰就會說話。", "El salón después de un día largo, con cosas por todas partes. Popo en su sillón, Wei y Mei en el sofá, Miso encima de la estantería, Yuzu dormida en el cesto de la ropa y Mantou junto a su cama. Toca a cualquiera y dirá algo.", "La sala després d'un dia llarg, amb coses per tot arreu. La Popo a la butaca, en Wei i la Mei al sofà, en Miso dalt de la prestatgeria, la Yuzu adormida a la cistella de la roba i en Mantou al costat del seu llit. Toca qualsevol i dirà alguna cosa."],
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
      l: ["One sock. *looks at Mantou* The other one's a mystery.", "一只袜子。*看了看馒头* 另一只是个谜。", "一隻襪子。*看了看饅頭* 另一隻是個謎。", "Un calcetín. *mira a Mantou* El otro es un misterio.", "Un mitjó. *mira en Mantou* L'altre és un misteri."] },
    { id: "book", who: "mei", n: ["Mei's book", "Mei 的书", "Mei 的書", "el libro de Mei", "el llibre de la Mei"], p: ["the top shelf", "书架最上层", "書架最上層", "el estante de arriba", "el prestatge de dalt"],
      l: ["My book! I was literally at the good part.", "我的书！我刚好看到最精彩的地方。", "我的書！我剛好看到最精彩的地方。", "¡Mi libro! Estaba literalmente en la mejor parte.", "El meu llibre! Estava literalment a la millor part."] },
    { id: "scarf", who: "mei", n: ["Mei's scarf", "Mei 的围巾", "Mei 的圍巾", "la bufanda de Mei", "la bufanda de la Mei"], p: ["the coat hook", "挂衣钩", "掛衣鉤", "el perchero", "el penjador"],
      l: ["On the hook by the door, so I actually find it tomorrow.", "挂在门边，这样我明天才真的找得到。", "掛在門邊，這樣我明天才真的找得到。", "En el gancho de la puerta, para encontrarla mañana de verdad.", "Al penjador de la porta, perquè demà la trobi de debò."] },
    { id: "ball", who: "mantou", n: ["Mantou's ball", "馒头的球", "饅頭的球", "la pelota de Mantou", "la pilota d'en Mantou"], p: ["his bed", "他的窝", "他的窩", "su cama", "el seu llit"],
      l: ["*drops into his bed with the ball, tail going like a fan*", "*叼着球趴进窝里，尾巴摇得像扇子*", "*叼著球趴進窩裡，尾巴搖得像扇子*", "*se echa en su cama con la pelota, moviendo la cola como un abanico*", "*s'estira al llit amb la pilota, movent la cua com un ventall*"] },
    { id: "mouse", who: "miso", n: ["Miso's toy mouse", "Miso 的玩具老鼠", "Miso 的玩具老鼠", "el ratón de juguete de Miso", "el ratolí de joguina d'en Miso"], p: ["his basket", "他的猫篮", "他的貓籃", "su cesta", "la seva cistella"],
      l: ["*pretends not to care. Checks it's there anyway.*", "*假装不在乎，还是偷偷看了一眼在不在*", "*假裝不在乎，還是偷偷看了一眼在不在*", "*finge que le da igual. Igualmente comprueba que está ahí.*", "*fa veure que no li importa. Igualment comprova que hi és.*"] },
    { id: "slipper", who: "popo", n: ["Popo's slipper", "婆婆的拖鞋", "婆婆的拖鞋", "la zapatilla de Popo", "la sabatilla de la Popo"], p: ["her armchair", "她的扶手椅", "她的扶手椅", "su sillón", "la seva butaca"],
      l: ["One slipper only? The other one Mantou take already.", "只有一只？另一只早被馒头叼走啦。", "得一隻？另一隻俾饅頭咬咗走啦。", "¿Solo una? La otra ya se lleva Mantou.", "Només una? L'altra ja se la va endur en Mantou."] },
    { id: "teacup", who: "popo", n: ["Popo's teacup", "婆婆的茶杯", "婆婆的茶杯", "la taza de Popo", "la tassa de la Popo"], p: ["the windowsill", "窗台", "窗台", "el alféizar", "l'ampit"],
      l: ["Tea cold already. Never mind, I drink anyway.", "茶都凉了。没关系，我照喝。", "啲茶凍晒。唔緊要，照飲。", "Té ya frío. No pasa nada, yo bebo igual.", "El te ja s'ha refredat. No passa res, me'l beuré igualment."] },
    { id: "notebook", who: "wei", n: ["Wei's notebook", "Wei 的笔记本", "Wei 的筆記本", "la libreta de Wei", "la llibreta d'en Wei"], p: ["the side table", "小茶几", "小茶几", "la mesita", "la tauleta"],
      l: ["*tucks it by the lamp* Half my recipes are in there. The other half are wrong.", "*把它放回台灯旁边* 我一半的配方都在里面。另一半是错的。", "*把它放回檯燈旁邊* 我一半的配方都在裡面。另一半是錯的。", "*la deja junto a la lámpara* La mitad de mis recetas están ahí. La otra mitad está mal.", "*la deixa al costat del llum* La meitat de les meves receptes hi són. L'altra meitat estan malament."] },
    { id: "polish", who: "mei", n: ["Mei's nail polish", "Mei 的指甲油", "Mei 的指甲油", "el pintaúñas de Mei", "el pintaungles de la Mei"], p: ["the windowsill", "窗台", "窗台", "el alféizar", "l'ampit"],
      l: ["Glitter, obviously. That one's my best one.", "亮片的，当然。那瓶是我最好的。", "亮片的，當然。那瓶是我最好的。", "Con purpurina, obvio. Es mi favorito.", "Amb purpurina, és clar. És el meu preferit."] },
    { id: "phones", who: "mei", n: ["Mei's headphones", "Mei 的耳机", "Mei 的耳機", "los cascos de Mei", "els auriculars de la Mei"], p: ["the arm of the sofa", "沙发扶手", "沙發扶手", "el brazo del sofá", "el braç del sofà"],
      l: ["I literally looked everywhere. Except the floor. Fair.", "我真的到处都找过了。除了地上。好吧。", "我真的到處都找過了。除了地上。好吧。", "Los busqué literalmente por todas partes. Menos en el suelo. Justo.", "Els he buscat literalment per tot arreu. Menys a terra. Just."] },
    { id: "lead", who: "mantou", n: ["Mantou's lead", "馒头的牵绳", "饅頭的牽繩", "la correa de Mantou", "la corretja d'en Mantou"], p: ["the door handle", "门把手", "門把手", "el pomo de la puerta", "el pom de la porta"],
      l: ["*stares at the lead on the door. Then at you. Then at the lead.*", "*盯着门上的牵绳。再盯着你。再盯着牵绳。*", "*盯著門上的牽繩。再盯著你。再盯著牽繩。*", "*mira la correa en la puerta. Luego a ti. Luego a la correa.*", "*mira la corretja de la porta. Després a tu. Després a la corretja.*"] },
    { id: "bone", who: "mantou", n: ["Mantou's chew bone", "馒头的磨牙骨头", "饅頭的磨牙骨頭", "el hueso de Mantou", "l'os d'en Mantou"], p: ["his bed", "他的窝", "他的窩", "su cama", "el seu llit"],
      l: ["*sniffs it to make sure it's still his, then lies on it*", "*闻了闻确认还是自己的，然后趴在上面*", "*聞了聞確認還是自己的，然後趴在上面*", "*lo huele para asegurarse de que sigue siendo suyo y se tumba encima*", "*l'ensuma per assegurar-se que encara és seu i s'hi estira a sobre*"] },
    { id: "feather", who: "miso", n: ["Miso's feather toy", "Miso 的逗猫羽毛", "Miso 的逗貓羽毛", "la pluma de juguete de Miso", "la ploma de joguina d'en Miso"], p: ["his basket", "他的猫篮", "他的貓籃", "su cesta", "la seva cistella"],
      l: ["*attacks it once, to be sure it's dead*", "*扑上去咬了一口，确认它已经死了*", "*撲上去咬了一口，確認它已經死了*", "*la ataca una vez, para asegurarse de que está muerta*", "*l'ataca un cop, per assegurar-se que és morta*"] },
    { id: "fish", who: "yuzu", n: ["Yuzu's toy fish", "Yuzu 的玩具鱼", "Yuzu 的玩具魚", "el pez de juguete de Yuzu", "el peix de joguina de la Yuzu"], p: ["the cats' basket", "猫篮", "貓籃", "la cesta de los gatos", "la cistella dels gats"],
      l: ["*a paw comes out of the laundry, pats the fish once, goes back in*", "*一只爪子从脏衣篮里伸出来，拍了拍鱼，又缩回去了*", "*一隻爪子從髒衣籃裡伸出來，拍了拍魚，又縮回去了*", "*una pata sale del cesto de la ropa, da una palmadita al pez y vuelve a entrar*", "*una pota surt de la cistella de la roba, toca el peix i torna a entrar*"] }
  ],

  /* tap anyone in the room: a: awake, z: asleep (everyone keeps the town's hours); Yuzu is always asleep in the laundry */
  TAP: {
    popo: { a: [
      ["Eat already or not? Eat first, tidy after lah.", "吃饭了没有？先吃饭，再收拾啦。", "食咗飯未呀？食完先執啦。", "¿Ya comes o no? Primero comer, después ordenar.", "Ja has menjat? Primer menjar, després endreçar."],
      ["Aiya, don't throw away! Maybe useful one.", "哎呀，别扔！说不定有用的嘛。", "哎呀，咪掉呀！可能有用㗎。", "¡Aiya, no tiras! Quizás útil.", "Aiya, no ho llencis! Potser serà útil."],
      ["Josep always say: everything got a drawer. Then he lose the drawer.", "Josep 以前老说：每样东西都有个抽屉。然后他把抽屉弄丢了。", "Josep 以前成日話：樣樣嘢都有個櫃桶。跟住佢連櫃桶都唔見埋。", "Josep siempre dice: todo tiene un cajón. Luego él pierde el cajón.", "En Josep sempre deia: tot té un calaix. Després perdia el calaix."],
      ["Wear socks! Floor cold.", "穿袜子！地上凉。", "着襪呀！地下凍。", "¡Ponte calcetines! Suelo frío.", "Posa't mitjons! El terra és fred."]
    ], z: [
      ["*asleep in the armchair, glasses on her head*", "*在扶手椅上睡着了，眼镜还架在头上*", "*在扶手椅上睡著了，眼鏡還架在頭上*", "*dormida en el sillón, con las gafas en la cabeza*", "*adormida a la butaca, amb les ulleres al cap*"],
      ["*snores, very politely*", "*很有礼貌地打着呼*", "*很有禮貌地打著呼*", "*ronca, muy educadamente*", "*ronca, molt educadament*"]
    ] },
    wei: { a: [
      ["*polishes a glass that's already clean* Habit.", "*擦一个本来就干净的杯子* 习惯了。", "*擦一個本來就乾淨的杯子* 習慣了。", "*frota un vaso que ya está limpio* Costumbre.", "*frega un got que ja és net* Costum."],
      ["Whoever tidies, I make the drinks. That's the deal.", "谁收拾，我就给谁调饮料。说好了。", "誰收拾，我就給誰調飲料。說好了。", "Quien ordena, yo le preparo algo de beber. Ese es el trato.", "Qui endreci, jo li preparo una beguda. Aquest és el tracte."],
      ["*finds a coaster in his pocket and slides it under your cup*", "*从口袋里摸出一个杯垫，垫在你的杯子下面*", "*從口袋裡摸出一個杯墊，墊在你的杯子下面*", "*encuentra un posavasos en el bolsillo y lo pone bajo tu taza*", "*troba un sotagot a la butxaca i te'l posa sota la tassa*"],
      ["Rule of the bar: if you pick it up, you put it back. Same here.", "酒吧的规矩：拿起来的，就放回去。这里也一样。", "酒吧的規矩：拿起來的，就放回去。這裡也一樣。", "Regla del bar: si lo coges, lo devuelves. Aquí igual.", "Regla del bar: si ho agafes, ho tornes. Aquí igual."]
    ], z: [
      ["*asleep sitting up, still holding a cloth*", "*坐着睡着了，手里还攥着抹布*", "*坐著睡著了，手裡還攥著抹布*", "*dormido sentado, aún con el trapo en la mano*", "*adormit assegut, encara amb el drap a la mà*"],
      ["*mumbles a cocktail recipe in his sleep*", "*梦里还在念一个鸡尾酒配方*", "*夢裡還在念一個雞尾酒配方*", "*murmura una receta de cóctel en sueños*", "*murmura una recepta de còctel en somnis*"]
    ] },
    mei: { a: [
      ["I'm not messy. I'm a visual organiser.", "我不乱。我只是视觉型整理者。", "我不亂。我只是視覺型整理者。", "No soy desordenada. Soy organizadora visual.", "No soc desordenada. Soc organitzadora visual."],
      ["If I tidy, I pick the music. Okay, I'm picking the music.", "我收拾的话，音乐我来挑。好，我来挑了。", "我收拾的話，音樂我來挑。好，我來挑了。", "Si ordeno, elijo la música. Vale, la elijo yo.", "Si endreço, tria la música jo. D'acord, la trio jo."],
      ["In New York my room was the size of this sofa. Tidying took one song.", "在纽约，我的房间就这张沙发那么大。收拾一首歌就够了。", "在紐約，我的房間就這張沙發那麼大。收拾一首歌就夠了。", "En Nueva York mi cuarto era del tamaño de este sofá. Ordenarlo duraba una canción.", "A Nova York la meva habitació era de la mida d'aquest sofà. Endreçar-la durava una cançó."],
      ["*pretends to tidy, actually texting* I'm multitasking.", "*假装在收拾，其实在发消息* 我在一心二用。", "*假裝在收拾，其實在發訊息* 我在一心二用。", "*finge ordenar, en realidad escribe mensajes* Estoy haciendo dos cosas a la vez.", "*fa veure que endreça, en realitat escriu missatges* Faig dues coses alhora."]
    ], z: [
      ["*asleep, phone still glowing on her chest*", "*睡着了，手机还在胸口亮着*", "*睡著了，手機還在胸口亮著*", "*dormida, con el móvil aún encendido en el pecho*", "*adormida, amb el mòbil encara encès al pit*"],
      ["*without opening her eyes* Five more minutes.", "*眼睛都没睁* 再五分钟。", "*眼睛都沒睜* 再五分鐘。", "*sin abrir los ojos* Cinco minutos más.", "*sense obrir els ulls* Cinc minuts més."]
    ] },
    miso: { a: [
      ["*knocks a pen off the shelf, keeps looking at you*", "*把一支笔从书架上拍下去，一直盯着你*", "*把一支筆從書架上拍下去，一直盯著你*", "*tira un boli de la estantería sin dejar de mirarte*", "*fa caure un bolígraf de la prestatgeria sense deixar de mirar-te*"],
      ["*yawns, showing every tooth*", "*打了个哈欠，露出所有牙齿*", "*打了個哈欠，露出所有牙齒*", "*bosteza enseñando todos los dientes*", "*bada i ensenya totes les dents*"],
      ["*slow blink. You've been approved.*", "*慢慢眨了一下眼。你通过了。*", "*慢慢眨了一下眼。你通過了。*", "*parpadeo lento. Aprobado.*", "*parpelleig lent. Aprovat.*"],
      ["*watches you tidy from up high, like a foreman*", "*在高处看着你收拾，像个工头*", "*在高處看著你收拾，像個工頭*", "*te mira ordenar desde arriba, como un capataz*", "*et mira endreçar des de dalt, com un capatàs*"]
    ], z: [
      ["*a black loaf on the top shelf. Breathing.*", "*书架顶上的一条黑面包。在呼吸。*", "*書架頂上的一條黑麵包。在呼吸。*", "*una barra de pan negra en lo alto de la estantería. Respira.*", "*una barra de pa negra dalt de la prestatgeria. Respira.*"]
    ] },
    yuzu: { a: [
      ["*purrs from inside the warm laundry*", "*从暖暖的脏衣篮里传来呼噜声*", "*從暖暖的髒衣籃裡傳來呼嚕聲*", "*ronronea desde dentro de la ropa calentita*", "*ronroneja des de dins de la roba calenteta*"],
      ["*one ear turns towards you. The rest of her stays asleep.*", "*一只耳朵转向你，其余部分继续睡*", "*一隻耳朵轉向你，其餘部分繼續睡*", "*una oreja se gira hacia ti. El resto sigue dormido.*", "*una orella es gira cap a tu. La resta continua dormint.*"],
      ["*stretches one paw out of the basket, then pulls it back in*", "*从篮子里伸出一只爪子，又缩了回去*", "*從籃子裡伸出一隻爪子，又縮了回去*", "*saca una pata del cesto y la vuelve a meter*", "*treu una pota de la cistella i la torna a ficar*"]
    ], out: [
      ["*rolls over on the rug, belly up. It's a trap.*", "*在地毯上翻了个身，肚皮朝上。这是陷阱。*", "*在地毯上翻了個身，肚皮朝上。這是陷阱。*", "*se da la vuelta en la alfombra, panza arriba. Es una trampa.*", "*es gira a la catifa, panxa enlaire. És una trampa.*"]
    ] },
    mantou: { a: [
      ["*brings you a sock. Not his. Very proud.*", "*叼来一只袜子。不是他的。非常骄傲。*", "*叼來一隻襪子。不是他的。非常驕傲。*", "*te trae un calcetín. No es suyo. Muy orgulloso.*", "*et porta un mitjó. No és seu. Molt orgullós.*"],
      ["*wags so hard his whole back half wags*", "*尾巴摇得太用力，整个后半身都在摇*", "*尾巴搖得太用力，整個後半身都在搖*", "*mueve la cola tan fuerte que se le mueve media espalda*", "*mou la cua tan fort que se li mou mig cos*"],
      ["*Woof!* (He means: is it walk time?)", "*汪！*（意思是：是不是该散步了？）", "*汪！*（意思是：是不是該散步了？）", "*¡Guau!* (Quiere decir: ¿es hora de pasear?)", "*Bup!* (Vol dir: és hora de passejar?)"],
      ["*sits on the thing you were about to pick up*", "*一屁股坐在你正要捡的东西上*", "*一屁股坐在你正要撿的東西上*", "*se sienta encima de lo que ibas a recoger*", "*s'asseu a sobre del que anaves a recollir*"]
    ], z: [
      ["*asleep in his bed, paws running after something*", "*在窝里睡着了，爪子还在梦里追着什么跑*", "*在窩裡睡著了，爪子還在夢裡追著什麼跑*", "*dormido en su cama, las patas corren detrás de algo*", "*adormit al llit, les potes corren darrere d'alguna cosa*"],
      ["*one eye opens, sees it isn't food, closes*", "*睁开一只眼，看见不是吃的，又闭上了*", "*睜開一隻眼，看見不是吃的，又閉上了*", "*abre un ojo, ve que no es comida, lo cierra*", "*obre un ull, veu que no és menjar, el tanca*"]
    ] }
  },
  /* tap the window: what's out there today (the town's weather for this visit) */
  WX: {
    clear: { popo: ["Clear sky. Open window lah, let the room breathe a bit.", "天很清。开窗啦，让房间透透气。", "天好清。開窗啦，等間屋透下氣。", "Cielo limpio. Abre ventana, la casa respira un poco.", "Cel clar. Obre la finestra, que la casa respiri una mica."],
      wei: ["*opens the window a crack* Good air for tidying.", "*把窗推开一条缝* 收拾正好透透气。", "*把窗推開一條縫* 收拾正好透透氣。", "*abre la ventana un poco* Buen aire para ordenar.", "*obre una mica la finestra* Bon aire per endreçar."],
      cats: ["*Miso stares out of the window at nothing. Very important nothing.*", "*Miso 盯着窗外的空气。非常重要的空气。*", "*Miso 盯著窗外的空氣。非常重要的空氣。*", "*Miso mira por la ventana a la nada. Una nada muy importante.*", "*En Miso mira per la finestra el no-res. Un no-res molt important.*"] },
    rain: { popo: ["Raining. Good. Nobody go out, everybody tidy.", "下雨了。好。谁都别出去，大家一起收拾。", "落雨喇。好。冇人出街，個個執屋。", "Llueve. Bien. Nadie sale, todos ordenan.", "Plou. Bé. Ningú surt, tothom endreça."],
      wei: ["*puts a towel by the door for wet shoes*", "*在门口铺了条毛巾给湿鞋子*", "*在門口鋪了條毛巾給濕鞋子*", "*pone una toalla junto a la puerta para los zapatos mojados*", "*posa una tovallola a la porta per a les sabates mullades*"],
      cats: ["*both cats watch the drops race down the glass*", "*两只猫盯着雨滴在玻璃上赛跑*", "*兩隻貓盯著雨滴在玻璃上賽跑*", "*los dos gatos miran las gotas correr por el cristal*", "*els dos gats miren les gotes córrer pel vidre*"] },
    fog: { popo: ["So foggy. Like Hong Kong in spring. Wear jacket.", "雾好大。像香港的春天。穿外套。", "好大霧。好似香港春天咁。着多件衫。", "Mucha niebla. Como Hong Kong en primavera. Ponte chaqueta.", "Quina boira. Com Hong Kong a la primavera. Posa't la jaqueta."],
      wei: ["*draws a little house in the misted glass*", "*在起雾的玻璃上画了个小房子*", "*在起霧的玻璃上畫了個小房子*", "*dibuja una casita en el cristal empañado*", "*dibuixa una caseta al vidre entelat*"],
      cats: ["*Yuzu can't see the birds. Yuzu is offended.*", "*Yuzu 看不见鸟了。Yuzu 很不高兴。*", "*Yuzu 看不見鳥了。Yuzu 很不高興。*", "*Yuzu no ve los pájaros. Yuzu está ofendida.*", "*La Yuzu no veu els ocells. La Yuzu està ofesa.*"] },
    snow: { popo: ["Snow! Wah. First time I see snow, I was forty.", "下雪了！哇。我第一次见雪的时候，都四十岁了。", "落雪喇！嘩。我第一次見雪，已經四十歲。", "¡Nieve! Wah. Primera vez que yo veo nieve, tengo cuarenta.", "Neu! Wah. La primera vegada que vaig veure la neu, tenia quaranta anys."],
      wei: ["*puts the kettle on without asking anyone*", "*谁也没问，先把水壶烧上了*", "*誰也沒問，先把水壺燒上了*", "*pone el hervidor sin preguntar a nadie*", "*posa el bullidor sense preguntar a ningú*"],
      cats: ["*Miso taps the glass at every snowflake*", "*每片雪花飘过，Miso 都要拍一下玻璃*", "*每片雪花飄過，Miso 都要拍一下玻璃*", "*Miso da un toque al cristal con cada copo*", "*En Miso toca el vidre a cada floc*"] },
    storm: { popo: ["Thunder! Close window. Unplug the TV.", "打雷了！关窗。电视插头拔掉。", "行雷喇！閂窗。電視插頭拔咗佢。", "¡Trueno! Cierra ventana. Desenchufa la tele.", "Trons! Tanca la finestra. Desendolla la tele."],
      wei: ["*lights a candle, just in case*", "*点了一根蜡烛，以防万一*", "*點了一根蠟燭，以防萬一*", "*enciende una vela, por si acaso*", "*encén una espelma, per si de cas*"],
      cats: ["*both cats are suddenly under the sofa*", "*两只猫突然都钻到沙发底下去了*", "*兩隻貓突然都鑽到沙發底下去了*", "*de repente los dos gatos están bajo el sofá*", "*de cop els dos gats són sota el sofà*"] }
  },
  /* what hangs on the wall today: d is what you see; the line is the person's, if they're up */
  ART: {
    clock: { w: "popo", t: ["Josep's clock. Always five minutes slow, like him.", "Josep 的钟。总是慢五分钟，跟他一样。", "Josep 個鐘。成日慢五分鐘，同佢一樣。", "El reloj de Josep. Siempre cinco minutos tarde, como él.", "El rellotge d'en Josep. Sempre cinc minuts endarrere, com ell."],
      d: ["Josep's old clock. Five minutes slow.", "Josep 的旧钟，慢五分钟。", "Josep 的舊鐘，慢五分鐘。", "El viejo reloj de Josep. Cinco minutos tarde.", "El vell rellotge d'en Josep. Cinc minuts endarrere."] },
    photo: { w: "popo", t: ["My girls. Before they grow tall and fly away lah.", "我的两个女儿。还没长高、还没飞走的时候啦。", "我兩個女。未大個、未飛走嗰陣啦。", "Mis niñas. Antes de crecer y volar lejos.", "Les meves nenes. Abans de fer-se grans i marxar volant."],
      d: ["A photo: Popo, Josep and two small girls on a pier.", "一张照片：婆婆、Josep 和两个小女孩站在码头上。", "一張照片：婆婆、Josep 和兩個小女孩站在碼頭上。", "Una foto: Popo, Josep y dos niñas en un muelle.", "Una foto: la Popo, en Josep i dues nenes en un moll."] },
    hills: { w: "mei", t: ["Popo painted that. Don't tell her I said it's good.", "那是婆婆画的。别告诉她我说画得好。", "那是婆婆畫的。別告訴她我說畫得好。", "Eso lo pintó Popo. No le digas que dije que es bonito.", "Això ho va pintar la Popo. No li diguis que he dit que és bonic."],
      d: ["A small painting of the hills behind the cabin.", "一幅小画，画的是小屋后面的山。", "一幅小畫，畫的是小屋後面的山。", "Un cuadrito de las colinas detrás de la cabaña.", "Un quadret dels turons de darrere la cabana."] },
    calendar: { w: "wei", t: ["Mei circled her birthday in three colours. Subtle.", "Mei 用三种颜色圈了她的生日。很低调。", "Mei 用三種顏色圈了她的生日。很低調。", "Mei marcó su cumpleaños en tres colores. Muy discreta.", "La Mei va encerclar el seu aniversari en tres colors. Molt discreta."],
      d: ["A calendar with one birthday circled three times.", "一本日历，有个生日被圈了三遍。", "一本日曆，有個生日被圈了三遍。", "Un calendario con un cumpleaños rodeado tres veces.", "Un calendari amb un aniversari encerclat tres vegades."] },
    mirror: { w: "mei", t: ["*checks her hair in the mirror* Okay. Now we can tidy.", "*对着镜子看了看头发* 好了。现在可以收拾了。", "*對著鏡子看了看頭髮* 好了。現在可以收拾了。", "*se mira el pelo en el espejo* Vale. Ahora podemos ordenar.", "*es mira els cabells al mirall* D'acord. Ara podem endreçar."],
      d: ["A round mirror. The room looks tidier backwards.", "一面圆镜子。房间在镜子里看起来整齐一点。", "一面圓鏡子。房間在鏡子裡看起來整齊一點。", "Un espejo redondo. Al revés, la sala parece más ordenada.", "Un mirall rodó. Del revés, la sala sembla més endreçada."] }
  },
  WXD: {   /* when everyone's asleep (2–5) the window is only what you see */
    clear: ["Stars over the rooftops. Everyone's asleep.", "屋顶上有星星。大家都睡着了。", "屋頂上有星星。大家都睡著了。", "Estrellas sobre los tejados. Todos duermen.", "Estrelles sobre les teulades. Tothom dorm."],
    rain: ["Rain on the glass. Everyone's asleep.", "雨打在玻璃上。大家都睡着了。", "雨打在玻璃上。大家都睡著了。", "Lluvia en el cristal. Todos duermen.", "Pluja al vidre. Tothom dorm."],
    fog: ["Fog against the glass. Everyone's asleep.", "雾贴在玻璃上。大家都睡着了。", "霧貼在玻璃上。大家都睡著了。", "Niebla contra el cristal. Todos duermen.", "Boira contra el vidre. Tothom dorm."],
    snow: ["Snow falling past the window. Everyone's asleep.", "雪从窗外飘过。大家都睡着了。", "雪從窗外飄過。大家都睡著了。", "La nieve cae tras la ventana. Todos duermen.", "La neu cau darrere la finestra. Tothom dorm."],
    storm: ["Thunder, far off. Somehow everyone's still asleep.", "远处在打雷。不知怎么的，大家还睡着。", "遠處在打雷。不知怎麼的，大家還睡著。", "Truenos a lo lejos. Y aun así todos duermen.", "Trons de lluny. I tot i així tothom dorm."]
  },
  windowA: ["The window", "窗户", "窗戶", "La ventana", "La finestra"],
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
