var gropup1=document.getElementById("btn-group1");
var gropup2=document.getElementById("btn-group2");
var gropup3=document.getElementById("btn-group3");
var gropup4=document.getElementById("btn-group4");
console.log(gropup1);
let img = document.getElementsByTagName("img");
console.log(img);
 let arrGroup=[];
gropup1.addEventListener("click",function(e){
    arrGroup=[];
    console.log(e);
    let arr = Array.from(img).slice(0,4);
   // console.log(arr);
  //  console.log(arr[0].src)
  for(var i=0;i<arr.length;i++){
   // arrGroup.push(arr[i].src);
   arrGroup.push(arr[i].src);
  }
 console.log( arrGroup);
 sessionStorage.setItem("arrGroup",JSON.stringify(arrGroup))
 location.href = "play.html";
 
})
gropup2.addEventListener("click",function(e){
    console.log(e);
    arrGroup=[];
    let arr = Array.from(img).slice(4,8);
   // console.log(arr);
  //  console.log(arr[0].src)
  for(var i=0;i<arr.length;i++){
   // arrGroup.push(arr[i].src);
   arrGroup.push(arr[i].src);
  }
 console.log( arrGroup);
 sessionStorage.setItem("arrGroup",JSON.stringify(arrGroup))
 location.href = "play.html";
})
gropup3.addEventListener("click",function(e){
    arrGroup=[];
    console.log(e);
    let arr = Array.from(img).slice(8,12);
   // console.log(arr);
  //  console.log(arr[0].src)
  for(var i=0;i<arr.length;i++){
   // arrGroup.push(arr[i].src);
   arrGroup.push(arr[i].src);
  }
 console.log( arrGroup);
 sessionStorage.setItem("arrGroup",JSON.stringify(arrGroup))
 location.href = "play.html";
 

})
gropup4.addEventListener("click",function(e){
    arrGroup=[];
    console.log(e);
    let arr = Array.from(img).slice(12);
   // console.log(arr);
  //  console.log(arr[0].src)
  for(var i=0;i<arr.length;i++){
   // arrGroup.push(arr[i].src);
   arrGroup.push(arr[i].src);
  }
 console.log( arrGroup);
 sessionStorage.setItem("arrGroup",JSON.stringify(arrGroup))
 location.href = "play.html";
  
})
console.log(arrGroup)
// export { arrGroup };