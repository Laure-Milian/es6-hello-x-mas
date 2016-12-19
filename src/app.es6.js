(() => {

	const button = document.getElementById('button');
	const input = document.getElementById('input');
	const output = document.getElementById('output');

	button.addEventListener('click', () => {		
		let content = input.value;
		if (input.value !== "") {
			name = input.value;
			hello(name);
		}
		else {
			hello();
		}
	});

	const hello = (name= 'Père Noël') => {
		output.innerHTML = `Bonjour ${name}`;
	};

})();