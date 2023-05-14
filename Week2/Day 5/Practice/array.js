function alwaysHungry(arr) {
    var result=[];
    var i=0;
    while(i<=arr.length){
        if(arr[i]=="food"){result.push("yummy")}
        i++;
    }
    if(result==""){
        return("I'm hungry")
    }else{
        return(result); }
}
   
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<=arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function betterThanAverage(arr) {
    var sum = 0;
    var i=0;
    var avr=0;
    while(i<arr.length){
        sum+=arr[i];
        i++;
    }
    avr=sum/arr.length;
    var count = 0
    for(var j=0;j<=arr.length;j++){
        if(arr[j]>avr){
            count++;
        }
    }
    return count;
}

function reverse(arr) {
    var ch="";
    var j=arr.length-1;
    for(var i=0;i<j;i++){
        
            ch=arr[i];
            arr[i]=arr[j];
            arr[j]=ch;
            j--;
        
    }
    return arr;
}
   
function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length!=n){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2])
    }
    return fibArr;
}
   
console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));// this should console log "yummy", "yummy"

console.log(alwaysHungry([4, 1, 5, 7, 2]));// this should console log "I'm hungry"

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

var result = reverse(["a", "b", "c", "d", "e","s"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
