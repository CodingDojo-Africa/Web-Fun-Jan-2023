function Pizza0ven(crustType,sauceType,cheeses,toppings){
var pizza={};
pizza.crustType=crustType;
pizza.sauceType=sauceType;
pizza.cheeses=cheeses;
pizza.toppings=toppings;
return(pizza);
}

function randomPizza(pizza1,pizza2,pizza3,pizza4){
    var s=0;
    s=Math.floor(Math.random()*4);
    if(s==0){
        return(pizza1);
    }else if(s==1){
        return(pizza2);
    }else if(s==2){
        return(pizza3);
    }else{return(pizza4);
    }
}


Pizza0ven();
console.log(Pizza0ven());
var pizza1=Pizza0ven("deep dish","traditional","Mozzarella Cheese",["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2=Pizza0ven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3=Pizza0ven("Stuffed Crust","Pesto Sauce","Provolone Cheese","Mushroom");
var pizza4=Pizza0ven("Cracker Crust","Creamy Alfredo Sauce","Cheddar Cheese","Extra cheese");
randomPizza(pizza1,pizza2,pizza3,pizza4);
console.log("the random pizza is :",randomPizza(pizza1,pizza2,pizza3,pizza4))