Array.prototype.myMap = function(callback){
  let mapped = [];
  this.forEach(el => {
    mapped.push(callback(el));
  });
  return mapped;
} 

const foldingCipher = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += translate(str[i])
  }
  return result;
}

const translate = char => {
  return String.fromCharCode(27 - (char.charCodeAt() - 96)  + 96)
}
