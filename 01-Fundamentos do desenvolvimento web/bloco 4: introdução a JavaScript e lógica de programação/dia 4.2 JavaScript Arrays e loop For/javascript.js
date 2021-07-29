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
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;

//for (let index = 0; index < numbers.length; index +=1 ){
  //result += numbers[index];
//}

//let media = result / numbers.length;

//console.log(media);

//exercicio 4
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;

//for (let index = 0; index < numbers.length; index +=1 ){
  //result += numbers[index];
//}

//let media = result / numbers.length;

//if(media > 20){
  //console.log("valor maior que 20");
  //}
  //else {
    //console.log("valor menor que 20");
  //}

  //exercicio 5
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  let maiorNumero = numbers[0];

  for (let index = 1; index < numbers.length; index += 1 ) {
   if(numbers[index] > maiorNumero) {
     maiorNumero = numbers[index];
   }
  }
  console.log(maiorNumero);