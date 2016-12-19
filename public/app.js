'use strict';

(function () {

	var button = document.getElementById('button');

	button.addEventListener('click', function () {
		var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'test';

		var input = document.getElementById('input');
		var output = document.getElementById('output');
		content = input.value;
		console.log(content);
		output.innerHTML = 'Bonjour ' + content + ' !';
	});
})();

var hello = function hello() {
	var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "TomTom";

	console.log('hello' + name);
};

hello();
