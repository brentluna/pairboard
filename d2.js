/* Write a function, fibs(num) which returns the first
 n elements from the fibonnacci sequence, given n.
Solve it both iteratively and recursively.
*/

function fibsRec(num) {

	if (num < 3) {
		return [1, 1].slice(0, num)
	}

	let prev = fibs(num -1);
	prev.push(prev.slice(-2).reduce((first, last) => first + last));
	return prev;
}

function fibsIt(num) {
	let fibs = [1, 1];
	if (num < 3) {
		return fibs.slice(0, num);
	}

	for (let i = 3; i <= num; i++) {
		fibs.push(fibs.slice(-2).reduce((first, last) => first + last));
	}
	return  fibs;
}

/* Write a function that takes a string and
 returns true if it's a palindrome, false if it's not.

This solution takes less time and memory than rebuilding the
 string backward and comparing the two.
*/

function isPal(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
}
