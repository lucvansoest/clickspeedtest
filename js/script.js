
var duration = 5;

var clicks = 0;
var registerClicks = false;
var startTime = Date.now();

var clickPad = document.getElementById('click-pad');
var clickPadText = document.getElementById('click-pad-text');
var clicksTimer = document.getElementById('timer');
var clicksResult = document.getElementById('result');
var countingImgs = document.querySelectorAll('.counting');
var restartButton = document.getElementById('restart');

restartButton.addEventListener("click", function(e){
    window.location.reload();
});

clickPad.onclick = function(e){

    if (clicks === 0) {

        for (i = 0; i < countingImgs.length; ++i) {
            countingImgs[i].style.visibility = 'visible';
        }

        registerClicks = true;
        var startTime = Date.now();

        var interval = setInterval(function() {

            var elapsedTime = Date.now() - startTime;
            clicksTimer.innerHTML = 'timer: ' + (elapsedTime / 1000).toFixed(3);

            if (elapsedTime >= (duration * 1000)) {

                registerClicks = false;

                clicksTimer.innerHTML = 'timer: ' + (duration).toFixed(3);

                clearInterval(interval);

                var resultCPS =  Math.round(((clicks / elapsedTime) * 1000) * 10) / 10;

                var resultText = '';
                if (resultCPS <= 5) {
                    resultText = 'Turtle! “Snap those fingers, You lazy ass”';
                }
                else if (resultCPS > 5 && resultCPS <= 8) {
                    resultText = 'Octopus! “Smart but not fast, flicker your finger even faster.”';
                }
                else if (score > 8 && score <= 10) {
                    resultText = 'Rabbit! “Time to go full throttle, you are not far from being the best.”';
                }
                else if (score > 10) {
                    resultText = 'Cheetah! “Your fingers snap at blistering speed just like the speedie cat runs. Hail to the king of clicking.”';
                }
           
                clickPadText.innerHTML = resultCPS + ' CPS!' ;
                clicksResult.innerHTML = resultText;

                restartButton.style.display = 'block';


                for (i = 0; i < countingImgs.length; ++i) {
                    countingImgs[i].style.visibility = 'hidden';
                }
                restartButton.style.display = 'block';

                clickPad.removeEventListener("onclick", null);
            }
        }, 1);
    }

    if (registerClicks) {
        clicks++;
        clickPadText.innerHTML = clicks + ' clicks';
    }

    console.log(clicks);
}