(function (exports) {

	exports.countChar = function(String, char) {
		var count = 0;
		
			for (var i = 0; i < String.length; i++) {
				if(String.charAt(i) === char) {
				count++;
				};
			};
			return (count);
		};	


	exports.reverseArray = function(listArray) {
		newArray = [];
		for(i = listArray.length - 1; i >= 0; i--) {
			newArray.push(listArray[i]);
		}
		return newArray;
		console.log(newArray);
	}

	exports.isPrime = function(num) {
		for( i = 2; i < num; i++) {
			if(num % i === 0){
				return false;
			} else {}
		}
	}



})(this.classToolBox = {});

console.log(this.classToolBox.countChar("BBBAAAAAII", "I"));

console.log(this.classToolBox.reverseArray(["A", "B", "C", "D", "3"]));

console.log(this.classToolBox.isPrime(3));