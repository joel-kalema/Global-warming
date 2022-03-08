window.addEventListener('scroll', () => {
  const nav = document.querySelector('.hambager');
  const icon = document.querySelector('.icon')
  nav.classList.toggle('scroll', window.scrollY > 0);
  icon.classList.toggle('active', window.scrollY > 0);
});

const navOpen = document.querySelectorAll('.toggle');
const nav = document.querySelector('.nav-links');

navOpen.forEach((btn) => {
  btn.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
  });
});