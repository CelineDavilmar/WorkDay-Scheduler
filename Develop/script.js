var currentDate = new Date();
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = currentDate.getMonth()+1;
var date = currentDate.getDate();
var day = daysofWeek[currentDate.getDay()];

var current = day + ", " + (month<10 ? '0' : '') + month + '/' + (date<10 ? '0' : '') + date + '/' + currentDate.getFullYear();

$(document).ready(function () {

document.getElementById('currentDay').innerHTML = current;


});