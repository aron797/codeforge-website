const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '78px';
  nav.style.right = '20px';
  nav.style.flexDirection = 'column';
  nav.style.background = '#0d1118';
  nav.style.padding = '18px';
  nav.style.border = '1px solid #1b222d';
  nav.style.borderRadius = '10px';
});
