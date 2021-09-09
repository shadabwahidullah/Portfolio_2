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
    image: 'images/recentWork.png',
    techs: ['html','css','ruby'],
    live: '',
    source: '',
  },
  second:{
    name: 'Second Project',
    desc: "second project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/recentWork.png',
    techs: ['JS', 'Codepen', 'VScode'],
    live: '#"',
    sourse: '',
  },
  thrid:{
    name: 'Third project',
    desc: "Third project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '#',
    sourse: '',
  },
  fourth:{
    name: 'Fourth Project',
    desc: "Fourth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita." ,
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '#',
    source: '',
  },
  fifth:{
    name: 'Fifth Project',
    desc: "Fifth project description <br> Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },
  sixth:{
    name: 'Sixth Project',
    desc: "second project description",
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    techs: ['JS', 'Codepen', 'VScode'],
    live: '',
    source: '',
  },

}

const mybtn = document.querySelectorAll('.projectbtn');


mybtn[0].addEventListener('click',openPopupFirst);
mybtn[1].addEventListener('click',openPopupSecond);
mybtn[2].addEventListener('click',openPopupThird);
mybtn[3].addEventListener('click',openPopupFourth);
mybtn[4].addEventListener('click',openPopupFifth);
mybtn[5].addEventListener('click',openPopupSixth);


function openPopupFirst(){
  document.querySelector('.container').style.overflow = "hidden";
  document.getElementById('popupTitle').innerHTML = projects.first.name;
  let ul = document.querySelector('.popupUsedTechs');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  let li;
  for(let temp of projects.first.techs){
    li = document.createElement('li');
    li.innerHTML = temp;
    li.classList.add('tech');
    ul.appendChild(li);
  }
  document.getElementById('popupImage').src = projects.first.image;
  document.getElementById('popupDesc').innerText = projects.first.desc;
  document.getElementById('livelink').href = projects.first.live;
  document.getElementById('sourcelink').href= projects.first.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupSecond(){
  document.querySelector('.container').style.overflow = "hidden";
  document.getElementById('popupTitle').innerHTML = projects.second.name;
  let ul = document.querySelector('.popupUsedTechs');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  let li;
  for(let temp of projects.second.techs){
    li = document.createElement('li');
    li.innerHTML = temp;
    li.classList.add('tech');
    ul.appendChild(li);
  }
  document.getElementById('popupImage').src = projects.second.image;
  document.getElementById('popupDesc').innerText = projects.second.desc;
  document.getElementById('livelink').href = projects.second.live;
  document.getElementById('sourcelink').href= projects.second.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupThird(){
  document.querySelector('.container').style.overflow = "hidden";
  document.getElementById('popupTitle').innerHTML = projects.thrid.name;
  let ul = document.querySelector('.popupUsedTechs');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  let li;
  for(let temp of projects.thrid.techs){
    li = document.createElement('li');
    li.innerHTML = temp;
    li.classList.add('tech');
    ul.appendChild(li);
  }
  document.getElementById('popupImage').src = projects.thrid.image;
  document.getElementById('popupDesc').innerText = projects.thrid.desc;
  document.getElementById('livelink').href = projects.thrid.live;
  document.getElementById('sourcelink').href= projects.thrid.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupFourth(){
  document.querySelector('.container').style.overflow = "hidden";
  document.getElementById('popupTitle').innerHTML = projects.fourth.name;
  let ul = document.querySelector('.popupUsedTechs');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  let li;
  for(let temp of projects.fourth.techs){
    li = document.createElement('li');
    li.innerHTML = temp;
    li.classList.add('tech');
    ul.appendChild(li);
  }
  document.getElementById('popupImage').src = projects.fourth.image;
  document.getElementById('popupDesc').innerText = projects.fourth.desc;
  document.getElementById('livelink').href = projects.fourth.live;
  document.getElementById('sourcelink').href= projects.fourth.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupFifth(){
  document.querySelector('.container').style.overflow = "hidden";
  document.getElementById('popupTitle').innerHTML = projects.fifth.name;
  let ul = document.querySelector('.popupUsedTechs');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  let li;
  for(let temp of projects.fifth.techs){
    li = document.createElement('li');
    li.innerHTML = temp;
    li.classList.add('tech');
    ul.appendChild(li);
  }
  document.getElementById('popupImage').src = projects.fifth.image;
  document.getElementById('popupDesc').innerText = projects.fifth.desc;
  document.getElementById('livelink').href = projects.fifth.live;
  document.getElementById('sourcelink').href= projects.fifth.source;
  document.querySelector('.popup').classList.remove('expand');
}
function openPopupSixth(){
  document.querySelector('.container').style.overflow = "hidden";
  document.getElementById('popupTitle').innerHTML = projects.sixth.name;
  let ul = document.querySelector('.popupUsedTechs');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  let li;
  for(let temp of projects.sixth.techs){
    li = document.createElement('li');
    li.innerHTML = temp;
    li.classList.add('tech');
    ul.appendChild(li);
  }
  document.getElementById('popupImage').src = projects.sixth.image;
  document.getElementById('popupDesc').innerText = projects.sixth.desc;
  document.getElementById('livelink').href = projects.sixth.live;
  document.getElementById('sourcelink').href= projects.sixth.source;
  document.querySelector('.popup').classList.remove('expand');
}

document.querySelector('.closebutn').addEventListener('click',function(){
  document.querySelector('.container').style.overflow = "auto";
  document.querySelector('.popup').classList.add('expand');
})