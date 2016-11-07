/* Given a matrix of integers and coordinates of a rectangular region within the
 matrix, find the sum of numbers falling inside the rectangle.
*/

function matrixRegion(matrix, topL, bottomR) {
	let sum = 0;
	for (let i = topL[0]; i < bottomR[0]; i++) {
		for (let j = topL[1]; j < bottomR[1]; j++) {
			sum += matrixxx[i][j];
		}
	}
	return sum;
}


// Implement merge sort

function merge(left, right) {
	let merged = [];
	while (left.length && right.length) {
		if (left[0] > right[0]) {
			merged.push(right.shift());
		} else {
			merged.push(left.shift());
		}
	}
	merged.concat(left).concat(right);
	return merged;
}

function mergeSort(array) {
	if (array.length < 2) return array;

	let mid = Math.floor(array.length / 2);
	let left = array.slice(0, mid);
	let right = array.slice(mid + 1);

	let sortedLeft = mergeSort(left);
	let sortedRight = mergeSort(right);

	return  merge(sortedLeft, sortedRight);
}