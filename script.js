var currentDate = new Date();
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();
var day = daysofWeek[currentDate.getDay()];
var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();

var current = day + ", " + (month < 10 ? '0' : '') + month + '/' + (date < 10 ? '0' : '') + date + '/' + currentDate.getFullYear();

var hourSlots = [];
var startHour = 8;
var endLength = 20;

for (let i = startHour; i < endLength; i++) {
    hourSlots.push(convertToHourString(i));
};

console.log(hourSlots);

function convertToHourString(num) {

    if (num <= 11) {
        return num + 'AM';
    } else if (num === 12) {
        return num + 'PM';
    } else {
        return (num - 12) + 'PM';
    }

}

$(document).ready(function () {

    document.getElementById('currentDay').innerHTML = current;

    for (let i = 0; i < endLength - startHour; i++) {
        let timeSlots = $('<h3 class="hour">' + hourSlots[i] + '</h3>');
        timeSlots.appendTo('.container');

        let timeBlocks = $('<textarea type="text" name="task" class="time-block" value=""/>');
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
            let id = startHour + i;
            let value = timeBlocks.val();
            localStorage.setItem(id, value);
            localStorage.getItem(key, value)
        }
        )

        //var tasks = localStorage.getItem(key, value);
        //console.log(tasks);

        /* if(!localStorage.getItem(id, value) ){
            $window.localStorage.setItem(value);
        } */
    }



});