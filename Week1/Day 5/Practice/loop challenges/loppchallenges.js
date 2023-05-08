function odds(){
    var i=1;
 while(i <= 20){
    if(i % 2 != 0){
        console.log(i)
    }
    i++;
 }
 
}

function decmult3(){
    for(var i=100; i!=0 ;i--){
        if(i % 3 == 0){
            console.log(i);
        }
    }
    
}

function sequence(){
    for(var i=4;i > -4;i-=1.5){
        console.log(i);
    }
    
}

function sigma(){
var i=2;
var st="1";
var sum=0;
    while(i!=101){
        st=st+"+"+i;
        sum=sum+i;
        i++;
    }
    sum+=1;
    console.log(st," =",sum)
    
}

function factorial(){
    mult="1";
    fact=1;
    for(var i=2;i<=12;i++){
        fact=fact*i;
        mult=mult+"*"+i;
    }
    console.log(mult," =",fact)
    
}

console.log("FUNCTION ODDS")
odds();
console.log("FUNCTION DECMULT3")
decmult3();
console.log("FUNCTION SEQUENCE")
sequence();
console.log("FUNCTION SIGMA")
sigma();
console.log("FUNCTION FACTORIAL")
factorial();