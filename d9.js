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