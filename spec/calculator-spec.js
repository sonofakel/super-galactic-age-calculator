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

  it('should calculate how long someone has left to live in each planet based on location and sex', function() {
    let calculator = new Calculator();
    let age = 18;
    let sex = "male";
    let continent = "North America";
    let planet = "Mercury";
    expect(calculator.lifeExpectOnPlanet(age,sex,continent,planet)).toEqual(245 + " more years on " + planet);

  });

  it('should notify the user if their age is over the estimated life expectancy', function() {
    let calculator = new Calculator();
    let age = 100;
    let sex = "female";
    let continent = "Asia";
    let planet = "Jupiter";
    expect(calculator.lifeExpectOnPlanet(age,sex,continent,planet)).toEqual("Your age is past the estimated life expectancy, please get younger.");

  });

});
