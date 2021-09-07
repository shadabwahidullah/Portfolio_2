console.log('started web');
let menubtn = document.querySelector('#menu');

function menubtnClicked(){
  document.querySelector('.menuexpand').classList.toggle('expand');
  document.querySelector('.menu').classList.toggle('expand');
  document.querySelector('.name').classList.toggle('expand');
  document.querySelector('.closebtn').classList.toggle('expand');
  document.querySelector('.toolbar').classList.toggle('height100');
}
// console.log(typeof.temp);
menubtn.addEventListener('click',menubtnClicked);

let closemenu = document.querySelector('.closebtn');
closemenu.addEventListener('click',menubtnClicked);

// let menuitems = document.querySelector('.expitem');
// menuitems.addEventListener('click',menubtnClicked);

document.querySelectorAll('.expitem').forEach(item => {
  item.addEventListener('click', menubtnClicked)});
