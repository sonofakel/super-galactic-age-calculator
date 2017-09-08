import { Calculator } from './../js/calculator.js';

describe('CalculatorTests', function() {

  it('should calculate the age of someone into seconds', function() {
    var calculator = new Calculator();
    expect(calculator.ageInSeconds(18)).toEqual(567648000);

  });

  it('should calculate the seconds between two dates', function() {
    var calculator = new Calculator();
    var a = [2007, 0, 29];
    var b = [2007, 0, 28];
    expect(calculator.secondsBetweenTwoDates(a,b)).toEqual(86400);

  });

});
