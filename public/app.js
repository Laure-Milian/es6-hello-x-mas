'use strict';

(function () {

	var button = document.getElementById('button');
	var input = document.getElementById('input');
	var output = document.getElementById('output');

	button.addEventListener('click', function (event) {
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Père Noël";

		if (input.value !== "") {
			name = input.value;
		}
		output.innerHTML = 'Bonjour ' + name;
	});
})();
