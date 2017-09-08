import { Calculator } from './../js/calculator.js';

describe('CalculatorTests', function() {

  it('should calculate the age of someone into seconds', function() {
    var calculator = new Calculator()
    expect(calculator.ageInSeconds(18)).toEqual(567648000);

  });

});
