
const numbers = [2, 3, 4, 5, 6];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element * element;
// }
// const result = numbers.map(function(element){
//    return element * element;
   
// })
// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(x => x * x);
// console.log(result);
const bigger = numbers.filter(x => x > 5);
const bigger1 = numbers.filter(x => x > 6);
const evenNumber = numbers.filter(x => x % 2 != 1);
const oddNumber = numbers.filter(x => x % 2 >= 1);
console.log(bigger);
console.log(bigger1);
console.log(evenNumber);
console.log(oddNumber);

const biggest = numbers.find(x => x > 5);
console.log(biggest);
const biggest1 = numbers.find(x => x > 6);
console.log(biggest1);





