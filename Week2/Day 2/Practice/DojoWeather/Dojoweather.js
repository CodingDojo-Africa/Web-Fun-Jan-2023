
function appalert(){
    alert("Loading weather report...");
}
var s=document.querySelector(".cookie");
function supp(){
    s.remove();
}

function changef(temp){
    return Math.round((temp*1.8)+32);
}
function changec(temp){
    return Math.round((temp-32)/1.8);
}


function change(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector(".tem" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = changec(tempVal);
        } else {
            tempSpan.innerText = changef(tempVal);
        }
    }
}