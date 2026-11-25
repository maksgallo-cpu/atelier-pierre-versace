(function(){
  var menu=document.getElementById('menu');if(!menu)return;
  var openBtn=document.querySelector('[data-menu-open]'),closeBtn=document.querySelector('[data-menu-close]');
  function open(){menu.hidden=false;document.body.classList.add('menu-open');openBtn.setAttribute('aria-expanded','true');closeBtn.focus();}
  function close(){menu.hidden=true;document.body.classList.remove('menu-open');openBtn.setAttribute('aria-expanded','false');openBtn.focus();}
  openBtn.addEventListener('click',open);closeBtn.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!menu.hidden)close();});
  window.addEventListener('resize',function(){if(window.innerWidth>1020&&!menu.hidden)close();});
})();
