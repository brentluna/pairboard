/* 
Suppose a hash representing a directory. All keys are strings with names for either
 folders or files. Keys that are folders point to nested hashes. Keys that 
 are files point to "true". Write a function that takes such a hash and returns 
 an array of strings with the path to each file in the hash.

Example:

files = {
  'a' => {
    'b' => {
      'c' => {
        'd' => {
          'e' => true
        },

        'f' => true
      }
    }
  }
}

file_list(files) # => ['a/b/c/d/e', 'a/b/c/f']
*/

function hashDict(hash) {
	let files = [];

	for (let el in hash) {
		let nestedItem = hash[el];
		if (typeof nestedItem === 'object') {
			let nestedFiles = hashDict(nestedItem);
			nestedFiles.forEach(file => files.push(`${el}/${file}`))
		} else {
			files.push(el);
		}
	}
	return files;
}

/*
Assume an array of non-negative integers. A second array is formed by 
shuffling the elements of the first array and deleting a random element. 
Given these two arrays, find which element is missing in the second array. Do 
 this in linear time with constant memory use.
*/

function findMissingNumber(arr1, arr2) {
	let sum1 = arr2.reduce((el1, el2) => el1 + el2);
	let sum2 = arr2.reduce((el1, el2) => el1 + el2);
	return sum1 - sum2;
}

/*
Given three strings, return whether the third is an interleaving of the first two.
 Interleaving means it only contains characters from the other two, no more no 
 less, and preserves their character ordering. "abdecf" is an interleaving of 
 "abc" and "def". Note that the first two strings needn't be in alphabetical order 
  these.

You may assume that the first two strings do not contain any characters 
 common.

Next, relax the assumption that the first two strings contain no overlap. 
Analyze the time-complexity of your solution. You may wish to view this problem 
 recursively.

Example:

interleaving?('XXZ', 'XXY', 'XXYXXZ')
=> true
Note: make sure you can answer why this won't work with your initial
 implementation.
*/

function isShuffle1(str1, str2, str3) {
	return str1 + str2 === str3 || str2 + str1 === str3
}

function isShuffle2(str1, str2, str3) {
	if (str2.length + str1.length !=== str3.length) return false;
	let idx1 = 0;
	let idx2 = 0;
	let idx3 = 0;
	while (idx3 < str3.length) {
		if (str3[idx3] === str1[idx1]){
			idx3++;
			idx1++;
		} else if (str3[idx3] === str2[idx2]) {
			idx3++;
			idx2++;
		} else {
			return false;
		}
	}
	return true;
}


function isShuffle3(str1, str2, str3) {
	if (str3.length === 0) {
		return str1.length === 0 && str2.length === 0;
	} 

	let prev2 = isShuffle3(str1, str2.slice(1), str3.slice(1));
	let prev1 = isShuffle3(str1.slice(1), str2, str3.slice(1));

	if (str1[0] === str3[0] && str2[0] === str3[0]) {
		return prev1 || prev2;	
	} else if (str1[0] === str3[0]) {
		return prev1;
	} else if (str2[0] === str3[0]) {
		return prev2; 
	} else {
		return false;
	}

}

function isShuffle4(str1, str2, str3) {
	let queue = [[0, 0]];
	let seen = {};


	while (queue.length) {
		let curr = queue.shift();
		let idx1 = curr[0];
		let idx2 = curr[1];
		let idx3 = idx1 + idx2;
		
		if (idx3 === str3.length) {
			return true;
		}

		if (str1[idx1] === str3[idx3]) {
			let newIdxs = [idx1 + 1, idx2];
			if (!seen[newIdxs]) {
				queue.push(newIdxs);
				seen[newIdxs] = true;
			}
		}

		if (str2[idx2] === str3[idx3]) {
			let newIdxs = [idx1, idx2 + 1];
			if (!seen[newIdxs]) {
				queue.push(newIdxs);
				seen[newIdxs] = true;
			}
		}

	}
	return false;
}