/*
 Write a method that takes an array and returns all its permutations. Time/memory complexity
 should be proportional to the number of permutations; what is this?

Example:

permutations([1,2,3])
=> [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
Bonus:

Write a class, PermutationIterator, that will iterate through permutations of an array.
It should use O(n) memory, and return the "next" permutation in O(1) time. It can iterate
through permutations in whatever order you desire.
*/

function permutations(arr) {
  if (!arr.length) return [[]];
  let perms = [];
  arr.forEach((el, idx) => {
    let rest = arr.slice(0, idx).concat(arr.slice(idx + 1));
    let prev = permutations(rest);
    prev = prev.map(perm => perm.concat([el]));
    perms = perms.concat(prev);
  });
  return perms;
}


/*
Given a fleet of 50 trucks, each with a full fuel tank and a range of 100 miles, how far
can you deliver a payload? You can transfer the payload from truck to truck, and you can
transfer fuel from truck to truck. Assume all the payload will fit in one truck.
*/

function fiftyTrucks() {
  let miles = 0;
  for (let i = 50; i > 0; i--) {
    miles += 100 / i;
  }

  return miles;
}
