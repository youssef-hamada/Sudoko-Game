var level = localStorage.getItem("level");
var userName = localStorage.getItem("userName");
var startButton = document.getElementById("start");
var timerTime;
var playerNameElement = document.getElementById("player_name");
if (level == "level1") {
    timerTime = 1;
    document.getElementById("base-timer-label").innerHTML = "";
} else {
    timerTime = 2;
    document.getElementById("base-timer-label").innerHTML = "";
}
var circleElement = document.getElementsByClassName("base-timer__path-elapsed");
var intervalFunc;
var animationContent;
var minute ;
var sec ;
startButton.onclick = function() {
    animationContent = " ";
    minute = timerTime;
    sec = "00";
    var checkFlag = false;
    animationContent = "countdown " + timerTime * 60 + "s linear infinite forwards";
    console.log(animationContent);
    intervalFunc = setInterval(function() {
        // document.getElementById("base-timer-label").innerHTML = minute + ":" + sec;

        if (checkFlag) {
            circleElement[0].style.animation = "countdown 0s linear ";
            clearInterval(intervalFunc);
            circleElement[0].style.animationPlayState = "paused";
            res.style.display = "block";
            // let ref = document.getElementById("start");
            ref.addEventListener("click",function(){
                location.reload()
            })
            console.dir(res);
            // location.reload();
        }

        if (minute == timerTime) {
            circleElement[0].style.animation = animationContent;
            minute--;
            sec = 60;
        }
        sec--;

        if (sec == 0 && minute != 0 && win_flag == false) {
            minute--;
            sec = 59;
            console.log(minute + " " + sec);

        } else if (minute == 0 && sec == 0) {
            minute = "00";
            sec = "00";
            checkFlag = true;
        } else if (win_flag){
            animationContent = "paused";
            circleElement[0].style.animationPlayState = animationContent;
            
        }

    }, 1000);


}