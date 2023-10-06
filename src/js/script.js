const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.menu');
const menuBthIcons = document.querySelector('.menu-btn__box_icons');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  menuBtn.classList.toggle('open');
  menuBthIcons.classList.toggle('rotate-180');
});
