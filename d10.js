/*
Write a function that takes an integer and returns it in binary form.
3 => 11
4 => 100
7 => 111
*/

function toBinary(num) {
	let binary = [];
	while (num !== 0) {
		binary.unshift(num % 2);
		num = Math.floor(num / 2);
	}
	return binary.length ? binary.join('') : '0';
}