const getTheTitles = function(arr) {
	let arr2 = [];
	for (let item of arr) {
		arr2.push(item.title);
	}
	return arr2;
};

module.exports = getTheTitles;
