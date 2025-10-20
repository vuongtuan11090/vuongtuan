// Mobile nav + smooth anchors + year
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => nav.classList.toggle('show'));

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        nav?.classList.remove('show');
      }
    });
  });

  // year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
