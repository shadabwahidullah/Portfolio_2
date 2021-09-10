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

const email = document.getElementById('email');
const subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', (event) => {
  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      document.getElementById('error').innerText = 'You should provide an email address';
    } else if (email.validity.typeMismatch) {
      document.getElementById('error').innerText = 'Your email address is incorrect';
    } else if (email.validity.patternMismatch) {
      document.getElementById('error').innerText = 'Your email address should be lowercase';
    }
    document.getElementById('error').style.visibility = 'visible';
    event.preventDefault();
  }
});

email.addEventListener('input', () => {
  document.getElementById('error').style.visibility = 'hidden';
});
