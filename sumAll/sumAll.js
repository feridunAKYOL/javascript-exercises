const sumAll = function(a, b) {
	if (typeof a === 'number' && typeof b === 'number' && a > 0) {
		let total = 0;
		if (a > b) {
			for (let i = b; i <= a; i++) {
				total = total + i;
			}
			return total;
		}
		if (b > a) {
			for (let i = a; i <= b; i++) {
				total = total + i;
			}
			return total;
		}
	} else {
		return 'ERROR';
	}
};

module.exports = sumAll;
