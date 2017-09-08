import { Calculator } from './../js/calculator.js';

describe('CalculatorTests', function() {

  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(18)).toEqual(567648000);

  });

  it('should calculate the seconds between two dates', function() {
    let calculator = new Calculator();
    let a = [2007, 0, 29];
    let b = [2007, 0, 28];
    expect(calculator.secondsBetweenTwoDates(a,b)).toEqual(86400);

  });

  it('should calculate the age of someone into Mercurian years', function() {
    let calculator = new Calculator();
    expect(calculator.ageInYearsOnMercury(18)).toEqual(75);

  });

  it('should calculate the age of someone into Venusian years', function() {
    let calculator = new Calculator();
    expect(calculator.ageInYearsOnVenus(18)).toEqual(29);

  });

  it('should calculate the age of someone into Martian years', function() {
    let calculator = new Calculator();
    expect(calculator.ageInYearsOnMars(18)).toEqual(9);

  });

  it('should calculate the age of someone into Jovian years', function() {
    let calculator = new Calculator();
    expect(calculator.ageInYearsOnJupiter(18)).toEqual(1);

  });

});
