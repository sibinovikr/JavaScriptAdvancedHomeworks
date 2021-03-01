/*Create Timer in JavaScript that will start counting time after the start button is pressed and the time will show on the UI.
1. The timer should start counting when user presses the start button. 
2. The timer should stop counting when the user presses the stop button.
3. The timer should be reseted when the user presses the reset button.
The UI needs to be updated on every change of the state of the timer.*/

let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let seconds = 0;
let minutes = 0;
let hours = 0;


function startTimer() {

    let start = setInterval(() => {
        seconds++

        if (seconds === 60) {
            seconds = 0
            minutes++
        }
        if (minutes === 60) {
            minutes = 0
            hours++
        }
        myTimer(seconds, minutes, hours)
        stop.addEventListener("click", () => {
            clearInterval(start)  
        })
    }, 1000)

}

function myTimer(seconds, minutes, hours) {
    timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;
} 

function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
myTimer(seconds, minutes, hours);
}

start.addEventListener("click", startTimer)
reset.addEventListener("click", resetTimer)