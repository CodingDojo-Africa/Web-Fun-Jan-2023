var plus=9;
var plus1=12;
var plus2=9;
var likes=document.querySelector("#title>h4")
console.log(likes)
function changelikes(){
    plus++;
    likes.innerText=plus+" like(s)";
}
var likes1=document.querySelector("#likes1")
function changelikes1(){
    plus1++;
    likes1.innerText=plus1+" like(s)";
}
var likes2=document.querySelector("#likes2")
function changelikes2(){
    plus2++;
    likes2.innerText=plus2+" like(s)";
}