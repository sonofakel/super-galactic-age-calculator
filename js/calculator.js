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

}
