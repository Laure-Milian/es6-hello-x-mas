'use strict';

(function () {

	var button = document.getElementById('button');

	button.addEventListener('click', function () {
		var input = document.getElementById('input');
		var output = document.getElementById('output');
		var content = input.value;
		if (input.value !== "") {
			name = input.value;
			hello(name);
		} else {
			hello();
		}
	});

	var hello = function hello() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Père Noël';

		output.innerHTML = 'Bonjour ' + name + ' !';
	};
})();
