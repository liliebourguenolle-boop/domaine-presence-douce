(function(){
  var btn=document.querySelector('.menu-toggle'),nav=document.getElementById('menu-nav');
  function setOpen(open){btn.setAttribute('aria-expanded',open);nav.hidden=!open}
  btn.addEventListener('click',function(e){e.stopPropagation();setOpen(nav.hidden)});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('click',function(e){if(!nav.hidden&&!e.target.closest('.menu'))setOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!nav.hidden){setOpen(false);btn.focus()}});
})();

document.querySelectorAll('.share').forEach(function(btn){
  var label=btn.textContent;
  btn.addEventListener('click',function(){
    var data={title:'Domaine Présence Douce',text:'Un lieu pensé pour les personnes neuroatypiques et leurs familles',url:'https://domainepresencedouce.fr/'};
    if(navigator.share){navigator.share(data).catch(function(){});return}
    if(navigator.clipboard){navigator.clipboard.writeText(data.url).then(function(){btn.textContent='Lien copié';setTimeout(function(){btn.textContent=label},2000)})}
  });
});

(function(){
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.documentElement.classList.add('js');
  var els=document.querySelectorAll('main section h2, main .intro, .pole, .steps>div, .timeline li, .follow, .links a');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(el){
    var i=Array.prototype.indexOf.call(el.parentNode.children,el);
    el.style.setProperty('--d',Math.min(i,5)*0.08+'s');
    el.classList.add('reveal');io.observe(el);
  });
})();
