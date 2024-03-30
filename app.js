var arr = ["SUN", "Monday", "Tuesday", "Wednesday", "TRhursday", "Friday", "SAT"];
var arr1 = ["Jan", "FEB", "Mar", "April"]
var clock = new Date();
var hour = clock.getHours();
var min = clock.getMinutes();
var sec = clock.getSeconds();
var day = clock.getDay();
var date = clock.getDate()
var month = clock.getMonth()
var am_pm = "AM";

setInterval(function () {

    if(sec >= 60) {
        min++;
        sec = 0;
    }
    
    if(min >= 60) {
        hour++;
        min = 0;
    }

    if(hour>12) {
        hour -= 12;
        am_pm = "PM";
    }else {
        am_pm = "AM"
    }

    document.getElementById("hour").innerHTML = hour; 
    document.getElementById("min").innerText  = min;
    document.getElementById("sec").innerHTML  = sec++;
    document.getElementById("days").innerHTML  = arr[day];
    document.getElementById("pm_am").innerHTML = am_pm;
    document.getElementById("date").innerHTML = date + arr1[month] ;

}, 1000)