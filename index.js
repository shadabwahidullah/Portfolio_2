const menubtn = document.querySelector('#menu');

function menubtnClicked() {
  document.querySelector('.menuexpand').classList.toggle('expand');
  document.querySelector('.menu').classList.toggle('expand');
  document.querySelector('.name').classList.toggle('expand');
  document.querySelector('.closebtn').classList.toggle('expand');
  document.querySelector('.toolbar').classList.toggle('height100');
}
menubtn.addEventListener('click', menubtnClicked);

const closemenu = document.querySelector('.closebtn');
closemenu.addEventListener('click', menubtnClicked);

document.querySelectorAll('.expitem').forEach((item) => {
  item.addEventListener('click', menubtnClicked);
});

let projects = {
  first:{
    name: 'first',
    desc: 'first project description',
    image: URL('#'),
    techs: ['html','css','ruby'],
    live: '',
    source: '',
  },
  second:{
    name: 'second',
    desc: 'second project description',
    image: URL('#'),
    techs: ['JS', 'Codepen', 'VScode'],
    live: 'href="#"',
    sourse: '',
  },
  thrid:{
    name: 'second',
    desc: 'second project description',
    image: URL('#'),
    techs: ['JS', 'Codepen', 'VScode'],
    live: 'href="#"',
    sourse: '',
  },
  fourth:{
    name: 'second',
    desc: 'second project description',
    image: URL('#'),
    techs: ['JS', 'Codepen', 'VScode'],
    live: 'href="#"',
    sourse: '',
  },
  fivth:{
    name: 'second',
    desc: 'second project description',
    image: URL('#'),
    techs: ['JS', 'Codepen', 'VScode'],
    live: 'href="#"',
    sourse: '',
  },
  sixth:{
    name: 'second',
    desc: 'second project description',
    image: URL('#'),
    techs: ['JS', 'Codepen', 'VScode'],
    live: 'href="#"',
    sourse: '',
  },

}
console.log(projects.first.name);
console.log(projects.first.name);
console.log(projects.first.techs);
document.getElementById('popupTitle').innerHTML = "nothing";

// function generatePopup(){
//   document.getElementById('popupTitle') = projects.first.name;
// }

// document.querySelector('.popup').addEventListener('click',generatePopup);
