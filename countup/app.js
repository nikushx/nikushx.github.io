function init() {
    
    // Date and Time grab
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Start/End time configuration
    var hourStart = 8.5;    // 8:30am
    var hourEnd = 16.5;     // 4:30pm
    
    // Time before start time
    var secondsBeforeWork = hourStart*60*60;
    
    // Seconds already passed in the day
    var secondsInDay = (hourEnd*60*60) - secondsBeforeWork;
    
    // Amount of seconds until end time
    var secondsIn =  ((h*60*60) + (m*60) + s) - secondsBeforeWork;
    
    // Calculate percentage
    var p = 100 * (secondsIn/secondsInDay);
    
    var perc = document.getElementById("percentage");
    perc.innerHTML = "Percent completion: " + p.toFixed(2) + "%";
    
    var secs = document.getElementById("seconds");
    secs.innerHTML = "Seconds left: " + secondsIn + "/" + secondsInDay;
    
    // Refresh
    setTimeout(init, 500);
}
