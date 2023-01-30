function bringSingara(money){
    singaraPrice= 10;
    singaraQuantity= money / singaraPrice;
    return singaraQuantity;
    
}

var myMoney= 150
var sinagars= bringSingara (myMoney);
console.log(sinagars)

// bringSingara (myMoney);
// console.log(myMoney)