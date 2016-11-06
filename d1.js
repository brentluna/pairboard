//Write a method, digital_root(num). It should sum the digits
//of a positive integer. If it is greater than or equal to
// 10, sum the digits of the resulting number. Keep repeating
// until there is only one digit in the result, called the
// "digital root". Do not use string conversion within 
// your method.

function digitalRoot(num) {
	if (num < 10) return num;
	let result = 0;
	while (num > 10) {
		result += num % 10;
		num = Math.floor(num / 10);
	}
	return digitalRoot(result + num);
}

//Write a function that takes a message and an increment
// amount and outputs the same letters shifted by that
// amount in the alphabet. Assume lowercase and no punctuation.
// Preserve spaces.

function caesarCipher(str, shift) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') {
			result += ' ';
		} else {
			result +=  shiftChar(str[i], shift);
		}
	}
	return result;
}


function shiftChar(c, shift) {
	let charCodeAt = c.charCodeAt();
	if (charCodeAt < 97) {
		return String.fromCharCode(((charCodeAt - 65 + shift) % 26 + 65)); 
	} else {
		return String.fromCharCode(((charCodeAt - 97 + shift) % 26 + 97));
	}
}

/*
Write a function, longest_common_substring(str1, str2) that
 takes two strings and returns the longest common substring.
  A substring is defined as any consecutive slice of letters
   from another string.

Bonus: solve it in O(m * n) using O(m * n) extra space.
 (Hint: the solution involves dynamic programming which
  will be introduced later in the course.)
*/

function longestCommonSubStr(str1, str2) {
	let longest = '';
	for (let i = 0; i < str1.length; i++) {
		for (let j = i; j < str1.length; j++) {
			let str = str1.slice(i, j);
			if (str.length > longest.length && str2.indexOf(str) !== -1) {
				longest = str;
			}
		}
	}
	return longest;
}

function makeMatrix(str1, str2) {
	let matrix = [];
	for (let i = 0; i < str1.length; i++) {
		matrix.push([]);
		for (let j = 0; j < str2.length; j++) {
			if (i === 0 || j ==== 0) {
				matrix[i][j] = 0;
			} else if (str1[i + 1] === str2[j + 1]) {
				matrix[i][j] = matrtrix[i -1][j - 1] + 1;
			} else {
				matrix[i][j] = 0;
			}
		}
	}
	return matrix;
}

/*
Write a function that takes an array of integers and returns 
their sum. Use recursion.
*/

function sumRec(arr) {
	if (!arr.length) return 0;
	let val = arr.pop();
	return sumRec(arr) + val;
}