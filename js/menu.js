const menu = document.querySelector('.menu-box');
const openMenu = document.querySelector('.links');
const closeMenuButton = document.querySelector('#open-box');
const html = document.querySelector('html');
const navbarContainer = document.querySelector('.navbar-container');

const toggleMenu = () => {
	window.onclick = function (event) {
		if (event.target == navbarContainer) {
			navbarContainer.style.display = 'none';
		}
	};
	navbarContainer.style.display = 'block';
	navbarContainer.classList.toggle('nav-links-active');
	openMenu.classList.toggle('nav-links-active');
};

menu.addEventListener('click', toggleMenu);

const closeMenu = () => {
	html.style.overflowY = 'scroll';
	openMenu.classList.toggle('nav-links-active');
	navbarContainer.style.display = 'none';
};

closeMenuButton.addEventListener('click', closeMenu);
