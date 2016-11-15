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

/*
Implement factorial with and without recursion. 
What is a potential disadvantage of the recursive way?

What is tail-recursion? Does Ruby have tail-call optimization?
 Pretend it did; write a tail-recursive version of rec_fac.
*/

function factRec(num) {
	if (num === 1) return 1;
	return num * (factRec(num - 1));
}

function factIter(num) {
	let result = 1;
	for (let i = 2; i < num; i++) {
		result *= num;
	}
	return result;
}

function factTailRec(num, product = 1) {
	if (num === 1) return product;
	return factTailRec(num - 1, product * num);
}
