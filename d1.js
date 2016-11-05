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