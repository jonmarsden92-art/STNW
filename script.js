const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
(function(){var f=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('nav a').forEach(function(a){if(a.getAttribute('href')===f)a.setAttribute('aria-current','page')})})();
