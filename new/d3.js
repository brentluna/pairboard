Array.prototype.myMap = function(callback){
  let mapped = [];
  this.forEach(el => {
    mapped.push(callback(el));
  });
  return mapped;
} 

