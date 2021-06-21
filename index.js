const menuBtn = document.querySelector('.burger');
const menuOpen = document.querySelector('header nav ul');
const menuClose = document.querySelector('.close-menu-btn button');
const menuItems = document.querySelectorAll('header nav ul li a');

menuBtn.addEventListener('click', () => menuOpen.classList.add('mobileMenu'));
menuClose.addEventListener('click', () => menuOpen.classList.remove('mobileMenu'));
menuItems.forEach((item) => item.addEventListener('click', () => menuOpen.classList.remove('mobileMenu')));