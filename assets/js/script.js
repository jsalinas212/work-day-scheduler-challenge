// save button
var saveBtn = $(".saveBtn");
// update #todayDate with today's date
$("#todayDate").text(moment().format('dddd MMMM Do YYYY'));


// color time blocks
var blockColors= function() {
    // get hours
    var numHours = moment().hours();


    console.log(numHours);

};

// save to local storage
saveBtn.on("click", function () {
    // store textarea data to localstorage
});

blockColors();