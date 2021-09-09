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
    name: 'First Project',
    desc: "first project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: '#',
    techs: ['html','css','ruby'],
    live: '',
    source: '',
  },
  second:{
    name: 'Second Project',
    desc: "second project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image:"#",
    techs: ['JS', 'Codepen', 'VScode'],
    live: 'href="#"',
    sourse: '',
  },
  thrid:{
    name: 'Third project',
    desc: "Third project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: "#",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '#',
    sourse: '',
  },
  fourth:{
    name: 'Fourth Project',
    desc: "Fourth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita." ,
    image: "#",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '#',
    source: '',
  },
  fifth:{
    name: 'Fifth Project',
    desc: "Fifth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: '#',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },
  sixth:{
    name: 'Sixth Project',
    desc: "second project description",
    image: "#",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },

}
