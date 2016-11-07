/* Write a method that finds all the unique substrings for a word. */

function uniqSubs(str) {
	let seen  = {};
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length + 1; j++) {
			let subStr = str.slice(i, j);
			seen[subStr] = true;
		}
	}
	return Object.keys(seen);
}

/* Given an array of integers (positive and negative) find the
 largest contiguous subsum (sum of a subarray).

You can solve this trivially in O(n**2) time by considering all
 subarrays. Try to solve it in O(n) time with O(1) memory.
*/

function largestContSubSum(arr) {
	let max = 0;
	let currMax = 0;

	for (let i = 0; i < arr.length; i++ ) {
		currMax += arr[i];
		if (currMax > max) {
			max = currMax;
		} else if (currMax < 0) {
			currMax = 0;
		}
	}
	return max;

}

/*
Write a function that takes a year (four digit integer) and returns an
 array with the 10 closest subsequent years that meet the following condition:
  the first two digits summed with the last two digits are equal to the middle
   two digits. E.g.,

1978 => 19 + 78 = 97
2307 => 23 + 07 = 30
*/

function sillyYears(num) {
	let result = [];
	while (result.length < 10) {
		num++;
		let summedNums = num % 100 + Math.floor(num / 100);
		if (Math.floor(num % 1000  / 10) === summedNums) {
			result.push(num);
		}
	}
	return result;
}

/* 
Given an array of integers, return all pairs that sum up
 to a specified value k. List the pairs in [min, max] order.
*/

function pairSum(arr, k) {
	let seen = {};
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let diff = k - arr[i];
		if (seen[diff]) {
			result.push([Math.min(arr[i], diff), Math.max(arr[i], diff)]);
		} 
		seen[arr[i]] = true;
	}
	return result;
}