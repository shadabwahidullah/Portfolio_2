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
    image: '#',
    techs: ['html','css','ruby'],
    live: '',
    source: '',
  }
}
console.log(projects.first.name);
console.log(projects.first.name);
console.log(projects.first.techs);
document.getElementById('popupTitle').innerHTML = "nothing";

// function generatePopup(){
//   document.getElementById('popupTitle') = projects.first.name;
// }

// document.querySelector('.popup').addEventListener('click',generatePopup);
