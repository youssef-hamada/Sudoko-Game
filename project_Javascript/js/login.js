var userName = document.getElementById("userName");
var level = document.getElementById("level");
var loginButton = document.getElementById("login");
var table = document.getElementsByTagName("table")[0];
var nameRegex = /^[a-zA-z]+[0-9a-zA-z]*$/;
var players = JSON.parse(localStorage.getItem("players"));
// console.log(players)
if(players == null){
    var players = [];
}else {
    console.log(players);
}
loginButton.addEventListener("click", function() {
    if (userName.value != "" && nameRegex.test(userName.value == true)) {
        // var player= {};
        // player.username = userName.value;
        // player.level = level.value;
        // players.push(player);
        // localStorage.setItem("players",JSON.stringify(players));
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("level", level.value);
        window.open("leavle.html", "_parent");
        // window.location.href = 'leavle.html';
    } else {
        alert("invalid name , please enter your name again");
    }
})

// window.onload = function(){
//     var tr = document.createElement("tr");
//     var td1 = document.createElement("td");
//     var td2 = document.createElement("td");
//     var td3 = document.createElement("td");
//     var name = localStorage.getItem("userName");
//     var level_name = localStorage.getItem("level");
//     var time = localStorage.getItem("Time");
//     var name_text = document.createTextNode(name)
//     var level_text = document.createTextNode(level_name)
//     var time_text = document.createTextNode(time)
//     td1.appendChild(name_text);
//     td2.appendChild(level_text);
//     td3.appendChild(time_text);
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
//     table.appendChild(tr)
// }
