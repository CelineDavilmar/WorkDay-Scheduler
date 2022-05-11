var currentDate = new Date();
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = currentDate.getMonth()+1;
var date = currentDate.getDate();
var day = daysofWeek[currentDate.getDay()];
var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();

var current = day + ", " + (month<10 ? '0' : '') + month + '/' + (date<10 ? '0' : '') + date + '/' + currentDate.getFullYear();
//Have to incorperate military time to do a loop from 1-24 hrs? Or loop through 12 twice?
 var hourSlots = [];
for (let i = 8; i < 12; i++){
     hourSlots.push(i + ":" + '00' + ' AM');
};
hourSlots.push('noon');

for (let i = 1; i < 13; i++){
    hourSlots.push(i + ':' + '00' + ' PM');
};
console.log(hourSlots);
//var hourSlots = ["9am", "10am", "11am", "noon", "1pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm"]

$(document).ready(function () {

document.getElementById('currentDay').innerHTML = current;

for (let i = 0; i < 14; i++) {
    var timeSlots = $('<h3 class="hour">' + hourSlots[i] + '</h3>');
        timeSlots.appendTo('.container');

    var timeBlocks = $('<input type="text" name="task" class="time-block" value=""/>');
        timeBlocks.appendTo('.container');

    var saveBtn = $('<button class="saveBtn"> Save </button>');
        saveBtn.appendTo('.container');


        if (currentTime > hourSlots[i]){
            console.log(currentTime, hourSlots[i]);
            $('input').addClass('past');
        
        } if (currentTime === hourSlots[i]){
            $('input').addClass('present');
        
        } if (currentTime < hourSlots[i]) {
            $('input').addClass('future');
        }
}

$('.saveBtn').click(function () {
    console.log("clicked");
    let id = this.hourSlots;
    console.log(id);
    let value = $(".time-block").val();
    console.log(value);
    localStorage.setItem(id, value);
} 
)

});