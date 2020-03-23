function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function sum(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total = total + arr[i];
	}
	return total;
}

function multiply(arr) {
	let multi = 1;
	for (let i = 0; i < arr.length; i++) {
		multi = multi * arr[i];
	}
	return multi;
}

function power(x, y) {
	let power = 1;
	for (let i = 0; i < y; i++) {
		power = power * x;
	}
	return power;
}

function factorial(x) {
	let factor = 1;
	for (let i = 1; i <= x; i++) {
		factor = factor * i;
	}
	return factor;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
