function fibs(num) {

	if (num < 3) {
		return [1, 1].slice(0, num)
	}

	let prev = fibs(num -1);
	prev.push(prev.slice(-2).reduce((first, last) => first + last));
	return prev;
}