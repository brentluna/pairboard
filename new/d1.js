const digitalRoot = num => {
  let sum = 0;
  while (num > 9) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  sum += num;
  if (sum > 9) {
    return digitalRoot(sum);
  } else {
    return sum;
  }
} 


const digitalRootRefactor = num => {
  if (num < 10) { return num }
  return digitalRootRefactor(num % 10 + Math.floor(num / 10));
}

const ceasarCipher = (str, shift) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += ' ';
    } else {
      let newCharCode = (str[i].charCodeAt() + shift - 97) % 26 + 97;
      result += String.fromCharCode(newCharCode);
    }
  }
  return result;
}

const longestCommonSubstring = (str1, str2) => {
  let longest = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = i; j <= str1.length; j++) {
      let currSlice = str1.slice(i, j);
      if (currSlice.length > longest.length && str2.indexOf(currSlice) !== -1) {
        longest = currSlice
      }
    }
  }
  return longest;
}

const makeMatrix = (str1, str2) => {
  let matrix = [];
  for (let i = 0; i <= str1.length; i++) {
    matrix.push([]);
    for (let j = 0; j <= str2.length; j++) {
      if (i  === 0 && j === 0) {
        matrix[i][j] = 0;
      } else if ( str1[i -1] === str2[j -1]) {
        matrix[i][j] = matrix[i -1][j -1] + 1;
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

const lcs = (str1, str2) => {
  let matrix = makeMatrix(str1, str2);
  let longestIdx;
  let longest = 0;
  for(let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > longest){
        longest = matrix[i][j]
        longestIdx = i;
      }
    }
  }
  return str1.slice(longestIdx - longest, longestIdx);
}

const sumRecursive = arr => {
  if (arr.length === 0) {
    return 0;
  } else {
    let popped = arr.pop();
    return sumRecursive(arr) + popped;
  }
}

