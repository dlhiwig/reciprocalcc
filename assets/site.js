(function(){
  var button=document.querySelector('.menu-toggle');
  var nav=document.getElementById('primary-nav')||document.querySelector('.nav-links');
  if(!button||!nav){var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear(); return;}
  var links=nav.querySelectorAll('a');
  function setOpen(open, returnFocus){
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    if(open && links[0]) links[0].focus();
    if(!open && returnFocus) button.focus();
  }
  button.addEventListener('click', function(){ setOpen(!nav.classList.contains('open'), false); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && nav.classList.contains('open')) setOpen(false, true); });
  links.forEach(function(a){ a.addEventListener('click', function(){ setOpen(false, false); }); });
  document.addEventListener('click', function(e){
    if(nav.classList.contains('open') && !nav.contains(e.target) && !button.contains(e.target)) setOpen(false, false);
  });
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
