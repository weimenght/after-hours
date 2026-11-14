/* Counting Sleeps: every word, five languages [en, zh, zh-Hant, es, ca].
   The interface is plain; Popo keeps her voice (Hong Kong English, her Mandarin, Cantonese in zh-Hant, broken Spanish, fluent Catalan);
   Mei is nineteen and writes in lowercase; Wei only acts. Keep the order of BRING (a chain keeps its index). */
window.CS_W = {
  app: ["Counting Sleeps", "还有几觉", "還有幾覺", "Cuántas Noches", "Quantes Nits"],
  locale: ["en-GB", "zh-CN", "zh-TW", "es", "ca"],
  lede: ["Pick the day you'll see them. Count the sleeps on paper, not on your phone.", "定好见面的那天。在纸上数觉，不在手机上。", "定好見面那天。在紙上數覺，不在手機上。", "Elige el día en que os veréis. Cuenta las noches en papel, no en el móvil.", "Tria el dia que us veureu. Compta les nits en paper, no al mòbil."],
  device: ["Lives in your link and on this device", "只在你的链接和这台设备上", "只在你的連結和這台裝置上", "Vive en tu enlace y en este dispositivo", "Viu al teu enllaç i en aquest dispositiu"],
  ah: ["After hours ↗", "下班以后 ↗", "下班以後 ↗", "Fuera de horario ↗", "Fora d'hores ↗"],
  scene: ["Popo's kitchen wall, a paper chain hanging by the stove", "婆婆厨房的墙上，炉子边挂着一条纸环链", "婆婆廚房的牆上，爐子邊掛著一條紙環鏈", "La pared de la cocina de Popo, con una cadena de papel junto a los fogones", "La paret de la cuina de la Popo, amb una cadena de paper al costat dels fogons"],

  pWho: ["Popo", "婆婆", "婆婆", "Popo", "La Popo"],
  pPaper: ["Popo's note on the fridge", "婆婆贴在冰箱上的纸条", "婆婆貼喺雪櫃嘅紙仔", "La nota de Popo en la nevera", "La nota de la Popo a la nevera"],

  /* home */
  homeNone: ["Someone coming?\nOr going home?", "有人要来？\n还是你要回家？", "有人要來？\n還是你要回家？", "¿Viene alguien?\n¿O vuelves a casa?", "Ve algú?\nO tornes a casa?"],
  homeSome: ["Who are you\nwaiting for?", "你在等谁？", "你在等誰？", "¿A quién\nesperas?", "A qui\nesperes?"],
  pHome0: ["Every December, Mei coming from New York, I hang one chain here. Every night I tear one ring. Mantou watch me, very serious.", "每年十二月，Mei 从纽约回来，我就在这里挂一条纸环。每晚撕一个。馒头在旁边看，好认真喔。", "每年十二月，Mei 由紐約返嚟，我就喺度掛一條紙環。每晚撕一個。饅頭喺隔籬睇住，好認真㗎。", "Cada diciembre, Mei viene de Nueva York, yo cuelgo una cadena aquí. Cada noche arranco un anillo. Mantou mira, muy serio.", "Cada desembre, quan la Mei venia de Nova York, penjava una cadena aquí. Cada nit n'arrencava una anella. En Mantou em mirava, ben seriós."],
  pHome1: ["Waiting also nice one. Like soup, need time.", "等待也很好的。像煲汤，要时间嘛。", "等都係好嘢嚟。好似煲湯咁，要時間㗎。", "Esperar también bonito. Como sopa, necesita tiempo.", "Esperar també té la seva gràcia. Com el brou: necessita temps."],
  make: ["Make a date", "定一个日子", "定一個日子", "Pon una fecha", "Posa una data"],
  another: ["Someone else is coming", "还有别人要来", "還有別人要來", "Viene alguien más", "Ve algú més"],
  rowSleeps: ["{n} sleeps · {d}", "还有 {n} 觉 · {d}", "還有 {n} 覺 · {d}", "{n} noches · {d}", "{n} nits · {d}"],
  rowOne: ["One more sleep", "再睡一觉", "再睡一覺", "Una noche más", "Una nit més"],
  rowToday: ["Today!", "就是今天！", "就是今天！", "¡Hoy!", "Avui!"],
  rowPast: ["You saw them. Next time?", "见过了。下次呢？", "見過了。下次呢？", "Ya os visteis. ¿La próxima?", "Ja us heu vist. La propera?"],

  /* who */
  whoQ: ["Who's coming?", "谁要来？", "誰要來？", "¿Quién viene?", "Qui ve?"],
  kFriend: ["A friend", "朋友", "朋友", "Un amigo o amiga", "Un amic o amiga"],
  kFriendS: ["They're coming, or you're going to them", "他们来，或者你去找他们", "他們來，或者你去找他們", "Viene, o vas tú a verle", "Ve, o hi vas tu"],
  kFamily: ["Family", "家人", "家人", "Familia", "Família"],
  kFamilyS: ["A visit: a sister, a cousin, your mum", "来探望：姐妹、表亲、妈妈", "來探望：姊妹、表親、媽媽", "Una visita: una hermana, un primo, tu madre", "Una visita: una germana, un cosí, la mare"],
  kHome: ["I'm going home", "我要回家", "我要回家", "Vuelvo a casa", "Torno a casa"],
  kHomeS: ["回家. Back to where your people are", "回家。回到你的人身边", "回家。回到你的人身邊", "回家. Volver a donde están los tuyos", "回家. Tornar on són els teus"],

  /* names */
  nameQ: ["What do you call them?", "你怎么称呼他们？", "你怎麼稱呼他們？", "¿Cómo les llamas?", "Com els dius?"],
  nameQHome: ["Who's waiting for you at home?", "家里谁在等你？", "家裡誰在等你？", "¿Quién te espera en casa?", "Qui t'espera a casa?"],
  theirName: ["Their name", "他们的名字", "他們的名字", "Su nombre", "El seu nom"],
  theirPh: ["Ana, my sister…", "小林、我姐…", "小林、我姊…", "Ana, mi hermana…", "L'Anna, la meva germana…"],
  theirPhHome: ["Mum, the family…", "妈妈、家里人…", "媽媽、家裡人…", "Mamá, la familia…", "La mare, la família…"],
  yourName: ["Your name, so they know it's you", "你的名字，让他们知道是你", "你的名字，讓他們知道是你", "Tu nombre, para que sepan que eres tú", "El teu nom, perquè sàpiguen que ets tu"],
  yourPh: ["Your first name", "你的名字", "你的名字", "Tu nombre", "El teu nom"],
  next: ["Next", "下一步", "下一步", "Siguiente", "Següent"],
  needName: ["Write their name first.", "先写下他们的名字。", "先寫下他們的名字。", "Escribe su nombre primero.", "Escriu-hi el seu nom primer."],

  /* the day */
  dayQ: ["When will you see them?", "哪天见面？", "哪天見面？", "¿Cuándo os veréis?", "Quan us veureu?"],
  pickDay: ["Pick the day.", "选一天。", "選一天。", "Elige el día.", "Tria el dia."],
  sleepsN: ["{n} sleeps. That's {n} rings on the chain.", "还有 {n} 觉。纸环链上就是 {n} 个环。", "還有 {n} 覺。紙環鏈上就是 {n} 個環。", "{n} noches. Son {n} anillos en la cadena.", "{n} nits. Són {n} anelles a la cadena."],
  sleeps1: ["One sleep. One ring.", "只剩一觉。一个环。", "只剩一覺。一個環。", "Una noche. Un anillo.", "Una nit. Una anella."],
  sleepsFar: ["{n} sleeps. Too far for a chain yet: it starts at 100.", "还有 {n} 觉。现在挂链子太早了：100 觉的时候开始。", "還有 {n} 覺。現在掛鏈子太早了：100 覺的時候開始。", "{n} noches. Aún falta mucho para la cadena: empieza a las 100.", "{n} nits. Encara és aviat per a la cadena: comença a les 100."],
  sleeps0: ["That's today! No time to count.", "就是今天！不用数了。", "就是今天！不用數了。", "¡Es hoy! No hay nada que contar.", "És avui! No cal comptar res."],
  prevM: ["Previous month", "上个月", "上個月", "Mes anterior", "Mes anterior"],
  nextM: ["Next month", "下个月", "下個月", "Mes siguiente", "Mes següent"],
  whereL: ["Where will you meet?", "在哪儿见？", "在哪裡見？", "¿Dónde os veréis?", "On us trobareu?"],
  whereOpt: ["if you know", "知道的话", "知道的話", "si lo sabes", "si ho saps"],
  wherePh: ["Arrivals, the station, Mum's kitchen…", "机场到达口、车站、妈妈的厨房…", "機場入境大堂、車站、媽媽的廚房…", "Llegadas, la estación, la cocina de mamá…", "Arribades, l'estació, la cuina de la mare…"],
  makeChain: ["Make the chain", "做一条纸环链", "做一條紙環鏈", "Haz la cadena", "Fes la cadena"],

  /* send */
  sendT: ["Send {b} the same chain", "给{b}也发一条", "給{b}也傳一條", "Envía a {b} la misma cadena", "Envia a {b} la mateixa cadena"],
  pSend: ["Two people waiting, better than one. Send to them lah.", "两个人一起等，比一个人好。发给他们啦。", "兩個人一齊等，好過一個人等。傳畀佢哋啦。", "Dos esperando, mejor que uno. Manda a ellos, venga.", "Dos esperant és millor que un. Envia-l'hi, va."],
  sendSub: ["The day and your two names travel in the link. Nothing goes to a server.", "日子和你们两个的名字都在链接里。什么都不会发到服务器。", "日子和你們兩個的名字都在連結裡。什麼都不會傳到伺服器。", "El día y vuestros dos nombres viajan en el enlace. Nada pasa por un servidor.", "El dia i els vostres dos noms viatgen a l'enllaç. Res no passa per un servidor."],
  send: ["Send it", "发出去", "傳出去", "Envíalo", "Envia-ho"],
  notNow: ["Not now", "先不发", "先不傳", "Ahora no", "Ara no"],
  copied: ["Copied. Paste it to them.", "已复制，贴给他们吧。", "已複製，貼給他們吧。", "Copiado. Pégaselo.", "Copiat. Enganxa-l'hi."],
  shareText: ["I'm counting the sleeps till I see you: {d}. Hang a chain too? {link}", "我在数还有几觉见到你：{d}。你也挂一条？{link}", "我在數還有幾覺見到你：{d}。你也掛一條？{link}", "Estoy contando las noches que faltan para verte: {d}. ¿Cuelgas tú también una cadena? {link}", "Estic comptant les nits que falten per veure't: {d}. Hi penges una cadena tu també? {link}"],

  /* an invitation arriving */
  invT: ["{a} is counting the sleeps till {d}.", "{a}在数还有几觉，到{d}。", "{a}在數還有幾覺，到{d}。", "{a} cuenta las noches que faltan hasta el {d}.", "{a} compta les nits que falten fins al {d}."],
  invAnon: ["Someone", "有人", "有人", "Alguien", "Algú"],
  pInv: ["Wah, {n} sleeps only. You hang one chain also, then both of you tear together, ok?", "哇，才 {n} 觉。你也挂一条，两个人一起撕，好不好？", "嘩，先至 {n} 覺咋。你都掛一條，兩個一齊撕，好唔好？", "Uy, solo {n} noches. Tú también cuelga cadena, luego los dos arrancáis juntos, ¿vale?", "Ui, només {n} nits. Penja'n una tu també, i les arrenqueu alhora, d'acord?"],
  meet: ["Meeting at {w}.", "在{w}见。", "在{w}見。", "Os veis en {w}.", "Us trobeu a {w}."],
  hangMine: ["Hang my chain", "挂上我的", "掛上我的", "Cuelga la mía", "Penja la meva"],
  tellA: ["Tell {a}", "告诉{a}", "告訴{a}", "Díselo a {a}", "Digues-ho a {a}"],
  hungLine: ["Hung my chain too. {n} sleeps till {d}!", "我也挂上了。还有 {n} 觉，到{d}！", "我也掛上了。還有 {n} 覺，到{d}！", "Yo también he colgado la mía. ¡{n} noches hasta el {d}!", "Jo també he penjat la meva. {n} nits fins al {d}!"],

  /* the chain */
  sleepsW: ["sleeps", "觉", "覺", "noches", "nits"],
  sleep1W: ["more sleep", "觉", "覺", "noche más", "nit més"],
  till: ["till {b} · {d}", "离见到{b} · {d}", "離見到{b} · {d}", "hasta {b} · {d}", "fins a {b} · {d}"],
  pFar: ["Too far to hang yet. Come back {d}, then we print together.", "太早了，还不用挂。{d}再来，我们一起打印。", "太早喇，未使掛住。{d}再嚟，我哋一齊印。", "Muy lejos todavía para colgar. Vuelve el {d}, entonces imprimimos juntos.", "Encara és massa lluny per penjar-la. Torna el {d} i la imprimim plegats."],
  pLong: ["Long time still. Never mind, every night one ring. Like Josep wind the clock.", "还很久呢。不要紧，每晚一个环。像 Josep 上发条一样。", "仲有好耐。唔緊要，每晚一個環。好似 Josep 上鏈咁。", "Mucho tiempo todavía. No importa, cada noche un anillo. Como Josep da cuerda al reloj.", "Encara falta molt. Tant hi fa: cada nit una anella, com en Josep donant corda al rellotge."],
  pMid: ["Not long now. Mantou also excited, see his tail.", "快了快了。馒头也好开心，你看他的尾巴。", "就快喇。饅頭都好興奮，睇佢條尾。", "Ya no falta mucho. Mantou también contento, mira la cola.", "Ja no falta gaire. En Mantou també està content: mira-li la cua."],
  BRING: [
    ["Last week. Bring one snack from your city lah. The kind they cannot buy there.", "最后一个礼拜了。带一样你们那里的零食啦，他们那边买不到的。", "最後一個禮拜喇。帶樣你嗰度嘅零食啦，佢哋嗰邊買唔到嗰種。", "Última semana. Trae un snack de tu ciudad, el que allí no venden.", "Última setmana. Porta alguna cosa de menjar de la teva ciutat, d'aquelles que allà no trobaran."],
    ["Last week. Print one photo. Paper one, not phone one. Give it to them.", "最后一个礼拜了。洗一张照片，纸的，不是手机里的。送给他们。", "最後一個禮拜喇。曬一張相，紙嗰種，唔係手機嗰種。送畀佢哋。", "Última semana. Imprime una foto. De papel, no del móvil. Dásela.", "Última setmana. Imprimeix una foto. De paper, no del mòbil. Dona-la-hi."],
    ["Last week. Learn one song you both know. Sing badly, never mind.", "最后一个礼拜了。学一首你们都会的歌。唱得难听也没关系。", "最後一個禮拜喇。學一首你哋都識嘅歌。唱得難聽都唔緊要。", "Última semana. Aprende una canción que sabéis los dos. Cantar mal, no importa.", "Última setmana. Aprèn una cançó que sapigueu tots dos. Tant fa si la cantes malament."],
    ["Last week. Bring nothing. Just come early, stay late, ok?", "最后一个礼拜了。什么都不用带。早点到，晚点走，好不好？", "最後一個禮拜喇。乜都唔使帶。早啲到，遲啲走，好唔好？", "Última semana. No traigas nada. Llega pronto, vete tarde, ¿vale?", "Última setmana. No cal portar res. Arriba d'hora i marxa tard, d'acord?"],
    ["Last week. Ask their mama what dish they miss. Learn it. I teach you.", "最后一个礼拜了。问问他妈妈，他最想吃什么菜。学起来。我教你。", "最後一個禮拜喇。問下佢阿媽，佢最掛住食乜餸。學識佢。我教你。", "Última semana. Pregunta a su mamá qué plato echa de menos. Apréndelo. Yo te enseño.", "Última setmana. Pregunta a sa mare quin plat troba a faltar. Aprèn-lo. T'hi ajudo."],
    ["Last week. Bring back the thing you borrow long time ago. Ha! You know which one.", "最后一个礼拜了。把很久以前借的东西还回去。哈！你知道是哪样。", "最後一個禮拜喇。將好耐之前借嘅嘢還返畀人。哈！你知係邊樣啦。", "Última semana. Devuelve la cosa que pediste prestada hace mucho. ¡Ja! Tú sabes cuál.", "Última setmana. Torna allò que et van deixar fa temps. Ha! Ja saps què."]
  ],
  pNight: ["Tonight last ring! Sleep early lah, tomorrow you see them.", "今晚最后一个环！早点睡啦，明天就见到了。", "今晚最後一個環！早啲瞓啦，聽日就見到喇。", "¡Esta noche último anillo! Duerme pronto, mañana los ves.", "Aquesta nit, l'última anella! Ves a dormir d'hora, que demà els veus."],
  mNight: ["mei: she still makes one when i fly back from new york. i'm nineteen.", "mei：我从纽约飞回来，她还是会做一条。我都十九岁了。", "mei：我從紐約飛回來，她還是會做一條。我都十九歲了。", "mei: aún me hace una cuando vuelvo de nueva york. tengo diecinueve.", "mei: encara me'n fa una quan torno de nova york. tinc dinou anys."],
  mWeek: ["mei: ok but who's picking them up. not wei. he gets lost", "mei：好，但谁去接？别让 wei 去，他会迷路", "mei：好，但誰去接？別讓 wei 去，他會迷路", "mei: vale pero quién va a buscarles. wei no. se pierde", "mei: ok però qui els va a buscar. en wei no. es perd"],
  jarT: ["Things to tell {b}", "攒着跟{b}说的话", "攢著跟{b}說的話", "Cosas que contarle a {b}", "Coses per explicar a {b}"],
  jarSub: ["Little things you're saving to say in person. They stay folded till the day.", "想当面说的小事，先攒起来。到那天之前都折着。", "想當面說的小事，先攢起來。到那天之前都摺著。", "Cosas pequeñas que guardas para decirle en persona. Se quedan dobladas hasta el día.", "Petites coses que guardes per dir-li en persona. Es queden plegades fins al dia."],
  jarEmpty: ["Empty for now. That's fine.", "现在还是空的。没关系。", "現在還是空的。沒關係。", "Vacío por ahora. No pasa nada.", "Buit de moment. No passa res."],
  jarFull: ["The jar is full. Keep the rest for the table.", "罐子满了。剩下的留到饭桌上说。", "罐子滿了。剩下的留到飯桌上說。", "El tarro está lleno. Guarda el resto para la mesa.", "El pot és ple. Guarda la resta per a la taula."],
  jarL: ["Your jar", "你的罐子", "你的罐子", "Tu tarro", "El teu pot"],
  add: ["Save one to tell them", "存一句", "存一句", "Guarda una para contarle", "Guarda'n una per explicar-li"],
  slipQ: ["Something to tell {b}", "想跟{b}说的事", "想跟{b}說的事", "Algo que contarle a {b}", "Alguna cosa per explicar a {b}"],
  slipPh: ["The bakery we liked has a new cake. Ask me about my boss.", "我们喜欢的那家面包店出了新蛋糕。问问我老板的事。", "我們喜歡的那家麵包店出了新蛋糕。問問我老闆的事。", "La panadería que nos gustaba tiene un pastel nuevo. Pregúntame por mi jefa.", "El forn que ens agradava té un pastís nou. Pregunta'm per la meva cap."],
  slipHint: ["It folds into your jar. {b} sees it on the day, when you swap jars.", "它会折起来放进罐子。到那天交换罐子时，{b}才看得到。", "它會摺起來放進罐子。到那天交換罐子時，{b}才看得到。", "Se dobla y va al tarro. {b} lo verá el día, cuando os cambiéis los tarros.", "Es plega i va al pot. {b} ho veurà el dia, quan us canvieu els pots."],
  keep: ["Keep it", "收好", "收好", "Guárdalo", "Guarda-ho"],
  cancel: ["Never mind", "算了", "算了", "Déjalo", "Deixa-ho"],
  folded: ["Folded into the jar.", "折好放进罐子了。", "摺好放進罐子了。", "Doblado y al tarro.", "Plegat i al pot."],
  print: ["Print the chain", "打印纸环", "列印紙環", "Imprime la cadena", "Imprimeix la cadena"],
  sendAgain: ["Send {b} the chain", "把纸环发给{b}", "把紙環傳給{b}", "Envía la cadena a {b}", "Envia la cadena a {b}"],
  printHow: ["Cut along the dashes. Loop each strip through the last one and glue it, with 1 at the bottom. Hang it up and tear one off each night.", "沿虚线剪开。每一条穿过上一个环再粘好，1 在最下面。挂起来，每晚撕一个。", "沿虛線剪開。每一條穿過上一個環再黏好，1 在最下面。掛起來，每晚撕一個。", "Recorta por las líneas. Pasa cada tira por la anterior y pégala, con el 1 abajo del todo. Cuélgala y arranca una cada noche.", "Retalla per les línies. Passa cada tira per l'anterior i enganxa-la, amb l'1 a baix de tot. Penja-la i arrenca'n una cada nit."],
  printTop: ["{n} sleeps till {b} · {d}", "还有 {n} 觉见{b} · {d}", "還有 {n} 覺見{b} · {d}", "{n} noches hasta {b} · {d}", "{n} nits fins a {b} · {d}"],
  tomorrow: ["tomorrow!", "明天！", "明天！", "¡mañana!", "demà!"],

  /* the day */
  todayT: ["Today.", "就是今天。", "就是今天。", "Hoy.", "Avui."],
  pToday: ["Last ring gone! Go, go. One minute with the phone to swap jars, then put away.", "最后一个环撕掉了！去吧去吧。手机只用一分钟换罐子，然后收起来。", "最後一個環撕咗喇！去啦去啦。手機用一分鐘換罐就好，跟住收埋佢。", "¡Último anillo fuera! Venga, venga. Un minuto con el móvil para cambiar tarros, luego guardar.", "Fora l'última anella! Au, au. Un minut de mòbil per canviar-vos els pots, i després a la butxaca."],
  swap: ["Swap jars at the table", "在饭桌上交换罐子", "在飯桌上交換罐子", "Cambiad los tarros en la mesa", "Canvieu-vos els pots a taula"],
  swapT: ["Hold your phone up to theirs", "把手机举到对方面前", "把手機舉到對方面前", "Pon tu móvil frente al suyo", "Posa el teu mòbil davant del seu"],
  swapSub: ["Your jar is in this code. They point their camera at it, and your jar opens on their phone.", "你的罐子就在这个码里。对方用相机对准它，你的罐子就会在他手机上打开。", "你的罐子就在這個碼裡。對方用相機對準它，你的罐子就會在他手機上打開。", "Tu tarro está en este código. Apuntan la cámara y tu tarro se abre en su móvil.", "El teu pot és en aquest codi. Hi apunten la càmera i el teu pot s'obre al seu mòbil."],
  swapThen: ["Then point your camera at theirs.", "然后你用相机对准他的。", "然後你用相機對準他的。", "Luego apunta tú la cámara al suyo.", "Després apunta-hi tu la càmera al seu."],
  swapDone: ["We've both looked", "我们都看过了", "我們都看過了", "Ya los hemos visto", "Ja els hem vist"],
  qrBig: ["Your jar is too full for one code. Read yours out instead: one each, out loud.", "罐子太满，一个码装不下。那就念出来：一人一句。", "罐子太滿，一個碼裝不下。那就念出來：一人一句。", "Tu tarro no cabe en un código. Léelo en voz alta: uno cada uno.", "El teu pot no cap en un codi. Llegeix-lo en veu alta: un cadascú."],
  jarsT: ["Everything you both saved", "你们两个攒下的话", "你們兩個攢下的話", "Todo lo que guardasteis", "Tot el que vau guardar"],
  jarsSub: ["Take turns. One each, out loud.", "轮流说。一人一句，说出来。", "輪流說。一人一句，說出來。", "Por turnos. Uno cada uno, en voz alta.", "Per torns. Un cadascú, en veu alta."],
  you: ["You", "你", "你", "Tú", "Tu"],
  noJar: ["Nothing in the jar? Then just ask how they really are.", "罐子是空的？那就问问他们，最近到底好不好。", "罐子是空的？那就問問他們，最近到底好不好。", "¿Tarro vacío? Pues pregúntale cómo está de verdad.", "El pot és buit? Doncs pregunta-li com està de debò."],
  wTable: ["Wei sets two glasses down. Talk. He'll pour.", "Wei 放下两个杯子。你们聊，他来倒。", "Wei 放下兩個杯子。你們聊，他來倒。", "Wei deja dos vasos en la mesa. Hablad. Él sirve.", "En Wei deixa dos gots a taula. Parleu. Ell serveix."],
  pJars: ["Now talk. Phone go sleep, like Miso.", "现在聊天。手机去睡觉，像 Miso 一样。", "而家傾偈。手機去瞓覺，好似 Miso 咁。", "Ahora hablar. Móvil a dormir, como Miso.", "Ara, a parlar. El mòbil a dormir, com la Miso."],
  putDown: ["Put the phone down", "放下手机", "放下手機", "Deja el móvil", "Deixa el mòbil"],
  downLine: ["{b} is right there.", "{b}就在你旁边。", "{b}就在你旁邊。", "{b} está ahí mismo.", "{b} és aquí mateix."],
  downTap: ["Tap when you're back", "回来了再点一下", "回來了再點一下", "Toca cuando vuelvas", "Toca quan tornis"],
  jarFrom: ["{a}'s jar is open", "{a}的罐子打开了", "{a}的罐子打開了", "El tarro de {a} está abierto", "El pot de {a} és obert"],

  /* after */
  afterT: ["You saw {b}.", "你见到{b}了。", "你見到{b}了。", "Viste a {b}.", "Has vist {b}."],
  pAfter: ["Good. Hug enough or not? Now pick next time. Waiting is easier when you know the day.", "好。抱够了没有？现在定下次吧。知道是哪天，等起来就容易啦。", "好。攬夠未呀？而家定埋下次啦。知道係邊日，等都易啲。", "Bien. ¿Abrazo suficiente? Ahora elige la próxima vez. Esperar es más fácil sabiendo el día.", "Molt bé. Us heu abraçat prou? Ara tria la propera vegada. Esperar és més fàcil quan saps el dia."],
  nextTime: ["Next time?", "下次呢？", "下次呢？", "¿La próxima vez?", "La propera vegada?"],
  takeDown: ["Take the chain down", "把纸环取下来", "把紙環取下來", "Descuelga la cadena", "Despenja la cadena"],

  /* ⋯ and the three steps */
  myChains: ["My chains", "我的纸环", "我的紙環", "Mis cadenas", "Les meves cadenes"],
  steps: [
    ["Pick the day you'll see them, and send them the same chain.", "定好见面那天，也给对方发一条一样的。", "定好見面那天，也給對方傳一條一樣的。", "Elige el día en que os veréis y envíale la misma cadena.", "Tria el dia que us veureu i envia-li la mateixa cadena."],
    ["Print it, hang it, tear one ring off each night. Save little things to tell them.", "打印、挂起来，每晚撕一个环。把想说的小事攒起来。", "列印、掛起來，每晚撕一個環。把想說的小事攢起來。", "Imprímela, cuélgala y arranca un anillo cada noche. Guarda cositas para contarle.", "Imprimeix-la, penja-la i arrenca'n una anella cada nit. Guarda petites coses per explicar-li."],
    ["On the day, swap jars at the table. Then put the phone down.", "那天在饭桌上交换罐子。然后放下手机。", "那天在飯桌上交換罐子。然後放下手機。", "El día, cambiad los tarros en la mesa. Luego, el móvil fuera.", "El dia, canvieu-vos els pots a taula. Després, el mòbil fora."]
  ]
};
