const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus();}});
document.getElementById('year').textContent=new Date().getFullYear();
