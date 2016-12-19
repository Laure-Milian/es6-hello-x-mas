(() => {

	let button = document.getElementById('button');

	button.addEventListener('click', (content= 'test') => {
		let input = document.getElementById('input');
		let output = document.getElementById('output');
		content = input.value;
		console.log(content);
		output.innerHTML = `Bonjour ${content} !`;
	});

})();

	const hello = (name= "TomTom") => {
		console.log('hello' + name);
	};

	hello();
