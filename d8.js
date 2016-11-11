/* 

I give you a scrambled list of n unique integers between 0 and n. 
Tell me what number is missing.

If I let you use O(nlog(n)) time, what is a naive way of doing this?

Next, what if I require that you solve the problem in O(n) time? What 
datastructure might you use?

Finally, how could you solve the problem in O(n), and also O(1) space?

*/

function sumUponSums1(arr) {
	let sorted = arr.sort((a, b) => {
		return Math.sign(a - b);
	});

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== i + 1) return (i + 1);
	}
}

function sumUponSums2(arr) {
	let numHash = {};
	arr.forEach(el => numHash[el] = true);
	
	for (let i = 1; i <= arr.length; i++) {
		if (!numHash[i]) return i;
	}
}

function sumUponSums3(arr) {
	let sum = arr.reduce((a, b) => a + b);
	for	(let i = 1; i <= arr.length + 1; i++) {
		sum -= i;
	}
	return Math.abs(sum);
}