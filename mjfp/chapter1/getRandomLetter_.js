/*const getRandomLetter = () => {
	const min = "A".charCodeAt();
	const max = "Z".charCodeAt();
	return String.fromCharCode(
		Math.floor(Math.random() * (1 + max - min)) + min
	);
};*/
const getRandomLetter = () => {
				const min = "A".charCodeAt();
				const max = "Z".charCodeAt();
				return String.fromCharCode(
					Math.floor(Math.random() * (1 + max - min)) + min
				);
			};