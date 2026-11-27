/* After Hours Casino: every word, five languages [en, zh, zh-Hant, es, ca].
   Popo is the house and keeps her voice (Hong Kong English, a Hong Kong grandmother's Mandarin in zh, her own Cantonese in
   zh-Hant, broken Spanish, fluent Catalan). Wei is deadpan, Mei types in lowercase, Miso and Yuzu are she, Mantou is he and only acts.
   The staff are a little evil, in a good way: they cheat, but always towards the table spending more time together.
   Never reorder WHAT, WHEN, ACTS or THEMES (only add at the end): saved plans keep them by index. */
window.AC_W = {
  title: ["After Hours Casino", "小赌场", "小賭場", "El Casinito", "El Casinet"],
  sub: ["A tiny casino for one table and one night. Popo runs it. Her staff can't be trusted.", "一张桌子、一个晚上的小赌场。婆婆当老板，她的员工一个都信不过。", "一張枱、一個晚上嘅小賭場。婆婆做老闆，佢啲員工一個都信唔過。", "Un casino diminuto para una mesa y una noche. Lo lleva Popo. De su personal, mejor no fiarse.", "Un casino petitó per a una taula i una nit. El porta la Popo. Del seu personal, millor no fiar-se'n."],
  names: { popo: ["Popo", "婆婆", "婆婆", "Popo", "Popo"], wei: ["Wei", "Wei", "Wei", "Wei", "Wei"], mei: ["Mei", "Mei", "Mei", "Mei", "Mei"], miso: ["Miso", "Miso", "Miso", "Miso", "Miso"], yuzu: ["Yuzu", "Yuzu", "Yuzu", "Yuzu", "Yuzu"], mantou: ["Mantou", "馒头", "饅頭", "Mantou", "Mantou"] },
  rulesT: ["Popo's house rules", "婆婆的规矩", "婆婆嘅規矩", "Las normas de Popo", "Les normes de la Popo"],
  rules: [
    ["One phone, face-up in the middle. Everyone around it.", "一部手机，正面朝上放中间，大家围着坐。", "一部電話，正面向上放中間，大家圍埋坐。", "Un móvil, boca arriba en el centro. Todos alrededor.", "Un mòbil, de cara amunt al mig. Tothom al voltant."],
    ["Chips are sunflower seeds, mahjong tiles or coins. Never money.", "筹码是瓜子、麻将牌或硬币。永远不用钱。", "籌碼係瓜子、麻雀牌或者硬幣。永遠唔用錢。", "Las fichas son pipas, fichas de mahjong o monedas. Nunca dinero.", "Les fitxes són pipes, fitxes de mahjong o monedes. Mai diners."],
    ["The house keeps no score. The house keeps the seeds.", "庄家不记分。庄家收瓜子。", "莊家唔計分。莊家收瓜子。", "La casa no lleva la cuenta. La casa se queda las pipas.", "La casa no porta el compte. La casa es queda les pipes."]
  ],
  enter: ["Come in", "进门", "入嚟", "Pasa", "Endavant"],
  doorT: ["Who's in tonight?", "今晚谁来了？", "今晚邊個嚟咗？", "¿Quién juega esta noche?", "Qui juga aquesta nit?"],
  ph: ["a first name", "一个名字", "一個名", "un nombre", "un nom"],
  add: ["Add", "添加", "加", "Añadir", "Afegeix"],
  remove: ["Remove {n}", "去掉{n}", "刪走{n}", "Quitar a {n}", "Treu {n}"],
  onFloor: ["Onto the floor", "进大厅", "入大廳", "A la sala", "A la sala"],
  needMore: ["Two people at least, six at most.", "至少两个人，最多六个。", "最少兩個人，最多六個。", "Mínimo dos personas, máximo seis.", "Com a mínim dues persones, com a màxim sis."],
  tonight: ["Tonight: {n}", "今晚：{n}", "今晚：{n}", "Esta noche: {n}", "Aquesta nit: {n}"],
  closed: ["closed tonight", "今晚打烊", "今晚收檔", "cerrada hoy", "tancada avui"],
  slotName: ["Slot of Plans", "老虎机", "老虎機", "La Tragaplanes", "La Màquina de Plans"],
  slotSub: ["Wei and Mantou. Pull for a plan.", "Wei 和馒头。拉一下，约一件事。", "Wei 同饅頭。拉一下，約一件事。", "Wei y Mantou. Tira y sale un plan.", "En Wei i en Mantou. Estira i surt un pla."],
  wheelName: ["Little Wheel", "小转盘", "小轉盤", "La Ruedita", "La Rodeta"],
  wheelSub: ["Popo and Miso. Small things, right now.", "婆婆和 Miso。现在就做的小事。", "婆婆同 Miso。即刻做嘅小事。", "Popo y Miso. Cositas, ahora mismo.", "La Popo i la Miso. Coses petites, ara mateix."],
  truthName: ["Say It True", "说真的", "講真嘅", "¿Verdad o Trola?", "Veritat o Bola?"],
  truthSub: ["Mei and Yuzu. True story or tall tale?", "Mei 和 Yuzu。真故事还是吹牛？", "Mei 同 Yuzu。真故事定係吹水？", "Mei y Yuzu. ¿Historia real o trola?", "La Mei i la Yuzu. Història real o bola?"],
  lastCall: ["Last call", "最后一轮", "最後一輪", "Última ronda", "Última ronda"],
  toFloor: ["← floor", "← 大厅", "← 大廳", "← sala", "← sala"],

  /* Popo, the house */
  sayDoor: ["Names at the door. First name enough lah, I'm not your bank.", "进门先报名字。名字就够了啦，我又不是银行。", "入門報個名先。叫個名就得啦，我又唔係銀行。", "Nombres en la puerta. Solo nombre, ya. Yo no soy banco.", "Noms a la porta. Només el nom, que no soc el banc."],
  sayFloor: ["Three tables, any order. Clever people play the slot last.", "三张桌子，随便玩。聪明人最后才玩老虎机。", "三張枱，隨便玩。醒目仔最後先玩老虎機。", "Tres mesas, como quieras. Gente lista juega la tragaplanes al final.", "Tres taules, en l'ordre que vulgueu. La gent llesta juga la màquina al final."],
  houseCut: ["House cut! Everybody put one seed in Popo's tea tin. No arguing.", "庄家抽成！每人往婆婆的茶叶罐里放一颗瓜子。不准吵。", "莊家抽水！每人擺一粒瓜子入婆婆個茶葉罐。唔准駁嘴。", "¡Comisión de la casa! Todos, una pipa en la lata de té de Popo. Sin discutir.", "Comissió de la casa! Tothom, una pipa a la llauna de te de la Popo. Sense discutir."],
  sayClosed: ["Last call. Go home lah. Plans you take, seeds you leave.", "最后一轮。回家啦。计划带走，瓜子留下。", "最後一輪。返屋企啦。計劃帶走，瓜子留低。", "Última ronda. A casa, ya. Los planes os lleváis, las pipas se quedan.", "Última ronda. Cap a casa. Els plans us els emporteu, les pipes es queden."],

  /* #1 Wei and Mantou */
  s0: ["Toss one seed in the middle, then pull. Mantou, off the lever.", "往中间丢一颗瓜子，然后拉。馒头，从拉杆上下来。", "擲一粒瓜子落中間，然後拉。饅頭，落嚟。", "Echa una pipa al centro y tira. Mantou, fuera de la palanca.", "Tira una pipa al mig i estira. Mantou, fora de la palanca."],
  s1: ["Tap a reel to hold it. Pull again, or shake on it.", "点一个转轮就能锁住。再拉一次，或者握手成交。", "撳一個轉輪就鎖住。再拉一次，或者握手成交。", "Toca un rodillo para fijarlo. Tira otra vez, o chócala.", "Toca un rodet per fixar-lo. Torna a estirar, o encaixeu."],
  sFull: ["Three plans tonight. The machine needs a lie-down. So does Mantou.", "今晚约了三件事。机器要躺一下，馒头也是。", "今晚約咗三件事。部機要瞓陣，饅頭都係。", "Tres planes esta noche. La máquina necesita tumbarse. Mantou también.", "Tres plans aquesta nit. La màquina necessita estirar-se. En Mantou també."],
  mLever: ["*Mantou is lying across the lever.* Pull again to negotiate.", "*馒头横躺在拉杆上。* 再拉一次，跟它谈判。", "*饅頭打橫瞓咗喺拉桿度。* 再拉一次，同佢傾。", "*Mantou está tumbado sobre la palanca.* Tira otra vez para negociar.", "*En Mantou està estirat damunt la palanca.* Torna a estirar per negociar."],
  mHold: ["*Mantou sits on the {r} reel.* It's held now. He's not moving.", "*馒头坐在「{r}」转轮上。* 锁住了，它不走。", "*饅頭坐咗喺「{r}」轉輪上面。* 鎖咗，佢唔郁。", "*Mantou se sienta en el rodillo de «{r}».* Ya está fijado. No se mueve.", "*En Mantou s'asseu al rodet de «{r}».* Ja està fixat. No es mou."],
  mRig: ["*Wei leans on the machine.* Oops. Everyone's in this one.", "*Wei 靠了一下机器。* 哎呀，这次所有人都要去。", "*Wei 挨咗一下部機。* 哎呀，今次全部人都要去。", "*Wei se apoya en la máquina.* Uy. Vais todos.", "*En Wei es recolza a la màquina.* Ui. Hi aneu tots."],
  sayJackpot: ["Jackpot. Whoever's in the plan splits the seed pile. Mantou already ate his share.", "头奖。计划里的人平分中间的瓜子。馒头那份它已经吃了。", "頭獎。計劃入面嘅人平分中間啲瓜子。饅頭嗰份佢食咗喇。", "Premio. Los del plan se reparten las pipas. Mantou ya se comió su parte.", "Premi. Els del pla es reparteixen les pipes. En Mantou ja s'ha menjat la seva part."],
  sayDealt: ["Done. Phone down for a minute; work out how you'll all get there.", "好了。手机放下一分钟，商量一下怎么去。", "搞掂。放低電話一陣，傾下點去。", "Hecho. Móvil abajo un minuto; decidid cómo llegáis.", "Fet. Mòbil avall un minut; decidiu com hi arribeu."],
  lWho: ["who", "谁", "邊個", "quién", "qui"],
  lWhat: ["what", "做什么", "做咩", "qué", "què"],
  lWhen: ["when", "什么时候", "幾時", "cuándo", "quan"],
  lWhere: ["where?", "在哪儿？", "喺邊？", "¿dónde?", "on?"],
  held: ["held", "锁住", "鎖住", "fijo", "fix"],
  pull: ["Pull", "拉一下", "拉一下", "Tirar", "Estira"],
  deal: ["It's a deal", "成交", "成交", "Trato hecho", "Tracte fet"],
  stamp: ["deal!", "成交!", "成交!", "¡trato!", "tracte!"],
  wherePh: ["the corner café, my kitchen…", "街角咖啡店、我家厨房…", "街角咖啡店、我屋企廚房…", "el café de la esquina, mi cocina…", "el cafè de la cantonada, la meva cuina…"],
  seal: ["Shake on it", "握手成交", "握手成交", "Choca esa mano", "Encaixem"],
  notThis: ["Not this one", "换一个", "換過個", "Este no", "Aquest no"],
  dealt: ["Dealt.", "成交。", "成交。", "Hecho.", "Fet."],
  morePlan: ["One more plan", "再约一个", "再約多個", "Otro plan", "Un altre pla"],
  backFloor: ["Back to the floor", "回大厅", "返大廳", "Volver a la sala", "Torna a la sala"],

  /* #2 Popo and Miso */
  sayWheel: ["One seed on a name each. Where will the ball stop? Miso, sit down.", "每人在一个名字上放一颗瓜子。球会停在谁那里？Miso，坐好。", "每人喺一個名上面擺粒瓜子。個波會停喺邊個度？Miso，坐好。", "Una pipa en un nombre cada uno. ¿Dónde para la bola? Miso, siéntate.", "Una pipa en un nom cadascú. On s'aturarà la bola? Miso, seu."],
  sayPay: ["Bet on this name? Take your seed back, plus one from the pile. The rest is mine.", "押中了？拿回你的瓜子，再拿一颗。剩下的归我。", "押中？攞返你粒瓜子，再攞多粒。其餘嘅係我嘅。", "¿Apostaste a este nombre? Recupera tu pipa y coge una más. El resto, para mí.", "Has apostat per aquest nom? Recupera la pipa i agafa'n una més. La resta, per a mi."],
  mSwat: ["*Miso bats the ball one pocket over.* She meant that.", "*Miso 一爪把球拍到隔壁格。* 她是故意的。", "*Miso 一爪撥咗個波去隔籬格。* 佢係故意嘅。", "*Miso empuja la bola a la casilla de al lado.* Lo ha hecho a propósito.", "*La Miso empeny la bola a la casella del costat.* Ho ha fet expressament."],
  spin: ["Spin", "转", "轉", "Girar", "Gira"],
  wheelRest: ["The wheel is resting", "转盘休息了", "轉盤休息緊", "La ruedita descansa", "La rodeta descansa"],
  ballLands: ["The ball stops on…", "球停在……", "個波停喺……", "La bola se para en…", "La bola s'atura a…"],
  yourMove: ["your move", "轮到你", "到你", "te toca", "et toca"],
  didIt: ["Done. Next spin", "做完了，再转", "做完，再轉", "Hecho. Otra vuelta", "Fet. Una altra volta"],

  /* #3 Mei and Yuzu */
  sayPass: ["pass the phone to the teller. only they look. yuzu also looks. nobody stops yuzu.", "手机递给讲故事的人。只有他能看。Yuzu 也会看，没人管得了 Yuzu。", "電話遞俾講故嗰個。淨係佢睇得。Yuzu 都會睇，冇人管到 Yuzu。", "pasad el móvil a quien cuenta. solo mira esa persona. y yuzu. a yuzu no la para nadie.", "passeu el mòbil a qui explica. només mira aquesta persona. i la yuzu. la yuzu no la para ningú."],
  sayPeek: ["your card says true or made up. straight face. i'm watching your ears.", "牌上写着讲真事还是编一个。别笑场，我在看你的耳朵。", "張牌話你知講真嘢定作一個。唔好笑場，我睇住你隻耳仔。", "la carta dice si es verdad o inventada. cara seria. te estoy mirando las orejas.", "la carta diu si és veritat o inventada. cara seriosa. t'estic mirant les orelles."],
  sayCall: ["seeds left of the phone if you believe it, right if it's a tall tale. watch the ears.", "相信就把瓜子放手机左边，觉得是吹牛就放右边。看耳朵。", "信就將瓜子放電話左邊，覺得吹水就放右邊。睇耳仔。", "pipas a la izquierda del móvil si te lo crees, a la derecha si es trola. mirad las orejas.", "pipes a l'esquerra del mòbil si t'ho creus, a la dreta si és bola. mireu les orelles."],
  mYuzu: ["*Yuzu saw the card. She sits down on the {s}.* Yuzu lies about half the time.", "*Yuzu 看到牌了。她坐到了{s}边。* Yuzu 大概一半时候在骗人。", "*Yuzu 睇到張牌。佢坐咗去{s}邊。* Yuzu 大概一半時間呃人。", "*Yuzu ha visto la carta. Se sienta a la {s}.* Yuzu miente más o menos la mitad de las veces.", "*La Yuzu ha vist la carta. S'asseu a mà {s}.* La Yuzu menteix més o menys la meitat de les vegades."],
  left: ["left", "左", "左", "izquierda", "esquerra"],
  right: ["right", "右", "右", "derecha", "dreta"],
  payTrue: ["believers take the pile. and now you know something new about them.", "相信的人拿走瓜子。现在你们又多认识他一点。", "信嘅人攞晒啲瓜子。而家你哋又識多佢少少。", "se llevan las pipas los que se lo creyeron. y ahora sabéis algo nuevo.", "s'emporten les pipes els que s'ho van creure. i ara sabeu una cosa nova."],
  payMade: ["doubters take the pile. good liar. slightly worrying.", "不信的人拿走瓜子。编得这么好，有点可怕。", "唔信嘅人攞晒啲瓜子。作得咁好，有啲恐怖。", "se llevan las pipas los que dudaron. miente muy bien. un poco preocupante.", "s'emporten les pipes els que en van dubtar. menteix molt bé. una mica preocupant."],
  passTo: ["Pass the phone to", "把手机递给", "將電話遞俾", "Pasad el móvil a", "Passeu el mòbil a"],
  imTeller: ["I'm {n}. Deal me a card", "我是{n}，发牌", "我係{n}，派牌", "Soy {n}. Dame carta", "Soc {n}. Dona'm carta"],
  themeK: ["tell us about…", "讲一讲……", "講下……", "cuéntanos…", "explica'ns…"],
  holdPeek: ["hold to peek", "按住偷看", "撳住偷睇", "mantén para mirar", "mantén per mirar"],
  told: ["Phone face down. I've told it", "手机扣下，我讲完了", "電話覆轉，我講完", "Móvil boca abajo. Ya lo he contado", "Mòbil de cara avall. Ja ho he explicat"],
  callT: ["Place your seeds.", "下注。", "落注。", "Haced vuestras apuestas.", "Feu les vostres apostes."],
  believe: ["I believe it", "我信", "我信", "Me lo creo", "M'ho crec"],
  doubt: ["Tall tale", "吹牛", "吹水", "Trola", "Bola"],
  phone: ["phone", "手机", "電話", "móvil", "mòbil"],
  flip: ["Flip the card", "翻牌", "揭牌", "Dar la vuelta", "Gira la carta"],
  was: ["{n}'s story was…", "{n}的故事是……", "{n}嘅故事係……", "La historia de {n} era…", "La història de {n} era…"],
  vTrue: ["True.", "真的。", "真嘅。", "Verdad.", "Veritat."],
  vMade: ["Made up.", "编的。", "作嘅。", "Inventada.", "Inventada."],
  cTrue: ["TRUE", "真的", "真嘅", "VERDAD", "VERITAT"],
  cTrueS: ["tell a real one", "讲一件真事", "講件真事", "cuenta una real", "explica'n una de real"],
  cMade: ["MADE UP", "编的", "作嘅", "INVENTA", "INVENTA"],
  cMadeS: ["invent one", "编一个", "作一個", "invéntate una", "inventa-te'n una"],
  nextT: ["Next teller", "下一位", "下一位", "Siguiente", "Següent"],
  truthDone: ["Everyone's told one. Back to the floor", "每人都讲过了，回大厅", "個個都講咗，返大廳", "Ya habéis contado todos. A la sala", "Ja n'heu explicat tots. A la sala"],

  /* last call */
  tonightPlans: ["Tonight's plans", "今晚的约", "今晚嘅約", "Los planes de esta noche", "Els plans d'aquesta nit"],
  noPlans: ["No plans from the slot tonight. Make one before you go?", "今晚老虎机还没约成什么。走之前约一个？", "今晚老虎機仲未約到嘢。走之前約一個？", "Esta noche no ha salido ningún plan. ¿Uno antes de irte?", "Aquesta nit no ha sortit cap pla. Un abans de marxar?"],
  send: ["Send the plans to the group", "把约发到群里", "將約send去group", "Mandar los planes al grupo", "Envia els plans al grup"],
  putDown: ["Put the phone down", "放下手机", "放低電話", "Deja el móvil", "Deixa el mòbil"],
  notYet: ["Not yet, back to the floor", "还没完，回大厅", "未得，返大廳", "Aún no, a la sala", "Encara no, a la sala"],
  newNight: ["Start a new night", "开新的一晚", "開新一晚", "Nueva noche", "Nova nit"],
  lights: ["The casino is dark. Go home together.", "赌场关灯了。一起回家吧。", "賭場熄燈喇。一齊返屋企啦。", "El casino está a oscuras. Volved juntos a casa.", "El casino és a les fosques. Torneu junts a casa."],
  tapWake: ["tap to wake", "点一下唤醒", "撳一下叫醒", "toca para despertar", "toca per despertar"],
  copied: ["Copied. Paste it in the group.", "已复制，贴到群里吧。", "已複製，貼去group啦。", "Copiado. Pégalo en el grupo.", "Copiat. Enganxa-ho al grup."],
  cardLine: ["We made plans at the After Hours Casino.", "我们在小赌场约好了。", "我哋喺小賭場約好咗。", "Hicimos planes en El Casinito.", "Vam fer plans a El Casinet."],
  shareText: ["Tonight at the After Hours Casino we made plans:\n{lines}\n", "今晚在小赌场，我们约好了：\n{lines}\n", "今晚喺小賭場，我哋約好咗：\n{lines}\n", "Esta noche en El Casinito hicimos planes:\n{lines}\n", "Aquesta nit a El Casinet vam fer plans:\n{lines}\n"],
  all: ["all of us", "我们所有人", "我哋全部人", "todos", "tots"],
  and: [" & ", "和", "同", " y ", " i "],
  device: ["Everything stays on this phone.", "一切只留在这部手机上。", "一切只留喺呢部電話。", "Todo se queda en este móvil.", "Tot es queda en aquest mòbil."],
  ah: ["After hours", "After hours", "After hours", "After hours", "After hours"],
  sleep: ["*Zzz…* (even the staff sleep sometimes)", "*呼……*（员工偶尔也要睡觉）", "*呼……*（員工都要瞓吓覺）", "*Zzz…* (hasta el personal duerme a veces)", "*Zzz…* (fins i tot el personal dorm de vegades)"],
  steps: [
    ["One phone face-up in the middle. Seeds or tiles for chips, never money.", "一部手机正面朝上放中间。瓜子或麻将牌当筹码，永远不用钱。", "一部電話正面向上放中間。瓜子或麻雀牌當籌碼，永遠唔用錢。", "Un móvil boca arriba en el centro. Pipas o fichas, nunca dinero.", "Un mòbil de cara amunt al mig. Pipes o fitxes, mai diners."],
    ["Three tables: a plan from the slot, a small dare from the wheel, a true story or a tall tale.", "三张桌子：老虎机约一件事，转盘来一个小挑战，讲一个真故事或者吹个牛。", "三張枱：老虎機約一件事，轉盤嚟個小挑戰，講個真故事或者吹下水。", "Tres mesas: un plan de la máquina, un reto de la ruedita, una historia real o una trola.", "Tres taules: un pla de la màquina, un repte de la rodeta, una història real o una bola."],
    ["Last call ends the night. The plans go home with you.", "最后一轮，今晚结束。计划跟你们回家。", "最後一輪，今晚完場。計劃跟你哋返屋企。", "La última ronda cierra la noche. Los planes se van con vosotros.", "L'última ronda tanca la nit. Els plans se'n van amb vosaltres."]
  ],

  /* tap anyone in the picture */
  lines: {
    popo: [
      ["My casino, my rules. Rule one: no money. Rule two: eat already or not?", "我的赌场，我的规矩。第一条：不准用钱。第二条：吃饭了没有？", "我間賭場，我話事。第一條：唔准用錢。第二條：食咗飯未呀？", "Mi casino, mis normas. Uno: nada de dinero. Dos: ¿ya comiste o no?", "El meu casino, les meves normes. U: res de diners. Dos: ja has menjat?"],
      ["The house always wins lah. The house is me.", "庄家永远赢啦。庄家就是我。", "莊家梗係贏啦，莊家就係我。", "La casa siempre gana, ya. La casa soy yo.", "La casa sempre guanya. La casa soc jo."],
      ["Phone in the middle. I see you scrolling, I take your seeds.", "手机放中间。看到你偷偷刷手机，瓜子没收。", "電話放中間。俾我見到你碌手機，瓜子充公。", "Móvil al centro. Si te veo mirando, me quedo tus pipas.", "Mòbil al mig. Si et veig mirant-lo, em quedo les teves pipes."],
      ["Aiya, so many seed shells. Who's sweeping? Not me.", "哎呀，满地瓜子壳。谁扫？反正不是我。", "哎呀，成地瓜子殼。邊個掃？反正唔係我。", "Aiya, cuántas cáscaras. ¿Quién barre? Yo no.", "Aiya, quantes closques. Qui escombra? Jo no."]
    ],
    wei: [
      ["Pull the lever. Don't look at Mantou. Mantou is a professional.", "拉吧，别看馒头。馒头是专业的。", "拉啦，唔好望饅頭。饅頭係專業嘅。", "Tira de la palanca. No mires a Mantou. Mantou es un profesional.", "Estira la palanca. No miris en Mantou. En Mantou és un professional."],
      ["*polishes a glass* The machine is fair. I checked. Mostly.", "*擦着杯子* 机器很公平，我检查过。大概。", "*抹緊杯* 部機好公平，我檢查過。大概啦。", "*limpia un vaso* La máquina es justa. Lo he comprobado. Más o menos.", "*eixuga un got* La màquina és justa. Ho he comprovat. Més o menys."],
      ["I'd mix you a drink, but tonight the bar only serves plans.", "本来想给你调一杯，可惜今晚吧台只供应约会。", "本來想同你調杯嘢，可惜今晚吧枱淨係供應約會。", "Te pondría una copa, pero esta noche la barra solo sirve planes.", "Et posaria una copa, però aquesta nit la barra només serveix plans."],
      ["Every jackpot here costs you one Sunday morning.", "这里每个头奖，都要赔上一个星期天早上。", "呢度每個頭獎，都要賠一個禮拜日朝早。", "Cada premio aquí te cuesta un domingo por la mañana.", "Cada premi aquí et costa un diumenge al matí."]
    ],
    mei: [
      ["i've never lied at this table. that was the first one.", "我在这张桌上从来没说过谎。——这是第一个。", "我喺呢張枱從來冇講過大話。——呢句係第一句。", "nunca he mentido en esta mesa. esa fue la primera.", "mai he mentit en aquesta taula. aquesta ha estat la primera."],
      ["watch their ears. ears always go red.", "看耳朵。说谎的人耳朵会红。", "睇耳仔。講大話嘅人耳仔會紅。", "miradle las orejas. las orejas siempre se ponen rojas.", "mireu-li les orelles. les orelles sempre es posen vermelles."],
      ["shuffle? no need. i know where every card is.", "洗牌？不用。每张牌在哪我都知道。", "洗牌？唔使。每張牌喺邊我都知。", "¿barajar? no hace falta. sé dónde está cada carta.", "barrejar? no cal. sé on és cada carta."],
      ["your face is doing something. stop it.", "你的脸在出卖你。收一收。", "你塊面出賣咗你。收下佢。", "tu cara está haciendo algo. para.", "la teva cara està fent alguna cosa. para."]
    ],
    miso: [
      ["*Miso looks at the ball. Then at you. Then pushes a seed off the table.*", "*Miso 盯着球，又盯着你，然后把一颗瓜子推下桌。*", "*Miso 望住個波，再望住你，然後推咗粒瓜子落枱。*", "*Miso mira la bola. Luego a ti. Luego tira una pipa de la mesa.*", "*La Miso mira la bola. Després a tu. Després tira una pipa de la taula.*"],
      ["*Mrrp.* (She did that on purpose.)", "*喵。*（她是故意的。）", "*喵。*（佢係故意嘅。）", "*Mrrp.* (Lo ha hecho a propósito.)", "*Mrrp.* (Ho ha fet expressament.)"],
      ["*Miso sits on the number you bet on.*", "*Miso 坐在你押的号码上。*", "*Miso 坐咗喺你押嗰個號碼上面。*", "*Miso se sienta en el número al que apostaste.*", "*La Miso s'asseu al número on has apostat.*"],
      ["*Miso wanted to be the croupier. Miso is already the croupier.*", "*Miso 想当荷官。Miso 已经是荷官了。*", "*Miso 想做荷官。Miso 已經係荷官。*", "*Miso quería ser crupier. Miso ya es crupier.*", "*La Miso volia ser crupier. La Miso ja és crupier.*"]
    ],
    yuzu: [
      ["*Yuzu has seen everything. Yuzu says nothing.*", "*Yuzu 什么都看见了。Yuzu 什么都不说。*", "*Yuzu 乜都睇到。Yuzu 乜都唔講。*", "*Yuzu lo ha visto todo. Yuzu no dice nada.*", "*La Yuzu ho ha vist tot. La Yuzu no diu res.*"],
      ["*Yuzu blinks slowly. Either love or a verdict.*", "*Yuzu 慢慢眨眼。不是爱你，就是判你。*", "*Yuzu 慢慢眨眼。唔係愛你，就係判你。*", "*Yuzu parpadea despacio. O es amor, o es un veredicto.*", "*La Yuzu parpelleja a poc a poc. O és amor, o és un veredicte.*"],
      ["*Yuzu is sitting on the cards. The game waits for Yuzu.*", "*Yuzu 坐在牌上。游戏等 Yuzu 心情。*", "*Yuzu 坐咗喺啲牌上面。遊戲等 Yuzu 心情。*", "*Yuzu está sentada sobre las cartas. El juego espera a Yuzu.*", "*La Yuzu seu damunt les cartes. El joc espera la Yuzu.*"],
      ["*Yuzu knows who's lying. Yuzu isn't telling. Yet.*", "*Yuzu 知道谁在说谎。Yuzu 还不打算说。*", "*Yuzu 知邊個講緊大話。Yuzu 暫時唔講。*", "*Yuzu sabe quién miente. Yuzu no lo dice. Todavía.*", "*La Yuzu sap qui menteix. La Yuzu no ho diu. Encara.*"]
    ],
    mantou: [
      ["*Mantou eats a seed from the pile. The house takes its cut.*", "*馒头吃了中间一颗瓜子。庄家抽成。*", "*饅頭食咗中間一粒瓜子。莊家抽水。*", "*Mantou se come una pipa del montón. La casa cobra su parte.*", "*En Mantou es menja una pipa del munt. La casa cobra la seva part.*"],
      ["*Woof.* (Mantou wants to be in the plan.)", "*汪。*（馒头也想被约。）", "*汪。*（饅頭都想被約。）", "*Guau.* (Mantou quiere entrar en el plan.)", "*Bub.* (En Mantou vol entrar al pla.)"],
      ["*Mantou lies down on the lever. You'll have to negotiate.*", "*馒头趴在拉杆上。你得跟它谈判。*", "*饅頭瞓咗喺拉桿上面。你要同佢傾。*", "*Mantou se tumba en la palanca. Tendrás que negociar.*", "*En Mantou s'estira a la palanca. Hauràs de negociar.*"],
      ["*Mantou hides one seed somewhere. You'll find it next week.*", "*馒头藏了一颗瓜子，你下星期才会找到。*", "*饅頭收埋咗粒瓜子，你下個禮拜先會搵到。*", "*Mantou esconde una pipa. La encontrarás la semana que viene.*", "*En Mantou amaga una pipa. La trobaràs la setmana que ve.*"]
    ]
  },

  WHAT: [
    ["make dumplings", "一起包饺子", "一齊包餃子", "hacer dumplings juntos", "fer dumplings junts"],
    ["a 20-minute walk", "散步二十分钟", "散步二十分鐘", "un paseo de 20 minutos", "un passeig de 20 minuts"],
    ["an early market run", "一早去逛菜市场", "一早去街市", "ir al mercado temprano", "anar al mercat d'hora"],
    ["cook one dish for the other", "给对方做一道菜", "煮一味餸俾對方", "cocinar un plato para el otro", "cuinar un plat per a l'altre"],
    ["visit an older relative", "去看一位长辈", "去探一位長輩", "visitar a un familiar mayor", "visitar un familiar gran"],
    ["fix one thing at home", "修好家里一样东西", "整好屋企一樣嘢", "arreglar una cosa de casa", "arreglar una cosa de casa"],
    ["a film night, phones in a bowl", "看电影，手机放碗里", "睇戲，手機放碗入面", "noche de peli, móviles en un bol", "nit de pel·li, mòbils en un bol"],
    ["breakfast before work", "上班前一起吃早餐", "返工前一齊食早餐", "desayunar antes del trabajo", "esmorzar abans de la feina"],
    ["a slow bike ride", "慢慢骑一圈车", "慢慢踩一圈單車", "un paseo lento en bici", "una volta tranquil·la en bici"],
    ["plant something", "一起种一盆植物", "一齊種一盆植物", "plantar algo", "plantar alguna cosa"],
    ["a mahjong night", "打一场麻将", "打一場麻雀", "una noche de mahjong", "una nit de mahjong"],
    ["learn one song together", "一起学一首歌", "一齊學一首歌", "aprender una canción juntos", "aprendre una cançó junts"]
  ],
  WHEN: [
    ["this Saturday", "这个星期六", "呢個禮拜六", "este sábado", "aquest dissabte"],
    ["next Sunday morning", "下星期天早上", "下個禮拜日朝早", "el domingo que viene por la mañana", "diumenge que ve al matí"],
    ["Thursday after work", "星期四下班后", "禮拜四放工後", "el jueves después del trabajo", "dijous després de la feina"],
    ["the next rainy day", "下一个雨天", "下一個落雨天", "el próximo día de lluvia", "el proper dia de pluja"],
    ["in two weeks", "两个星期后", "兩個禮拜後", "dentro de dos semanas", "d'aquí a dues setmanes"],
    ["before the month ends", "月底之前", "月尾之前", "antes de fin de mes", "abans que acabi el mes"],
    ["tomorrow evening", "明天晚上", "聽日夜晚", "mañana por la noche", "demà al vespre"]
  ],
  ACTS: [
    ["refill everyone's cup except your own", "给每个人添一杯，除了你自己", "幫每個人斟滿杯，除咗你自己", "rellena el vaso de todos menos el tuyo", "omple el got de tothom menys el teu"],
    ["show the oldest photo on your phone, then put it away", "给大家看手机里最老的一张照片，然后收起来", "俾大家睇你手機入面最舊嗰張相，然後收埋佢", "enseña la foto más antigua de tu móvil y guárdalo", "ensenya la foto més antiga del mòbil i desa'l"],
    ["swap seats with the person you know least", "跟你最不熟的人换座位", "同你最唔熟嗰個換位", "cambia de sitio con quien menos conoces", "canvia de lloc amb qui menys coneixes"],
    ["name a food from childhood you miss", "说一样小时候吃过、现在想念的东西", "講一樣細個食過、而家好掛住嘅嘢", "di una comida de tu infancia que echas de menos", "digues un menjar de la infància que trobes a faltar"],
    ["give the person on your left a real compliment, no jokes", "认真夸一下左边的人，不准开玩笑", "認真讚下你左邊嗰個，唔准講笑", "haz un cumplido de verdad a quien tienes a la izquierda, sin bromas", "fes un compliment de veritat a qui tens a l'esquerra, sense bromes"],
    ["teach the table one word of your dialect", "教大家一句你的方言", "教大家一句你嘅方言", "enseña a la mesa una palabra de tu tierra", "ensenya a la taula una paraula de casa teva"],
    ["raise a toast to someone who isn't here", "为一个不在场的人举杯", "為一個唔喺度嘅人舉杯", "brinda por alguien que no está", "brinda per algú que no hi és"],
    ["tell us the best thing about your week", "说说你这周最好的一件事", "講下你呢個禮拜最好嘅一件事", "cuenta lo mejor de tu semana", "explica el millor de la teva setmana"]
  ],
  THEMES: [
    ["a time I got lost", "一次迷路", "一次蕩失路", "una vez que me perdí", "una vegada que em vaig perdre"],
    ["the worst haircut I ever had", "我剪过最糟的发型", "我剪過最核突嘅髮型", "el peor corte de pelo de mi vida", "el pitjor tall de cabell de la meva vida"],
    ["a meal I'll never forget", "一顿忘不了的饭", "一餐忘唔記嘅飯", "una comida que nunca olvidaré", "un àpat que no oblidaré mai"],
    ["my very first job", "我的第一份工作", "我第一份工", "mi primer trabajo", "la meva primera feina"],
    ["a time I was brave by accident", "一次意外的勇敢", "一次意外咁勇敢", "una vez que fui valiente sin querer", "una vegada que vaig ser valent sense voler"],
    ["the strangest gift I ever got", "收过最奇怪的礼物", "收過最奇怪嘅禮物", "el regalo más raro que me han hecho", "el regal més estrany que m'han fet"],
    ["a neighbour I still remember", "一个还记得的邻居", "一個仲記得嘅鄰居", "un vecino que todavía recuerdo", "un veí que encara recordo"],
    ["a night the power went out", "一个停电的晚上", "一個停電嘅夜晚", "una noche que se fue la luz", "una nit que va marxar la llum"],
    ["something I was sure of as a kid", "小时候深信不疑的一件事", "細個深信不疑嘅一件事", "algo de lo que estaba seguro de niño", "una cosa de la qual estava segur de petit"],
    ["the best thing I ever found on the street", "在街上捡到过最好的东西", "喺街度執過最好嘅嘢", "lo mejor que he encontrado en la calle", "el millor que he trobat al carrer"]
  ]
};

/* Party variety: append only; old saved indices must remain stable. */
window.AC_W.TALK = [
  [
    "What food reminds you of home?",
    "什么食物让你想起家？",
    "咩嘢食令你諗起屋企？",
    "¿Qué comida te recuerda a casa?",
    "Quin menjar et recorda casa?"
  ],
  [
    "What is a small thing you look forward to?",
    "你期待哪件小事？",
    "有咩小事你期待緊？",
    "¿Qué pequeña cosa esperas con ilusión?",
    "Quina coseta et fa il·lusió?"
  ],
  [
    "What did you love doing as a child?",
    "小时候你最喜欢做什么？",
    "細個最鍾意做咩？",
    "¿Qué te encantaba hacer de pequeño?",
    "Què t'encantava fer de petit?"
  ],
  [
    "What song takes you somewhere else?",
    "哪首歌会把你带到另一个地方？",
    "邊首歌會帶你去另一個地方？",
    "¿Qué canción te transporta a otro lugar?",
    "Quina cançó et transporta a un altre lloc?"
  ],
  [
    "What is an ordinary moment you would happily live again?",
    "哪个平凡的时刻你愿意再经历一次？",
    "邊個平凡時刻你想再過一次？",
    "¿Qué momento corriente vivirías otra vez con gusto?",
    "Quin moment quotidià tornaries a viure de gust?"
  ],
  [
    "If we had a free afternoon together, what would we do?",
    "如果我们有一个空闲的下午，一起做什么？",
    "如果我哋有個得閒嘅下晝，一齊做咩好？",
    "Si tuviéramos una tarde libre juntos, ¿qué haríamos?",
    "Si tinguéssim una tarda lliure junts, què faríem?"
  ],
  [
    "What little tradition would you like to start with friends?",
    "你想和朋友开始什么小传统？",
    "你想同朋友開始咩小傳統？",
    "¿Qué pequeña tradición te gustaría empezar con amigos?",
    "Quina petita tradició t'agradaria començar amb amics?"
  ],
  [
    "What has made you laugh lately?",
    "最近什么事让你笑了？",
    "最近有咩令你笑？",
    "¿Qué te ha hecho reír últimamente?",
    "Què t'ha fet riure últimament?"
  ],
  [
    "If your week were a weather forecast, what would it be?",
    "如果这周是天气预报，会是什么天气？",
    "如果呢個禮拜係天氣報告，會係咩天氣？",
    "Si tu semana fuera una previsión meteorológica, ¿cuál sería?",
    "Si la teva setmana fos una previsió del temps, quina seria?"
  ],
  [
    "Which fictional home would you visit for dinner?",
    "你想去哪座虚构的家吃晚饭？",
    "你想去邊間虛構嘅屋企食飯？",
    "¿En qué casa de ficción cenarías?",
    "A quina casa de ficció aniries a sopar?"
  ],
  [
    "What useless talent are you proud of?",
    "你有什么引以为傲的无用技能？",
    "你有咩冇用但自豪嘅技能？",
    "¿De qué talento inútil te sientes orgulloso?",
    "De quin talent inútil et sents orgullós?"
  ],
  [
    "What snack deserves its own fan club?",
    "哪种零食值得拥有粉丝俱乐部？",
    "邊款小食值得有粉絲會？",
    "¿Qué aperitivo merece su propio club de fans?",
    "Quin aperitiu mereix el seu propi club de fans?"
  ],
  [
    "What would you name a cafe if you opened one?",
    "如果开咖啡馆，你会取什么名字？",
    "如果開咖啡店，你會改咩名？",
    "¿Cómo llamarías a tu cafetería si abrieras una?",
    "Com anomenaries la teva cafeteria si n'obrissis una?"
  ],
  [
    "What small luxury costs almost nothing?",
    "什么小享受几乎不花钱？",
    "有咩小享受幾乎唔使錢？",
    "¿Qué pequeño lujo cuesta casi nada?",
    "Quin petit luxe no costa gairebé res?"
  ],
  [
    "What did you think adulthood would be like?",
    "你小时候以为成年是什么样的？",
    "你細個以為大個係點㗎？",
    "¿Cómo imaginabas la vida adulta?",
    "Com t'imaginaves la vida adulta?"
  ],
  [
    "What is your ideal rainy afternoon?",
    "你理想的雨天下午是什么样？",
    "你理想嘅落雨下晝係點？",
    "¿Cómo sería tu tarde lluviosa ideal?",
    "Com seria la teva tarda plujosa ideal?"
  ],
  [
    "Which smell takes you straight back to childhood?",
    "什么气味让你立刻回到童年？",
    "咩氣味令你即刻返到細個？",
    "¿Qué olor te devuelve a la infancia?",
    "Quina olor et torna a la infància?"
  ],
  [
    "What would you put in a museum of ordinary life?",
    "如果办一座日常生活博物馆，你会放什么？",
    "如果搞個日常生活博物館，你會擺咩？",
    "¿Qué pondrías en un museo de la vida cotidiana?",
    "Què posaries en un museu de la vida quotidiana?"
  ],
  [
    "What is a harmless hill you will die on?",
    "有什么无伤大雅的观点你绝不让步？",
    "有咩無傷大雅嘅觀點你堅持到底？",
    "¿Qué opinión inofensiva defenderías hasta el final?",
    "Quina opinió inofensiva defensaries fins al final?"
  ],
  [
    "What would be your signature dish?",
    "你的招牌菜会是什么？",
    "你嘅招牌菜會係咩？",
    "¿Cuál sería tu plato estrella?",
    "Quin seria el teu plat estrella?"
  ],
  [
    "What was your favourite thing to do after school?",
    "放学后你最喜欢做什么？",
    "放學後你最鍾意做咩？",
    "¿Qué te gustaba hacer al salir de clase?",
    "Què t'agradava fer en sortir de classe?"
  ],
  [
    "Which everyday sound do you love?",
    "你喜欢哪种日常声音？",
    "你鍾意邊種日常聲音？",
    "¿Qué sonido cotidiano te encanta?",
    "Quin so quotidià t'encanta?"
  ],
  [
    "What is a good piece of advice you ignored at first?",
    "有什么好建议你一开始没听进去？",
    "有咩好建議你一開始冇聽入耳？",
    "¿Qué buen consejo ignoraste al principio?",
    "Quin bon consell vas ignorar al principi?"
  ],
  [
    "What would make an ordinary Tuesday feel special?",
    "什么会让普通的星期二变得特别？",
    "咩會令普通嘅禮拜二變特別？",
    "¿Qué haría especial un martes cualquiera?",
    "Què faria especial un dimarts qualsevol?"
  ],
  [
    "If we formed a band, what would we call it?",
    "如果我们组乐队，会叫什么名字？",
    "如果我哋組樂隊，會叫咩名？",
    "Si formáramos un grupo de música, ¿cómo se llamaría?",
    "Si féssim un grup de música, com es diria?"
  ],
  [
    "What is something you enjoy doing slowly?",
    "你喜欢慢慢做什么？",
    "你鍾意慢慢做咩？",
    "¿Qué disfrutas haciendo despacio?",
    "Què gaudeixes fent a poc a poc?"
  ],
  [
    "What silly invention would improve this room?",
    "什么搞笑发明能让这个房间更好？",
    "咩搞笑發明會令呢間房更好？",
    "¿Qué invento absurdo mejoraría esta sala?",
    "Quin invent absurd milloraria aquesta sala?"
  ],
  [
    "What tiny act of kindness sticks in your memory?",
    "哪件小小的善意让你记忆犹新？",
    "邊件小小嘅好意你仲記得？",
    "¿Qué pequeño gesto amable recuerdas?",
    "Quin petit gest amable recordes?"
  ],
  [
    "What would you bring to a picnic on the moon?",
    "去月球野餐你会带什么？",
    "去月球野餐你會帶咩？",
    "¿Qué llevarías a un pícnic en la Luna?",
    "Què portaries a un pícnic a la Lluna?"
  ],
  [
    "Which tradition from somewhere else would you like to try?",
    "你想尝试哪里的传统？",
    "你想試吓邊度嘅傳統？",
    "¿Qué tradición de otro lugar te gustaría probar?",
    "Quina tradició d'un altre lloc t'agradaria provar?"
  ],
  [
    "What is a very specific thing that makes you happy?",
    "有什么很具体的小事让你开心？",
    "有咩好具體嘅小事令你開心？",
    "¿Qué cosa muy concreta te hace feliz?",
    "Quina cosa molt concreta et fa feliç?"
  ],
  [
    "What would you teach an alien about human parties?",
    "你会怎么教外星人了解人类聚会？",
    "你會點教外星人識人類聚會？",
    "¿Qué enseñarías a un extraterrestre sobre las fiestas humanas?",
    "Què ensenyaries a un extraterrestre sobre les festes humanes?"
  ]
];
window.AC_W.WHAT = window.AC_W.WHAT.concat([
  [
    "a picnic with homemade snacks",
    "带自制点心去野餐",
    "帶自家製小食去野餐",
    "un pícnic con comida casera",
    "un pícnic amb menjar casolà"
  ],
  [
    "a blind snack tasting",
    "来一场零食盲品",
    "嚟場零食盲試",
    "una cata de aperitivos a ciegas",
    "un tast de snacks a cegues"
  ],
  [
    "a board game evening",
    "一起玩桌游",
    "一齊玩桌遊",
    "una tarde de juegos de mesa",
    "una tarda de jocs de taula"
  ],
  [
    "explore a new street",
    "探索一条没走过的街",
    "行一條未行過嘅街",
    "explorar una calle nueva",
    "explorar un carrer nou"
  ],
  [
    "a homemade pizza night",
    "在家做披萨",
    "喺屋企整薄餅",
    "una noche de pizza casera",
    "una nit de pizza casolana"
  ],
  [
    "a second-hand bookshop visit",
    "逛二手书店",
    "行二手書店",
    "visitar una librería de segunda mano",
    "visitar una llibreria de segona mà"
  ],
  [
    "make a shared playlist",
    "一起做歌单",
    "一齊整歌單",
    "hacer una lista de música juntos",
    "fer una llista de música junts"
  ],
  [
    "watch the sunset together",
    "一起看日落",
    "一齊睇日落",
    "ver juntos la puesta de sol",
    "veure junts la posta de sol"
  ],
  [
    "a dessert swap",
    "交换甜点",
    "交換甜品",
    "intercambiar postres",
    "intercanviar postres"
  ],
  [
    "a museum wander",
    "慢慢逛博物馆",
    "慢慢行博物館",
    "pasear por un museo",
    "voltar per un museu"
  ],
  [
    "a childhood film night",
    "重温童年电影",
    "重睇細個嘅戲",
    "una noche de pelis de infancia",
    "una nit de pel·lis de la infància"
  ],
  [
    "teach each other a small skill",
    "互相教一个小技能",
    "互相教一樣小技能",
    "enseñarnos una pequeña habilidad",
    "ensenyar-nos una petita habilitat"
  ],
  [
    "a silly drawing night",
    "一起画搞笑的画",
    "一齊畫搞笑畫",
    "una noche de dibujos absurdos",
    "una nit de dibuixos absurds"
  ],
  [
    "a breakfast potluck",
    "每人带一样早餐",
    "每人帶一樣早餐",
    "un desayuno compartido",
    "un esmorzar compartit"
  ],
  [
    "a park bench catch-up",
    "在公园长椅上聊天",
    "喺公園長櫈傾偈",
    "charlar en un banco del parque",
    "xerrar en un banc del parc"
  ],
  [
    "a neighbourhood bakery hunt",
    "一起寻找附近的面包店",
    "一齊搵附近嘅麵包舖",
    "buscar panaderías del barrio",
    "buscar forns del barri"
  ]
]);
window.AC_W.WHEN = window.AC_W.WHEN.concat([
  [
    "one evening next week",
    "下周某个晚上",
    "下個禮拜一晚",
    "una noche de la semana que viene",
    "un vespre de la setmana que ve"
  ],
  [
    "the next free weekend",
    "下一个有空的周末",
    "下一個得閒嘅週末",
    "el próximo fin de semana libre",
    "el proper cap de setmana lliure"
  ],
  [
    "on a sunny afternoon",
    "某个晴朗的下午",
    "一個好天嘅下晝",
    "una tarde soleada",
    "una tarda assolellada"
  ],
  [
    "before the next home party",
    "下次聚会之前",
    "下次屋企聚會之前",
    "antes de la próxima reunión en casa",
    "abans de la propera trobada a casa"
  ],
  [
    "a day everyone agrees on",
    "大家都方便的一天",
    "大家都得閒嗰日",
    "un día que nos vaya bien a todos",
    "un dia que ens vagi bé a tots"
  ],
  [
    "next Friday evening",
    "下周五晚上",
    "下個禮拜五夜晚",
    "el viernes que viene por la noche",
    "divendres que ve al vespre"
  ],
  [
    "within ten days",
    "接下来十天内",
    "嚟緊十日之內",
    "en los próximos diez días",
    "durant els propers deu dies"
  ],
  [
    "over a long lunch",
    "找个悠闲的午餐时间",
    "搵日慢慢食晏",
    "durante una comida sin prisas",
    "durant un dinar sense presses"
  ]
]);
window.AC_W.ACTS = window.AC_W.ACTS.concat([
  [
    "invent a ridiculous name for tonight's party",
    "给今晚聚会起个荒唐的名字",
    "幫今晚聚會改個騎呢名",
    "inventa un nombre ridículo para la fiesta de hoy",
    "inventa un nom ridícul per a la festa d'avui"
  ],
  [
    "describe a film badly and let everyone guess",
    "故意把电影讲得很糟，让大家猜",
    "亂咁講套戲嘅劇情，等大家估",
    "describe fatal una película para que la adivinen",
    "descriu fatal una pel·lícula perquè l'endevinin"
  ],
  [
    "make a three-second sound effect for the room",
    "给房间配个三秒音效",
    "幫間房配個三秒音效",
    "haz un efecto sonoro de tres segundos para la sala",
    "fes un efecte sonor de tres segons per a la sala"
  ],
  [
    "invent a slogan for an ordinary object",
    "给一件普通物品想句广告词",
    "幫一件普通嘢諗句廣告詞",
    "inventa un eslogan para un objeto corriente",
    "inventa un eslògan per a un objecte corrent"
  ],
  [
    "start a story with five words; invite someone to continue",
    "用五个词开头讲故事，邀请别人接着讲",
    "用五個詞開個故仔頭，請人接住講",
    "empieza una historia con cinco palabras e invita a alguien a seguir",
    "comença una història amb cinc paraules i convida algú a seguir"
  ],
  [
    "greet the table like a sleepy cat",
    "模仿困猫跟大家打招呼",
    "扮隻眼瞓貓同大家打招呼",
    "saluda como un gato somnoliento",
    "saluda com un gat endormiscat"
  ],
  [
    "recommend a song in three words",
    "用三个词推荐一首歌",
    "用三個詞推薦一首歌",
    "recomienda una canción en tres palabras",
    "recomana una cançó en tres paraules"
  ],
  [
    "invent an ice cream flavour",
    "发明一种冰淇淋口味",
    "發明一款雪糕味",
    "inventa un sabor de helado",
    "inventa un gust de gelat"
  ],
  [
    "give a dramatic weather report about the kitchen",
    "给厨房来段夸张的天气预报",
    "幫廚房報段誇張天氣",
    "da una previsión del tiempo dramática sobre la cocina",
    "fes una previsió del temps dramàtica sobre la cuina"
  ],
  [
    "offer two silly superpowers for someone to choose",
    "让愿意玩的人选一种搞笑超能力",
    "俾肯玩嘅人揀兩種搞笑超能力之一",
    "ofrece dos superpoderes absurdos para elegir",
    "ofereix dos superpoders absurds per triar"
  ],
  [
    "name three things for the perfect breakfast",
    "说出完美早餐的三样东西",
    "講三樣完美早餐嘅嘢",
    "di tres cosas del desayuno perfecto",
    "digues tres coses de l'esmorzar perfecte"
  ],
  [
    "give an imaginary award to a household object",
    "给家居用品颁个虚构奖项",
    "頒個虛構獎俾一件屋企嘢",
    "da un premio imaginario a un objeto de casa",
    "dona un premi imaginari a un objecte de casa"
  ],
  [
    "teach everyone a tiny trick",
    "教大家一个小窍门",
    "教大家一個小貼士",
    "enseña un truco sencillo",
    "ensenya un truc senzill"
  ],
  [
    "mime an animal and let the table guess",
    "用动作模仿动物，让大家猜",
    "扮一種動物，等大家估",
    "imita un animal con gestos para que lo adivinen",
    "imita un animal amb gestos perquè l'endevinin"
  ],
  [
    "invent a dish for tonight's imaginary menu",
    "给今晚的虚构菜单加道菜",
    "幫今晚嘅虛構餐牌加道菜",
    "inventa un plato para el menú imaginario de hoy",
    "inventa un plat per al menú imaginari d'avui"
  ],
  [
    "say something nice about the room or host",
    "说一句喜欢房间或感谢主人的话",
    "講句讚間房或者多謝主人家嘅說話",
    "di algo bonito de la sala o quien nos recibe",
    "digues alguna cosa bonica de la sala o de qui ens acull"
  ],
  [
    "describe your day as a film title",
    "用电影片名形容你的一天",
    "用戲名形容你今日",
    "describe tu día como título de película",
    "descriu el teu dia com a títol de pel·lícula"
  ],
  [
    "make up two lines of poetry about the snacks",
    "为零食编两句诗",
    "為小食作兩句詩",
    "inventa dos versos sobre los aperitivos",
    "inventa dos versos sobre els aperitius"
  ],
  [
    "name a surprisingly good food combination",
    "说一种出奇好吃的食物搭配",
    "講一款出奇好食嘅配搭",
    "di una combinación de comida sorprendentemente buena",
    "digues una combinació de menjar sorprenentment bona"
  ],
  [
    "pitch an ordinary object as a luxury product",
    "把普通物品当奢侈品推销",
    "將普通嘢當奢侈品推銷",
    "vende un objeto corriente como si fuera de lujo",
    "ven un objecte corrent com si fos de luxe"
  ],
  [
    "invent a completely fake fun fact",
    "编一条完全虚构的冷知识",
    "作一條完全虛構嘅冷知識",
    "inventa un dato curioso totalmente falso",
    "inventa una curiositat completament falsa"
  ],
  [
    "ask the table to invent a rhyme for a word",
    "选个词请大家押韵",
    "揀個詞請大家押韻",
    "pide a la mesa que invente una rima para una palabra",
    "demana a la taula que inventi una rima per a una paraula"
  ],
  [
    "invent a tiny dance using only your hands",
    "只用双手发明一段小舞蹈",
    "淨係用雙手發明一段小舞",
    "inventa un baile usando solo las manos",
    "inventa un ball fent servir només les mans"
  ],
  [
    "choose the theme tune for Popo's casino",
    "为婆婆的赌场选一首主题曲",
    "幫婆婆間賭場揀首主題曲",
    "elige la sintonía del casino de Popo",
    "tria la sintonia del casino de la Popo"
  ]
]);
window.AC_W.THEMES = window.AC_W.THEMES.concat([
  [
    "a misunderstanding that became funny",
    "后来变得好笑的一次误会",
    "後來變得好笑嘅一次誤會",
    "un malentendido que acabó siendo divertido",
    "un malentès que va acabar fent gràcia"
  ],
  [
    "a strange thing I believed as a teenager",
    "少年时相信的一件怪事",
    "後生嗰陣信過嘅一件怪事",
    "algo raro que creía de adolescente",
    "una cosa estranya que creia d'adolescent"
  ],
  [
    "an unexpected act of kindness",
    "一次意外的善意",
    "一次意外嘅好意",
    "un gesto inesperado de amabilidad",
    "un gest inesperat d'amabilitat"
  ],
  [
    "a recipe that went completely wrong",
    "一次彻底失败的下厨经历",
    "一次完全失敗嘅煮嘢食經歷",
    "una receta que salió fatal",
    "una recepta que va sortir fatal"
  ],
  [
    "a surprisingly good day trip",
    "一次意外精彩的短途旅行",
    "一次出奇好玩嘅短途旅行",
    "una excursión sorprendentemente buena",
    "una excursió sorprenentment bona"
  ],
  [
    "a funny encounter with an animal",
    "一次和动物的有趣相遇",
    "一次同動物嘅搞笑相遇",
    "un encuentro divertido con un animal",
    "una trobada divertida amb un animal"
  ],
  [
    "a hobby I tried and abandoned",
    "尝试过又放弃的爱好",
    "試過又放棄嘅興趣",
    "una afición que probé y dejé",
    "una afició que vaig provar i deixar"
  ],
  [
    "a small victory nobody noticed",
    "没人注意到的小胜利",
    "冇人留意到嘅小勝利",
    "una pequeña victoria que nadie notó",
    "una petita victòria que ningú va notar"
  ],
  [
    "a bizarre thing on public transport",
    "公交或地铁上的一件怪事",
    "搭車嗰陣遇到嘅一件怪事",
    "algo raro en el transporte público",
    "una cosa estranya al transport públic"
  ],
  [
    "a party that went off script",
    "一次不按计划发展的聚会",
    "一次唔跟計劃嘅聚會",
    "una fiesta que se salió del guion",
    "una festa que es va sortir del guió"
  ],
  [
    "a time I laughed at the wrong moment",
    "一次在不合适的时候笑了",
    "一次喺唔啱嘅時候笑咗",
    "una vez que me reí en el momento equivocado",
    "una vegada que vaig riure en el moment equivocat"
  ],
  [
    "an unusual family tradition",
    "一个不寻常的家庭传统",
    "一個唔尋常嘅家庭傳統",
    "una tradición familiar poco habitual",
    "una tradició familiar poc habitual"
  ],
  [
    "a memorable first impression",
    "一次难忘的第一印象",
    "一次難忘嘅第一印象",
    "una primera impresión memorable",
    "una primera impressió memorable"
  ],
  [
    "a mysterious noise at home",
    "家里一次神秘的响声",
    "屋企一次神秘嘅聲",
    "un ruido misterioso en casa",
    "un soroll misteriós a casa"
  ],
  [
    "the oddest thing I packed for a trip",
    "旅行时带过最奇怪的东西",
    "去旅行帶過最古怪嘅嘢",
    "lo más raro que metí en una maleta",
    "la cosa més estranya que vaig posar a la maleta"
  ],
  [
    "a time a stranger made me smile",
    "一次陌生人让我笑了",
    "一次陌生人令我笑咗",
    "una vez que un desconocido me hizo sonreír",
    "una vegada que un desconegut em va fer somriure"
  ],
  [
    "a childhood invention",
    "小时候的一项发明",
    "細個嘅一樣發明",
    "un invento de mi infancia",
    "un invent de la meva infància"
  ],
  [
    "a very ordinary day that became memorable",
    "平凡却难忘的一天",
    "平凡但難忘嘅一日",
    "un día corriente que se volvió memorable",
    "un dia corrent que es va fer memorable"
  ],
  [
    "a song that arrived at exactly the right time",
    "在恰好的时刻听到的一首歌",
    "啱啱好嗰刻聽到嘅一首歌",
    "una canción que llegó en el momento justo",
    "una cançó que va arribar en el moment just"
  ],
  [
    "a time I changed my mind about a food",
    "一次改变对某种食物的看法",
    "一次改變對某款食物嘅睇法",
    "una vez que cambié de opinión sobre una comida",
    "una vegada que vaig canviar d'opinió sobre un menjar"
  ],
  [
    "an object I nearly threw away",
    "一件差点扔掉的物品",
    "一樣差啲掉咗嘅嘢",
    "un objeto que casi tiré",
    "un objecte que gairebé vaig llençar"
  ],
  [
    "a place that looked nothing like I imagined",
    "一个和想象完全不同的地方",
    "一個同想像完全唔同嘅地方",
    "un lugar que no se parecía nada a lo que imaginaba",
    "un lloc que no s'assemblava gens al que imaginava"
  ]
]);
