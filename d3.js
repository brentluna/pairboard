/* Implement the Array.prototype.map function in JavaScript. */

Array.prototype.myMap =  function(cb) {
	let result = [];
	this.forEach(el => {
		let curr = cb(el);
		result.push(curr);
	});
	return result;
}