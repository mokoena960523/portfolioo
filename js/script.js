let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLink.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		}

	});
	// remove the navbar and menu icon when scrolling
	navbar.classList.remove('active');
	menuIcon.classList.remove('fa-times');

	// sticky header

	let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 100);

}

ScrollReveal({ 
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.image, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// tryped js
const typed = new Typed('.multiple-text', {
	strings: ['fullstack web developer','mobile app developer'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true,
});






















