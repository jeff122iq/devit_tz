let arrray = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 
const recursionArr = (arr) => {
	console.log(arr.shift());
	
	if (arr.length != 0) {
		return func(arr);
	}
}

recursionArr(arrray);
