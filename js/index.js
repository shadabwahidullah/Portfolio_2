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

const validMail = document.getElementById('email');
var mailRegex = (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
const subBtn = document.getElementById('subBtn');

subBtn.addEventListener('submit', () => {
  If (validMail == mailRegex) {
    document.createElement("span");
    document.appendChild = span
  }
}