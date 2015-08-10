var code = require('../grader.js');

describe('Letter Grade Return', function(){

  it('should return A for numbers 90-100', function(){
    expect(code.returnLetter(95)).toEqual("A");
  });

  it('should return B for numbers 80-89', function(){
    expect(code.returnLetter(80)).toEqual("B");
  });

  it('should return C for numbers 70-79', function(){
  	expect(code.returnLetter(70)).toEqual("C");
   });

  it('should return D for numbers 60-69', function(){
  	expect(code.returnLetter(60)).toEqual("D");
  });
  
  it('should return F for numbers 0-59', function(){
  	expect(code.returnLetter(50)).toEqual("F");
  });

  });

  describe('Average Score', function(){

  	it('should return average grade', function(){
  		expect(code.averageScore([60, 70, 75, 80, 100])).toEqual(77);
  	});

  });

  describe('Median Score', function(){
  	it('should return middle score in array', function(){
  		expect(code.medianScore([60, 70, 75, 80, 100])).toEqual(75);
  	});
  	it('should return average of two middle scores', function (){
  		expect(code.medianScore([60, 70, 80, 100])).toEqual(75);
  	});

  });

describe('Mode Score', function(){
  	it('should return score that appears most often in array', function(){
  		expect(code.modeScore([60, 70, 75, 60, 100])).toEqual(60);
  	});
  });



