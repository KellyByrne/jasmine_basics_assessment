module.exports = {

returnLetter: function(score) {
	if(score <= 100 && score >= 90) {
		return "A";
	} else if (score >= 80 && score <= 89) {
		return "B";
	} else if (score >= 70 && score <= 79) {
		return "C";
	} else if (score >= 60 && score <= 69) {
		return "D";
	} else if (score <= 50 && score >= 0) {
		return "F";
	};
},

averageScore: function(array) {
	return array.reduce(function (previous, current) {
		return previous + current 
	}) / (array.length)
},

medianScore: function(array) {
	var scores = array.length;
	if(scores % 2 != 0) {
		return array[scores /2 - .5];
	} else if (scores % 2 === 0) {
		return (array[scores/2 - 1] + array[scores/2]) / 2;
	}
},
	
modeScore: function(arr) {
  var numMapping = {};
    for(var i = 0; i < arr.length; i++){
        if(numMapping[arr[i]] === undefined){
            numMapping[arr[i]] = 0;
        }        
            numMapping[arr[i]] += 1;

}
   var greatestFreq = 0;
    var mode;
    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
    return Number(mode);
}


}






