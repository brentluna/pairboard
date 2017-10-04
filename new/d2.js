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
