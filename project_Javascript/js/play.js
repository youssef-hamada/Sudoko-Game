let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("sub"); 
let go = document.getElementById("go");
let free = document.getElementsByClassName("free")[0];
// 1d array of imgs
let img = document.getElementsByTagName("img"); 
let res = document.getElementsByClassName("result")[0];
let group = document.getElementsByClassName("group")[0]
let arr = Array.from(img).slice(4);

// image bar 

var win_flag = false;

let arrGroup = JSON.parse(sessionStorage.getItem("arrGroup"));
console.log(arrGroup);

let img_bar = Array.from(img).slice(0,4);

console.log(img_bar);

// wrong array but was so close
// imgs array 
let img_arr = [];
while(arr.length > 0){
    img_arr.push(arr.splice(0,4));
}

console.log(img_arr);
for(let i = 0;i < img_arr.length; i++){
    img_bar[i].src = arrGroup[i];
    img_bar[i].dataset.id = i+1;
}

// e.target gets me the img tag so i can access src att e.target.src ===> <img src=""> changing pics

function change(e){
    let ans = +prompt("enter a number");
    if(ans == 1){
        e.target.src = img_bar[0].src;
        e.target.dataset.id="1";
        console.dir(e.target.dataset.id)
    }
    if(ans == 2){
        e.target.src = img_bar[1].src
        e.target.dataset.id="2";
        console.dir(e.target.dataset.id)
    }
    if(ans == 3){
        e.target.src = img_bar[2].src
        e.target.dataset.id="3";
        console.dir(e.target.dataset.id)
    }
    if(ans == 4){
        e.target.src = img_bar[3].src
        e.target.dataset.id="4";
        console.dir(e.target.dataset.id)
        
    }
    
    else  if (ans > 4 || ans == 0) {
        alert("no such a number")
    }
}

// using arrows
let item = 4;
var currentImage = document.getElementById("00");
currentImage.style.border = "1px solid red";

console.log(img_arr);
var rowIndex = 0;
var colIndex = 0;
document.addEventListener("keydown", function(e) {

    console.log(e);
    if (e.key == "ArrowRight") {
        if (colIndex < 3) {
            colIndex++;
            currentImage.style.border = "2px solid black";
            currentImage = document.getElementById(rowIndex + "" + colIndex);
            currentImage.style.border = "2px solid red";
            console.dir(currentImage.children);
        }

    } else if (e.key == "ArrowLeft") {
        if (colIndex > 0) {
            colIndex--;
            currentImage.style.border = "2px solid black";
            currentImage = document.getElementById(rowIndex + "" + colIndex);
            currentImage.style.border = "2px solid red";
            console.dir(currentImage.children);
        }
    } else if (e.key == 'ArrowUp') {
        console.log("arrowUP awi");
        if (rowIndex > 0) {
            rowIndex--;
            currentImage.style.border = "2px solid black";
            console.log(rowIndex + "" + colIndex);
            currentImage = document.getElementById(rowIndex + "" + colIndex);
            currentImage.style.border = "2px solid red";
            console.dir(currentImage.children);

        }
    } else if (e.key == 'ArrowDown') {
        console.log("arrowDown awi");
        if (rowIndex < 3) {
            rowIndex++;
            currentImage.style.border = "2px solid black";
            currentImage = document.getElementById(rowIndex + "" + colIndex);
            currentImage.style.border = "2px solid red";
            console.dir(currentImage.children);

        }
    } 
    else if (e.key == "1") {
        currentImage.children[0].src = img_bar[0].src;
        currentImage.children[0].dataset.id = "1";
    } else if (e.key == "2") {
        currentImage.children[0].src = img_bar[1].src
        currentImage.children[0].dataset.id = "2";
    } else if (e.key == "3") {
        currentImage.children[0].src = img_bar[2].src
        currentImage.children[0].dataset.id = "3";
    } else if (e.key == "4") {
        currentImage.children[0].src = img_bar[3].src
        currentImage.children[0].dataset.id = "4";
    }

});

// timer 

var level = localStorage.getItem("level");
var userName = localStorage.getItem("userName");
var startButton = document.getElementById("start");
var timerTime;
var playerNameElement = document.getElementById("player_name");
if (level == "level1") {
    timerTime = 1;
    document.getElementById("base-timer-label").innerHTML = "1:00";
} else {
    timerTime = 2;
    document.getElementById("base-timer-label").innerHTML = "2:00";
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
        document.getElementById("base-timer-label").innerHTML = minute + ":" + sec;

        if (checkFlag) {
            circleElement[0].style.animation = "countdown 0s linear ";
            clearInterval(intervalFunc);
            circleElement[0].style.animationPlayState = "paused";
            res.style.display = "block";
            
            ref.addEventListener("click",function(){
                location.reload()
            })
            console.dir(res);
           
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



// reload 
window.addEventListener("load", function(){
    
    for(let i = 0; i < 4; i++){
        let rand = Math.floor(Math.random() * 15)+4;
        img[rand].src = img_bar[i].src;
        img[rand].dataset.id = img_bar[i].dataset.id;
        img[rand].style.backgroundColor = "green";
        img[rand].removeEventListener("click",change);
        img[4].parentElement.style.borderColor = "red";
    }
    

})


// generating a live 2d array submitting


let play = [] 
let play2 = []
function generate(){
    play2=[];
    // need a change
for(let y = 0; y < 4; y++){
    for(let z = 0; z < 4; z++){
        play.push(img_arr[y][z].dataset.id);
    }
}
console.log(play)
while(play.length > 0){
    play2.push(play.splice(0,4));
}
console.log(play2)
}

// time to scan our borad
let col_res ;
let row_res ;
function row(){
    for(let i = 0; i < 4; i++){
         let copy = play2[i].filter(function(el,index){ 
            return play2[i].indexOf(el) != index;
        })
        
        if(copy.length > 0){
            row_res++;
            console.log("opps row repeated ")
        }else{
            console.log("no repeatation")
            row_res = 0;
        }
        
    }
}
function array_col(_arr, column) {
     return _arr.map(e => e[column])
    };
function col(){
    for(let j = 0; j < 4; j++){
        let cols = array_col(play2,j);
        console.log(cols);
        let copy = cols.filter(function(el,index){
            return cols.indexOf(el) != index;
        })
        if(copy.length > 0){
            col_res++;
            console.log("opps column repeated ")
        }else{
            console.log("no repeatation")
            col_res = 0;
        }
    }
}
go.addEventListener("click",generate);
go.addEventListener("click", function(){
    console.dir(btn)
    btn.disabled = false;
} )
btn.addEventListener("click",row);
btn.addEventListener("click",col);
btn.addEventListener("click",function(e){
    circleElement[0].style.animationPlayState = "paused";
    clearInterval(intervalFunc);
    console.log(minute,":",sec);

});
var level = localStorage.getItem("level");
var userName = localStorage.getItem("userName");
btn.addEventListener("click",function(){
    if(col_res == 0 && row_res == 0){
        res.style.display = "block"
        res.children[0].innerHTML = "you won";
        ref.addEventListener("click",function(){
            location.reload()
        })
        console.dir(res)
        win_flag = true;
        let pic = document.createElement("img");
        pic.src = "imgaes/66.gif";
        pic.style.position = "fixed"
        pic.style.top = "25%";
        pic.style.left = "55%";
        pic.style.width = "30vw";
        pic.style.height = "30vh";
        body.appendChild(pic);
        let pic2 = document.createElement("img");
        pic2.src = "imgaes/66.gif";
        pic2.style.position = "fixed"
        pic2.style.top = "25%";
        pic2.style.right = "55%";
        pic2.style.width = "30vw";
        pic2.style.height = "30vh";
        body.appendChild(pic2);
        localStorage.setItem("Time", `${minute} : ${sec}`);
        var players = [];
        players = JSON.parse(localStorage.getItem("players"));
        console.log(players);
            var player = {}
            player.username = userName;
            player.level = level;
            player.time = `${minute} : ${sec}`;
            players.push(player);
            console.log(players);
            var players_list = players.map((el) => {
                if(el.time) {
                    return el;
                } else{
                    return {};
                }
            })
            console.log(players_list)
            localStorage.setItem("players",JSON.stringify(players_list))
    }else{
        res.style.display = "block";
        ref.addEventListener("click",function(){
            location.reload()
        })
        console.dir(res);
    }
})
let ref = document.getElementById("start2");

// localstorage 
player_name.innerHTML = "Welcome "+ userName;
let Layer=document.getElementById("layer")
console.log(Layer)
let Btn =document.getElementById("start")
Btn.addEventListener('click',function(){
    Layer.style.display='none';
    go.disabled = false;
})

// show table of scores but if it is a new user it will be empty and say "it is you first game"


var table = document.createElement("table");

console.log(userName)
window.onload = function(){
    var tap = JSON.parse(localStorage.getItem("players"));
    for(item in tap){
        // console.log(tap)
        if(userName == tap[item].username){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var name_text = document.createTextNode(tap[item].username)
            var level_text = document.createTextNode(tap[item].level)
            var time_text = document.createTextNode(tap[item].time)
            td1.appendChild(name_text);
            td2.appendChild(level_text);
            td3.appendChild(time_text);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        } 
    }
    body.appendChild(table)
}



