'use strict';

(function () {

	var button = document.getElementById('button');

	button.addEventListener('click', function () {
		var input = document.getElementById('input');
		var output = document.getElementById('output');
		var content = input.value;
		console.log(content);
		output.innerHTML = content;
	});
})();
