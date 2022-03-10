const showMore = document.querySelector('.more');
const speakersSection = document.querySelector('.speaker');
const speackers = [
  {
    name: 'Joel kama',
    photo: 'image01',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased...',
  },
  {
    name: 'Marcus perezz',
    photo: 'image02',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Jean de Dieu',
    photo: 'image03',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Grisia luiws',
    photo: 'image04',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Sham Gomez',
    photo: 'image05',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Michal Rio',
    photo: 'image06',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
];

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.hambager');
  const navBar = document.querySelector('nav');
  const icon = document.querySelector('.icon');
  nav.classList.toggle('scroll', window.scrollY > 0);
  navBar.classList.toggle('desc-scrool', window.scrollY > 0);
  icon.classList.toggle('active', window.scrollY > 0);
});

const navOpen = document.querySelectorAll('.toggle');
const nav = document.querySelector('.nav-links');
const closeNav = document.querySelectorAll('.toggle-close');

if (window.screenX > 400) {
  nav.classList.remove('nav-active');
}
window.addEventListener('scroll', () => {
  nav.classList.remove('nav-active', window.screen.width < 0);
});

navOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
});

closeNav.forEach((close) => {
  close.addEventListener('click', () => {
    nav.classList.remove('nav-active');
  });
});

const mainProjectsContainer = document.querySelector('.speaker');
mainProjectsContainer.innerHTML += speackers.map((project, index) => {
  let card = `<div class="speaker-data">
  <span><img src="img/pos.jpg" alt="" class="bihande"></span>
  <div class="${project.photo}"></div>
    <div class="describ">
       <h4 class="name">${project.name}</h4>
       <a class="discription">${project.role}</a>
       <p class="comment">
         ${project.description}
       </p>
    </div>
  </div>`;

  if (index >= 2) {
    card = `<div class="hidden">
    <span><img src="img/pos.jpg" alt="" class="bihande"></span>
    <div class="${project.photo}"></div>
      <div class="describ">
         <h4 class="name">${project.name}</h4>
         <a class="discription">${project.role}</a>
         <p class="comment">
           ${project.description}
         </p>
      </div>
    </div>`;
  }

  return card;
});

showMore.addEventListener('click', (e) => {
  e.preventDefault();
  speakersSection.classList.toggle('expand');

  if (speakersSection.classList.contains('expand')) {
    document.querySelector('.expand-arrow').classList.remove('fa-chevron-down');
    document.querySelector('.expand-arrow').classList.add('fa-chevron-up');
  } else {
    document.querySelector('.expand-arrow').classList.add('fa-chevron-down');
    document.querySelector('.expand-arrow').classList.remove('fa-chevron-up');
  }
});
