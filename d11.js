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

/*
 
Consider a linked list. Each link in the list holds a next reference to the next item
in the list, except for the final link, which points to nil.

It is possible to have a "list" without any end, which loops back on itself. Possibilities:

A -> B -> C -> A -> ...
A -> B -> C -> B -> ...
Write a method cyclic?(first_link), which will return true if a list is cyclic.
Your first version may use O(n) memory. Next, write a version which uses O(1) memory;
 you'll probably need a different approach.
*/

function cyclic1(root) {
  let seen = {root: true};
  let currNode = root;
  while (currNode) {
    if (seen[currNode]) return true;
    seen[currNode] = true;
    currNode = currNode.next;
  }
  return false;
}

function cyclic2(root) {
  let slow = root;
  let fast = root.next;
  while (slow || fast) {
    for (let i = 0; i < 2; i++) {
      fast = fast.next;
      if (fast == slow) return true;
      if (!fast) return false;
    }
    slow = slow.next;
  }
  return false;
}
