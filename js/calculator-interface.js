import { Calculator } from './../js/calculator.js';

$(function() {
  $('#years-to-seconds').submit(function(event) {
    event.preventDefault();
    let ageYear = $('#age-seconds').val();
    let newCalculator = new Calculator();
    let output = newCalculator.ageInSeconds(ageYear);
    $('#solution1').text(output);
    });
});

$(function() {
  $('#two-dates-seconds').submit(function(event) {
    event.preventDefault();

    let year1 = $('#year1').val();
    let month1 = $('#month1').val();
    let day1 = $('#day1').val();
    let date1 = [year1, month1, day1];

    let year2 = $('#year2').val();
    let month2 = $('#month2').val();
    let day2 = $('#day2').val();
    let date2 = [year2, month2, day2];

    let newCalculator = new Calculator();
    let output = newCalculator.secondsBetweenTwoDates(date2, date1);
    $('#solution2').text(output);
    });

});
