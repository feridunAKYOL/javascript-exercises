const palindromes = function(str) {
	let str2 = [];
	for (var i = 0; i < str.length; i++) {
		// Get the character we'll be appending

		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {
			str2.push(c);
		}
	}
	for (i = 0; i < str2.length; i++) {
		str2[i] = str2[i].toLowerCase();
	}
	let result = true;
	let str3 = [];
	for (let i = str2.length - 1; i >= 0; i--) {
		str3.push(str2[i]);
	}
	for (i = 0; i < str2.length; i++) {
		if (str2[i] === str3[i]) {
			result = result && true;
		} else {
			return false;
		}
	}
	return result;
};

module.exports = palindromes;
