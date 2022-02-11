
let body = document.getElementsByTagName("body")[0];
let btn = document.getElementsByTagName("button")[0]; 
let go = document.getElementsByTagName("button")[1]; 
let free = document.getElementsByClassName("free")[0];
let img = document.getElementsByTagName("img"); // 1d array of imgs
let res = document.getElementsByClassName("result")[0];
let arr = Array.from(img).slice(4);
// image bar 

let arrGroup = JSON.parse(sessionStorage.getItem("arrGroup"));
console.log(arrGroup);

let img_bar = Array.from(img).slice(0,4)

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
}

// e.target gets me the img tag so i can access src att e.target.src ===> <img src=""> changing pics

for(let i = 0; i < 20; i++){
    img[i].addEventListener("click",function(e){
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
    })
}

// using arrows


// reload 
window.addEventListener("load", function(){
    
    for(let i = 0; i < 4; i++){
        img[Math.floor(Math.random() * 15 + 4)].src = img_bar[i].src
        // console.log(Math.floor(Math.random() * 4))
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
        // console.log(copy)
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
btn.addEventListener("click",row);
btn.addEventListener("click",col);
let ref = document.getElementById("start2");

setTimeout(function(){
    if(col_res == 0 && row_res == 0){
        // body.innerHTML = ' ';
        res.style.display = "block"
        ref.addEventListener("click",function(){
            location.reload()
        })
        console.dir(res)
    }else{
        // body.innerHTML = ' ';
        res.style.display = "block"
        // let ref = document.getElementById("start");
        ref.addEventListener("click",function(){
            location.reload()
        })
        console.dir(res);
    }
},6000)

let Layer=document.getElementById("layer")
console.log(Layer)
let Btn =document.getElementById("start")
// console.log(Btn)
Btn.addEventListener('click',function(){
    Layer.style.display='none';
    
// alert("hello")

})
