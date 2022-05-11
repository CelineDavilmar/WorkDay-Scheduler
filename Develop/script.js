var currentDate = new Date();
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();
var day = daysofWeek[currentDate.getDay()];
var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();

var current = day + ", " + (month < 10 ? '0' : '') + month + '/' + (date < 10 ? '0' : '') + date + '/' + currentDate.getFullYear();
//Have to incorperate military time to do a loop from 1-24 hrs? Or loop through 12 twice?
var hourSlots = [];
var startHour = 8;
var endLength = 20;

for (let i = startHour; i < endLength; i++) {
    hourSlots.push(convertToHourString(i));
};

console.log(hourSlots);
//var hourSlots = ["9am", "10am", "11am", "noon", "1pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm"]

function convertToHourString(num) {

    if (num <= 11) {
        return num + ":" + '00' + ' AM';
    } else if (num === 12) {
        return num + ":" + '00' + ' PM';
    } else {
        return (num - 12) + ":" + '00' + ' PM';
    }

}

$(document).ready(function () {

    document.getElementById('currentDay').innerHTML = current;

    for (let i = 0; i < endLength - startHour; i++) {
        let timeSlots = $('<h3 class="hour">' + hourSlots[i] + '</h3>');
        timeSlots.appendTo('.container');

        let timeBlocks = $('<input type="text" name="task" class="time-block" value=""/>');
        timeBlocks.appendTo('.container');

        let saveBtn = $('<button class="saveBtn"> Save </button>');
        saveBtn.appendTo('.container');

        console.log(startHour + i, currentDate.getHours());
        if (currentDate.getHours() > startHour + i) {
            timeBlocks.addClass('past');

        } else if (currentDate.getHours() === startHour + i) {
            timeBlocks.addClass('present');

        } else if (currentDate.getHours() < startHour + i) {
            timeBlocks.addClass('future');
        }

        saveBtn.click(function () {
            console.log("clicked");
            let id = startHour + i;
            console.log(id);
            let value = timeBlocks.val();
            console.log(value);
            localStorage.setItem(id, value);
        }
        )
    }



});