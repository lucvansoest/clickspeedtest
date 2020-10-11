
var duration = 5;

var clicks = 0;
var registerClicks = false;
var startTime = Date.now();

var clickPad = document.getElementById('click-pad');
var clicksTimer = document.getElementById('timer');

clickPad.onclick = function(e){

    if (clicks === 0) {

        registerClicks = true;
        var startTime = Date.now();

        var interval = setInterval(function() {
            var elapsedTime = Date.now() - startTime;
            clicksTimer.innerHTML = (elapsedTime / 1000).toFixed(3);

            console.log(elapsedTime);

            if (elapsedTime >= (duration * 1000)) {
                registerClicks = false;
                clicksTimer.innerHTML = 'timer: ' + (duration).toFixed(3);
                clearInterval(interval);
                clickPad.innerHTML = Math.round(((clicks / elapsedTime) * 1000) * 10) / 10 + ' CPS!';
                clickPad.removeEventListener("onclick", null);
            }
        }, 1);
    }

    if (registerClicks) {
        clicks++;
        clickPad.innerHTML = clicks + ' clicks';
    }

    console.log(clicks);
}