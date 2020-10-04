// Make a function called composedValue that takes two functions f1 and f2 and a value and returns
// f1(f2(value)), i.e., the first function called on the result of the second function called on the value.  

function square(x) { return x*x };
function double(x) { return x*2 };

const composedValue = (f1, f2, value) => {
    return f1(f2(value));
} 

//Stack de execução
// f2(2) => f1(4) => 16
console.log(composedValue(square, double, 2));


