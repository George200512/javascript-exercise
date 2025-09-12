/*
 A program to add an array of numbers
 */

let SUM = 0;
function sum(value){
    SUM += value;
}

const array = [1, 2, 3, 4, 5];
array.forEach(sum);
console.log(SUM);

