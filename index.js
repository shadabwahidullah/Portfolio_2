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

const projects = {
  first: {
    name: 'First Project',
    desc: "first project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/recentWork.png',
    techs: ['html', 'css', 'ruby'],
    live: '',
    source: '',
  },
  second: {
    name: 'Second Project',
    desc: "second project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/recentWork.png',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '"',
    sourse: '',
  },
  third: {
    name: 'Third project',
    desc: "Third project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },
  fourth: {
    name: 'Fourth Project',
    desc: "Fourth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },
  fifth: {
    name: 'Fifth Project',
    desc: "Fifth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },
  sixth: {
    name: 'Sixth Project',
    desc: "Sixth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },

};

const mybtn = document.querySelectorAll('.projectbtn');

function openPopupFirst() {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects.first.name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects.first.techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects.first.image;
  document.getElementById('popupDesc').innerText = projects.first.desc;
  document.getElementById('livelink').href = projects.first.live;
  document.getElementById('sourcelink').href = projects.first.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupSecond() {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects.second.name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects.second.techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects.second.image;
  document.getElementById('popupDesc').innerText = projects.second.desc;
  document.getElementById('livelink').href = projects.second.live;
  document.getElementById('sourcelink').href = projects.second.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupThird() {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects.third.name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects.third.techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects.third.image;
  document.getElementById('popupDesc').innerText = projects.third.desc;
  document.getElementById('livelink').href = projects.third.live;
  document.getElementById('sourcelink').href = projects.third.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupFourth() {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects.fourth.name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects.fourth.techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects.fourth.image;
  document.getElementById('popupDesc').innerText = projects.fourth.desc;
  document.getElementById('livelink').href = projects.fourth.live;
  document.getElementById('sourcelink').href = projects.fourth.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupFifth() {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects.fifth.name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects.fifth.techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects.fifth.image;
  document.getElementById('popupDesc').innerText = projects.fifth.desc;
  document.getElementById('livelink').href = projects.fifth.live;
  document.getElementById('sourcelink').href = projects.fifth.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupSixth() {
  document.querySelector('.container').style.overflow = 'hidden';
  document.getElementById('popupTitle').innerHTML = projects.sixth.name;
  const ul = document.querySelector('.popupUsedTechs');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  let li;
  projects.sixth.techs.forEach((key) => {
    li = document.createElement('li');
    li.innerHTML = key;
    li.classList.add('tech');
    ul.appendChild(li);
  });
  document.getElementById('popupImage').src = projects.sixth.image;
  document.getElementById('popupDesc').innerText = projects.sixth.desc;
  document.getElementById('livelink').href = projects.sixth.live;
  document.getElementById('sourcelink').href = projects.sixth.source;
  document.querySelector('.popup').classList.remove('expand');
}

mybtn[0].addEventListener('click', openPopupFirst);
mybtn[1].addEventListener('click', openPopupSecond);
mybtn[2].addEventListener('click', openPopupThird);
mybtn[3].addEventListener('click', openPopupFourth);
mybtn[4].addEventListener('click', openPopupFifth);
mybtn[5].addEventListener('click', openPopupSixth);

document.querySelector('.closebutn').addEventListener('click', () => {
  document.querySelector('.container').style.overflow = 'auto';
  document.querySelector('.popup').classList.add('expand');
});