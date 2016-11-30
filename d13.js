/*Write a method to generate a random integer (0...7), given a method that generates a
 * random integer between (0...5). The resulting rand7 distribution must be uniform.
 */

function rand7() {
  while (true) {
    let num = 5 * rand5() + rand5();
    if (num < 21) {
      return num;
    }
  }
}
 
/*
 *Implement a square root function that uses only addition, subtraction, multiplication
 and division in less than linear time. You may assume that input is always a perfect square.

Hint: One naive solution has a better time complexity than many people realize--iterating
from 0 until the square root is going to be O(sqrt n), not O(n). However, we can do better!
*/

function sqRoot(num, first = 0, last = Math.floor(num / 2)) {
  let mid = Math.floor((last - first) / 2) + first;
  let sqrMid = mid * mid;
  if (sqrMid === num) {
    return mid;
  } else if ( sqrMid < num ) {
    return sqRoot(num,mid, last);
  } else {
    return sqRoot(num, first, mid);
  }
}
