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
		display(goodName);
	};

	const addToArray = (goodName) => {
		namesArray.push(goodName);
	};

	const display = (goodName) => {
		let newLine = document.createElement('li');
		newLine.innerHTML = goodName;
		listOfNames.appendChild(newLine);
	};

})();