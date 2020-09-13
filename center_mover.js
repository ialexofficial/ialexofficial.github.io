document.addEventListener('DOMContentLoaded', function() {
	body = document.querySelector('body');
	header = document.querySelector('header');
	main = document.querySelector('main');
	main.style.height = body.clientHeight - header.clientHeight - 27.5 + 'px';
	window.addEventListener('resize', function() {
		main.style.height = 'unset';
		main.style.height = body.clientHeight - header.clientHeight - 27.5 + 'px';
	});
});