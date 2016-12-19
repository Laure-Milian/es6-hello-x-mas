(() => {

	//Step 1
	const button = document.getElementById('button');
	const input = document.getElementById('input');
	const output = document.getElementById('output');

	// Step 2
	let listOfNames = document.getElementById('listOfNames');
	let namesArray = [];
	
	// Step 1
	button.addEventListener('click', (event, name="Père Noël") => {
		if (input.value !== "") {
			name = input.value;
			capitalizeName(name);
		}
		output.innerHTML = `Bonjour ${name}`;
	});

	//Step2
	const capitalizeName = (name) => {
		let goodName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
		addToArray(goodName);
	};

	const addToArray = (goodName) => {
		namesArray.push(goodName);
		display();
	};

	const display = () => {
		listOfNames.innerHTML = '';
		let len = namesArray.length;
		for (let i = 0; i < len; i++) {
			let newLine = document.createElement('li');
			newLine.innerHTML = namesArray[i];
			listOfNames.appendChild(newLine);
		}
	};

	//Step 3
	const inputSearch = document.getElementById('inputSearch');
	const buttonSearch = document.getElementById('buttonSearch');

	buttonSearch.addEventListener('click', () => {
		if (inputSearch.value !== "") {
			let search = inputSearch.value;
			console.log(search);
			let len = namesArray.length;
			for (let i = 0; i < len; i++) {
				console.log(namesArray[i]);
			}
		}
	});


})();