// SERGIO START


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

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
