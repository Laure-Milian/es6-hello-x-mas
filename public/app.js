'use strict';

(function () {

	var button = document.getElementById('button');
	var input = document.getElementById('input');
	console.log(button);
	button.addEventListener('click', function () {
		return console.log("heyhey");
	});
	//	.on('click', () => {console.log("heyhey")});
})();
