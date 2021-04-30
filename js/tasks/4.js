let arr = [1, 2, 3]
Array.prototype.append = function() {
  this.splice(0, 0, ...arguments)
  return (this.length)
}
console.log(arr.append(0));
console.log(arr);
