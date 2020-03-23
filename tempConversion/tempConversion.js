const ftoc = function(f) {
	let c = (f - 32) * 100 / 180;
	return Number(c.toFixed(1));
};

const ctof = function(c) {
	let f = c * 180 / 100 + 32;
	return Number(f.toFixed(1));
};

module.exports = {
	ftoc,
	ctof
};
