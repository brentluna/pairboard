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

//  Non-Naive O(n^2) time

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


/* Given arr1 and arr2, find the intersection of both sets.
 It should be trivial to write an O(n**2) solution. Use sorting
  to solve in O(nlog(n)). Next, improve this to O(n) time (maybe
   use a non-array datastructure).
*/

function fastIntersect(arr1, arr2) {
	let arr1Hash = {};
	let result = [];
	arr1.forEach(el => {
		arr1Hash[el] ? arr1Hash[el] =  arr1Hash[el] + 1 : arr1Hash[el] = 1;
	});
	arr2.forEach(el => {
		if(arr1Hash[el] > 0) {
			result.push(el);
			arr1Hash[el] = arr1Hash[el] - 1;
		}
	});
	return result;
}

/*Write a function that takes two arrays (arr1 and arr2) of integers and 
returns an array with all the subsets commmon to both.

Don't generate all subsets of arr1 and arr2, which would take time
 exponential in the size of arr1/arr2 (and take O(2**n) memory as well).
  Instead, directly generate the subsets of both.
*/

function subsets(arr) {
	if (!arr.length) return [[]];
	let first = arr[0];
	let rest = arr.slice(1);
	let prevSubsets = subsets(rest);
	let newSubsets = prevSubsets.map(el => el.concat([first]));
	newSubsets = prevSubsets.concat(newSubsets);
	return newSubsets;
}

function commonSubsets(arr1, arr2) {
	let arr = fastIntersect(arr1, arr2);
	return subsets(arr);
}

/* 
Given an array and index, find if it's possible to reach the value 0 by starting
 at the given index and repeatedly moving left/right by the distance found
  at array[index].

Example:

can_win?([1, 0, 1], 0)
=> true

can_win?([1, 2, 0], 0)
=> false
Hint: Use memoization to record where you've been.
*/

function canWin(arr, idx, seen = {}) {
	if (arr[idx] === 0) return true;
	if (seen[idx] || idx < 0 || idx >= arr.length) {
		return false;
	} else {
		seen[idx] = true;
	}

	let leftIdx =  idx - arr[idx];
	let rightIdx = idx + arr[idx];

	return canWin(arr, leftIdx, seen) || canWin(arr, rightIdx, seen);

}