/* What Grows Between Us: every word, five languages [en, zh, zh-Hant, es, ca].
   Popo keeps her voice (Hong Kong English, broken Spanish, a Hong Kong grandmother's Mandarin in zh (never 唔/咗/嘅/佢/睇/瞓/俾),
   her own Cantonese in zh-Hant, fluent Catalan). Wei acts in small acts, Mei is nineteen (lowercase in English).
   The interface itself is plain. Never reorder CARE's needs or acts, or SP: a pot in a link keeps their indexes. */
window.GB_W = {
  title: ["What Grows Between Us", "我们之间长的花", "我們之間長的花", "Lo que Crece Entre Nosotros", "El que Creix Entre Nosaltres"],
  names: { popo: ["Popo", "婆婆", "婆婆", "Popo", "Popo"], wei: ["Wei", "Wei", "Wei", "Wei", "Wei"], mei: ["Mei", "Mei", "Mei", "Mei", "Mei"],
    miso: ["Miso", "Miso", "Miso", "Miso", "Miso"], yuzu: ["Yuzu", "Yuzu", "Yuzu", "Yuzu", "Yuzu"], mantou: ["Mantou", "馒头", "饅頭", "Mantou", "Mantou"] },

  /* the header, the help card, the footer */
  steps: [
    ["Popo gives your group a seed with no label. Nobody knows what it is.", "婆婆给你们一包没有名字的种子。谁也不知道是什么。", "婆婆給你們一包沒有名字的種子。誰也不知道是什麼。", "Popo le da a tu grupo una semilla sin etiqueta. Nadie sabe qué es.", "La Popo dona al vostre grup una llavor sense etiqueta. Ningú no sap què és."],
    ["It grows from what you do together, off the screen: keep in touch, go out, eat, play music, help each other.", "它靠你们一起做的事长大，在屏幕外：联系、出门、吃饭、音乐、互相帮忙。", "它靠你們一起做的事長大，在螢幕外：聯絡、出門、吃飯、音樂、互相幫忙。", "Crece con lo que hacéis juntos, fuera de la pantalla: estar en contacto, salir, comer, la música, ayudaros.", "Creix amb el que feu junts, fora de la pantalla: tenir-vos presents, sortir, menjar, la música, ajudar-vos."],
    ["Pass it hand to hand, guess what it is, and when it blooms, grow a real one.", "一手传一手，猜猜是什么；开花那天，一起种一棵真的。", "一手傳一手，猜猜是什麼；開花那天，一起種一棵真的。", "Pasadla de mano en mano, adivinad qué es y, cuando florezca, plantad una de verdad.", "Passeu-la de mà en mà, endevineu què és i, quan floreixi, planteu-ne una de debò."]
  ],
  link: ["Lives in your link", "只在你的链接里", "只在你的連結裡", "Vive en tu enlace", "Viu al teu enllaç"],
  ah: ["After hours ↗", "下班后 ↗", "下班後 ↗", "Fuera de horario ↗", "Fora d'hores ↗"],
  sceneA: ["Popo's windowsill, at your hour. Your group's pot is on it, with Miso, Yuzu and Mantou somewhere about.", "婆婆家的窗台，跟你那边同一个钟点。你们的花盆在上面，Miso、Yuzu 和馒头就在附近。", "婆婆家的窗台，跟你那邊同一個鐘點。你們的花盆在上面，Miso、Yuzu 和饅頭就在附近。", "El alféizar de Popo, a tu hora. La maceta de tu grupo está ahí, con Miso, Yuzu y Mantou por algún sitio.", "L'ampit de la Popo, a la teva hora. El test del vostre grup hi és, amb la Miso, la Yuzu i en Mantou per allà."],
  liftA: ["Lift Miso out of the pot", "把 Miso 从花盆里抱出来", "把 Miso 從花盆裡抱出來", "Saca a Miso de la maceta", "Treu la Miso del test"],

  /* the beginning */
  intro: {
    popo: ["*puts a little paper packet in your hand* Seeds. Josep write the name on it, but rain wash it off already. You grow with your friends. Then you tell me what it is.", "*把一个小纸包放到你手里* 种子。Josep 写了名字的，下雨洗掉了啦。你跟朋友一起种。种好了，告诉我是什么。", "*將一個小紙包放喺你手度* 種子嚟㗎。Josep 寫咗個名喺上面，落雨洗走咗囉。你同啲朋友一齊種。種到出嚟，話我知係咩。", "*te pone un sobrecito en la mano* Semillas. Josep escribe nombre, pero lluvia borra. Tú planta con amigos. Luego me dices qué es.", "*et posa un sobret de paper a la mà* Llavors. En Josep hi va escriure el nom, però la pluja l'ha esborrat. Planta-les amb els teus amics i després em dius què són."],
    wei: ["*slides a paper packet across the counter* Popo found these in her tin. Josep labelled them, but the ink's gone. Grow it with your friends, then tell her what it is.", "*把一个纸包推过吧台* 婆婆在她的饼干罐里找到的。Josep 写过名字，墨水没了。跟朋友一起种，再告诉她是什么。", "*把一個紙包推過吧台* 婆婆在她的餅乾罐裡找到的。Josep 寫過名字，墨水沒了。跟朋友一起種，再告訴她是什麼。", "*desliza un sobre de papel por la barra* Popo los encontró en su lata. Josep les puso nombre, pero la tinta se ha ido. Plántalo con tus amigos y luego cuéntale qué es.", "*fa lliscar un sobre de paper per la barra* La Popo els ha trobat a la seva capsa. En Josep hi havia escrit el nom, però la tinta ha marxat. Planta-ho amb els teus amics i després digues-li què és."],
    mei: ["ok so popo gave me these seeds and the label is literally blank. grow it with your friends and figure out what it is. no pressure", "好吧，婆婆给了我这包种子，标签上一个字都没有。跟你朋友一起种，看看到底是什么。没压力", "好吧，婆婆給了我這包種子，標籤上一個字都沒有。跟你朋友一起種，看看到底是什麼。沒壓力", "vale, popo me ha dado estas semillas y la etiqueta está literalmente en blanco. plántalas con tus amigos y averiguad qué son. sin presión", "doncs la popo m'ha donat aquestes llavors i l'etiqueta està literalment en blanc. planteu-les amb els amics i descobriu què són. sense pressió"],
    none: ["Popo left a paper packet on the sill: \"Seeds. Grow with your friends. Tell me what it is.\"", "婆婆在窗台上留了一个纸包：“种子。跟朋友一起种。告诉我是什么。”", "婆婆在窗台上留了一個紙包：「種子。同朋友一齊種。話我知係咩。」", "Popo dejó un sobre en el alféizar: «Semillas. Planta con amigos. Me dices qué es.»", "La Popo ha deixat un sobre a l'ampit: «Llavors. Planta-les amb els amics. Digues-me què són.»"]
  },
  who: ["Who's growing it with you? Start with a few. It can pass to more people later.", "谁跟你一起种？先找几个人。以后还可以传给更多人。", "誰跟你一起種？先找幾個人。以後還可以傳給更多人。", "¿Quién lo planta contigo? Empieza con unos pocos. Luego puede pasar a más gente.", "Qui ho planta amb tu? Comença amb uns quants. Després pot passar a més gent."],
  me: ["Your name", "你的名字", "你的名字", "Tu nombre", "El teu nom"],
  them: ["Their names, with commas: Ana, Leo, Sam", "他们的名字，用逗号隔开：小安，阿乐，Sam", "他們的名字，用逗號隔開：小安，阿樂，Sam", "Sus nombres, con comas: Ana, Leo, Sam", "Els seus noms, amb comes: Anna, Leo, Sam"],
  plant: ["Plant it", "种下去", "種下去", "Plantarla", "Plantar-la"],
  planted: ["*pats the soil* Okay. Now it's yours. Not mine, not the app's. Yours all.", "*拍拍泥土* 好了。现在是你们的了。不是我的，也不是手机的。是你们大家的。", "*拍拍啲泥* 得喇。而家係你哋嘅喇。唔係我嘅，亦唔係部手機嘅。係你哋大家嘅。", "*da palmaditas a la tierra* Ya. Ahora es de vosotros. No mío, no del móvil. De todos.", "*dona copets a la terra* Ja està. Ara és vostra. No meva, ni del mòbil. De tots."],

  /* the pot */
  stages: [
    ["a seed", "一颗种子", "一顆種子", "una semilla", "una llavor"],
    ["a sprout", "一棵小芽", "一棵小芽", "un brote", "un brot"],
    ["two leaves", "两片叶子", "兩片葉子", "dos hojas", "dues fulles"],
    ["a little plant", "一棵小苗", "一棵小苗", "una plantita", "una planteta"],
    ["in bud", "长了花苞", "長了花苞", "con capullo", "amb un capoll"],
    ["in bloom", "开花了", "開花了", "en flor", "florida"]
  ],
  state: [
    ["Still a seed. Something is happening under there.", "还是一颗种子。底下有什么正在发生。", "還是一顆種子。底下有什麼正在發生。", "Todavía es una semilla. Algo pasa ahí debajo.", "Encara és una llavor. Alguna cosa passa allà sota."],
    ["A sprout! Barely.", "发芽了！一点点。", "發芽了！一點點。", "¡Un brote! Apenas.", "Un brot! Amb prou feines."],
    ["Two leaves. It's choosing a shape.", "两片叶子。它在决定自己长什么样。", "兩片葉子。它在決定自己長什麼樣。", "Dos hojas. Está decidiendo su forma.", "Dues fulles. Està triant quina forma tindrà."],
    ["A little plant now, with leaves of its own.", "现在是一棵小苗了，有了自己的叶子。", "現在是一棵小苗了，有了自己的葉子。", "Ya es una plantita, con hojas propias.", "Ja és una planteta, amb fulles pròpies."],
    ["There's a bud.", "有花苞了。", "有花苞了。", "Hay un capullo.", "Hi ha un capoll."],
    ["It bloomed.", "开花了。", "開花了。", "Ha florecido.", "Ha florit."]
  ],
  roots: ["It's had what it needs. Give it a day or two for roots.", "它需要的都有了。给它一两天长根。", "它需要的都有了。給它一兩天長根。", "Ya tiene lo que necesita. Dale un día o dos para echar raíces.", "Ja té el que necessita. Dona-li un dia o dos per fer arrels."],
  grows: ["It grows when you do things together.", "你们一起做事，它就长。", "你們一起做事，它就長。", "Crece cuando hacéis cosas juntos.", "Creix quan feu coses junts."],
  withX: ["It's with {n} now. What you do together still counts.", "它现在在{n}那里。你们一起做的事照样算。", "它現在在{n}那裡。你們一起做的事照樣算。", "Ahora la tiene {n}. Lo que hacéis juntos sigue contando.", "Ara la té {n}. El que feu junts continua comptant."],
  idle: {
    popo: ["*checks under the leaf* Growing. Slowly. Like good things.", "*翻开叶子看看* 在长。慢慢的。好东西都是这样嘛。", "*揭開塊葉睇睇* 有喺度大緊。慢慢嚟。好嘢都係咁㗎。", "*mira bajo la hoja* Crece. Despacio. Como cosas buenas.", "*mira sota la fulla* Creix. A poc a poc. Com les coses bones."],
    wei: ["*leans on the sill* No rush. Roots first.", "*靠在窗台上* 不急。先长根。", "*靠在窗台上* 不急。先長根。", "*se apoya en el alféizar* Sin prisa. Primero las raíces.", "*es recolza a l'ampit* Sense pressa. Primer les arrels."],
    mei: ["it's a plant. it's planting. we're all doing our best", "它是一棵植物。它在努力当植物。大家都尽力了", "它是一棵植物。它在努力當植物。大家都盡力了", "es una planta. está planteando. todos hacemos lo que podemos", "és una planta. està plantejant. tots fem el que podem"]
  },
  waiting: {
    popo: ["Aiya, so thirsty-looking. Who forget? Never mind. It wait for you.", "哎呀，看起来好渴。谁忘了？算了啦。它等你们。", "哎呀，睇落好口渴咁。邊個唔記得？算啦。佢等緊你哋。", "Aiya, parece sed. ¿Quién olvida? Da igual. Espera a vosotros.", "Aiya, sembla que té set. Qui se n'ha oblidat? És igual. Us espera."],
    wei: ["*looks at it* It's leaning toward the door. Waiting for you lot.", "*看了看它* 它往门口那边歪了。在等你们。", "*看了看它* 它往門口那邊歪了。在等你們。", "*la mira* Se inclina hacia la puerta. Os está esperando.", "*se la mira* S'inclina cap a la porta. Us espera."],
    mei: ["it's doing the sad lean. it misses you guys. dramatic", "它在委屈地歪着。它想你们了。戏好多", "它在委屈地歪著。它想你們了。戲好多", "está haciendo la inclinación triste. os echa de menos. qué dramática", "està fent la inclinació trista. us troba a faltar. quin drama"]
  },
  paper: ["Popo's paper on the sill: Plant sleep. You also. Go sleep!", "婆婆在窗台上留的纸条：花睡了。你也睡。快去睡！", "婆婆喺窗台留低張紙仔：花瞓咗。你都瞓啦。快啲去瞓！", "Papel de Popo en el alféizar: Planta duerme. Tú también. ¡A dormir!", "Paper de la Popo a l'ampit: La planta dorm. Tu també. A dormir!"],

  /* what made it grow: five needs, five real things each. Never reorder (a pot in a link keeps the indexes). */
  did: ["What did you do together?", "你们一起做了什么？", "你們一起做了什麼？", "¿Qué hicisteis juntos?", "Què heu fet junts?"],
  doneToday: ["done today", "今天有了", "今天有了", "hecho hoy", "fet avui"],
  whatDid: ["What did you do?", "做了什么？", "做了什麼？", "¿Qué hicisteis?", "Què heu fet?"],
  CARE: [
    { k: "water", t: ["Water", "浇水", "澆水", "Agua", "Aigua"], d: ["keeping in touch", "保持联系", "保持聯絡", "estar en contacto", "tenir-vos presents"],
      ask: ["Who was in touch?", "谁跟谁联系了？", "誰跟誰聯絡了？", "¿Quién estuvo en contacto?", "Qui s'ha fet present?"],
      popo: ["Good. Plant drink, people drink. Both need.", "好。花要喝水，人也要喝水。都要的。", "好。花要飲水，人都要飲水。兩樣都要㗎。", "Bien. Planta bebe, gente bebe. Los dos necesita.", "Bé. La planta beu, la gent beu. Tots dos ho necessiten."],
      acts: [
        { t: ["Checked in properly", "认真问候了一下", "認真問候了一下", "Preguntamos cómo estaba, de verdad", "Vam preguntar com estava, de debò"],
          line: ["Thinking of you. How's your week actually going?", "想到你了。你这个星期到底过得怎么样？", "想到你了。你這個星期到底過得怎麼樣？", "Pensando en ti. ¿Qué tal tu semana, de verdad?", "Pensant en tu. Com va la setmana, de debò?"] },
        { t: ["Called, not texted", "打了电话，不是发消息", "打了電話，不是傳訊息", "Llamamos, no escribimos", "Vam trucar, no escriure"],
          line: ["Free for a call tonight? No reason, just miss your voice.", "今晚有空打个电话吗？没什么事，就是想听听你的声音。", "今晚有空打個電話嗎？沒什麼事，就是想聽聽你的聲音。", "¿Te va una llamada esta noche? Sin motivo, echo de menos tu voz.", "Et va bé una trucada aquest vespre? Sense motiu, trobo a faltar la teva veu."] },
        { t: ["Sent a voice note", "发了一段语音", "傳了一段語音", "Mandamos un audio", "Vam enviar un àudio"] },
        { t: ["Left something at their door", "在门口留了点东西", "在門口留了點東西", "Dejamos algo en su puerta", "Vam deixar alguna cosa a la porta"] },
        { t: ["Wrote a real letter or card", "写了一封真的信或卡片", "寫了一封真的信或卡片", "Escribimos una carta o tarjeta de verdad", "Vam escriure una carta o una postal de debò"] }
      ] },
    { k: "sun", t: ["Sun", "晒太阳", "曬太陽", "Sol", "Sol"], d: ["out in the open", "到外面去", "到外面去", "al aire libre", "a l'aire lliure"],
      ask: ["Who went out?", "谁出去了？", "誰出去了？", "¿Quién salió?", "Qui va sortir?"],
      popo: ["Outside together? Very good one. Plant can feel, you know.", "一起出去了？很好。花都感觉得到的。", "一齊出去咗？好好呀。啲花都感覺到㗎。", "¿Fuera juntos? Muy bueno. Planta siente, ¿sabes?", "Fora junts? Molt bé. Les plantes ho noten, saps?"],
      acts: [
        { t: ["Went for a walk", "去散了步", "去散了步", "Fuimos a pasear", "Vam anar a caminar"],
          line: ["Walk this weekend? Twenty minutes, I'll bring coffee.", "这个周末一起走走？二十分钟就好，我带咖啡。", "這個週末一起走走？二十分鐘就好，我帶咖啡。", "¿Paseamos este fin de semana? Veinte minutos, yo llevo café.", "Caminem aquest cap de setmana? Vint minuts, jo porto cafè."] },
        { t: ["Sat in a park", "在公园坐了坐", "在公園坐了坐", "Nos sentamos en un parque", "Vam seure en un parc"] },
        { t: ["Played something: a match, frisbee, a swim", "玩了点什么：球赛、飞盘、游泳", "玩了點什麼：球賽、飛盤、游泳", "Jugamos a algo: un partido, frisbi, nadar", "Vam jugar a alguna cosa: un partit, frisbi, nedar"],
          line: ["Up for a game this week? Any game. I'll lose gracefully.", "这周一起玩点什么？什么都行。我会输得很优雅。", "這週一起玩點什麼？什麼都行。我會輸得很優雅。", "¿Jugamos a algo esta semana? Lo que sea. Perderé con elegancia.", "Juguem a alguna cosa aquesta setmana? El que sigui. Perdré amb elegància."] },
        { t: ["Watched a sunset or the stars", "看了日落或星星", "看了日落或星星", "Vimos una puesta de sol o las estrellas", "Vam mirar la posta de sol o les estrelles"] },
        { t: ["Went somewhere new", "去了一个没去过的地方", "去了一個沒去過的地方", "Fuimos a un sitio nuevo", "Vam anar a un lloc nou"] }
      ] },
    { k: "soil", t: ["Soil", "养土", "養土", "Tierra", "Terra"], d: ["food together", "一起吃", "一起吃", "comer juntos", "menjar junts"],
      ask: ["Who was at the table?", "谁在饭桌上？", "誰在飯桌上？", "¿Quién estaba en la mesa?", "Qui era a taula?"],
      popo: ["Eat together already? Then soil is good lor.", "一起吃过了？那土就好了嘛。", "一齊食咗飯？咁啲泥就好囉。", "¿Comer juntos ya? Entonces tierra buena.", "Ja heu menjat junts? Doncs la terra és bona."],
      acts: [
        { t: ["Cooked together", "一起做了饭", "一起做了飯", "Cocinamos juntos", "Vam cuinar junts"],
          line: ["Come over Sunday? I'll cook, you bring nothing.", "星期天来我家？我做饭，你什么都不用带。", "星期天來我家？我做飯，你什麼都不用帶。", "¿Vienes el domingo? Yo cocino, tú no traigas nada.", "Vens diumenge? Jo cuino, tu no portis res."] },
        { t: ["Ate out together", "一起出去吃了", "一起出去吃了", "Comimos fuera juntos", "Vam menjar fora junts"] },
        { t: ["Brought someone food", "给人带了吃的", "給人帶了吃的", "Le llevamos comida a alguien", "Vam portar menjar a algú"] },
        { t: ["Went to a market", "去逛了菜市场", "去逛了菜市場", "Fuimos a un mercado", "Vam anar a un mercat"] },
        { t: ["Taught someone a family recipe", "教了别人一道家里的菜", "教了別人一道家裡的菜", "Enseñamos una receta de familia", "Vam ensenyar una recepta de família"] }
      ] },
    { k: "song", t: ["Song", "唱歌", "唱歌", "Canción", "Cançó"], d: ["music together", "一起听音乐", "一起聽音樂", "música juntos", "música junts"],
      ask: ["Who was listening?", "谁在听？", "誰在聽？", "¿Quién escuchaba?", "Qui escoltava?"],
      popo: ["*hums it badly* Plant like music. Josep say so.", "*哼得很难听* 花喜欢音乐。Josep 说的。", "*哼得好難聽* 啲花鍾意音樂。Josep 講㗎。", "*lo tararea mal* Planta le gusta música. Josep dice.", "*la taral·leja malament* A les plantes els agrada la música. Ho deia en Josep."],
      acts: [
        { t: ["Shared a song", "分享了一首歌", "分享了一首歌", "Compartimos una canción", "Vam compartir una cançó"],
          line: ["This one made me think of you: ", "这首让我想到你：", "這首讓我想到你：", "Esta me hizo pensar en ti: ", "Aquesta m'ha fet pensar en tu: "] },
        { t: ["Sang, badly (karaoke counts)", "唱了歌，唱得很烂（K 歌也算）", "唱了歌，唱得很爛（唱 K 也算）", "Cantamos, mal (el karaoke cuenta)", "Vam cantar, malament (el karaoke compta)"] },
        { t: ["Went to a gig", "去看了演出", "去看了演出", "Fuimos a un concierto", "Vam anar a un concert"] },
        { t: ["Played music together", "一起玩了音乐", "一起玩了音樂", "Tocamos música juntos", "Vam tocar música junts"] },
        { t: ["Made a playlist for someone", "给人做了一个歌单", "給人做了一個歌單", "Hicimos una lista para alguien", "Vam fer una llista per a algú"] }
      ] },
    { k: "hand", t: ["A hand", "搭把手", "搭把手", "Una mano", "Un cop de mà"], d: ["helping each other", "互相帮忙", "互相幫忙", "ayudarnos", "ajudar-nos"],
      ask: ["Who helped whom?", "谁帮了谁？", "誰幫了誰？", "¿Quién ayudó a quién?", "Qui va ajudar qui?"],
      popo: ["Help each other? This one the best fertiliser.", "互相帮忙？这个是最好的肥料啦。", "互相幫手？呢樣係最好嘅肥料嚟㗎。", "¿Ayudar uno a otro? Esto mejor abono.", "Ajudar-vos? Això és el millor adob."],
      acts: [
        { t: ["Helped with something: moving, fixing, a form", "帮了点忙：搬家、修东西、填表", "幫了點忙：搬家、修東西、填表", "Ayudamos con algo: una mudanza, un arreglo, un papeleo", "Vam ajudar amb alguna cosa: una mudança, un arranjament, un paper"],
          line: ["Need a hand with anything this week? I'm free Saturday.", "这周有什么要帮忙的吗？我星期六有空。", "這週有什麼要幫忙的嗎？我星期六有空。", "¿Necesitas una mano con algo esta semana? El sábado estoy libre.", "Necessites un cop de mà amb alguna cosa aquesta setmana? Dissabte estic lliure."] },
        { t: ["Lent or swapped something", "借了或换了点东西", "借了或換了點東西", "Prestamos o cambiamos algo", "Vam deixar o intercanviar alguna cosa"] },
        { t: ["Minded a pet, a plant or a kid", "帮忙照看了宠物、植物或小孩", "幫忙照看了寵物、植物或小孩", "Cuidamos una mascota, una planta o un niño", "Vam cuidar una mascota, una planta o una criatura"] },
        { t: ["Taught each other something", "互相教了点什么", "互相教了點什麼", "Nos enseñamos algo", "Ens vam ensenyar alguna cosa"] },
        { t: ["Just listened", "就是好好听对方说", "就是好好聽對方說", "Solo escuchamos", "Només vam escoltar"] }
      ] }
  ],
  happened: ["It happened", "做过了", "做過了", "Pasó", "Ha passat"],
  doNow: ["Do it now", "现在就做", "現在就做", "Hacerlo ahora", "Fer-ho ara"],
  notYet: ["Not done yet? Do it now: here are some words to start.", "还没做？现在就做：这里有几句开头。", "還沒做？現在就做：這裡有幾句開頭。", "¿Aún no? Hazlo ahora: aquí tienes unas palabras para empezar.", "Encara no? Fes-ho ara: aquí tens unes paraules per començar."],
  back: ["Back", "返回", "返回", "Volver", "Tornar"],
  noted: ["*writes it in his notebook* {w}. Noted.", "*记在他的本子上* {w}。记下了。", "*記在他的本子上* {w}。記下了。", "*lo apunta en su libreta* {w}. Anotado.", "*ho apunta a la llibreta* {w}. Apuntat."],
  approves: ["ok that's actually cute. the plant approves", "好吧，这还挺可爱的。花表示认可", "好吧，這還挺可愛的。花表示認可", "vale, eso es muy mono. la planta aprueba", "vale, això és molt bonic. la planta ho aprova"],
  catsNoted: ["*Miso sniffs the pot, then your hand, then sits down satisfied*", "*Miso 闻了闻花盆，又闻了闻你的手，满意地坐下了*", "*Miso 聞了聞花盆，又聞了聞你的手，滿意地坐下了*", "*Miso olfatea la maceta, luego tu mano, y se sienta satisfecha*", "*la Miso ensuma el test, després la teva mà, i s'asseu satisfeta*"],
  quietNoted: ["It's in the pot's book. Everyone's asleep; the plant isn't.", "记进花盆的本子里了。大家都睡了，花没睡。", "記進花盆的本子裡了。大家都睡了，花沒睡。", "Queda en el libro de la maceta. Todos duermen; la planta no.", "Queda al llibre del test. Tothom dorm; la planta no."],
  grew: ["It grew: {s}.", "它长了：{s}。", "它長了：{s}。", "Ha crecido: {s}.", "Ha crescut: {s}."],
  many: ["{n} of you. That's a lot of hands for one pot.", "你们{n}个人。一个花盆，好多双手。", "你們{n}個人。一個花盆，好多雙手。", "{n} de vosotros. Muchas manos para una maceta.", "{n} de vosaltres. Moltes mans per a un test."],

  /* little care: in the app, quick; it keeps the plant content but never makes it grow */
  little: ["Little care", "顺手照顾", "順手照顧", "Pequeños cuidados", "Petites cures"],
  turn: ["Turn the pot", "转一转花盆", "轉一轉花盆", "Girar la maceta", "Girar el test"],
  talk: ["Talk to it", "跟它说说话", "跟它說說話", "Hablarle", "Parlar-li"],
  lift: ["Lift Miso out", "把 Miso 抱出来", "把 Miso 抱出來", "Sacar a Miso", "Treure la Miso"],
  turned: [
    ["*turns the pot a quarter* It was leaning. Now it's not.", "*把花盆转了四分之一圈* 刚才是歪的。现在不歪了。", "*把花盆轉了四分之一圈* 剛才是歪的。現在不歪了。", "*gira la maceta un cuarto* Estaba inclinada. Ya no.", "*gira el test un quart de volta* Estava torta. Ja no."],
    ["*turns the pot* The leaves will follow the light by tomorrow.", "*转了转花盆* 明天叶子就会跟着光转过去。", "*轉了轉花盆* 明天葉子就會跟著光轉過去。", "*gira la maceta* Mañana las hojas seguirán la luz.", "*gira el test* Demà les fulles seguiran la llum."]
  ],
  talkPopo: ["Talk to it? Okay. *whispers* … grow lah.", "跟它说话？好啊。*小声* ……快点长啦。", "同佢講嘢？好呀。*細細聲* ……快啲大啦。", "¿Hablar? Vale. *susurra* … crece, ¿eh?", "Parlar-li? D'acord. *xiuxiueja* … creix, eh."],
  talkMei: ["ok i told it about my day. it didn't say anything. rude", "好，我跟它讲了我今天的事。它一句话都没说。没礼貌", "好，我跟它講了我今天的事。它一句話都沒說。沒禮貌", "vale, le conté mi día. no dijo nada. qué maleducada", "vale, li he explicat el meu dia. no ha dit res. quina mala educació"],
  content: ["It looks content. Little things keep it happy; it grows from what you do together.", "它看起来挺满意。小事让它开心；它靠你们一起做的事长大。", "它看起來挺滿意。小事讓它開心；它靠你們一起做的事長大。", "Parece contenta. Las cosas pequeñas la alegran; crece con lo que hacéis juntos.", "Sembla contenta. Les coses petites l'alegren; creix amb el que feu junts."],
  lifted: ["*is lifted out of the pot. stays exactly the same shape. is put down. walks straight back to the pot, then thinks better of it*", "*被从花盆里抱出来，身体保持原来的形状。被放下。径直走回花盆，想了想，又算了*", "*被從花盆裡抱出來，身體保持原來的形狀。被放下。徑直走回花盆，想了想，又算了*", "*la sacan de la maceta. conserva exactamente la misma forma. la dejan en el suelo. vuelve directa a la maceta y luego se lo piensa mejor*", "*la treuen del test. conserva exactament la mateixa forma. la deixen a terra. torna directa al test i després s'ho repensa*"],

  /* guesses and notes */
  whatIs: ["What is it?", "到底是什么？", "到底是什麼？", "¿Qué es?", "Què és?"],
  noGuess: ["No guesses in the pot yet.", "花盆里还没有人猜。", "花盆裡還沒有人猜。", "Todavía no hay apuestas en la maceta.", "Encara no hi ha cap aposta al test."],
  guess: ["Write a guess", "猜一个", "猜一個", "Apostar", "Apostar"],
  note: ["Leave a note", "留张纸条", "留張紙條", "Dejar una nota", "Deixar una nota"],
  guessMei: ["ok what do you think it is. wrong answers welcome. mine's a venus flytrap", "你觉得是什么？欢迎猜错。我猜是捕蝇草", "你覺得是什麼？歡迎猜錯。我猜是捕蠅草", "vale, ¿qué crees que es? se aceptan respuestas equivocadas. yo digo atrapamoscas", "vale, què creus que és? s'accepten respostes equivocades. jo dic que és una dionea"],
  guessPh: ["I think it's…", "我觉得是……", "我覺得是……", "Creo que es…", "Crec que és…"],
  stick: ["Stick it in the pot", "插进花盆里", "插進花盆裡", "Clavarla en la maceta", "Clavar-la al test"],
  stuck: ["*pushes the stick into the soil, label out* {n} says: {g}.", "*把小木牌插进土里，字朝外* {n}说：{g}。", "*把小木牌插進土裡，字朝外* {n}說：{g}。", "*clava el palito en la tierra, con la etiqueta hacia fuera* {n} dice: {g}.", "*clava el pal a la terra, amb l'etiqueta cap enfora* {n} diu: {g}."],
  noteAsk: ["One line on the window. About the plant, or about each other.", "在窗上贴一句话。写花，或者写彼此。", "在窗上貼一句話。寫花，或者寫彼此。", "Una línea en la ventana. Sobre la planta, o sobre vosotros.", "Una línia a la finestra. Sobre la planta, o sobre vosaltres."],
  notePh: ["Watered it after our walk", "散完步回来浇了水", "散完步回來澆了水", "La regamos después del paseo", "La vam regar després de caminar"],
  stickOn: ["Stick it on", "贴上去", "貼上去", "Pegarla", "Enganxar-la"],
  oneNote: ["One note one day enough. Tomorrow write again, ah.", "一天一张纸条就够了。明天再写喔。", "一日一張紙仔就夠喇。聽日再寫啦。", "Una nota un día, basta. Mañana otra vez, ¿eh?", "Una nota al dia ja n'hi ha prou. Demà en tornes a escriure una, eh."],
  onWindow: ["On the window", "窗上的纸条", "窗上的紙條", "En la ventana", "A la finestra"],

  /* hand to hand */
  hands: ["Hands it's been in", "经过的手", "經過的手", "Manos por las que ha pasado", "Mans per on ha passat"],
  pass: ["Pass it on", "传下去", "傳下去", "Pasarla", "Passar-la"],
  all: ["Send it to everyone", "发给大家看", "發給大家看", "Enviarla a todos", "Enviar-la a tothom"],
  passLine: {
    popo: ["Keep it two, three day, then pass. Plant like to travel. Like me.", "留两三天，然后传下去。花喜欢出门。跟我一样。", "留兩三日，跟住傳落去。啲花鍾意去旅行。好似我咁。", "Guardas dos, tres días, luego pasas. Planta le gusta viajar. Como yo.", "Queda-te-la dos o tres dies i després passa-la. A les plantes els agrada viatjar. Com a mi."],
    wei: ["*wraps the pot in yesterday's paper* Who's next? Someone who hasn't had it yet, maybe.", "*用昨天的报纸把花盆包起来* 下一个是谁？也许是还没拿过的人。", "*用昨天的報紙把花盆包起來* 下一個是誰？也許是還沒拿過的人。", "*envuelve la maceta en el periódico de ayer* ¿Quién sigue? Alguien que aún no la haya tenido, quizá.", "*embolica el test amb el diari d'ahir* Qui és el següent? Algú que encara no l'hagi tinguda, potser."],
    mei: ["pass it to someone who needs a plant. everyone needs a plant", "传给一个需要花的人。每个人都需要一盆花", "傳給一個需要花的人。每個人都需要一盆花", "pásala a alguien que necesite una planta. todo el mundo necesita una planta", "passa-la a algú que necessiti una planta. tothom necessita una planta"]
  },
  next: ["Who gets it next?", "下一个给谁？", "下一個給誰？", "¿Quién la recibe ahora?", "Qui la rep ara?"],
  notHeld: ["· hasn't held it yet", "· 还没拿过", "· 還沒拿過", "· aún no la ha tenido", "· encara no l'ha tinguda"],
  newPh: ["Or someone new: their name", "或者一个新的人：他的名字", "或者一個新的人：他的名字", "O alguien nuevo: su nombre", "O algú nou: el seu nom"],
  full: ["Twelve people already! Pot not so big. Pass to someone inside, ah.", "已经十二个人了！花盆没那么大。传给里面的人啦。", "已經十二個人喇！個花盆冇咁大。傳畀入面嘅人啦。", "¡Ya doce personas! Maceta no tan grande. Pasa a alguien de dentro, ¿eh?", "Ja sou dotze! El test no és tan gran. Passa-la a algú de dins, eh."],
  tag: ["*ties a luggage tag to the pot: {n}*", "*在花盆上系了一张行李牌：{n}*", "*在花盆上繫了一張行李牌：{n}*", "*ata una etiqueta de equipaje a la maceta: {n}*", "*lliga una etiqueta d'equipatge al test: {n}*"],
  sendTo: ["Send it to {n} only. When they open it, it's in their hands.", "只发给{n}。他一打开，花盆就在他手上了。", "只發給{n}。他一打開，花盆就在他手上了。", "Envíasela solo a {n}. Cuando la abra, estará en sus manos.", "Envia-la només a {n}. Quan l'obri, serà a les seves mans."],
  msgNew: ["Hi {n}! Our group has been growing a plant nobody can name. It's {s} now. It grows when people do real things together. Your turn to look after it for a few days, then pass it on:", "{n}你好！我们一群人在种一棵谁也叫不出名字的花。现在是{s}。大家一起做真的事，它就长。轮到你照顾几天了，然后再传下去：", "{n}你好！我們一群人在種一棵誰也叫不出名字的花。現在是{s}。大家一起做真的事，它就長。輪到你照顧幾天了，然後再傳下去：", "¡Hola, {n}! Mi grupo está cultivando una planta que nadie sabe nombrar. Ahora es {s}. Crece cuando la gente hace cosas de verdad juntas. Te toca cuidarla unos días y luego pasarla:", "Hola, {n}! El meu grup està fent créixer una planta que ningú no sap anomenar. Ara és {s}. Creix quan la gent fa coses de debò junta. Et toca cuidar-la uns dies i després passar-la:"],
  msgKnown: ["{n}, the plant's yours for a few days. It's {s} now. Then pass it on:", "{n}，这几天花归你了。现在是{s}。然后再传下去：", "{n}，這幾天花歸你了。現在是{s}。然後再傳下去：", "{n}, la planta es tuya unos días. Ahora es {s}. Luego pásala:", "{n}, la planta és teva uns dies. Ara és {s}. Després passa-la:"],
  sendIt: ["Send it", "发送", "傳送", "Enviar", "Enviar"],
  copy: ["Copy", "复制", "複製", "Copiar", "Copiar"],
  copied: ["Copied", "已复制", "已複製", "Copiado", "Copiat"],
  done: ["Done", "好了", "好了", "Hecho", "Fet"],
  allWei: ["*writes the address on a luggage tag and ties it to the pot*", "*把地址写在行李牌上，系在花盆上*", "*把地址寫在行李牌上，繫在花盆上*", "*escribe la dirección en una etiqueta y la ata a la maceta*", "*escriu l'adreça en una etiqueta i la lliga al test*"],
  allSay: ["Send it to your group chat. Whoever opens it gets the pot as it is now.", "发到你们的群里。谁打开，谁就拿到现在这个样子的花盆。", "發到你們的群組裡。誰打開，誰就拿到現在這個樣子的花盆。", "Envíala a tu grupo. Quien la abra tendrá la maceta tal como está ahora.", "Envia-la al vostre grup. Qui l'obri tindrà el test tal com és ara."],
  allMsg: ["Our plant is {s} now. Come and look:", "我们的花现在是{s}了。来看看：", "我們的花現在是{s}了。來看看：", "Nuestra planta ya es {s}. Venid a verla:", "La nostra planta ja és {s}. Veniu a veure-la:"],

  /* arriving with a pot */
  handed: ["*puts the pot in your hands* {f} pass you this. Nobody know what it is. You look after a few day, ah.", "*把花盆放到你手上* {f}传给你的。谁都不知道是什么。你照顾几天喔。", "*將個花盆放喺你手度* {f}傳畀你嘅。冇人知係咩嚟。你照顧幾日啦。", "*te pone la maceta en las manos* {f} te pasa esto. Nadie sabe qué es. Tú cuidas unos días, ¿eh?", "*et posa el test a les mans* T'ho passa {f}. Ningú no sap què és. Cuida-la uns dies, eh."],
  youre: ["You're {n}. It's {s} now, and {l} have been looking after it.", "你是{n}。它现在是{s}，{l}一直在照顾它。", "你是{n}。它現在是{s}，{l}一直在照顧它。", "Eres {n}. Ahora es {s}, y {l} la han estado cuidando.", "Ets {n}. Ara és {s}, i {l} l'han estat cuidant."],
  youre1: ["You're {n}. It's {s} now, and {l} has been looking after it.", "你是{n}。它现在是{s}，{l}一直在照顾它。", "你是{n}。它現在是{s}，{l}一直在照顧它。", "Eres {n}. Ahora es {s}, y {l} la ha estado cuidando.", "Ets {n}. Ara és {s}, i {l} l'ha estat cuidant."],
  and: [" and ", "和", "和", " y ", " i "],
  take: ["Take the pot", "接过花盆", "接過花盆", "Coger la maceta", "Agafar el test"],
  notMe: ["That's not me", "我不是他", "我不是他", "No soy yo", "No sóc jo"],
  friends: ["*hands you the pot with both hands* Your friends' plant. Careful, ah.", "*双手把花盆递给你* 你朋友们的花。小心点喔。", "*雙手將個花盆遞畀你* 你班朋友嘅花嚟㗎。小心啲呀。", "*te da la maceta con las dos manos* Planta de tus amigos. Cuidado, ¿eh?", "*et dona el test amb les dues mans* La planta dels teus amics. Compte, eh."],
  whichOne: ["Which one are you?", "你是哪一个？", "你是哪一個？", "¿Quién de ellos eres?", "Qui d'ells ets?"],
  broken: ["This link has lost its pot somewhere. Ask whoever sent it to send it again.", "这个链接把花盆弄丢了。请发给你的人再发一次。", "這個連結把花盆弄丟了。請傳給你的人再傳一次。", "Este enlace ha perdido la maceta por el camino. Pide que te lo envíen otra vez.", "Aquest enllaç ha perdut el test pel camí. Demana que te'l tornin a enviar."],
  pots: ["Your other pots", "你的其他花盆", "你的其他花盆", "Tus otras macetas", "Els teus altres testos"],

  /* it blooms */
  bloomed: ["It bloomed.", "开花了。", "開花了。", "Ha florecido.", "Ha florit."],
  label: ["Josep's label, read at last", "Josep 的标签，终于看清了", "Josep 的標籤，終於看清了", "La etiqueta de Josep, por fin", "L'etiqueta d'en Josep, per fi"],
  guessed: ["{n} guessed it.", "{n}猜对了。", "{n}猜對了。", "{n} lo adivinó.", "{n} ho va endevinar."],
  nobody: ["Nobody guessed it. Mei is insisting it's still a flytrap.", "没人猜对。Mei 坚持说它还是捕蝇草。", "沒人猜對。Mei 堅持說它還是捕蠅草。", "Nadie lo adivinó. Mei insiste en que sigue siendo una atrapamoscas.", "Ningú no ho va endevinar. La Mei insisteix que encara és una dionea."],
  popoRight: ["Wah, clever. Josep would laugh. He always say plant tell you itself, if you wait.", "哇，好聪明。Josep 一定会笑的。他总是说，你肯等，花自己会告诉你。", "嘩，好叻呀。Josep 實會笑。佢成日講，你肯等，啲花自己會話你知。", "Wah, listo. Josep ríe. Él siempre dice planta te dice sola, si esperas.", "Wah, que llestos. En Josep riuria. Sempre deia que la planta t'ho diu ella mateixa, si esperes."],
  popoNone: ["Nobody right? Good. Plant tell you itself, Josep always say.", "没人猜对？好啊。花自己会告诉你的，Josep 总是这么说。", "冇人估中？好呀。啲花自己會話你知，Josep 成日咁講。", "¿Nadie acierta? Bien. Planta te dice sola, Josep siempre dice.", "Ningú no l'encerta? Millor. La planta t'ho diu ella mateixa, deia sempre en Josep."],
  real: ["Now grow a real one.", "现在去种一棵真的。", "現在去種一棵真的。", "Ahora plantad una de verdad.", "Ara planteu-ne una de debò."],
  getSeeds: ["Get {p} seeds this week and plant them at someone's house, all of you.", "这周去买{p}的种子，大家一起，在谁家里种下。", "這週去買{p}的種子，大家一起，在誰家裡種下。", "Comprad semillas de {p} esta semana y plantadlas en casa de alguien, todos juntos.", "Compreu llavors de {p} aquesta setmana i planteu-les a casa d'algú, tots junts."],
  plan: ["Plan it with the group", "跟大家约一下", "跟大家約一下", "Organizarlo con el grupo", "Organitzar-ho amb el grup"],
  planMsg: ["It was {p}! Let's grow a real one. Seeds this week, plant them at someone's place. Whose house, and when?", "原来是{p}！我们种一棵真的吧。这周买种子，在谁家种下。去谁家？什么时候？", "原來是{p}！我們種一棵真的吧。這週買種子，在誰家種下。去誰家？什麼時候？", "¡Era {p}! Plantemos una de verdad. Semillas esta semana y a plantarlas en casa de alguien. ¿En casa de quién, y cuándo?", "Era {p}! Plantem-ne una de debò. Llavors aquesta setmana i a plantar-les a casa d'algú. A casa de qui, i quan?"],
  dig: ["*digs a small, enthusiastic hole in the garden. sits next to it. waits for you*", "*在院子里兴冲冲地挖了个小坑。坐在旁边。等你*", "*在院子裡興沖沖地挖了個小坑。坐在旁邊。等你*", "*cava un hoyito entusiasta en el jardín. se sienta al lado. te espera*", "*fa un forat petit i entusiasta al jardí. s'hi asseu al costat. t'espera*"],
  down: ["Put the phone down.", "把手机放下。", "把手機放下。", "Deja el móvil.", "Deixa el mòbil."],
  getSome: ["Go and get some seeds.", "去买种子吧。", "去買種子吧。", "Ve a por semillas.", "Vés a buscar llavors."],
  again: ["Start a new seed", "再种一颗", "再種一顆", "Plantar otra semilla", "Plantar una altra llavor"],
  popoAgain: ["*finds another packet in the tin* Another one. Also no name. Josep, aiya.", "*在饼干罐里又找到一包* 又一包。也没写名字。Josep 啊，哎呀。", "*喺餅乾罐度又搵到一包* 又一包。又冇寫名。Josep 呀，哎呀。", "*encuentra otro sobre en la lata* Otro. Tampoco nombre. Josep, aiya.", "*troba un altre sobre a la capsa* Un altre. Tampoc no té nom. Josep, aiya."],

  /* what the seed might be. Never reorder: a pot keeps the index. Each has a name, the words a guess may use, and three hints
     (Popo from the second leaf, Wei at the little plant, Mei at the bud). */
  SP: [
    { n: ["sweet basil", "罗勒", "羅勒", "albahaca", "alfàbrega"], g: "basil|basilico|罗勒|羅勒|九层塔|九層塔|albahaca|alfàbrega|alfabrega",
      h: [["Leaf soft one, like ear of a mouse.", "叶子软软的，像小老鼠的耳朵喔。", "塊葉軟軟哋，好似老鼠仔隻耳咁。", "Hoja blanda, como oreja de ratón.", "La fulla és tova, com l'orella d'un ratolí."],
          ["*rubs a leaf between his fingers* Smells like… pizza night.", "*用手指搓了搓叶子* 闻起来像……披萨之夜。", "*用手指搓了搓葉子* 聞起來像……披薩之夜。", "*frota una hoja entre los dedos* Huele a… noche de pizza.", "*fa lliscar una fulla entre els dits* Fa olor de… nit de pizza."],
          ["the bud is tiny and white and kind of boring tbh", "花苞小小的、白白的，说实话有点无聊", "花苞小小的、白白的，說實話有點無聊", "el capullo es diminuto y blanco y un poco aburrido la verdad", "el capoll és petitó i blanc i una mica avorrit, la veritat"]] },
    { n: ["sunflower", "向日葵", "向日葵", "girasol", "gira-sol"], g: "sunflower|向日葵|葵花|girasol|gira-sol|girasol",
      h: [["Wah, leaf rough rough. Big also.", "哇，叶子粗粗的。也好大。", "嘩，塊葉粗粗哋。又好大塊。", "Wah, hoja áspera. Grande también.", "Wah, la fulla és aspra. I grossa."],
          ["*measures it twice* It grew more than me this week.", "*量了两次* 它这周长得比我还多。", "*量了兩次* 它這週長得比我還多。", "*la mide dos veces* Esta semana ha crecido más que yo.", "*la mesura dues vegades* Aquesta setmana ha crescut més que jo."],
          ["the bud is like a closed green fist. and it turns to follow the window??", "花苞像一个握紧的绿色拳头。而且它会跟着窗户转？？", "花苞像一個握緊的綠色拳頭。而且它會跟著窗戶轉？？", "el capullo parece un puño verde cerrado. ¿¿y se gira hacia la ventana??", "el capoll sembla un puny verd tancat. i es gira cap a la finestra??"]] },
    { n: ["chilli pepper", "辣椒", "辣椒", "guindilla", "bitxo"], g: "chil|pepper|辣椒|guindilla|chile|ají|aji|pimiento|bitxo|pebrot",
      h: [["Leaf thin and shiny. My mother grow this one in Kowloon, maybe.", "叶子又细又亮。我妈妈以前在九龙好像种过。", "塊葉又幼又亮。我阿媽以前喺九龍好似種過。", "Hoja fina y brillante. Mi madre planta esto en Kowloon, quizá.", "La fulla és fina i brillant. Potser la meva mare en plantava a Kowloon."],
          ["*sniffs* Nothing yet. Something's waiting.", "*闻了闻* 还没什么味道。有什么在等着。", "*聞了聞* 還沒什麼味道。有什麼在等著。", "*huele* Nada aún. Algo está esperando.", "*ensuma* Encara res. Alguna cosa espera."],
          ["little white flowers and something tiny and green under them. suspicious", "小白花，下面还有一点点绿绿的东西。可疑", "小白花，下面還有一點點綠綠的東西。可疑", "florecitas blancas y algo diminuto y verde debajo. sospechoso", "floretes blanques i una cosa petitona i verda a sota. sospitós"]] },
    { n: ["sweet pea", "香豌豆", "香豌豆", "guisante de olor", "pèsol d'olor"], g: "pea|豌豆|guisante|chícharo|pèsol|pesol",
      h: [["Aiya, it grab my finger! Curly curly.", "哎呀，它抓住我的手指了！卷卷的。", "哎呀，佢捉住我隻手指！曲曲哋。", "Aiya, ¡agarra mi dedo! Rizado rizado.", "Aiya, m'ha agafat el dit! Tot arrissat."],
          ["*ties it to a chopstick* It wants to climb.", "*把它绑在一根筷子上* 它想往上爬。", "*把它綁在一根筷子上* 它想往上爬。", "*la ata a un palillo* Quiere trepar.", "*la lliga a un bastonet* Vol enfilar-se."],
          ["it smells sweet like the expensive candle at the mall. pink bud", "闻起来甜甜的，像商场里很贵的那种蜡烛。粉色花苞", "聞起來甜甜的，像商場裡很貴的那種蠟燭。粉色花苞", "huele dulce como la vela cara del centro comercial. capullo rosa", "fa una olor dolça com l'espelma cara del centre comercial. capoll rosa"]] },
    { n: ["cherry tomato", "樱桃番茄", "櫻桃番茄", "tomate cherry", "tomàquet cirera"], g: "tomat|番茄|西红柿|西紅柿|蕃茄|tomate|tomàquet|tomaquet",
      h: [["Leaf a bit hairy. Touch it, your hand smell green.", "叶子有点毛毛的。摸一下，手都是青草味。", "塊葉有啲毛毛哋。摸一摸，你隻手都有陣青草味。", "Hoja un poco peluda. Tocas, mano huele verde.", "La fulla és una mica peluda. La toques i la mà fa olor de verd."],
          ["*sniffs his fingers* That's… a summer smell.", "*闻了闻自己的手指* 这是……夏天的味道。", "*聞了聞自己的手指* 這是……夏天的味道。", "*se huele los dedos* Eso es… olor a verano.", "*s'ensuma els dits* Això és… olor d'estiu."],
          ["small yellow star flowers. i am NOT saying what i think it is", "黄色的小星星花。我绝对不说我觉得是什么", "黃色的小星星花。我絕對不說我覺得是什麼", "florecitas amarillas en forma de estrella. NO voy a decir lo que creo que es", "floretes grogues en forma d'estrella. NO diré què crec que és"]] },
    { n: ["nasturtium", "旱金莲", "旱金蓮", "capuchina", "caputxina"], g: "nasturt|旱金莲|旱金蓮|金莲花|金蓮花|capuchina|taco de reina|caputxina",
      h: [["Leaf round like little coin. Water sit on it like glass bead.", "叶子圆圆的，像小硬币。水珠停在上面，像玻璃珠喔。", "塊葉圓碌碌，好似個細銀仔。啲水珠喺上面，好似玻璃珠咁。", "Hoja redonda como moneda. Agua se queda encima como cuenta de cristal.", "La fulla és rodona com una moneda petita. L'aigua s'hi queda com una perla de vidre."],
          ["*tilts a leaf; a drop rolls off* Look at that.", "*把叶子一斜，一滴水滚了下来* 你看。", "*把葉子一斜，一滴水滾了下來* 你看。", "*inclina una hoja; una gota rueda* Mira eso.", "*inclina una fulla; una gota rodola* Mira això."],
          ["orange bud?? and apparently you can EAT the flowers. wild", "橙色花苞？？而且听说花可以吃。离谱", "橙色花苞？？而且聽說花可以吃。離譜", "¿¿capullo naranja?? y al parecer las flores se pueden COMER. qué fuerte", "capoll taronja?? i pel que sembla les flors es poden MENJAR. flipant"]] }
  ]
};
