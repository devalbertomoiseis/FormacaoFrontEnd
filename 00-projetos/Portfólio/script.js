const icon = document.querySelector('.bars__menu');
const menu = document.querySelector('.container__nav');

icon.addEventListener('click', function() {
	menu.classList.toggle('move');
	icon.classList.toggle('move__bars');
});

menu.addEventListener('click', function() {
	if (window.innerWidth < 550) {
		menu.classList.remove('move');
		icon.classList.toggle('move__bars');
	}
});

