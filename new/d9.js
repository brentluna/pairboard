const hashDir = files => {
  let res = []; 
  for (let el in files) {
    if (typeof files[el] == 'object') {
      let folder = el;
      let nested = hashDir(files[el]);
      nested.forEach(e => res.push(`${folder}/${e}`))
    } else {
      res.push(el)
    }
  }
  return res;
}

const findMissingNum = (full, missing) =>  {
  let fullSum = full.reduce((tot, el) => tot + el) 
  let missingSum = missing.reduce((tot, el) => tot + el) 
  return fullSum - missingSum;
}

const inter = (str1, str2, str3) => {
  if (!str1.length && !str2.length && !str3.length) { return true; }
  if (str1[0] === str3[0]) { return inter(str1.slice(1), str2, str3.slice(1)) }
  if (str2[0] === str3[0]) { return inter(str1, str2.slice(1), str3.slice(1)) }
  return false;
}
