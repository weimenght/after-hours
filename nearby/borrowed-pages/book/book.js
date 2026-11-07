/* 歲月地圖, the house reading copy at Borrowed Pages (the owner's book, Nov 8): a real book you open and turn.
   FBBook.open({ lang, onClose }) shows it over the page. The words come from suiyue.json (made by nearby-source/build/borrowed/book/make.py).
   Nothing is sent anywhere; where you stopped, the script (繁/简), the readings and the size stay on this device (fb_book_suiyue). */
(function () {
  if (window.FBBook) return;
  var DV = "6ba74ab67c";
  var SRC = (document.currentScript && document.currentScript.src) || "/nearby/borrowed-pages/book/book.js";
  var BASE = SRC.replace(/book\.js.*$/, "");
  var LI = { en: 0, zh: 1, "zh-Hant": 2, es: 3, ca: 4 };
  var W5 = {
    close: ["Close the book", "合上书", "合上書", "Cerrar el libro", "Tancar el llibre"],
    contents: ["Contents", "目录", "目錄", "Índice", "Índex"],
    size: ["Text size", "字号", "字級", "Tamaño del texto", "Mida del text"],
    script: ["Simplified or Traditional characters", "简体或繁体", "簡體或繁體", "Caracteres simplificados o tradicionales", "Caràcters simplificats o tradicionals"],
    phon: ["Readings over the harder words", "在难词上标拼音", "在難詞上標注音", "Lectura sobre las palabras difíciles", "Lectura sobre les paraules difícils"],
    where: ["Where the stories happen", "故事发生的地方", "故事發生的地方", "Dónde pasan las historias", "On passen les històries"],
    sub: ["Twenty-two stories · 1907–2026", "二十二篇小说 · 1907–2026", "二十二篇小說 · 1907–2026", "Veintidós relatos · 1907–2026", "Vint-i-dues històries · 1907–2026"],
    fic: ["The history around these stories is real, with its sources. The people and what happens to them are made up.", "历史背景附参考来源；人物与情节为虚构，不等同于史实。", "歷史背景附參考來源；人物與情節為虛構，不等同於史實。", "La historia que rodea estos relatos es real y lleva sus fuentes. Las personas y lo que les pasa son inventados.", "La història que envolta aquests relats és real i porta les seves fonts. Les persones i el que els passa són inventats."],
    words: ["Written in Chinese. Tap an underlined word for what it means.", "点一下带下划线的词，看它的意思。", "點一下帶底線的詞，看它的意思。", "Escrito en chino. Toca una palabra subrayada para ver qué significa.", "Escrit en xinès. Toca una paraula subratllada per veure què vol dir."],
    house: ["A reading copy. It stays in the corner by the window.", "店内阅读本。这本留在窗边的角落里。", "店內閱讀本。這本留在窗邊的角落裡。", "Ejemplar de lectura. Se queda en el rincón junto a la ventana.", "Exemplar de lectura. Es queda al racó de la finestra."],
    bp: ["Borrowed Pages", "借来的书", "借來的書", "Páginas Prestadas", "Pàgines Manllevades"],
    end: ["Read one tonight. Then tell someone about it.", "今晚读一篇。然后讲给一个人听。", "今晚讀一篇。然後講給一個人聽。", "Lee uno esta noche. Luego cuéntaselo a alguien.", "Llegeix-ne un aquesta nit. Després explica-ho a algú."],
    min: ["about {n} min", "约 {n} 分钟", "約 {n} 分鐘", "unos {n} min", "uns {n} min"],
    bg: ["Background", "历史背景", "歷史背景", "Contexto", "Context"],
    src: ["Sources", "参考资料", "參考資料", "Fuentes", "Fonts"],
    hint: ["Tap the edge of the page, or swipe, to turn it", "点页边，或滑动，翻页", "點頁邊，或滑動，翻頁", "Toca el borde de la página, o desliza, para pasarla", "Toca la vora de la pàgina, o llisca, per passar-la"],
    meaning: ["Meaning", "释义", "釋義", "Significado", "Significat"],
    eng: ["English", "英文", "英文", "Inglés", "Anglès"],
    mand: ["In Mandarin", "普通话读音", "普通話讀音", "En mandarín", "En mandarí"],
    prev: ["Previous page", "上一页", "上一頁", "Página anterior", "Pàgina anterior"],
    next: ["Next page", "下一页", "下一頁", "Página siguiente", "Pàgina següent"],
    open: ["Open it", "翻开", "翻開", "Ábrelo", "Obre'l"]
  };
  var SC = [["岁月地图", "歲月地圖"]][0];
  var LEAD = ["二十二篇小说，从1907年的敦煌到2026年的除夕。", "二十二篇小說，從1907年的敦煌到2026年的除夕。"];
  var LEAD_EN = "Twenty-two short stories set across China, from Dunhuang in 1907 to New Year's Eve in 2026.";
  var END_MARK = ["完", "完"];

  var D = null, loading = null, ui = 0, root = null, st = null, opts = {}, lastFocus = null;
  function load() {
    if (D) return Promise.resolve(D);
    if (!loading) loading = fetch(BASE + "suiyue.json?v=" + DV).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (j) { D = j; return j; });
    return loading;
  }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function w(k) { return W5[k][ui] || W5[k][0]; }
  function zh(a) { return a ? (typeof a === "string" ? a : a[st.sc] || a[0]) : ""; }
  function reduced() { return matchMedia("(prefers-reduced-motion: reduce)").matches; }

  /* ---------------- the look ---------------- */
  var CSS = "" +
    ".fbbk{position:fixed;inset:0;z-index:9000;display:flex;flex-direction:column;align-items:center;--cloth:#27464d;--cloth2:#1c353b;--gold:#d9b66c;--paper:#f6efdf;--paper2:#ece2cb;--ink:#2a231b;--ink2:#6b5d4a;--red:#9b3a2c;" +
    "background:radial-gradient(120% 90% at 50% 40%,#5a4330 0%,#3a2a1d 55%,#21170f 100%);color:var(--ink);opacity:0;transition:opacity .25s;-webkit-tap-highlight-color:transparent;font-family:var(--zhf)}" +
    ".fbbk.on{opacity:1}" +
    ".fbbk *{box-sizing:border-box}" +
    ".fbbk.s{--zhf:'Songti SC','STSong','Noto Serif SC','Noto Serif CJK SC','Source Han Serif SC','SimSun',serif}" +
    ".fbbk.t{--zhf:'Songti TC','Noto Serif TC','Noto Serif CJK TC','Source Han Serif TC','PMingLiU','Songti SC',serif}" +
    ".fbbk .lat{font-family:Fraunces,'Iowan Old Style',Georgia,serif}" +
    "@media (prefers-color-scheme:dark){.fbbk{--paper:#ece2cc;--paper2:#ded2b8;background:radial-gradient(120% 90% at 50% 40%,#3a2c20 0%,#21180f 60%,#120c07 100%)}}" +
    ".fbbk-bar{flex:none;width:100%;display:flex;align-items:center;gap:6px;padding:max(8px,env(safe-area-inset-top)) 10px 6px;color:#f3e6cc}" +
    ".fbbk-bar .sp{flex:1}" +
    ".fbbk-b{min-width:44px;height:40px;padding:0 10px;border-radius:20px;border:1px solid rgba(243,230,204,.28);background:rgba(20,13,8,.35);color:#f3e6cc;font:15px/1 var(--zhf);display:inline-flex;align-items:center;justify-content:center;gap:6px;cursor:pointer}" +
    ".fbbk-b:hover{background:rgba(20,13,8,.55)}.fbbk-b[aria-pressed=true]{background:#f3e6cc;color:#2a231b;border-color:#f3e6cc}" +
    ".fbbk-b svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}" +
    ".fbbk-b:focus-visible{outline:2px solid var(--gold);outline-offset:2px}.fbbk-stage:focus{outline:none}" +
    ".fbbk-stage{flex:1;width:100%;position:relative;display:flex;align-items:center;justify-content:center;touch-action:pan-y;user-select:none;-webkit-user-select:none;outline:none;overflow:hidden}" +
    ".fbbk-pers{perspective:2600px;perspective-origin:50% 50%}" +
    ".fbbk-bk{position:relative;width:calc(var(--pw)*var(--n));height:var(--ph);transition:transform .45s cubic-bezier(.3,.7,.3,1);transform-style:preserve-3d}" +
    ".fbbk-bk.nod{transition:none}" +
    ".fbbk-slot{position:absolute;top:0;width:var(--pw);height:var(--ph)}" +
    ".fbbk-slot.L{left:0}.fbbk-slot.R{right:0}" +
    /* the page block under the open pages: a few edges of paper */
    ".fbbk-slot .edge{position:absolute;top:3px;bottom:3px;width:var(--e,0px);background:repeating-linear-gradient(90deg,#e7dcc3 0 1px,#cfc1a3 1px 2px);border-radius:2px;box-shadow:0 8px 18px rgba(0,0,0,.35)}" +
    ".fbbk-slot.L .edge{right:100%}.fbbk-slot.R .edge{left:100%}" +
    ".fbbk-leaf{position:absolute;top:0;right:0;width:var(--pw);height:var(--ph);transform-origin:0 50%;transform-style:preserve-3d;z-index:3;will-change:transform}" +
    ".fbbk-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}" +
    ".fbbk-face.bk2{transform:rotateY(180deg)}" +
    ".fbbk-sh{position:absolute;inset:0;pointer-events:none;opacity:0}" +
    ".fbbk-face.fr .fbbk-sh{background:linear-gradient(90deg,rgba(0,0,0,.28),rgba(0,0,0,.05) 40%,rgba(255,255,255,.12) 85%,rgba(0,0,0,.18))}" +
    ".fbbk-face.bk2 .fbbk-sh{background:linear-gradient(270deg,rgba(0,0,0,.3),rgba(0,0,0,.04) 45%,rgba(255,255,255,.1) 85%,rgba(0,0,0,.12))}" +
    ".fbbk-cast{position:absolute;inset:0;pointer-events:none;opacity:0;background:linear-gradient(90deg,rgba(0,0,0,.35),rgba(0,0,0,0) 60%)}" +
    /* one page */
    ".fbbk-pg{position:absolute;inset:0;background:var(--paper);overflow:hidden;font-size:var(--fs);line-height:1.85;color:var(--ink)}" +
    ".fbbk-pg::after{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(140% 100% at 50% 50%,transparent 60%,rgba(120,90,40,.10))}" +
    ".fbbk-pg.v{border-radius:4px 0 0 4px;box-shadow:inset -18px 0 22px -16px rgba(60,40,10,.38)}" +
    ".fbbk-pg.r{border-radius:0 4px 4px 0;box-shadow:inset 18px 0 22px -16px rgba(60,40,10,.38)}" +
    ".fbbk.one .fbbk-pg{border-radius:0 4px 4px 0;box-shadow:inset 14px 0 18px -14px rgba(60,40,10,.4)}" +
    ".fbbk-pg.blank{background:var(--paper)}" +
    ".fbbk-pg.rev{background:var(--paper2)}" +
    ".fbbk-hd,.fbbk-ft{position:absolute;left:var(--mx);right:var(--mx);font-size:calc(var(--fs)*.62);color:var(--ink2);letter-spacing:.12em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    ".fbbk-hd{top:calc(var(--my)*.45)}.fbbk-ft{bottom:calc(var(--my)*.4);letter-spacing:.06em}" +
    ".fbbk-pg.v .fbbk-hd,.fbbk-pg.v .fbbk-ft{text-align:left}.fbbk-pg.r .fbbk-hd,.fbbk-pg.r .fbbk-ft{text-align:right}" +
    ".fbbk-tx{position:absolute;top:var(--my);left:var(--mx);width:var(--iw);height:var(--ih);overflow:hidden}" +
    ".fbbk-fl{width:var(--iw);height:var(--ih);column-width:var(--iw);column-gap:var(--cg);column-fill:auto;text-align:justify;text-justify:inter-character;line-break:strict;hanging-punctuation:allow-end}" +
    ".fbbk-fl p{margin:0;text-indent:2em;orphans:2;widows:2}" +
    ".fbbk-fl h3{margin:1em 0 .5em;font-size:1em;font-weight:600;text-align:center;letter-spacing:.2em;break-after:avoid}" +
    ".fbbk-fl pre{white-space:pre-wrap;font:calc(var(--fs)*.82)/1.7 ui-monospace,Menlo,monospace;color:#3d5a52;margin:.6em 0;padding-left:1em;border-left:2px solid #c9bb99}" +
    ".fbbk-fl .fin{text-align:center;margin:1.2em 0 0;letter-spacing:.5em;color:var(--red);text-indent:0}" +
    ".fbbk-fl .nt{break-before:column;font-size:.8em;line-height:1.75;color:#4a3f31}" +
    ".fbbk-fl .nt h4{margin:0 0 .2em;font-size:.72em;letter-spacing:.3em;color:var(--red);font-weight:400}" +
    ".fbbk-fl .nt h5{margin:0 0 .8em;font-size:1.05em;font-weight:600;line-height:1.5}" +
    ".fbbk-fl .nt p{text-indent:0;margin:0 0 .7em}" +
    ".fbbk-fl .nt ul{margin:.4em 0 0;padding:0;list-style:none;font-size:.9em}" +
    ".fbbk-fl .nt li{margin:0 0 .35em;padding-left:1em;text-indent:-1em}" +
    ".fbbk-fl .nt a{color:#3d5a52;text-decoration:underline;text-decoration-color:rgba(61,90,82,.4);text-underline-offset:3px}" +
    ".fbbk .wd{cursor:pointer;text-decoration:underline dotted rgba(155,58,44,.55);text-underline-offset:.28em;text-decoration-thickness:1.5px;border-radius:2px}" +
    ".fbbk .wd.dl{text-decoration:underline wavy rgba(63,107,94,.55);text-decoration-thickness:1px}" +
    ".fbbk .wd.hot{background:rgba(217,182,108,.35)}" +
    ".fbbk ruby{ruby-position:over}.fbbk rt{font-size:.48em;color:var(--red);letter-spacing:0;font-family:var(--zhf);line-height:1}" +
    /* cover and endpapers */
    ".fbbk-pg.cv{background:var(--cloth);color:var(--gold);border-radius:3px 7px 7px 3px;box-shadow:inset 9px 0 10px -6px rgba(0,0,0,.55),inset 0 0 0 1px rgba(0,0,0,.3)}" +
    ".fbbk-pg.cv::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.035) 0 1px,transparent 1px 3px),repeating-linear-gradient(90deg,rgba(0,0,0,.06) 0 1px,transparent 1px 3px)}" +
    ".fbbk-pg.cv::after{background:radial-gradient(120% 90% at 30% 20%,rgba(255,255,255,.08),transparent 55%,rgba(0,0,0,.25))}" +
    ".fbbk-pg.cv.bkc{border-radius:7px 3px 3px 7px;box-shadow:inset -9px 0 10px -6px rgba(0,0,0,.55),inset 0 0 0 1px rgba(0,0,0,.3)}" +
    ".fbbk-cvi{position:absolute;inset:7% 9%;border:1.5px solid rgba(217,182,108,.55);display:flex;flex-direction:column;align-items:center;text-align:center;padding:12% 6% 8%}" +
    ".fbbk-cvi::before{content:'';position:absolute;inset:5px;border:1px solid rgba(217,182,108,.3)}" +
    ".fbbk-cvt{font-size:calc(var(--pw)*.13);letter-spacing:.18em;line-height:1.2;font-weight:600;margin-right:-.18em;text-shadow:0 1px 0 rgba(0,0,0,.4)}" +
    ".fbbk-cvs{margin-top:1.2em;font-size:calc(var(--pw)*.042);letter-spacing:.2em;opacity:.85}" +
    ".fbbk-cvm{flex:1;width:100%;margin:6% 0;min-height:0}" +
    ".fbbk-cvm svg{width:100%;height:100%}" +
    ".fbbk-cvm .ld{fill:none;stroke:rgba(217,182,108,.32);stroke-width:.8}.fbbk-cvm .bd{fill:none;stroke:rgba(217,182,108,.7);stroke-width:1.2}.fbbk-cvm circle{fill:var(--gold)}" +
    ".fbbk-cvb{font-size:calc(var(--pw)*.034);letter-spacing:.25em;opacity:.75}" +
    ".fbbk-bkt{position:absolute;inset:16% 13%;color:rgba(239,220,180,.9);font-size:calc(var(--pw)*.045);line-height:1.9;text-align:center;display:flex;flex-direction:column;justify-content:center;gap:1.2em}" +
    ".fbbk-bkt .lat{font-size:.9em;font-style:italic;opacity:.8}" +
    ".fbbk-pg.ep{background:#d9cfb5}" +
    ".fbbk-pg.ep::before{content:'';position:absolute;inset:0;opacity:.55;background:radial-gradient(circle at 25% 25%,#c7b994 1.2px,transparent 1.6px) 0 0/14px 14px,radial-gradient(circle at 75% 75%,#c7b994 1.2px,transparent 1.6px) 0 0/14px 14px}" +
    ".fbbk-plate{position:absolute;left:50%;bottom:12%;transform:translateX(-50%) rotate(-1.5deg);width:62%;background:#fbf6ea;border:1px solid #b9a679;padding:.9em 1em;text-align:center;box-shadow:0 2px 0 rgba(0,0,0,.08);font-size:calc(var(--fs)*.72);line-height:1.6;color:var(--ink2)}" +
    ".fbbk-plate b{display:block;font-size:1.15em;color:var(--ink);letter-spacing:.12em;margin-bottom:.3em;font-weight:600}" +
    ".fbbk-plate .dot{display:block;width:12px;height:12px;border-radius:50%;background:#b68a3c;margin:0 auto .5em;box-shadow:0 0 0 2px rgba(0,0,0,.12)}" +
    /* the map */
    ".fbbk-map{position:absolute;inset:var(--my) var(--mx)}" +
    ".fbbk-map h4{margin:0 0 .6em;text-align:center;font-weight:400;letter-spacing:.3em;font-size:.8em;color:var(--ink2)}" +
    ".fbbk-map svg{display:block;width:100%;height:calc(100% - 2.4em)}" +
    ".fbbk-map .ld{fill:#ece0c3;stroke:#bca983;stroke-width:.6}.fbbk-map .bd{fill:none;stroke:#8e7650;stroke-width:1;stroke-dasharray:3 2}" +
    ".fbbk-map text{fill:#8e7a5a;paint-order:stroke;stroke:#ece0c3;font-family:var(--zhf)}" +
    ".fbbk-map .pin{cursor:pointer}.fbbk-map .pin circle{fill:var(--red);stroke:#fbf6ea;stroke-width:1.2}.fbbk-map .pin:hover circle{fill:#c0573f}" +
    ".fbbk-map .pin text.n{fill:#fff;stroke:none;font-family:Fraunces,Georgia,serif;font-weight:600;text-anchor:middle;dominant-baseline:central}" +
    /* title, imprint, contents, openers */
    ".fbbk-ttl{position:absolute;inset:18% var(--mx) 12%;display:flex;flex-direction:column;align-items:center;text-align:center}" +
    ".fbbk-ttl h1{margin:0;font-size:calc(var(--fs)*2.3);letter-spacing:.2em;margin-right:-.2em;font-weight:600}" +
    ".fbbk-ttl .s{margin-top:1.1em;font-size:.82em;color:var(--ink2);letter-spacing:.15em}" +
    ".fbbk-ttl .orn{margin:1.6em 0;width:40%;height:1px;background:linear-gradient(90deg,transparent,#a8946c,transparent)}" +
    ".fbbk-ttl .ld{font-size:.85em;line-height:2;max-width:18em;color:#4a3f31}" +
    ".fbbk-ttl .le{margin-top:1em;font-size:.78em;line-height:1.6;max-width:22em;color:var(--ink2);font-style:italic}" +
    ".fbbk-ttl .ft{margin-top:auto;font-size:.68em;letter-spacing:.3em;color:var(--ink2)}" +
    ".fbbk-imp{position:absolute;left:var(--mx);right:var(--mx);bottom:var(--my);font-size:.72em;line-height:1.8;color:var(--ink2)}" +
    ".fbbk-imp p{margin:0 0 .9em}.fbbk-imp .lat{font-size:.95em}" +
    ".fbbk-toc h4{margin:0 0 1em;text-align:center;font-weight:400;letter-spacing:.5em;font-size:.95em}" +
    ".fbbk-te{display:flex;align-items:baseline;gap:.6em;padding:.32em 0;color:inherit;text-decoration:none;cursor:pointer;break-inside:avoid;line-height:1.45}" +
    ".fbbk-te .y{flex:none;font-family:Fraunces,Georgia,serif;font-size:.78em;color:var(--red);width:2.6em}" +
    ".fbbk-te .tt{flex:1;min-width:0}.fbbk-te .tt small{display:block;font-size:.66em;color:var(--ink2);letter-spacing:.05em}" +
    ".fbbk-te .pn{flex:none;font-family:Fraunces,Georgia,serif;font-size:.78em;color:var(--ink2)}" +
    ".fbbk-te:hover .tt{color:var(--red)}" +
    ".fbbk-op{position:absolute;inset:calc(var(--my)*1.3) var(--mx) var(--my);display:flex;flex-direction:column;align-items:center;text-align:center}" +
    ".fbbk-op .yr{font-family:Fraunces,Georgia,serif;font-size:calc(var(--fs)*2.6);line-height:1;color:var(--red);font-weight:300;letter-spacing:.04em}" +
    ".fbbk-op .se{margin-top:1.1em;font-size:.68em;letter-spacing:.4em;color:var(--ink2)}" +
    ".fbbk-op h2{margin:.5em 0 0;font-size:calc(var(--fs)*1.45);line-height:1.45;font-weight:600;letter-spacing:.08em}" +
    ".fbbk-op .pl{margin-top:.6em;font-size:.74em;color:var(--ink2);letter-spacing:.06em}" +
    ".fbbk-op .mm{flex:1;width:72%;min-height:0;margin:5% 0}.fbbk-op .mm svg{width:100%;height:100%}" +
    ".fbbk-op .mm .ld{fill:#eee3c8;stroke:#c2b08a;stroke-width:.7}.fbbk-op .mm .bd{fill:none;stroke:#a08a62;stroke-width:1;stroke-dasharray:3 2}.fbbk-op .mm circle.h{fill:rgba(155,58,44,.18)}.fbbk-op .mm circle.d{fill:var(--red);stroke:#fbf6ea;stroke-width:1.5}" +
    ".fbbk-op .en{font-size:.72em;line-height:1.6;color:#4a3f31;max-width:24em}.fbbk-op .en i{display:block;font-size:1.1em;margin-bottom:.3em;color:var(--ink)}" +
    ".fbbk-op .zs{font-size:.8em;line-height:1.8;color:#4a3f31;max-width:20em}" +
    ".fbbk-op .mn{margin-top:.9em;font-size:.62em;letter-spacing:.2em;color:var(--ink2)}" +
    ".fbbk-col{position:absolute;inset:30% calc(var(--mx)*1.2) 20%;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.4em;font-size:.9em;line-height:1.9}" +
    ".fbbk-col .orn{width:30%;height:1px;background:linear-gradient(90deg,transparent,#a8946c,transparent)}" +
    ".fbbk-col .m{font-size:.75em;color:var(--ink2)}" +
    /* the measuring room, the word slip, the hint */
    ".fbbk-meas{position:absolute;left:-99999px;top:0;visibility:hidden;pointer-events:none}" +
    ".fbbk-slip{position:absolute;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translate(-50%,calc(100% + 60px));visibility:hidden;width:min(92vw,380px);background:#fbf6ea;color:var(--ink);border:1px solid #c9b88f;border-radius:6px;box-shadow:0 14px 36px rgba(0,0,0,.45);padding:14px 18px 16px;z-index:9;transition:transform .28s cubic-bezier(.3,.7,.3,1),visibility .28s}" +
    ".fbbk-slip.on{transform:translate(-50%,0);visibility:visible}" +
    ".fbbk-slip .k{font-size:11px;letter-spacing:.25em;color:var(--red)}.fbbk-slip .k.dl{color:#3f6b5e}" +
    ".fbbk-slip .w{font-size:28px;font-weight:600;letter-spacing:.06em;line-height:1.3;margin:.1em 0}" +
    ".fbbk-slip .r{font-size:15px;color:var(--ink2);font-family:Fraunces,Georgia,var(--zhf)}" +
    ".fbbk-slip dl{margin:.6em 0 0;font-size:15px;line-height:1.6}.fbbk-slip dt{font-size:11px;letter-spacing:.2em;color:var(--ink2);margin-top:.4em}.fbbk-slip dd{margin:0}" +
    ".fbbk-slip .n{margin:.6em 0 0;font-size:13px;color:var(--ink2);line-height:1.6}" +
    ".fbbk-hint{position:absolute;left:0;right:0;bottom:max(10px,env(safe-area-inset-bottom));text-align:center;color:rgba(243,230,204,.75);font:14px/1.4 Fraunces,Georgia,var(--zhf);pointer-events:none;opacity:0;transition:opacity .6s}" +
    ".fbbk-hint.on{opacity:1}" +
    ".fbbk-load{color:#f3e6cc;font:16px Fraunces,Georgia,serif;opacity:.7}" +
    "@media (hover:none),(pointer:coarse){.fbbk-kb{display:none}}";

  /* ---------------- words on the page ---------------- */
  function ruby(e, word) {
    var rs = st.sc ? e.rz : e.rp, ch = Array.from(word);
    if (rs && rs.length === ch.length) return ch.map(function (c, i) { return "<ruby>" + esc(c) + "<rt>" + esc(rs[i]) + "</rt></ruby>"; }).join("");
    return "<ruby>" + esc(word) + "<rt>" + esc(st.sc ? e.zy : e.py) + "</rt></ruby>";
  }
  function segs(arr) {
    return (arr || []).map(function (sg) {
      var t = sg[st.sc] || sg[0], e = sg[2] && D.lex[sg[2]];
      if (!e) return esc(t);
      var dia = e.k === "d";
      return '<span class="wd' + (dia ? " dl" : "") + '" data-k="' + esc(sg[2]) + '" role="button" tabindex="-1">' + (st.rb && !dia && (e.py || e.zy) ? ruby(e, t) : esc(t)) + "</span>";
    }).join("");
  }
  function storyFlow(s) {
    var h = "";
    s.body.forEach(function (b) {
      if (b.t === "h") h += "<h3>" + segs(b.s) + "</h3>";
      else if (b.t === "c") h += "<pre>" + b.l.map(function (l) { return esc(zh(l)); }).join("\n") + "</pre>";
      else h += "<p>" + segs(b.s) + "</p>";
    });
    h += '<p class="fin">' + END_MARK[st.sc] + "</p>";
    h += '<div class="nt"><h4>' + esc(w("bg")) + "</h4><h5>" + esc(zh(s.hTitle)) + "</h5><p>" + segs(s.history) + "</p>";
    if (s.sources && s.sources.length) h += "<h4>" + esc(w("src")) + "</h4><ul>" + s.sources.map(function (r) { return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(zh(r.l)) + "</a></li>"; }).join("") + "</ul>";
    return h + "</div>";
  }

  /* ---------------- the map ---------------- */
  var VB = [170, 70, 430, 330];
  function defs() {
    return '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><path id="fbbk-land" d="' + D.map.land + '"/><path id="fbbk-bord" d="' + D.map.borders + '"/></defs></svg>';
  }
  function mapSvg(cls, vb, inner) {
    return '<svg class="' + cls + '" viewBox="' + vb.join(" ") + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><use class="ld" href="#fbbk-land"/><use class="bd" href="#fbbk-bord"/>' + inner + "</svg>";
  }
  function bigMap() {
    var o = "";
    D.map.labels.forEach(function (l) { o += '<text x="' + l.x + '" y="' + l.y + '" font-size="9" stroke-width="2.6" text-anchor="middle">' + esc(zh(l.t)) + "</text>"; });
    var groups = [];
    D.stories.forEach(function (s, i) { var g = groups.filter(function (c) { return Math.hypot(c.x - s.x, c.y - s.y) < 9; })[0]; if (g) g.i.push(i); else groups.push({ x: s.x, y: s.y, i: [i] }); });
    groups.forEach(function (g) {
      var r = g.i.length > 1 ? 6.5 : 4.6;
      o += '<g class="pin" data-go="s' + g.i[0] + '"><title>' + esc(g.i.map(function (i) { return D.stories[i].year + " " + zh(D.stories[i].title); }).join(" / ")) + '</title><circle cx="' + g.x + '" cy="' + g.y + '" r="' + r + '"/>' + (g.i.length > 1 ? '<text class="n" x="' + g.x + '" y="' + g.y + '" font-size="7">' + g.i.length + "</text>" : "") + "</g>";
    });
    return mapSvg("", VB, o);
  }

  /* ---------------- pages ---------------- */
  /* a page is {k: kind, s: story, i: column, n: number}; kinds: cover, endf, title, imp, toc, open, text, blank, col, endb, back */
  function pageEl(p, idx) {
    var el = document.createElement("div"), side = st.spread ? (idx % 2 ? " v" : " r") : " r";
    el.className = "fbbk-pg" + side;
    if (!p) { el.className += " blank"; el.style.background = "transparent"; el.style.boxShadow = "none"; return el; }
    var h = "";
    if (p.k === "cover") {
      el.className = "fbbk-pg cv";
      var pts = D.stories.map(function (s) { return '<circle cx="' + s.x + '" cy="' + s.y + '" r="2.6"/>'; }).join("");
      h = '<div class="fbbk-cvi"><div class="fbbk-cvt">' + SC[st.sc] + '</div><div class="fbbk-cvs">' + subH() + '</div><div class="fbbk-cvm">' + mapSvg("", VB, pts) + '</div><div class="fbbk-cvb">' + esc(w("bp")) + "</div></div>";
    } else if (p.k === "back") {
      el.className = "fbbk-pg cv bkc";
      h = '<div class="fbbk-bkt"><div>' + esc(LEAD[st.sc]) + '</div><div class="lat">' + esc(LEAD_EN) + "</div></div>";
    } else if (p.k === "endf") {
      el.className += " ep";
      h = '<div class="fbbk-plate"><span class="dot"></span><b>' + esc(w("bp")) + "</b>" + esc(w("house")) + "</div>";
    } else if (p.k === "endb") {
      el.className += " ep";
    } else if (p.k === "title") {
      h = '<div class="fbbk-ttl"><h1>' + SC[st.sc] + '</h1><div class="s">' + subH() + '</div><div class="orn"></div><div class="ld">' + esc(LEAD[st.sc]) + "</div>" + (ui === 1 || ui === 2 ? "" : '<div class="le lat">' + esc(LEAD_EN) + "</div>") + '<div class="ft">' + esc(w("bp")) + "</div></div>";
    } else if (p.k === "imp") {
      h = '<div class="fbbk-map"><h4>' + esc(w("where")) + "</h4>" + bigMap() + "</div>";
    } else if (p.k === "col") {
      h = '<div class="fbbk-col"><div>' + esc(w("fic")) + '</div><div class="orn"></div><div>' + esc(w("end")) + '</div><div class="m">' + esc(w("words")) + "</div></div>";
    } else if (p.k === "toc") {
      h = '<div class="fbbk-tx"><div class="fbbk-fl" style="transform:translateX(' + (-p.i * (st.iw + st.cg)) + 'px)">' + tocHTML() + "</div></div>" + '<div class="fbbk-ft">' + p.n + "</div>";
    } else if (p.k === "open") {
      var s = D.stories[p.s], vb = [s.x - 115, s.y - 80, 230, 160];
      h = '<div class="fbbk-op"><div class="yr">' + esc(s.year) + '</div><div class="se">' + esc(zh(s.series)) + "</div><h2>" + esc(zh(s.title)) + '</h2><div class="pl">' + esc(zh(s.place)) + "</div>" +
        '<div class="mm">' + mapSvg("", vb, '<circle class="h" cx="' + s.x + '" cy="' + s.y + '" r="14"/><circle class="d" cx="' + s.x + '" cy="' + s.y + '" r="5"/>') + "</div>" +
        (ui === 1 || ui === 2 ? '<div class="zs">' + esc(zh(s.summary)) + "</div>" : '<div class="en lat"><i>' + esc(s.titleEn) + "</i>" + esc(s.summaryEn) + "</div>") +
        '<div class="mn">' + esc(w("min").replace("{n}", s.min || 5)) + "</div></div>";
    } else if (p.k === "text") {
      var S = D.stories[p.s];
      h = '<div class="fbbk-hd">' + esc(idx % 2 && st.spread ? SC[st.sc] : zh(S.title)) + '</div><div class="fbbk-tx"><div class="fbbk-fl" style="transform:translateX(' + (-p.i * (st.iw + st.cg)) + 'px)">' + flowOf(p.s) + '</div></div><div class="fbbk-ft">' + p.n + "</div>";
    }
    el.innerHTML = h;
    return el;
  }
  var flowCache = {};
  function flowOf(i) { var k = i + "|" + st.sc + "|" + (st.rb ? 1 : 0); return flowCache[k] || (flowCache[k] = storyFlow(D.stories[i])); }
  function subH() { return w("sub").split(" · ").map(function (x, i) { return '<span style="display:inline-block">' + (i ? "·\u00a0" : "") + esc(x) + "</span>"; }).join(" "); }
  function tocHTML() {
    return '<div class="fbbk-toc"><h4>' + esc(w("contents")) + "</h4>" + D.stories.map(function (s, i) {
      var at = st.starts ? st.starts[i] : 0;
      return '<a class="fbbk-te" data-go="' + at + '"><span class="y">' + esc(s.year) + '</span><span class="tt">' + esc(zh(s.title)) + "<small>" + esc(zh(s.place).split(" · ")[0]) + '</small></span><span class="pn">' + (at || "000") + "</span></a>";
    }).join("") + "</div>";
  }
  function columns(html) {
    var m = st.meas; m.innerHTML = '<div class="fbbk-fl">' + html + "</div>";
    var f = m.firstChild;
    return Math.max(1, Math.round((f.scrollWidth + st.cg) / (st.iw + st.cg)));
  }

  /* ---------------- geometry and pagination ---------------- */
  function geometry() {
    var stage = st.stage, aw = stage.clientWidth - 24, ah = stage.clientHeight - 40;
    var spread = aw / ah > 1.12 && aw >= 640, pw, ph;
    if (spread) { ph = Math.min(ah, 900); pw = Math.min((aw - 24) / 2, ph * .74); if (pw < ph * .56) { ph = pw / .56; } }
    else { pw = Math.min(aw - 14, 560); ph = Math.min(ah, pw / .5, 980); if (pw > ph * .76) pw = ph * .76; }
    pw = Math.floor(pw); ph = Math.floor(ph);
    var fs = Math.max(14, Math.min(21, pw * .047)) * [0.9, 1, 1.13, 1.27][st.z];
    var mx = Math.round(pw * (spread ? .11 : .095)), my = Math.round(ph * .075);
    st.spread = spread; st.pw = pw; st.pgh = ph; st.fs = fs;
    st.iw = pw - 2 * mx; st.ih = ph - 2 * my; st.cg = mx * 2; st.lh = fs * 1.85;
    st.ih = Math.floor(st.ih / st.lh) * st.lh + 2;   /* whole lines only, so no line is ever cut in half */
    var r = st.root.style;
    r.setProperty("--pw", pw + "px"); r.setProperty("--ph", ph + "px"); r.setProperty("--fs", fs.toFixed(2) + "px");
    r.setProperty("--mx", mx + "px"); r.setProperty("--my", my + "px"); r.setProperty("--iw", st.iw + "px"); r.setProperty("--ih", st.ih + "px"); r.setProperty("--cg", st.cg + "px");
    r.setProperty("--n", spread ? 2 : 1);
    st.root.classList.toggle("one", !spread);
    st.meas.style.width = st.iw + "px"; st.meas.style.fontSize = fs + "px";
  }
  function paginate() {
    var P = [], spread = st.spread;
    function add(p) { P.push(p); }
    function recto() { if (spread && P.length % 2) add({ k: "blank" }); }
    add({ k: "cover" }); add({ k: "endf" }); add({ k: "title" }); add({ k: "imp" });
    st.starts = null; var tn = columns(tocHTML());
    recto(); var tocAt = P.length; for (var i = 0; i < tn; i++) add({ k: "toc", i: i });
    var starts = [];
    D.stories.forEach(function (s, si) {
      recto(); starts.push(P.length); add({ k: "open", s: si });
      var n = columns(flowOf(si));
      for (var j = 0; j < n; j++) add({ k: "text", s: si, i: j });
    });
    recto(); add({ k: "col" });
    if (spread && P.length % 2) add({ k: "blank" });   /* the inside of the back cover is a right-hand page, the back cover its other side */
    add({ k: "endb" }); add({ k: "back" });
    if (!spread) P = P.filter(function (p) { return p.k !== "blank"; });
    P.forEach(function (p, i) { p.n = i; });
    st.P = P; st.tocAt = tocAt;
    st.starts = D.stories.map(function (s, si) { for (var i = 0; i < P.length; i++) if (P[i].k === "open" && P[i].s === si) return i; return 0; });
  }
  /* where we are, in words that survive a new page size */
  function anchor() {
    var p = st.P && st.P[cur()]; if (!p) return { k: "cover" };
    if (p.k === "text") { var n = st.P.filter(function (q) { return q.k === "text" && q.s === p.s; }).length; return { k: "text", s: p.s, f: n > 1 ? p.i / (n - 1) : 0 }; }
    return { k: p.k, s: p.s, i: p.i || 0 };
  }
  function find(a) {
    var P = st.P, i;
    if (a.k === "text") { var list = []; for (i = 0; i < P.length; i++) if (P[i].k === "text" && P[i].s === a.s) list.push(i); if (list.length) return list[Math.round((a.f || 0) * (list.length - 1))]; }
    for (i = 0; i < P.length; i++) if (P[i].k === a.k && (a.s == null || P[i].s === a.s) && (P[i].i || 0) === (a.i || 0)) return i;
    for (i = 0; i < P.length; i++) if (P[i].k === a.k) return i;
    return 0;
  }
  function cur() { return st.spread ? Math.max(0, 2 * st.sp - 1) : st.i; }   /* the page the reader is on (the left one of a spread) */
  function setAt(idx) {
    idx = Math.max(0, Math.min(st.P.length - 1, idx));
    if (st.spread) st.sp = Math.ceil(idx / 2); else st.i = idx;
  }
  function relayout(keep) {
    var a = keep === false ? null : (st.P ? anchor() : st.saved);
    geometry(); paginate();
    setAt(a ? find(a) : 0);
    show();
  }

  /* ---------------- showing and turning ---------------- */
  function fill(slot, idx) {
    var old = slot.querySelector(".fbbk-pg"); if (old) old.remove();
    var pg = pageEl(idx >= 0 ? st.P[idx] : null, idx); slot.insertBefore(pg, slot.firstChild);
  }
  function edges() {
    var N = st.P.length, at = st.spread ? 2 * st.sp : st.i, k = Math.min(9, Math.round(N / 40));
    st.L.querySelector(".edge").style.setProperty("--e", (st.spread && st.sp > 0 ? Math.max(1, Math.round(k * at / N)) : 0) + "px");
    st.R.querySelector(".edge").style.setProperty("--e", (at < N - 1 ? Math.max(1, Math.round(k * (N - at) / N)) : 0) + "px");
  }
  function shift(prog, dir) {   /* a closed book sits in the middle; an open one with both pages */
    if (!st.spread) { st.bk.style.transform = ""; return; }
    var N = st.P.length, s = st.sp, off = function (sp) { return sp === 0 ? -st.pw / 2 : 2 * sp - 1 >= N - 1 ? st.pw / 2 : 0; };
    var a = off(s), b = dir ? off(s + dir) : a, x = a + (b - a) * (prog || 0);
    st.bk.style.transform = "translateX(" + x.toFixed(1) + "px)";
  }
  function show() {
    if (st.spread) { st.L.style.display = ""; fill(st.L, 2 * st.sp - 1); fill(st.R, 2 * st.sp < st.P.length ? 2 * st.sp : -1); }
    else { st.L.style.display = "none"; fill(st.R, st.i); }
    st.bk.classList.add("nod"); shift(0); void st.bk.offsetWidth; st.bk.classList.remove("nod");
    edges(); save(); label();
  }
  function label() {
    var p = st.P[st.spread ? Math.min(st.P.length - 1, 2 * st.sp) : st.i] || {};
    st.stage.setAttribute("aria-label", SC[st.sc] + " · " + (p.k === "text" || p.k === "open" ? zh(D.stories[p.s].title) : "") + " · " + (p.n || 0));
  }
  function canGo(d) { return st.spread ? (d > 0 ? 2 * st.sp + 1 < st.P.length : st.sp > 0) : (d > 0 ? st.i + 1 < st.P.length : st.i > 0); }
  function face(cls, idx, rev) {
    var f = document.createElement("div"); f.className = "fbbk-face " + cls;
    var pg = rev ? (function () { var e = document.createElement("div"); e.className = "fbbk-pg rev"; return e; })() : pageEl(idx >= 0 && idx < st.P.length ? st.P[idx] : null, idx);
    f.appendChild(pg); var sh = document.createElement("div"); sh.className = "fbbk-sh"; f.appendChild(sh); return f;
  }
  function begin(d) {
    if (st.leaf || !canGo(d)) return false;
    var leaf = document.createElement("div"); leaf.className = "fbbk-leaf";
    if (st.spread) {
      var s = st.sp;
      if (d > 0) { leaf.appendChild(face("fr", 2 * s)); leaf.appendChild(face("bk2", 2 * s + 1)); fill(st.R, 2 * s + 2 < st.P.length ? 2 * s + 2 : -1); }
      else { leaf.appendChild(face("fr", 2 * s - 2)); leaf.appendChild(face("bk2", 2 * s - 1)); fill(st.L, 2 * s - 3); }
    } else {
      if (d > 0) { leaf.appendChild(face("fr", st.i)); leaf.appendChild(face("bk2", 0, true)); fill(st.R, st.i + 1); }
      else { leaf.appendChild(face("fr", st.i - 1)); leaf.appendChild(face("bk2", 0, true)); }
    }
    var cast = document.createElement("div"); cast.className = "fbbk-cast"; (d > 0 ? st.R : (st.spread ? st.L : st.R)).appendChild(cast);
    st.bk.appendChild(leaf); st.bk.classList.add("nod");
    st.leaf = { el: leaf, d: d, p: 0, cast: cast }; turn(0);
    return true;
  }
  function turn(p) {   /* p: how far the page has turned, 0 to 1 */
    var L = st.leaf; if (!L) return; L.p = p;
    var a = L.d > 0 ? -180 * p : -180 * (1 - p), q = L.d > 0 ? p : 1 - p;   /* q: how far from lying flat on the right */
    var bow = Math.sin(q * Math.PI);
    L.el.style.transform = "rotateY(" + a.toFixed(2) + "deg)" + (st.spread ? "" : " translateZ(" + (bow * 2).toFixed(1) + "px)");
    var sh = L.el.querySelectorAll(".fbbk-sh");
    sh[0].style.opacity = (q * .9).toFixed(3); sh[1].style.opacity = ((1 - q) * .9).toFixed(3);
    L.cast.style.opacity = (bow * .8).toFixed(3);
    if (!st.spread) L.el.style.opacity = q > .55 ? Math.max(0, 1 - (q - .55) / .45 * 1.15).toFixed(3) : "1";   /* on a phone the turned page goes off the edge */
    shift(p, L.d);
  }
  function finish(to, ms) {
    var L = st.leaf; if (!L || L.anim) return;
    var from = L.p, t0 = performance.now(), dur = reduced() ? 1 : Math.max(140, (ms || 560) * Math.abs(to - from));
    L.anim = true; if (to === 1) rustle();
    (function step(now) {
      var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      turn(from + (to - from) * e);
      if (k < 1) return requestAnimationFrame(step);
      var d = L.d; L.el.remove(); L.cast.remove(); st.leaf = null; st.bk.classList.remove("nod");
      if (to === 1) { if (st.spread) st.sp += d; else st.i += d; }
      show(); if (st.queue) { var q = st.queue; st.queue = 0; go(q); }
    })(t0);
  }
  function go(d) {
    if (st.leaf) { if (st.leaf.anim) st.queue = d; return; }
    hideSlip(); hint(false);
    if (begin(d)) finish(1);
    else nudge(d);
  }
  function nudge(d) { st.bk.animate && !reduced() && st.bk.animate([{ transform: st.bk.style.transform }, { transform: st.bk.style.transform + " translateX(" + (d > 0 ? -8 : 8) + "px)" }, { transform: st.bk.style.transform }], { duration: 260 }); }
  function jump(idx) { if (st.leaf) return; hideSlip(); setAt(idx); show(); }

  /* a page turning, very quietly (the town's sound switch is respected; off if the device asked for less) */
  var AC = null;
  function rustle() {
    if (ls("fb_sound") === "0" || reduced()) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      var n = AC.sampleRate * .32, b = AC.createBuffer(1, n, AC.sampleRate), x = b.getChannelData(0);
      for (var i = 0; i < n; i++) { var t = i / n; x[i] = (Math.random() * 2 - 1) * Math.pow(Math.sin(Math.PI * t), 2) * (0.6 + 0.4 * Math.sin(t * 40)); }
      var src = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain();
      src.buffer = b; f.type = "bandpass"; f.frequency.value = 2600; f.Q.value = .7; g.gain.value = .05;
      src.connect(f); f.connect(g); g.connect(AC.destination); src.start();
    } catch (e) {}
  }

  /* ---------------- touch, mouse, keys ---------------- */
  function bindStage() {
    var S = st.stage, drag = null;
    S.addEventListener("pointerdown", function (e) {
      if (e.button > 0 || st.leaf) return;
      drag = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId, dir: 0, moved: false };
    });
    S.addEventListener("pointermove", function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.dir) {
        if (Math.abs(dx) < 10 || Math.abs(dx) < Math.abs(dy) * 1.1) { if (Math.abs(dy) > 14) drag = null; return; }
        drag.dir = dx < 0 ? 1 : -1; drag.moved = true;
        if (!begin(drag.dir)) { nudge(drag.dir); drag = null; return; }
        hideSlip(); hint(false);
        try { S.setPointerCapture(e.pointerId); } catch (x) {}
      }
      var dist = st.spread ? st.pw * 1.7 : st.pw * 1.05;
      turn(Math.max(0, Math.min(1, -dx * drag.dir / dist)));
      drag.last = { x: e.clientX, t: performance.now() };
    });
    function up(e) {
      if (!drag || e.pointerId !== drag.id) return;
      var d = drag; drag = null;
      if (d.dir && st.leaf) {
        var v = d.last ? (e.clientX - d.x) / Math.max(1, performance.now() - d.t) : 0;
        var flick = -v * d.dir > .45;
        finish(st.leaf.p > .34 || flick ? 1 : 0, 520);
        return;
      }
      if (d.moved) return;
      tap(e);
    }
    S.addEventListener("pointerup", up); S.addEventListener("pointercancel", function (e) { if (drag && drag.dir && st.leaf) finish(0); drag = null; });
    S.addEventListener("click", function (e) { if (e.target.closest("a[href]")) return; e.preventDefault(); });
  }
  function tap(e) {
    var t = e.target;
    if (t.closest("a[href]")) return;
    var wd = t.closest("[data-k]"); if (wd) { slip(wd); return; }
    var g = t.closest("[data-go]"); if (g) { var v = g.getAttribute("data-go"); jump(v[0] === "s" ? st.starts[+v.slice(1)] : +v); return; }
    if (st.slipOn) { hideSlip(); return; }
    var r = st.bk.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
    if (st.spread && st.sp === 0) { go(1); return; }   /* the closed book: tap the cover to open it */
    if (st.spread) go(x >= .5 ? 1 : -1);   /* the right page turns forward, the left one back */
    else go(x < .33 ? -1 : 1);            /* one page: the left third goes back, the rest forward */
  }
  function key(e) {
    if (!st) return;
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); if (st.slipOn) hideSlip(); else close(); }
    else if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) { e.preventDefault(); go(-1); }
    else if (e.key === "Home") { e.preventDefault(); jump(0); }
    else if (e.key === "End") { e.preventDefault(); jump(st.P.length - 1); }
  }

  /* ---------------- the word slip ---------------- */
  function slip(el) {
    var e = D.lex[el.getAttribute("data-k")]; if (!e) return;
    var dia = e.k === "d", h = '<div class="k' + (dia ? " dl" : "") + '">' + esc(dia ? zh(e.lang) : w("meaning")) + '</div><div class="w">' + esc(zh(e.w)) + "</div>";
    if (!dia) h += '<div class="r">' + esc(st.sc ? (e.zy || e.py) : (e.py || e.zy)) + (st.sc && e.py ? " · " + esc(e.py) : "") + "</div>";
    else { if (e.rd) h += '<div class="r">' + esc(e.rd) + "</div>"; if (e.mr) h += '<div class="r">' + esc(w("mand")) + " · " + esc(st.sc ? (e.mz || e.mr) : e.mr) + "</div>"; }
    h += "<dl><dt>" + esc(w("meaning")) + "</dt><dd>" + esc(zh(e.d)) + "</dd><dt>" + esc(w("eng")) + '</dt><dd class="lat">' + esc(e.en) + "</dd></dl>";
    if (dia && e.n) h += '<p class="n">' + esc(zh(e.n)) + "</p>";
    st.slipEl.innerHTML = h; st.slipEl.classList.add("on"); st.slipOn = true;
    var o = st.root.querySelector(".wd.hot"); if (o) o.classList.remove("hot"); el.classList.add("hot");
  }
  function hideSlip() { if (!st || !st.slipOn) return; st.slipEl.classList.remove("on"); st.slipOn = false; var o = st.root.querySelector(".wd.hot"); if (o) o.classList.remove("hot"); }
  function hint(on) {
    if (!st.hintEl) return;
    if (on) { st.hintEl.classList.add("on"); st.hintT = setTimeout(function () { hint(false); }, 6000); }
    else { st.hintEl.classList.remove("on"); clearTimeout(st.hintT); if (ls("fb_book_hint") !== "1") ls("fb_book_hint", "1"); }
  }

  /* ---------------- keeping your place ---------------- */
  function save() {
    if (!st.P) return;
    var a = anchor(); a.sc = st.sc; a.ph = st.rb ? 1 : 0; a.z = st.z;
    ls("fb_book_suiyue", JSON.stringify(a));
  }
  function saved() { try { return JSON.parse(ls("fb_book_suiyue") || "null"); } catch (e) { return null; } }

  /* ---------------- the bar ---------------- */
  var I = {
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    toc: '<svg viewBox="0 0 24 24"><path d="M5 6h14M5 12h14M5 18h9"/></svg>',
    aa: '<svg viewBox="0 0 24 24"><path d="M3 18 8 6l5 12M4.8 14h6.4M14.5 18l3-7 3 7M15.6 16h3.8"/></svg>',
    l: '<svg viewBox="0 0 24 24"><path d="m15 6-6 6 6 6"/></svg>',
    r: '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>'
  };
  function bar() {
    var b = st.root.querySelector(".fbbk-bar");
    b.innerHTML = '<button class="fbbk-b" data-a="x" aria-label="' + esc(w("close")) + '" title="' + esc(w("close")) + '">' + I.x + '</button><span class="sp"></span>' +
      '<button class="fbbk-b fbbk-kb" data-a="l" aria-label="' + esc(w("prev")) + '">' + I.l + "</button>" +
      '<button class="fbbk-b fbbk-kb" data-a="r" aria-label="' + esc(w("next")) + '">' + I.r + "</button>" +
      '<button class="fbbk-b" data-a="toc" aria-label="' + esc(w("contents")) + '" title="' + esc(w("contents")) + '">' + I.toc + "</button>" +
      '<button class="fbbk-b" data-a="sc" aria-label="' + esc(w("script")) + '" title="' + esc(w("script")) + '">' + (st.sc ? "简" : "繁") + "</button>" +
      '<button class="fbbk-b" data-a="ph" aria-pressed="' + (st.rb ? "true" : "false") + '" aria-label="' + esc(w("phon")) + '" title="' + esc(w("phon")) + '">' + (st.sc ? "注音" : "拼音") + "</button>" +
      '<button class="fbbk-b" data-a="z" aria-label="' + esc(w("size")) + '" title="' + esc(w("size")) + '">' + I.aa + "</button>";
  }
  function act(a) {
    if (st.leaf) return;
    hideSlip();
    if (a === "x") return close();
    if (a === "l") return go(-1);
    if (a === "r") return go(1);
    if (a === "toc") return jump(st.tocAt);
    if (a === "sc") { st.sc = st.sc ? 0 : 1; st.root.classList.toggle("s", !st.sc); st.root.classList.toggle("t", !!st.sc); bar(); return relayout(); }
    if (a === "ph") { st.rb = !st.rb; bar(); return relayout(); }
    if (a === "z") { st.z = (st.z + 1) % 4; return relayout(); }
  }

  /* ---------------- open and close ---------------- */
  function open(o) {
    opts = o || {};
    var lang = opts.lang || (window.FBL && FBL.lang && FBL.lang()) || document.documentElement.lang || "en";
    ui = LI[lang] != null ? LI[lang] : (/^zh/.test(lang) ? (/Hant|TW|HK/.test(lang) ? 2 : 1) : 0);
    if (root) return;
    lastFocus = document.activeElement;
    if (!document.getElementById("fbbk-css")) { var c = document.createElement("style"); c.id = "fbbk-css"; c.textContent = CSS; document.head.appendChild(c); }
    var sv = saved();
    root = document.createElement("div"); root.className = "fbbk";
    root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.setAttribute("aria-label", "歲月地圖");
    root.innerHTML = '<div class="fbbk-bar"></div><div class="fbbk-stage" tabindex="0"><div class="fbbk-load">…</div></div><div class="fbbk-slip" role="status"></div><div class="fbbk-hint"></div><div class="fbbk-meas fbbk-pg"></div>';
    document.body.appendChild(root); document.documentElement.style.overflow = "hidden";
    lift(true);   /* in town, a shut shop's half-drawn shutter goes up while the book is open: a reading copy can always be read */
    requestAnimationFrame(function () { root.classList.add("on"); });
    st = { root: root, sc: sv && sv.sc != null ? sv.sc : (ui === 1 ? 0 : 1), rb: !!(sv && sv.ph), z: sv && sv.z != null ? sv.z : 1, sp: 0, i: 0, saved: sv, stage: root.querySelector(".fbbk-stage"), slipEl: root.querySelector(".fbbk-slip"), hintEl: root.querySelector(".fbbk-hint"), meas: root.querySelector(".fbbk-meas") };
    root.classList.add(st.sc ? "t" : "s");
    bar();
    root.querySelector(".fbbk-bar").addEventListener("click", function (e) { var b = e.target.closest("[data-a]"); if (b) act(b.getAttribute("data-a")); });
    document.addEventListener("keydown", key, true);
    load().then(function () {
      if (!st) return;
      st.stage.innerHTML = defs() + '<div class="fbbk-pers"><div class="fbbk-bk"><div class="fbbk-slot L"><span class="edge"></span></div><div class="fbbk-slot R"><span class="edge"></span></div></div></div>';
      st.bk = st.stage.querySelector(".fbbk-bk"); st.L = st.stage.querySelector(".L"); st.R = st.stage.querySelector(".R");
      st.hintEl.textContent = w("hint");
      bindStage(); relayout(sv && sv.k ? undefined : false);
      if (ls("fb_book_hint") !== "1") setTimeout(function () { if (st) hint(true); }, 900);
      try { st.stage.focus({ preventScroll: true }); } catch (e) {}
      var rz = 0; st.onResize = function () { clearTimeout(rz); rz = setTimeout(function () { if (st && !st.leaf) relayout(); }, 180); };
      addEventListener("resize", st.onResize);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (st && !st.leaf) relayout(); });
    }).catch(function () { if (st) st.stage.innerHTML = '<div class="fbbk-load">' + esc(w("close")) + "</div>"; setTimeout(close, 1600); });
  }
  function lift(on) { try { var f = window.frameElement, d = f && f.closest && f.closest(".fbsh-frame"); if (d) d.classList.toggle("fbsh-lift", on); } catch (e) {} }
  function close() {
    if (!root) return;
    var r = root; root = null;
    document.removeEventListener("keydown", key, true);
    if (st && st.onResize) removeEventListener("resize", st.onResize);
    if (st && st.P) save();
    st = null; r.classList.remove("on"); document.documentElement.style.overflow = ""; lift(false);
    setTimeout(function () { r.remove(); }, 260);
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
    if (opts.onClose) try { opts.onClose(); } catch (e) {}
  }
  window.FBBook = { open: open, close: close, preload: load, _st: function () { return st; } };
})();
