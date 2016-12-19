(() => {

	let button = document.getElementById('button');

	button.addEventListener('click', () => {
		let input = document.getElementById('input');
		let output = document.getElementById('output');
		let content = input.value;
		console.log(content);
		output.innerHTML = content;
	});

})();