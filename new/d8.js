const sumUpon = arr => {
  let arrSum = arr.reduce((tot, el) => tot + el);
  let maxSum = 0
  for (let i = 1; i <= arr.length; i++) { maxSum += i }
  return maxSum - arrSum;
}

const kClosest = (stars, k) => {
  const heap = new BinaryMinMaxHeap((s1, s2) => {
    let dist1 = Math.sqrt(s1[0]**2 + s1[1]**2 + s1[2]**2)
    let dist2 = Math.sqrt(s2[0]**2 + s2[1]**2 + s2[2]**2)
    return Math.sign(dist1 - dist2)
  });
  
  for (let i = 0; i < k; i++) {
    let star = stars.pop();
    heap.push(star)
  };

  while(stars.length) {
    let star = stars.pop();
    heap.push(star);
    heap.extract();
  }

  let  closest = [];
  while(heap.length){
    let star = heap.extract();
    closest.push(star)
  }
  return closest;
}


class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    let el = this.stack.pop();
    return el.val;
  }

  push(el) {
    if (this.max() && this.max() > el) {
      this.stack.push({val: el, max: this.max()})
    } else {
      this.stack.push({val: el, max: el})
    }
    return this.show();
  }
  
  max() {
    if (this.stack.length){
      return this.stack[this.stack.length - 1].max
    } else {
      return null;
    }
  }

  show() {
    return this.stack.map(el => el.val);
  }
}

class StackQueue {
  constructor() {
    this.push = [];
    this.pop = [];
  }

  enqueue(val) {
    this.push.push(val);
  }

  dequeue() {
    this.swapStacks();
    this.pop.pop();
  }

  swapStacks() {
    if (this.push.length && !this.pop.length){
      while(this.push.length){
        this.pop.push(this.push.pop());
      }
    }
  }
}

const winMax1 = (arr, n) => {
  let max = 0;
  for (let i = 0; i < arr.length - n; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    if (sum > max) {max = sum}
  }

  return max;
}

class MinMaxStack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    let currMin = this.min();
    let currMax = this.max();
    let newMin = currMin && (currMin < el) ? currMin : el;
    let newMax = currMax && (currMax > el)  ? currMax : el;
    this.stack.push({val: el, max: newMax, min: newMin});
    return el;
  }

  pop() {
    if (this.length) {
      return this.stack.pop().val;
    } else {
      return null;
    }
  }

  min() {
    if (this.length() > 0) {
      return this.stack[this.length() - 1].min
    } else {
      return null;
    }
  }

  max() {
    if (this.length() > 0) {
      return this.stack[this.length() - 1].max;
    } else {
      return null;
    }
  }

  length() {
    return this.stack.length
  }
}

class MinMaxStackQueue {
  constructor() {
    this.in = new MinMaxStack();
    this.out = new MinMaxStack();
  }

  enqueue(el) {
    this.in.push(el)
  }

  dequeue() {
    this.stackSwitch();
    if (this.out.length()){
      return this.out.pop();
    } else {
      return null;
    }
  }

  stackSwitch() {
    if (this.in.length() && !this.out.length()) {
      while (this.in.length()) {
        this.out.push(this.in.pop());
      }
    }

  }

  max() {
    return this.in.max() > this.out.max() ? this.in.max() : this.out.max();
  }

  min() {
    return this.in.min() < this.out.min() ? this.in.min() : this.out.min();
  }

  length() {
    return this.in.length() + this.out.length()
  }

}

const maxWindow2 = (arr, k) => {
  let queue = new MinMaxStackQueue();
  while (queue.length < k) {
    queue.enqueue(arr.shift());
  }
  let diff = queue.max() - queue.min();
  while (arr.length) {
    queue.dequeue();
    queue.enqueue(arr.shift());
    let newDiff = queue.max() - queue.min()

    if (diff < newDiff) { diff = newDiff }
  }

  return diff;
}
