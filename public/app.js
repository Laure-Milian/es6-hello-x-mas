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
	};

	var addToArray = function addToArray(goodName) {
		namesArray.push(goodName);
		display();
	};

	var display = function display() {
		listOfNames.innerHTML = '';
		var len = namesArray.length;
		for (var i = 0; i < len; i++) {
			var newLine = document.createElement('li');
			newLine.innerHTML = namesArray[i];
			listOfNames.appendChild(newLine);
		}
	};

	//Step 3
	var inputSearch = document.getElementById('inputSearch');
	var buttonSearch = document.getElementById('buttonSearch');

	buttonSearch.addEventListener('click', function () {
		if (inputSearch.value !== "") {
			var search = inputSearch.value;
			console.log(search);
			var len = namesArray.length;
			for (var i = 0; i < len; i++) {
				console.log(namesArray[i]);
			}
		}
	});
})();
