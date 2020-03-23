let findTheOldest = function(arr) {
	for (let item of arr) {
		if (item.hasOwnProperty('yearOfDeath')) {
			item.age = item.yearOfDeath - item.yearOfBirth;
		} else {
			item.age = 2020 - item.yearOfBirth;
		}
	}
	let oldest = -Infinity;
	let name = {};
	for (let item of arr) {
		if (item.age > oldest) {
			oldest = item.age;
			name = item;
		}
	}
	return name;
};

module.exports = findTheOldest;
