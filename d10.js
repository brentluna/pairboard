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


/*
Given a string, find the lexicographically greatest pseudo-substring.

Example (read on for further explanation):

max_unique_psub('abcdef')
=> 'f'

max_unique_psub('abcdefedcba')
=> 'fedcba'

max_unique_psub('algorithms')
=> 'ts'
Let's define a pseudo-substring: psub is any substring that is ordered by index.

For example:

"ac" is a psub of "acb"
"cb" is a psub of "acb"
"bc" is _not_ a psub of "acb" (letters are out of order)

psubs("acb") == [
  "a",
  "ac",
  "acb",
  "c",
  "cb",
  "b"
]
Next, let's define lexicographical order:

str1 > str2 IF
(a) str1 != str2 AND EITHER
(b1) str2 is a prefix of str1 OR
(b2) at the first position at which str1 and str2 differ (say i), str1[i] > str2[i].
For instance: "abc" > "ab" and "acb" > "abc".

With this information, given a string str, find the lexicographical greatest psubstring.

Solve it first by generating all psubstrings and picking the greatest (in Big-Oh, how many are there?).

Next, improve your algorithm to do this in O(n) time.
*/

function subSets(strArr) {
  if (strArr.length === 0) return [[]];
  let firstEl = strArr[0];
  let rest = strArr.slice(1);
  let prev = subSets(rest);
  let newSubs = prev.map(el => el.concat([firstEl]));
  newSubs = prev.concat(newSubs);
  return newSubs;
}
function pSub1(str) {
  let subs = subSets(str.split(''));
  subs = subs.map(sub => sub.join(''));
  let greatest = '';
  subs.forEach(sub => {
    if (sub > greatest){
      greatest = sub;
    }
  });
  return greatest;
}


function greatestPSub(str) {
  let greatest = [str[str.length - 1]];
  for (let i = str.length - 2; i > 0; i--) {
    if (str[i] > greatest[0]) {
      greatest.push(str[i]);
    }
  }
  greatest.reverse();
  return greatest.join('');
}



