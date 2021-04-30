const array = require("../index")

const cutArray = (value, arr) => {
  let newArr;
   for(let i = 0; i <= arr.length; i++) {
    newArr = arr.slice(arr.indexOf(value),arr.length)
   }
  return newArr
}
console.log(cutArray(85, array.testData))

