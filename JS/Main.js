// navbar
// variables
var nav = document.getElementsByTagName('nav')[0];
var menuIcons = document.querySelectorAll('.menu-icons');

for (let i = 0;i < menuIcons.length;i++) {
  const menuIcon = menuIcons[i];

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}