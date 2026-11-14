/* ===== A saved seat (?seat=1: the boba on wei-meng.org) =====
   fbl.js has already made it Wei's visit, awake and behind the counter, with no door question. Here he says he kept you a
   seat... now (Nov 14, the owner): he says he's not Wei Meng, treats Wei Meng's friends, and asks what they'll have. Once a visit. */
(function () {
  if (!/(^|[?&])seat=1(&|#|$)/.test(location.search)) return;
  try { if (sessionStorage.getItem('nd_seated')) return; } catch (e) {}
  /* Nov 14, the owner: a visitor from wei-meng.org first hears that this Wei isn't Wei Meng, then that Wei Meng's friends drink on
     the house, then gets asked what they'd like: witty and chill. [en, zh, zh-Hant, yue, es, ca] */
  const T = {
    hi: ["Ah, you came over from wei-meng.org. Quick thing before you ask: I'm Wei. Not Wei Meng. Same round glasses, different guy. He builds the things; I pour the things.",
      "啊，你是从 wei-meng.org 过来的吧。先说清楚：我是 Wei，不是孟玮。一样的圆眼镜，不一样的人。他负责做东西，我负责倒东西。",
      "啊，你是從 wei-meng.org 過來的吧。先說清楚：我是 Wei，不是孟瑋。一樣的圓眼鏡，不一樣的人。他負責做東西，我負責倒東西。",
      "啊，你係由 wei-meng.org 過嚟嘅啩。講清楚先：我係 Wei，唔係孟瑋。一樣嘅圓眼鏡，唔同嘅人。佢負責整嘢，我負責斟嘢。",
      "Ah, vienes de wei-meng.org. Antes de que preguntes: soy Wei. No Wei Meng. Mismas gafas redondas, otra persona. Él construye cosas; yo sirvo cosas.",
      "Ah, véns de wei-meng.org. Abans que ho preguntis: sóc en Wei. No en Wei Meng. Les mateixes ulleres rodones, una altra persona. Ell construeix coses; jo serveixo coses."],
    ask: ["Still, a friend of his drinks on me. House rules, mine. So: what are we having?",
      "不过，他的朋友来了，这杯算我的。我的规矩。那么，喝点什么？",
      "不過，他的朋友來了，這杯算我的。我的規矩。那麼，喝點什麼？",
      "不過，佢嘅朋友嚟到，呢杯我請。我嘅規矩。咁，飲啲咩？",
      "Aun así, sus amigos beben invitados por mí. Normas de la casa, mías. Bueno: ¿qué tomamos?",
      "Tot i així, els seus amics beuen convidats per mi. Normes de la casa, les meves. Doncs: què prenem?"],
    usual: ["Whatever Wei Meng usually has", "孟玮平时喝的那个", "孟瑋平時喝的那個", "孟瑋平時飲開嗰杯", "Lo que suele tomar Wei Meng", "El que pren normalment en Wei Meng"],
    usualSay: ["His usual. He orders it, then talks so much it goes warm. Drink yours cold.", "他的老样子。每次点了就一直讲话，讲到酒都温了。你的趁冰喝。", "他的老樣子。每次點了就一直講話，講到酒都溫了。你的趁冰喝。", "佢嘅老樣。次次叫完就講個不停，講到杯嘢都暖埋。你嗰杯趁凍飲。", "Lo de siempre. Lo pide y luego habla tanto que se le calienta. Tú bébetelo frío.", "El de sempre. El demana i després parla tant que se li escalfa. Tu beu-te'l fred."],
    light: ["Something light", "来点清爽的", "來點清爽的", "嚟啲清爽嘅", "Algo ligero", "Alguna cosa lleugera"],
    lightSay: ["Light it is. Unlike his to-do list.", "清爽的来了。比他的待办清单轻多了。", "清爽的來了。比他的待辦清單輕多了。", "清爽嘅嚟喇。比佢張待辦清單輕得多。", "Ligero, marchando. No como su lista de pendientes.", "Lleuger, marxant. No com la seva llista de pendents."],
    strong: ["Something strong", "来点烈的", "來點烈的", "嚟啲勁嘅", "Algo fuerte", "Alguna cosa forta"],
    strongSay: ["Strong. Like his opinions about fonts.", "烈的。跟他对字体的意见一样烈。", "烈的。跟他對字體的意見一樣烈。", "勁嘅。好似佢對字體嘅意見咁勁。", "Fuerte. Como sus opiniones sobre tipografías.", "Fort. Com les seves opinions sobre tipografies."],
    menu: ["Let me see the menu", "我先看看菜单", "我先看看菜單", "我睇睇餐牌先", "Déjame ver la carta", "Deixa'm veure la carta"]
  };
  const ok = () => { try { return AppState.weiState === 'awake' && !(window.WeiAway && WeiAway.on()) && window.FBWorld && FBWorld.host().who === 'wei'; } catch (e) { return false; } };
  let tries = 0;
  const t = setInterval(() => {
    if (++tries > 2400) return clearInterval(t);   /* ten minutes at most */
    if (typeof AppState === 'undefined' || !AppState.inSanctuary) return;
    /* a newcomer reads the town's privacy card first: he waits until it's put away */
    try { if (!localStorage.getItem('fb_priv_intro')) return; } catch (e) {}
    clearInterval(t);
    setTimeout(() => {
      if (!ok()) return;
      try { sessionStorage.setItem('nd_seated', '1'); } catch (e) {}
      try { SoundEngine.playShaker(); } catch (e) {}
      try { animateWei('wei-wiggle'); } catch (e) {}
      const Lx = k => L(lx(T[k])), serve = (key, k) => { if (ok()) serveItemByKey(key, { line: Lx(k) }); };
      if (window.NDSay) NDSay(Lx('hi'));
      setTimeout(() => {
        if (!ok()) return;
        const bar = !!AppState.isBarOpen;
        renderWei(Lx('ask'), [
          { label: Lx('usual'), onClick: () => serve('wei_notebook', 'usualSay') },
          { label: Lx('light'), onClick: () => serve(bar ? 'catalan_vermut' : 'barceloneta_cortado', 'lightSay') },
          { label: Lx('strong'), onClick: () => serve(bar ? 'smoked_rosemary' : 'dirty_espresso', 'strongSay') },
          { label: Lx('menu'), onClick: () => { try { toggleCodexModal(true); } catch (e) {} } }
        ]);
      }, 7500);   /* time to read the first line */
    }, 1200);
  }, 250);
})();
