/* Implement the Array.prototype.map function in JavaScript. */

Array.prototype.myMap =  function(cb) {
	let result = [];
	this.forEach(el => {
		let curr = cb(el);
		result.push(curr);
	});
	return result;
}


/*Implement the Folding Cipher. It folds the alphabet in half
 and uses the adjacent letter. Ie. a <=> z, b <=> y, c <=> x, m <=> n.
*/

function foldingCipher(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (char === ' ') {
			result += ' ';
		} else {
			result += swapChar(char);
		}
	}
	return result;
}

function swapChar(char) {
	let val = char.charCodeAt();
	let diff = val - 97;
	return String.fromCharCode(26 - diff + 96)
}

