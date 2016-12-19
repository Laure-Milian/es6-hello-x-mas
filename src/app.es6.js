(() => {

	let button = document.getElementById('button');

	button.addEventListener('click', () => {
		let input = document.getElementById('input');
		let output = document.getElementById('output');
		let content = input.value;
		if (input.value !== "") {
			name = input.value;
			hello(name);
		} else {
			hello();
		}
	});

	const hello = (name= 'Père Noël') => {
		output.innerHTML = `Bonjour ${name} !`;
	};

})();