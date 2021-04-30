const arr = require('../index')

const findArr = (arr,search) =>  {

  if(typeof search == 'string') {
    let strSub = search.split('');

    let strCut = strSub.slice(1, strSub.lastIndexOf('/', strSub.length));
    let  flag = strSub.slice(strSub.lastIndexOf('/') + 1);

    search = new RegExp(strCut.join(''), flag[0])
}
     arr.filter(element => element.toString().search(search) !== -1);
     return arr.filter(element => element.toString().search(search) !== -1);
}

console.log(findArr(arr.testData,"/^raf.*/i"));
