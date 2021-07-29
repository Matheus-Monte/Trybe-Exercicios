//exercicio 1
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2 ,35, 27];

//for (let index =0; index < numbers.length; index +=1) {
//  console.log(numbers[index])
//}

//exercicio 2
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;

//for (let index = 0; index < numbers.length; index += 1) {
 // result += numbers[index];
//}

//console.log(result);

//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index +=1 ){
  result += numbers[index];
}

let media = result / numbers.length;

console.log(media);