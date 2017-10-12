const mergeSort = array => {
  if (array.length < 2) { return array; }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let merged = [];
  while (left.length && right.length) {
    if (left[0] > right[0]){
      merged.push(right.shift());
    } else {
      merged.push(left.shift());
    }
  }
  merged = merged.concat(left, right);
  return merged;
}

const bSearch = (array, k) => {
  if (!array.length) { return null; }
  let mid = Math.floor(array.length / 2);
  let midVal = array[mid];
  if (midVal === k){
    return mid;
  } else if (midVal < k) {
    let newArr = array.slice(mid);
    return bSearch(newArr, k) + mid;
  } else {
    let newArr = array.slice(0, mid);
    return bSearch(newArr, k)
  }
}


// [1, 2, 3] => [6, 3, 2]
const productify = numbs => {
  let prods = numbs.map(el => 1); 
  let lowerProd = 1;
  for (let i = 0; i < numbs.length; i++){
    prods[i] = prods[i] * lowerProd;
    lowerProd = lowerProd * numbs[i];
  }
  //1, 1, 2
  let upperProd = 1;
  for (let i = array.length - 1; i >= 0; i++) {
    prods[i] = prods[i]  * upperProd;
    upperProd = upperProd * arr[i]
  }
  return prods;
}


const subsets = arr => {
  if (!arr.length){ return [[]]; }
  let first = arr[0];
  let newArr = arr.slice(1);
  let subs = subsets(newArr)
  let newSubs = subs.map(el => {
    return el.concat(first)
  })
  return subs.concat(newSubs)

}
//acapella
const longestPal = str => {
  let longest = 0;
  let longestStart = null;
  for(let i = 0; i < str.length; i++){
    let stretch = 0;
    let loop = true;

    while(loop){
      let left = i - stretch
      let right = i + stretch; 

      if ((left >=0 && right < str.length) && (str[left] === str[right])){
        if (longest <=  stretch * 2 + 1){
          longest = stretch * 2 + 1;
          longestStart = left;
        } 
        stretch++;
      } else {
        loop = false;
      }
    }

    loop = true;
    stretch = 0;
    while(loop) {
     let left = i - stretch; 
     let right =i + stretch + 1;

      if ((left >=0 && right < str.length) && (str[left] === str[right])){
        if (longest <=  stretch * 2 + 2){
          longest = stretch * 2 + 2;
          longestStart = left;
        } 
        stretch++;
      } else {
        loop = false;
      }
    }


  }
  return longestStart; 
}
