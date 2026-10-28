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
