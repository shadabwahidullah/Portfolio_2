// SERGIO START


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.toolbar').style.height = "88vh";
    document.querySelector('.menuitem').style.display = "flex";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.querySelector('.toolbar').style.height = "50px";
    document.querySelector('.menuitem').style.display = "none";
    menuOpen = false;
  }
});
var toolbar = document.querySelector('.toolbar');
var menuitem = document.querySelector('.menuitem');
menuitem.addEventListener()
function x(menuOpen,menuitem) {
  if (!menuOpen) {
    menuitem.style.display = 'none';
  }else{
    menuitem.style.display = 'flex';
}
}
// let menu = document.querySelector('menu'); 

// function menuOpen() {
//   menu.style.display: block;
// }


// var menu = document.querySelector(".menu");
// var menuBbtn__burger = document.querySelector(".menuBbtn__burger");
// var menuLinks = document.querySelectorAll(".menuLink");

// menuBbtn__burger.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (menu.classList.contains('open')) {
//     menu.classList.remove('open');
//   } else {
//     menu.classList.add('open');
//   }
// }

// menuLinks.forEach( 
//   function(menuLink) { 
//     menuLink.addEventListener("click", toggleMenu);
//   }
// );
