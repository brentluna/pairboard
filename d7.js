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
	console.log(arr, k)
	for (let i = k - 1; k >= 0; k--) {

		let buckets = [];
		for (let j = 0; j < 26; j++) {
			buckets.push([]);
		}
		console.log(buckets, arr);

		arr.forEach(str => {
			let letterIdx = str[i].charCodeAt() - 'a'.charCodeAt();
			buckets[letterIdx] = str;
		});
		arr = buckets.reduce((a, b) => a.concat(b));

	}
	return arr;
}