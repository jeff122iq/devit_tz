const array = require("../index")

const arrayCombine = (key, value) => { 
  const freshArray = key.map((item, i) => {
    return [item, value[i]]
  })
  let obj = Object.fromEntries(freshArray) 
  return obj 
}
let result = arrayCombine(array.testData, array.testData2)
console.log(result)