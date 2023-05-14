var change=document.querySelector("#changing");
function changeuser(){
    change.innerText="Todd E" ;
}

var rem=document.querySelector("#todd");
var rem1=document.querySelector("#phil");
var c1=document.querySelector("#c2");
var c2=document.querySelector("#incr");
var count=500;
var count2=2;

function remove(){
    rem.remove();
}
function remove1(){
    rem1.remove();
}



function increases(){
    count++;
    count2--;
    c1.innerText=count2;
    c2.innerText=count;
    remove();
}
function increases1(){
    count++;
    count2--;
    c1.innerText=count2;
    c2.innerText=count;
    remove1();
}