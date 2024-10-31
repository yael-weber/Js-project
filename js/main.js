//Display the user name on the screen

let firstName = localStorage.getItem('userName').split(" ")[0]
if (firstName)
    document.getElementById("usernameDisplay").innerText = firstName;
else
    document.getElementById("usernameDisplay").innerText = "Guest";


//Display the timer on the screen

const timerElement = document.getElementById("timer");
let minute =1, second =30;

export function getMinute(){
    return minute;
}

export function getSecond(){
    return second;
}

//======================================== Timer ===========================================
//clock
export var timer_func = setInterval(function timer() {
    if (minute == 1 && second == 0) {
        document.getElementById("timer").innerHTML = "0" + minute + ":0" + second;
        second = 59;
        minute = 0;
    }
    if (second < 10)
        document.getElementById("timer").innerHTML = "0" + minute + ":0" + second;
    else
        document.getElementById("timer").innerHTML = "0" + minute + ":" + second;
    second--;
}, 1000);


//===================================== winning ===========================================
setInterval(() => {
    if (minute <= 0 && second <= 0) {
        document.getElementById("darkbackgroung_gameOver").style.display = "unset";
        
        clearInterval(timer_func);
    }
}, 1000);