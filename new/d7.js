const sort3 = (arr, length) => {
  for(let i = length - 1; i >= 0; i--){
    let buckets = [];
    for (let j= 0; j< 26; j++) { buckets.push([]) }
    arr.forEach(str => {
      buckets[str[i].charCodeAt() - 97].push(str); 
    });
    arr = []
    buckets.forEach(bucket => {
      bucket.forEach(el => arr.push(el))
    });
  }

  return arr;
}

const wRi = arr => {
  const sum = arr.reduce((tot, el) tot + el);
  const val = Math.floor(Math.random() * sum);
  let cumaltive = 0;
  for (let i = 0; i < arr.length; i++){
    cumalitive += arr[i]
    if (cumalative > val)  { return i; }
  }
}

const moveZeros = arr => {
  let nonZero;
  for (let i = arr.length - 1; i >= 0; i--){
    if (arr[i] === 0) {
      if (nonZero) {
        arr[i] = arr[nonZero];
        arr[nonZero] = 0;
        nonZero--; 
      } 
    } else {
      if (!nonZero) { nonZero = i; }
    }
  }
  return arr;
}

const lookSay = arr => {
  let result = [[1, arr[0]]];

  for(let i = 1; i < arr.length; i++) {
    let lastIdx = result.length - 1
    if (arr[i] === result[lastIdx][1]) {
      result[lastIdx][0] = result[lastIdx][0] + 1
    }  else {
      result.push([1, arr[i]])
    }
  }

  return result;
}
