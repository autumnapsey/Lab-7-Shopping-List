var array = [];

function makeArray(start, end){
	while(start <= end) {
		array.push(start);
		start++;
	}
	console.log(array);

}

makeArray(-4, 2);