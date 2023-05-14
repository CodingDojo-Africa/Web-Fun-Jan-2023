alert("This page says ninja was liked");
function changelogin(something){
    document.getElementById('click').innerHTML = "LogOut";
}
function removebutton(){
const element = document.getElementById("remove");
  element.remove();
}

function likedbutton(i){
    document.getElementById('liked').innerHTML = i+1+" likes";
}
function likedbutton2(i){
    i+=1;
    document.getElementById('liked2').innerHTML = i+1+" likes";
}