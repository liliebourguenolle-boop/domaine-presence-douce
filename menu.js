(function(){
  var btn=document.querySelector('.menu-toggle'),nav=document.getElementById('menu-nav');
  function setOpen(open){btn.setAttribute('aria-expanded',open);nav.hidden=!open}
  btn.addEventListener('click',function(e){e.stopPropagation();setOpen(nav.hidden)});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('click',function(e){if(!nav.hidden&&!e.target.closest('.menu'))setOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!nav.hidden){setOpen(false);btn.focus()}});
})();
