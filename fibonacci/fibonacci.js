const fibonacci = function(num) {
	let result = '';
	if (!isNaN(num) && num > 0) {
		let a = 1;
		let b = 0;
		for (let i = 1; i <= num; i++) {
			result = a + b;
			a = b;
			b = result;
		}
	} else {
		return 'OOPS';
	}

	return result;
};

module.exports = fibonacci;
