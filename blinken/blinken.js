var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out');
var blinkIntervall = setInterval(blinken, 250);

function blinken() {
    if(LED.readSync() == 0){
       LED.writeSync(1); 
    } else {
        LED.writeSync(0);
    }
}

function blinkenBeenden(){
    clearInterval(blinkIntervall);
    LED.writeSync(0);
    LED.unexport();   
}

setTimeout(blinkenBeenden, 5000);