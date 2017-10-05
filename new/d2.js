const fibsIter = num => {
  let fibs = [0, 1]; 
  for (let i = 2; i <= num; i++) {
    let newVal = fibs.slice(-2).reduce((sum, val) => sum + val);
    fibs.push(newVal);
  }
  return fibs;
}

const fibsRec = num => {
  if (num < 3) {
    return [0, 1].slice(0, num);
  }
  let prevFibs = fibsRec(num - 1)
  let newVal = prevFibs.slice(-2).reduce((sum, val) => sum + val);
  prevFibs.push(newVal)
  return prevFibs;
}

const isPalindrome = str => {
  const strLength = str.length;
  for (let i = 0; i < Math.floor(strLength / 2) + 1; i++) {
    if (str[i] !== str[strLength - i - 1]) {
      return false;
    }
  }

  return true;
}

const validIp = ip => {
  const ipArray = ip.spit('.');
  if (ipArray.length !== 4) { return false; }
  for (let i = 0; i < 4; i++) {
    let currSeg = ipArray[i];
    if (parseInt(currSeg) > 255 && parseInt(currSeg) < 0) {
      return false;
    }
  }
  return true;
}

const shuffle = array => {
 let shuffled = [];
 while (array.length > 1) {
   let idx = Math.floor(Math.random() * (array.length + 1));
   shuffled = shuffled.concat(array.splice(idx, 1))
 }
  return shuffled.concat(array)
}
