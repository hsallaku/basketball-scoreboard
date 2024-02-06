window.onload = function () {
    var seconds = 00; 
    var minutes = 00; 
    var appendMinutes = document.getElementById('minutes')
    var appendSeconds = document.getElementById('seconds')
    var buttonStart = document.getElementById('start-button');
    var buttonStop = document.getElementById('stop-button');
    var buttonReset = document.getElementById('reset-button');
    var buttonNewGame = document.getElementById('new-game-btn')
    var Interval ;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    }


    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        seconds = "00";
        minutes = "00";
        appendSeconds.innerHTML = minutes;
        appendMinutes.innerHTML = seconds;
    }


    function startTimer () {
        seconds++; 

        if(seconds <= 9){
            appendSeconds.innerHTML = "0" + seconds;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
            
        } 

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9){
            appendMinutes.innerHTML = minutes;
        }
        
        if (minutes > 59){
            minutes = 0
            appendMinutes.innerHTML = "0" + minutes;
        }

    }
}