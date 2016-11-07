/*Write a function that takes an array and returns all of its
 subsets. How many sets will it return?
*/

function subSets(arr) {
	if (!arr.length) return [[]];
	let first = arr[0];
	let rest = arr.slice(1);
	let prevSubSets = subSets(rest);
	let newSubs = prevSubSets.map(el => el.concat([first]));
	newSubs = prevSubSets.concat(newSubs);
	return newSubs;
}

/* Write a function that will take a string and return the
 indices of the start/end of the longest palindrome it contains.
*/

function longestPal(str) {
	let longest = [0, 0];
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length + 1; j++) {
			let subStr = str.slice(i, j);
			if (isPal(subStr) && (j - i - 1) > (longest[1] - longest[0])) {
				longest = [i, j - 1];
			}
		}
	}
	return longest;
}

function isPal(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

function bothInRange(i, j, str) {
	return (i >= 0 && i < str.length) && (j >= 0 && j < str.length)
}

function  longestPal(str) {
	let longestLength = 0;
	let longestBegin = 0;
	for (let i = 0; i < str.length; i++) {
		let stretch = 0;

		while(true) {
			if (!bothInRange(i + stretch, i - stretch, str)) break;

			if (str[i - stretch] === str[i + stretch]) {
				let currLength = stretch * 2 + 1;
				if (currLength > longestLength) {
					longestLength = currLength;
					longestBegin = i - stretch;
				}
			} else {
				break;
			}
			stretch++;
		}

		stretch = 0;
		while (true) {
			if (!bothInRange(i + stretch + 1, i - stretch, str)) break;

			if (str[i - stretch] === str[i + stretch + 1]) {
				let currLength = stretch * 2 + 2;
				if (currLength > longestLength) {
					longestLength = currLength;
					longestBegin = i - stretch;
				}
			} else {
				break;
			}
			stretch++;
		}
	}
	return str.slice(longestBegin, longestBegin + longestLength)
}