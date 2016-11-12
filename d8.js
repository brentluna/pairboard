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

/*
Implement a stack with a method max that returns the maximum value of the stack. 
max should run in O(1) time, no matter what operations are performed on the stack.
*/

class MaxStack() {

	constructor() {
		this.store = [];
	}

	max() {
		return this.store[this.length() - 1].max;
	}

	push(val) {

		if (this.store.length) {
			let newMax = Math.max(val, this.max());
			let newVal = {val: val, max: newMax};
			this.store.push(newVal);
		} else {
			let newVal = {val: val, max: val};
			this.store.push(newVal);
		}
		return this.peek();
	
	}

	pop() {
		let popped = this.store.pop;
		return popped.val;
	}

	peek() {
		return this.store[this.length() - 1].val;
	}

	length() {
		return this.store.length;
	}
}

/* 
mplement a stack with a method max that returns the maximum value of the stack. max should 
run in O(1) time, no matter what operations are performed on the stack.
*/

class MaxStack {
	costructor() {
		this.store = [];
	}

	push(val) {
		if (this.store.length) {

		} else {
			this.store.push({val: val, max: val});
		}
	}

	pop() {
		let popped = this.store.pop();
		return popped.val;
	}

	max() {
		this.store[this.store.lengt() - 1].max
	}

	length() {
		this.store.length;
	}
}

/*
Implement a queue using stacks. That is, write enqueue and dequeue using only 
push and pop operations.

In terms of performance, enqueue should be O(1), but dequeue may be 
worst-case O(n). In terms of ammortized time, dequeue should be O(1). 
Prove that your solution accomplishes this.
*/


class StackQueue {
	constructor() {
		this.in = [];
		this.out = [];
	}

	enqueue(val) {
		this.in.push(val);
		return val;
	}

	dequeue() {
		if (!this.out.length && !this.in.length) {
			return 'empty';
		}
		if (!this.out.length) {
			this.swapStacks();
		}
		return this.out.pop();
	}

	swapStacks() {
		while (this.in.length) {
			let popped = this.in.pop();
			this.out.push(popped);
		}
	}

}

/*
Given an array, and a window size w, find the maximum max - min within a range of 
w elements.

For instance:

windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# still 6!
windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

You can write a naive version that considers all subarrays of size w. 
However, if w = n/2 then there are n/2 subarrays of length n/2 to consider. 
Therefore, I would call this solution quadratic. Write it anyway :-)

Let's improve it to O(n). Here are some hints:

First solve MaxStack. Could you write simply a MinMaxStack to track both 
the min and the max in a stack?

Next, solve StackQueue. Could you use your MinMaxStack to write a 
MinMaxStackQueue which tracks both the min and max.
Last, can you use your MinMaxStackQueue to solve the problem?
*/

function windowMaxRange1(arr, w) {
	let max = 0;
	for(let i = 0; i < arr.length - w; i++) {
		let sum = 0;
		for (let j = i + 1; j < i + w; j++) {
			sum += arr[j];
		}
		if (sum > max) {
			max = sum;
		}
	}
	return max;
}


function windowMaxRange2(arr, w) {
	let minMaxSQ = new MinMaxStackQueue();
	for (let i = 0; i < w; i++) {
		let arrVal = arr.pop();
		minMaxSQ.enqueue(arrVal);
	}
	let max = minMaxSQ.max() - minMaxSQ.min();
	while (arr.length) {
		minMaxSQ.dequeued();
		let currVal = arr.pop();
		minMaxSQ.enqueue(currVal);
		let currMax = minMaxSQ.max() - minMaxSQ.min();
		if (currMax > max) {
			max = currMax;
		}
	}
	return max;

}

class MinMaxStack {
	constructor() {
		this.store = [];
	}

	push(val) {
		if (this.store.length) {
			let newMin = val < this.min() ? val : this.min();
			let newMax = val < this.max() ? this.max() : val;
			this.store.push({val: val, max: newMax, min: newMin});
		} else {
			this.store.push({val: val, min: val, max: val});
		}
		return val;
	}

	pop() {
		let popped = this.store.pop();
		return popped.val;
	}

	max() {
		if (!this.store.length) return null;
		return this.store[this.store.length - 1].max;
	}

	min() {
		if (!this.store.length) return null;
		return this.store[this.store.length - 1].min;
	}

	length() {
		return this.store.length;
	}
}

class MinMaxStackQueue {
	constructor() {
		this.in = new MinMaxStack();
		this.out = new MinMmaxStack();
	}


	enqueue(val) {
		this.in.push(val);
	}

	dequeue() {
		if (!this.in.length() && this.out.length()){
			return 'empty'
		} else if (!this.out.length) {
			this.swapStacks();
		}
		let dequeued = this.out.pop();
		return dequeued.val;
	}

	max() {
		return Math.max(this.in.max(), this.out.max());
	}

	min() {
		return Math.min(this.in.min(), this.out.min());
	}

}