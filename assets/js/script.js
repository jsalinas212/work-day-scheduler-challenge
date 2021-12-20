// save button
var saveBtn = $(".saveBtn");
// update #todayDate with today's date
$("#todayDate").text(moment().format('dddd MMMM Do YYYY'));


// color time blocks
var blockColors= function() {
    // get hours
    var nowTime = moment().hour();

    // iterate through hour blocks, find present, past, future and add respective color class
    $(".time-block").each(function() {
        // compare nowTime with ID and add/remove classes
        if (nowTime === parseInt($(this).attr("id"))) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else if (nowTime < parseInt($(this).attr("id"))) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

// save to local storage
saveBtn.on("click", function () {
    // retrieve event hour and text
    var eventHour = $(this).siblings(".hour").text();
    var eventText = $(this).siblings(".plan").val();

    // set hour and event text to local storage
    localStorage.setItem(eventHour, eventText);
});

blockColors();