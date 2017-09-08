var moment = require('moment');

export class Calculator {
constructor () {
}

ageInSeconds(age) {
  let secondsInYear = (age * 31536000);
  return secondsInYear;
}

secondsBetweenTwoDates(date1,date2) {
  let a = moment(date1);
  let b = moment(date2);
  let result = a.diff(b, 'seconds');

  return result;

}

ageInYearsOnMercury(age) {
  let ageOnMercury = (Math.floor(age / .24));

  return ageOnMercury;
}

ageInYearsOnVenus(age) {
  let ageOnVenus = (Math.floor(age / .62));

  return ageOnVenus;
}

ageInYearsOnMars(age) {
  let ageOnMars = (Math.floor(age / 1.88 ));

  return ageOnMars;
}

ageInYearsOnJupiter(age) {
  let ageOnJupiter = (Math.floor(age / 11.86 ));

  return ageOnJupiter;
}



}
