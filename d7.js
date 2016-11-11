/* 
Part 1: Say that I gave you an array of length n, containing the numbers 1..n
 in jumbled order. "Sort" this array in O(n) time. You should be able to do 
 this without looking at the input.

Part 2: Say that I give you an array of length n with numbers in the 
range 1..N (N >= n). Sort this array in O(n + N) time. You may use O(N) memory.

Part 3: Say I give you an array of n strings, each of length k. I claim 
that, using merge sort, you can sort this in O(knlog(n)), since comparing a 
pair of strings takes O(k) time.

I want you to beat that. Sort the strings in O(kn). Hint: do not compare 
any two strings. You may assume all strings contain only lowercase letters a..z 
without whitespace or punctuation.
*/

function nonCompSort1(arr) {
	arr.forEach((el, idx) => {
		arr[idx] = idx + 1;
	});
	return arr;
}

function nonCompSort2(arr, N) {
	let idxNarr = [];
	for (let i = 0; i < N; i++) {
		idxNArr[i] = false;
	}
	arr.forEach(el => {
		idxNarr[el] = true;
	});
	let result = [];
	idxNarr.forEach((el, idx) => {
		if (el) {
			result.push(idx);
		}
	});
	return result;
}

function nonCompSort3(arr, k) {
	for (let i = k - 1; k >= 0; k--) {

		let buckets = [];
		for (let j = 0; j < 26; j++) {
			buckets.push([]);
		}

		arr.forEach(str => {
			let letterIdx = str[i].charCodeAt() - 'a'.charCodeAt();
			buckets[letterIdx] = str;
		});
		arr = buckets.reduce((a, b) => a.concat(b));

	}
	return arr;
}

/* 
Given an array, write a function that will return a random index of the array. 
The probability of an index being returned is weighted by the value at that 
index against the sum of the array values. For example, for the array 
[4, 6, 8], index 0 should be returned with 4 in 18 odds, index 1 should be 
returned with 6 in 18 odds, and index 2 should be return with 8 in 18 odds.
 Implement this in O(n) time.
 */
function weightedRandomIndex(arr) { 
	let sum = arr.reduce((a, b) => a + b);
	let rand = Math.floor(Math.random() * sum)
	let cummulativeSum = 0;
	for (let i = 0; i < arr.length; i++) {
		cummulativeSum += arr[i];
		if (rand < cummulativeSum) return i;
	}
}

/*

Given an array, move all zeros to the end. The order of non-zero elements 
does not matter. Ex:

move_zeros([1, 2, 0, 3, 4, 0, 5, 6, 0]) == [1, 2, 6, 3, 4, 5, 0, 0, 0]

Algorithm should be O(n); use O(1) extra space.

*/

function moveZeros(arr) {
	let lastZeroIdx = arr.length - 1;
	for(let i = arr.length - 1; i >= 0; i--) {
		let currEl = arr[i];
		if (currEl === 0) {
			let tmp = arr[lastZeroIdx];
			arr[lastZeroIdx] = 0;
			arr[i] = tmp;
			lastZeroIdx--;
		}
	}
	return arr;
}

/* 
Implement the 'look and say' function. 'Look and say' takes an input array
 and outputs an array that describes the count of the elements in the input 
 array as they appear in order.


Example:

# there is one '1' in the input array
look_and_say([1]) == [[1, 1]]

# there are two '1's in the input array
look_and_say([1, 1]) == [[2, 1]]

# there is one '2', followed by one '1' in the input array
look_and_say([2, 1]) == [[1, 2], [1, 1]]

# is one '1', followed by one '2', followed by 2 '1's in the input
# array
look_and_say([1, 2, 1, 1]) == [[1, 1], [1, 2], [2, 1]]
*/

function lookAndSay(arr) {
	let counter = [[1, arr[0]]];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === counter[counter.length - 1][1]) {
			counter[counter.length -1][0]++
		} else {
			counter.push([1, arr[i]]);
		}
	}
	return counter;
}