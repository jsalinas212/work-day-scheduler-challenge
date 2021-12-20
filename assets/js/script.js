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
        var getElId = parseInt($(this).attr("id"));
        // 
        if (nowTime === getElId) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else if (nowTime < getElId) {
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
    // store textarea data to localstorage
});

blockColors();