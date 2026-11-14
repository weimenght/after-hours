/* ===== Next Door, tidied (Nov 14, the owner: "more organised; intuitive for visitors to interact with the hosts and artifacts") =====
   One plan for the room on every screen: the shelves along the top with Popo's tin in the middle of the lower one, the window under
   them (never crossed by a shelf), the jukebox on the left wall and the Wall's postcards on the right with Popo's mended bowl under
   them, and along the counter Miso · the menu stand · the host · Yuzu. Each thing on the wall carries a small wooden plaque saying
   what a tap does (Play a record, Read the Wall, Mend a bowl), and until you first talk to them the host has a little "…" over
   their head. The bowl is Mended, which left the map (Nov 14): a tap opens its bench over the room, ‹ Back to the counter. */
(function () {
  const $ = id => document.getElementById(id);
  const stage = $('stage-counter-box'); if (!stage) return;
  const H = (en, zh, tw, es, ca) => lx([en, zh, tw, tw, es, ca]);
  const css = document.createElement('style');
  css.textContent = [
    /* the back wall */
    '#stage-counter-box .shelf{left:10px;right:10px}',
    '#stage-counter-box .stage-window{top:128px;height:calc(100% - 128px - 150px);width:42%}',
    '#nd-tin{position:absolute;left:50%!important;top:92px!important;transform:translateX(-50%);z-index:3}',
    '.nd-peek{display:none!important}',
    '.nd-deck{z-index:4!important}.cat .cat-name{position:relative;z-index:2}',
    '#nd-juke{left:4%!important;top:138px!important}',
    '#nd-cards{right:4%!important;left:auto!important;top:138px!important}',
    '#nd-mend{right:calc(4% + 4px);top:212px;width:40px;height:28px;z-index:3}',
    /* along the counter: Miso (and Mantou's stool), the host, the menu stand, Yuzu */
    '#nd-stand{right:auto!important;left:61%!important}',
    /* the plaques */
    '.nd-lab{position:absolute;left:50%;top:calc(100% + 5px);transform:translateX(-50%);white-space:nowrap;padding:1px 5px 2px;font:400 14px/1 VT323,"PingFang SC","Microsoft YaHei",monospace;color:#f3d79a;background:#3a2414;border:2px solid #000;box-shadow:2px 2px 0 rgba(0,0,0,.55);pointer-events:none}',
    '#nd-juke .nd-lab{left:0;transform:none}#nd-cards .nd-lab,#nd-mend .nd-lab{left:auto;right:0;transform:none}',
    /* the host's "…": tap me */
    '.nd-talk{position:absolute;left:calc(50% + 22px);top:-16px;z-index:6;padding:0 6px 4px;font:400 22px/1 VT323,monospace;color:#1a1410;background:#fbeedd;border:2px solid #000;box-shadow:2px 2px 0 #000;pointer-events:none;animation:ndTalk 2.4s ease-in-out infinite}',
    '.nd-talk::after{content:"";position:absolute;left:4px;bottom:-6px;border:4px solid transparent;border-top-color:#000;border-left-color:#000}',
    '@keyframes ndTalk{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}',
    'body.nd-talked .nd-talk,body.nd-noone .nd-talk{display:none}',
    /* the bench, over the room */
    '#nd-bench{position:fixed;inset:0;z-index:70;display:flex;flex-direction:column;background:#14101e}',
    '#nd-bench[hidden]{display:none}',
    'body.nd-benching .fbg-glint,body.nd-benching .fbn{display:none!important}',
    '#nd-bench .nd-back{margin:8px 10px 6px;align-self:flex-start}',
    '#nd-bench iframe{flex:1;width:100%;border:0;background:#14101e}',
    /* phones: the room takes the screen down to the panel */
    '@media (max-width:1023px){#stage-counter-box.stage{height:clamp(330px,calc(100dvh - 230px),640px)}#stage-counter-box .stage-window{width:48%;max-height:300px}}',
    '@media (min-width:1024px){#stage-counter-box .stage-window{top:136px;height:calc(100% - 136px - 190px)}#nd-tin{top:94px!important}#nd-juke,#nd-cards{top:150px!important}#nd-mend{top:250px;width:52px;height:36px}.stage-sign{right:auto!important;left:4%;top:250px!important}.nd-lab{font-size:16px}}',
    '@media (prefers-reduced-motion:reduce){.nd-talk{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  /* Popo's blue-and-white rice bowl, mended in gold */
  const BOWL = '<svg viewBox="0 0 20 14" shape-rendering="crispEdges" aria-hidden="true"><path fill="#1a1410" d="M0 3h20v1H0zM1 4h1v3H1zM18 4h1v3h-1zM2 7h1v2H2zM17 7h1v2h-1zM3 9h2v1H3zM15 9h2v1h-2zM5 10h10v1H5zM6 11h8v1H6zM6 12h1v1H6zM13 12h1v1h-1zM6 13h8v1H6z"/><path fill="#f4f1e8" d="M2 4h16v3H2zM3 7h14v2H3zM5 9h10v1H5zM7 11h6v2H7z"/><path fill="#2f5aa8" d="M2 4h16v1H2zM4 6h2v1H4zM9 6h2v1H9zM14 6h2v1h-2zM6 8h8v1H6z"/><path fill="#f2c14e" d="M10 4h1v1h-1zM11 5h1v1h-1zM11 6h1v1h-1zM12 7h1v1h-1zM12 8h1v1h-1zM13 9h1v1h-1z"/><path fill="#fff" d="M3 4h2v1H3z" opacity=".5"/></svg>';
  const T_MEND = H("Popo's bowl: mend it in gold", "婆婆的碗：用金子补好", "婆婆的碗：用金子補好", "El cuenco de Popo: repáralo con oro", "El bol de la Popo: adoba'l amb or");
  const LAB = {
    'nd-juke': H("Play a record", "放张唱片", "放張唱片", "Pon un disco", "Posa un disc"),
    'nd-cards': H("Read the Wall", "看看墙", "看看牆", "Lee el muro", "Llegeix el mur"),
    'nd-mend': H("Mend a bowl", "补个碗", "補個碗", "Repara un cuenco", "Adoba un bol")
  };
  const BACK = H("‹ Back to the counter", "‹ 回到吧台", "‹ 回到吧檯", "‹ Volver a la barra", "‹ Tornar a la barra");

  const bowl = document.createElement('button'); bowl.type = 'button'; bowl.id = 'nd-mend'; bowl.className = 'nd-thing'; bowl.innerHTML = BOWL;
  bowl.onclick = e => { e.stopPropagation(); bench(); };
  stage.appendChild(bowl);

  function plaques() {
    Object.keys(LAB).forEach(id => {
      const b = $(id); if (!b) return;
      let s = b.querySelector('.nd-lab'); if (!s) { s = document.createElement('span'); s.className = 'nd-lab'; s.setAttribute('aria-hidden', 'true'); b.appendChild(s); }
      s.textContent = L(LAB[id]);
    });
    bowl.title = L(T_MEND); bowl.setAttribute('aria-label', L(T_MEND));
    const bb = document.querySelector('#nd-bench .nd-back'); if (bb) bb.textContent = L(BACK);
  }
  setTimeout(plaques, 0); addEventListener('fbl:lang', plaques); setInterval(plaques, 4000);

  /* along the counter: the cats keep to the ends, so nobody stands in front of the menu stand or the host */
  try { if (typeof Cats !== 'undefined' && Cats.st) { Cats.st.miso.home = [5, 19]; Cats.st.yuzu.home = [74, 93]; ['miso', 'yuzu'].forEach(id => { if (Cats.returnHome) Cats.returnHome(id); }); } } catch (e) {}

  /* the host's "…" until you've talked to them this visit */
  let talked = false; try { talked = sessionStorage.getItem('nd_talked') === '1'; } catch (e) {}
  if (talked) document.body.classList.add('nd-talked');
  const anchor = $('wei-anchor');
  if (anchor && !anchor.querySelector('.nd-talk')) { const t = document.createElement('span'); t.className = 'nd-talk'; t.setAttribute('aria-hidden', 'true'); t.textContent = '…'; anchor.appendChild(t); }
  function heard() { if (talked) return; talked = true; document.body.classList.add('nd-talked'); try { sessionStorage.setItem('nd_talked', '1'); } catch (e) {} }
  if (anchor) anchor.addEventListener('click', heard, true);
  /* nobody to talk to: the host asleep, stepped out, or nobody behind the counter */
  function who() {
    let h = null; try { h = window.FBWorld && FBWorld.host && FBWorld.host(); } catch (e) {}
    let gone = false; try { gone = !!(window.WeiAway && WeiAway.on && WeiAway.on()); } catch (e) {}
    document.body.classList.toggle('nd-noone', !h || !!h.asleep || gone);
  }
  who(); setInterval(who, 1500);

  /* the bench: Mended over the room */
  let wrap = null, back = null;
  function bench() {
    if (!wrap) {
      wrap = document.createElement('div'); wrap.id = 'nd-bench'; wrap.hidden = true;
      wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true');
      const b = document.createElement('button'); b.type = 'button'; b.className = 'fbb nd-back'; b.onclick = shut;
      wrap.appendChild(b); document.body.appendChild(wrap); plaques();
    }
    const f = document.createElement('iframe'); f.src = '/nearby/mended/?nd=1'; f.title = L(T_MEND); f.allow = 'autoplay';
    const old = wrap.querySelector('iframe'); if (old) old.remove();
    wrap.appendChild(f); wrap.hidden = false; document.body.classList.add('nd-benching'); back = document.activeElement;
    try { SoundEngine.playClick(); } catch (e) {}
    try { wrap.querySelector('.nd-back').focus(); } catch (e) {}
  }
  function shut() {
    if (!wrap || wrap.hidden) return;
    wrap.hidden = true; document.body.classList.remove('nd-benching'); const f = wrap.querySelector('iframe'); if (f) f.remove();
    try { back && back.focus(); } catch (e) {}
  }
  addEventListener('keydown', e => { if (e.key === 'Escape' && wrap && !wrap.hidden) { e.preventDefault(); e.stopImmediatePropagation(); shut(); } }, true);
  addEventListener('message', e => { if (e.origin === location.origin && e.data === 'nd-mend-done') shut(); });
  if (/[?&]mend=1/.test(location.search)) setTimeout(bench, 900);
  window.NDBench = { open: bench, close: shut };
})();
