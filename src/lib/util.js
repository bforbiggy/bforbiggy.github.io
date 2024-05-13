

function randomRange(min, max) {
	if (max === undefined || max === null) {
		max = min;
		min = 0;
	}
	return Math.random() * (max - min) + min;
}

export { randomRange }