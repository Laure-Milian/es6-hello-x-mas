(() => {

	const button = document.getElementById('button');
	const input = document.getElementById('input');
	const output = document.getElementById('output');

	let listOfNames = document.getElementById('listOfNames');
	let namesArray = [];
	
	const inputSearch = document.getElementById('inputSearch');
	const buttonSearch = document.getElementById('buttonSearch');

	button.addEventListener('click', (event, name="Père Noël") => {
		if (input.value !== "") {
			name = input.value;
			capitalizeName(name);
		}
		output.innerHTML = `Bonjour ${name}`;
	});

	const capitalizeName = (name) => {
		let goodName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
		addToArray(goodName);
	};

	const addToArray = (goodName) => {
		namesArray.push(goodName);
		display(namesArray);
	};

	buttonSearch.addEventListener('click', () => {
		if (inputSearch.value !== "") {
			let search = inputSearch.value;
			search = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
			let lenSearch = search.length;

			let newArray = namesArray.filter((e) => {
				let sliceValue = e.slice(0, lenSearch);
				if (sliceValue === search) {
					return e;
				}
			})
			display(newArray);
		}
	});

	const display = (arrayName) => {
		listOfNames.innerHTML = '';
		let len = arrayName.length;
		for (let i = 0; i < len; i++) {
			let newLine = document.createElement('li');
			newLine.innerHTML = arrayName[i];
			listOfNames.appendChild(newLine);
		}
	};

})();