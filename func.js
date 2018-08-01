var endTime = new Date("August 31, 2018 23:37:25").getTime();  

var x = setInterval(function (){   
    var thisTime = new Date().getTime();   
    var diff = endTime - thisTime;

    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor(diff % (1000*60*60*24) / (1000 * 60 * 60));
    var minutes = Math.floor(diff % (1000*60*60) / (1000 * 60));
    var seconds = Math.floor(diff % (1000*60) / 1000);
    document.getElementById("clock").innerHTML = days + " יום " + hours + " שעות "
  + minutes + " דקות " + "<span class='highlight'>" + seconds + "</span>" + " שניות ";

  if (diff < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "המבצע הסתיים";
  }
}, 1000)