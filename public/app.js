'use strict';

(function () {

	var button = document.getElementById('button');
	var input = document.getElementById('input');
	var output = document.getElementById('output');

	button.addEventListener('click', function () {
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

		output.innerHTML = 'Bonjour ' + name;
	};
})();
