const uniqSubs = word => {
  let strings = {};
  for (let i = 0; i < word.length; i++) {
    for(let j = 1; j <= word.length; j++){
      let subStr = word.slice(i, j)
      strings[subStr] = true;
    }
  }
  return Object.keys(strings);
}

const lcs = array => {
  let currSum = 0;
  let largest = 0; 

  for (let i = 0; i < array.length; i++) {
    currSum += array[i];

    if (currSum > 0){
      currSum > largest ? largest = currSum : null
    } else {
      currSum = 0;
    }
  }
  return largest;
}

const sillyYears = year => {
  let result = [];
  while (result.length < 10) {
    year++;
    if (validYear(year)){
      result.push(year)
    }
  }
  return result;
}

const validYear = year => {
  let front = Math.floor(year / 100);
  let back = year % 100
  let mid = Math.floor(year / 10) % 100;
  return (front + back === mid);
}

const pairSum = (array, k) => {
  let hash = {};
  let result = [];
  array.forEach((el, idx) => hash[el] = idx);
  array.forEach((el, idx) => {
    let diff = k - el;
    if (hash[diff] && hash[diff] !== idx){
      result.push([Math.min(el, diff), Math.max(el, diff)])
    }
  });
  return result;
}
