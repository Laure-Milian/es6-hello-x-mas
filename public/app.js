'use strict';

(function () {

	//Step 1
	var button = document.getElementById('button');
	var input = document.getElementById('input');
	var output = document.getElementById('output');

	// Step 2
	var listOfNames = document.getElementById('listOfNames');
	var namesArray = [];

	// Step 1
	button.addEventListener('click', function (event) {
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Père Noël";

		if (input.value !== "") {
			name = input.value;
			capitalizeName(name);
		}
		output.innerHTML = 'Bonjour ' + name;
	});

	//Step2
	var capitalizeName = function capitalizeName(name) {
		var goodName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
		addToArray(goodName);
		display(goodName);
	};

	var addToArray = function addToArray(goodName) {
		namesArray.push(goodName);
	};

	var display = function display(goodName) {
		var newLine = document.createElement('li');
		newLine.innerHTML = goodName;
		listOfNames.appendChild(newLine);
	};
})();
