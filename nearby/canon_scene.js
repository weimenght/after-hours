/* Nearby keepsakes and quiet family moments. No persistence, reward, notification, or analytics. */
(function () {
  "use strict";
  if (!window.FBCanon) return;
  var C = window.FBCanon, place = location.pathname.split('/')[2];
  var key = { 'next-door':'bar', 'borrowed-pages':'books', 'popos-house':'popos-house' }[place];
  if (!key) return;
  var keys = ['en','zh','tw','es','ca'], labels = ['Close','关闭','關閉','Cerrar','Tancar'];
  function lang() { var l = window.FBL && FBL.get ? FBL.get() : 'en'; return ({'zh-Hans':'zh','zh-Hant':'tw','yue':'tw'})[l] || l || 'en'; }
  function tr(a) { return a[keys.indexOf(lang())] || a[0]; }
  function el(t, cls, txt) { var n=document.createElement(t); if(cls)n.className=cls; if(txt!=null)n.textContent=txt; return n; }
  var art = {
    'physics-notebook':[[2,1,20,26,'#18151b'],[4,2,17,23,'#536f73'],[6,3,13,21,'#e7ddbb'],[8,6,9,1,'#637c8d'],[8,10,6,1,'#637c8d'],[8,14,9,1,'#637c8d'],[10,18,6,1,'#637c8d'],[4,2,2,23,'#30434c'],[15,25,3,4,'#a34d42']],
    'beijing-transit-card':[[1,6,26,17,'#18151b'],[2,7,24,15,'#43827b'],[3,8,22,3,'#e7dcbb'],[5,13,8,6,'#d4a85f'],[16,13,7,2,'#e7dcbb'],[16,17,5,1,'#e7dcbb'],[3,21,22,1,'#285651']],
    'fashion-sketchbook':[[2,1,24,27,'#18151b'],[3,2,22,25,'#b45f83'],[5,3,18,23,'#f1e3d4'],[7,5,2,19,'#dbc9bd'],[14,5,2,3,'#5b4c55'],[12,8,6,6,'#b45f83'],[11,14,8,5,'#b45f83'],[9,19,12,2,'#b45f83'],[11,22,2,3,'#5b4c55'],[17,22,2,3,'#5b4c55'],[3,7,3,1,'#8c4b66'],[3,15,3,1,'#8c4b66'],[3,23,3,1,'#8c4b66']],
    coffee:[[5,8,18,14,'#18151b'],[6,9,15,10,'#e2cdb0'],[7,9,13,3,'#6d472f'],[21,11,5,7,'#e2cdb0'],[22,13,2,3,'#18151b'],[3,21,21,3,'#ab8a69']],
    cantonese:[[2,4,24,19,'#18151b'],[3,5,22,17,'#eadcb9'],[6,8,14,2,'#735a49'],[6,13,9,1,'#735a49'],[6,17,12,1,'#735a49']],
    'empty-chair':[[7,2,14,3,'#5c3928'],[7,5,3,13,'#8a5938'],[18,5,3,13,'#8a5938'],[7,15,14,4,'#a4754c'],[7,19,3,7,'#5c3928'],[18,19,3,7,'#5c3928']]
  };
  function icon(id) { var s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 28 30');s.setAttribute('shape-rendering','crispEdges');s.setAttribute('aria-hidden','true');(art[id]||art.cantonese).forEach(function(p){var r=document.createElementNS(s.namespaceURI,'rect');['x','y','width','height','fill'].forEach(function(k,i){r.setAttribute(k,p[i]);});s.appendChild(r);});return s; }
  function awake(m) { if (!C.momentAvailable(m)) return false; var W=window.FBWorld; return !W || !W.sleeps || !W.hour || m.participants.every(function(p){return !W.sleeps(p,W.hour());}); }
  function moment(id) { return C.moments.find(function(m){return m.id===id;}); }
  var d, opener;
  function open(item, m, b) {
    if(d && d.open)return; if(window.FBChapter) FBChapter.hide(); opener=b; d=el('dialog','canon-dialog'); d.setAttribute('data-fbt-skip',''); d.setAttribute('aria-label',item ? tr(item.ui.title) : tr(m.title));
    var x=el('button','canon-close',tr(labels));x.type='button';x.onclick=function(){d.close();};d.appendChild(x);
    if(item){d.appendChild(icon(item.id));d.appendChild(el('h3','',tr(item.ui.title)));d.appendChild(el('p','',tr(item.ui.line)));}
    if(m && awake(m)){d.appendChild(el('h3','',tr(m.title)));(m.text[lang()]||m.text.en).forEach(function(l){d.appendChild(el('p','',l));});}
    d.addEventListener('close',function(){d.remove();d=null;if(opener&&opener.isConnected)opener.focus();});
    document.body.appendChild(d);d.showModal();x.focus();
  }
  function mount() {
    var host=document.querySelector(key==='bar'?'#stage-counter-box':key==='books'?'#study .sd-fam':'.tk-scene');
    if(!host)return;var old=host.querySelector('.canon-shelf');
    var shelf=el('div','canon-shelf'+(key==='books'?' canon-book-shelf':''));shelf.setAttribute('data-fbt-skip','');
    C.objects.filter(function(o){return o.ui&&o.ui.place===key;}).forEach(function(o){var b=el('button','canon-object');b.type='button';b.title=tr(o.ui.title);b.setAttribute('aria-label',b.title);b.appendChild(icon(o.id));b.onclick=function(e){e.stopPropagation();open(o,o.id==='physics-notebook'?moment('notebook'):null,b);};shelf.appendChild(b);});
    C.moments.filter(function(m){return m.place===key && m.id!=='notebook' && awake(m);}).forEach(function(m){var b=el('button','canon-object');b.type='button';b.title=tr(m.title);b.setAttribute('aria-label',b.title);b.appendChild(icon(m.id));b.onclick=function(e){e.stopPropagation();if(awake(m))open(null,m,b);};shelf.appendChild(b);});
    var signature=Array.from(shelf.children).map(function(b){return b.title;}).join('|');if(old && old.dataset.signature===signature)return;if(old)old.remove();shelf.dataset.signature=signature;if(shelf.childNodes.length){if(getComputedStyle(host).position==='static')host.style.position='relative';host.appendChild(shelf);}
  }
  var css=el('style');css.textContent='.canon-shelf{position:absolute;bottom:4px;right:5px;z-index:5;display:flex;gap:4px;align-items:center}#study .canon-book-shelf{position:relative;bottom:auto;right:auto;flex:none;align-self:flex-end;margin:0 0 2px 4px}.canon-object{background:#3a2414;border:1px solid #b79a64;padding:2px;width:44px;height:44px;cursor:pointer;box-shadow:2px 2px #000}.canon-object svg{width:100%;height:100%;display:block}.canon-object:focus-visible,.canon-close:focus-visible{outline:2px solid #f6b73c}.canon-dialog{box-sizing:border-box;width:min(340px,92vw);max-height:86vh;overflow:auto;color:#f4e6c4;background:#2d2019;border:2px solid #b79a64;box-shadow:4px 4px #080605;padding:16px;font:inherit;line-height:1.5}.canon-dialog::backdrop{background:rgba(10,8,14,.7)}.canon-dialog svg{display:block;width:78px;height:84px;margin:12px auto}.canon-dialog h3{font-size:1.1em;color:#f6b73c}.canon-dialog p{margin:12px 0}.canon-close{float:right;color:inherit;background:#493221;border:1px solid #b79a64;padding:4px 8px;cursor:pointer}';document.head.appendChild(css);
  function init(){mount();setTimeout(mount,300);setTimeout(mount,1000);setInterval(function(){if(!d)mount();},60000);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  window.addEventListener('fbl:lang',function(){if(d&&d.open)d.close();mount();});
})();
