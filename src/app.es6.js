(() => {

	const button = document.getElementById('button');
	const input = document.getElementById('input');
	const output = document.getElementById('output');

	button.addEventListener('click', (event, name="Père Noël") => {
		if (input.value !== "") {
			name = input.value;
		}
		output.innerHTML = `Bonjour ${name}`;
	});

})();