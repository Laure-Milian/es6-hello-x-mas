'use strict';

(function () {

	var button = document.getElementById('button');
	var input = document.getElementById('input');
	var output = document.getElementById('output');

	var listOfNames = document.getElementById('listOfNames');
	var namesArray = [];

	var inputSearch = document.getElementById('inputSearch');
	var buttonSearch = document.getElementById('buttonSearch');

	button.addEventListener('click', function (event) {
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Père Noël";

		if (input.value !== "") {
			name = input.value;
			capitalizeName(name);
		}
		output.innerHTML = 'Bonjour ' + name;
	});

	var capitalizeName = function capitalizeName(name) {
		var goodName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
		addToArray(goodName);
	};

	var addToArray = function addToArray(goodName) {
		namesArray.push(goodName);
		display(namesArray);
	};

	buttonSearch.addEventListener('click', function () {
		if (inputSearch.value !== "") {
			(function () {
				var search = inputSearch.value;
				search = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
				var lenSearch = search.length;

				var newArray = namesArray.filter(function (e) {
					var sliceValue = e.slice(0, lenSearch);
					if (sliceValue === search) {
						return e;
					}
				});
				display(newArray);
			})();
		}
	});

	var display = function display(arrayName) {
		listOfNames.innerHTML = '';
		var len = arrayName.length;
		for (var i = 0; i < len; i++) {
			var newLine = document.createElement('li');
			newLine.innerHTML = arrayName[i];
			listOfNames.appendChild(newLine);
		}
	};
})();
