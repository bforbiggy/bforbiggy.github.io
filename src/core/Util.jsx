function isMobile() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) // who seriously uses blackberry in this day and age...
		.test(navigator.userAgent);
}

function randomInteger(minimum, maximum) {
	if (maximum === undefined) {
		maximum = minimum;
		minimum = 0;
	}

	return (Math.random() * (maximum - minimum + 1)) + minimum;
}

export { isMobile, randomInteger };