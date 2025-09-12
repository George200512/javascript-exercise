let result = 1;
function factorial(num){
    for (let i=1; i<=num; i++){
        result *= i;
    }
}

factorial(5);
console.log(result);

