var currentDate = new Date();
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = currentDate.getMonth()+1;
var date = currentDate.getDate();
var day = daysofWeek[currentDate.getDay()];

var current = day + ", " + (month<10 ? '0' : '') + month + '/' + (date<10 ? '0' : '') + date + '/' + currentDate.getFullYear();
var hourSlots = ["9am", "10am", "11am", "noon", "1pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm"]

$(document).ready(function () {

document.getElementById('currentDay').innerHTML = current;

for (let i = 0; i < 14; i++) {
    var timeSlots = $('<h3 class="hour">' + hourSlots[i] + '</h3>');
        timeSlots.appendTo('.container');

    var timeBlocks = $('<input type="text" name="task" class="time-block" value=""/>');
        timeBlocks.appendTo('.container');

    var saveBtn = $('<button class="saveBtn"> Save </button>');
        saveBtn.appendTo('.container');
}



});