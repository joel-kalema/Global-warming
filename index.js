const showMore = document.querySelector('.more');
const speakersSection = document.querySelector('.speaker');
const speackers = [
  {
    name: 'Joel kama',
    photo: 'img/speaker01.jpg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased...',
  },
  {
    name: 'Marcus perezz',
    photo: 'img/speaker02.jpg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Jean de Dieu',
    photo: 'img/speaker03.jpg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Grisia luiws',
    photo: 'img/speaker04.jpg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Sham Gomez',
    photo: 'img/speaker05.jpg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Michal Rio',
    photo: 'img/speaker06.jpg',
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
const nav = document.querySelector('.nav-show');
const closeNav = document.querySelectorAll('.toggle-close');

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
    <div class="box-img">
    <img src="${project.photo}" class="image" alt="" />
    </div>  
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
    <div class="box-img">
    <img src="${project.photo}" class="image" alt="" />
    </div> 
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
