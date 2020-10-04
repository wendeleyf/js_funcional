
// 1)
function somar(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

console.log(somar(2)(3)(4));

// 2)
const subtrair = function(a, b){
    return a-b; 
} 

const multiplicar = function(a,b){
    return a*b;
}

function calcular(a){
    return function (b){
        return function (fn){
            return fn(a, b);
        }
    }
}

console.log(calcular(10)(5)(subtrair));
console.log(calcular(10)(5)(multiplicar))