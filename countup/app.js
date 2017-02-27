function init() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var secondsBeforeWork = 8.5*60*60;
    var secondsInDay = (16.5*60*60) - secondsBeforeWork;
    var secondsIn =  ((h*60*60) + (m*60) + s) - secondsBeforeWork;
    
    var p = 100 * (secondsIn/secondsInDay);
    
    var perc = document.getElementById("percentage");
    perc.innerHTML = "Percent completion: " + p.toFixed(2) + "%";
    var secs = document.getElementById("seconds");
    secs.innerHTML = "Seconds left: " + secondsIn + "/" + secondsInDay;
    setTimeout(init, 500);
}
