const menu = document.querySelector('.menu-box');
const openMenu = document.querySelector('.links');
const closeMenuButton = document.querySelector('#open-box');
const body = document.querySelector('body');



const toggleMenu = () => {
	body.style.overflow = 'hidden';
	openMenu.classList.toggle('nav-links-active');
};

menu.addEventListener('click', toggleMenu);

const closeMenu = () => {
	body.style.overflowY = 'visible';
	openMenu.classList.toggle('nav-links-active');
};

closeMenuButton.addEventListener('click', closeMenu);