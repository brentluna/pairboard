/* 

I give you a scrambled list of n unique integers between 0 and n. 
Tell me what number is missing.

If I let you use O(nlog(n)) time, what is a naive way of doing this?

Next, what if I require that you solve the problem in O(n) time? What 
datastructure might you use?

Finally, how could you solve the problem in O(n), and also O(1) space?

*/

function sumUponSums1(arr) {
	let sorted = arr.sort((a, b) => {
		return Math.sign(a - b);
	});

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== i + 1) return (i + 1);
	}
}

function sumUponSums2(arr) {
	let numHash = {};
	arr.forEach(el => numHash[el] = true);
	
	for (let i = 1; i <= arr.length; i++) {
		if (!numHash[i]) return i;
	}
}

function sumUponSums3(arr) {
	let sum = arr.reduce((a, b) => a + b);
	for	(let i = 1; i <= arr.length + 1; i++) {
		sum -= i;
	}
	return Math.abs(sum);
}

/*
Consider a coordinate system for the Milky Way, in which Earth is at (0,0,0).
 Model stars as points, and assume distances are in light years. The Milky
  Way consists of approximately 10^12 stars, and their coordinates are stored 
  in a file. How would you compute the k stars which are closest to Earth?

Hint: Suppose you know the k closest stars in the first n stars. If the 
(n + 1)th star is to be added to the set of k closest stars, which element
 in that set should be evicted?
*/

function kClosestStars(stars, k) {
	//assuming we had a max Heap, you could push k stars into the max heap
	// once you have the mxnheap filled w/ k stars, you could continue to push 
	// 1 star at a time, and extract 1 from the max heap, until the stars array is empty
	// once it's empty, you would have a maxHeap of k elements, which since exxtracting 
	// each time always took the greatest value, you would be left w/ the k smallest distances


	// I don't have a max heap, so this code wont' work
	let distanceFromEarth = (a, b) => {
  	let dist1 = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2) + Math.pow(a.z, 2))
  	let dist2 = Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2) + Math.pow(b.z, 2))
  	return Math.sign(dist1 - dist2);
	});

	let maxHeap = new MaxHeap(distanceFromEarth);
  for (let i = 0; i < k; i++) {
  	let currStar = stars.push();
  	maxHeap.insert(currStar);
  }
  while (stars.length) {
  	let currStar = = stars.push();
  	maxHeap.insert(currStar);
  	maxHeap.extract();
  }
  let kClosest = [];
  for (let i = 0; i < k; i++) {
  	kClosest.push(maxHeap.extract());
  };
  return kClosest;
}