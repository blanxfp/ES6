// Exercici 1
// Converteix el següent codi ES5 a ES6:

// // Literals
// var li = `<li>
// <div class="row">
// <div class="col-md-4">
// <img src="${moviePoster}" height="250" alt="" />
// </div>
// <div class="col-md-8">
// <h2>"${movieTitle}</h2>
// </div>
// </div>
// </li>`;


// Exercici 2
// Converteix a funcions fletxa:

// const multiply = (num1, num2) => num1 * num2;

// const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);

// This function returns a string padded with leading zeros
// const padZeros = (num, totalLen) => {
//    var numStr = num.toString();
//    var numZeros = totalLen - numStr.length;
//    for (var i = 1; i <= numZeros; i++) {
//       numStr="0" + numStr; 
//       } 
//    return numStr;
// }

// const power = (base, exponent) => { 
//    var result=1; 
//    for (var i=0; i < exponent; i++) { 
//          result *=base; 
//    } 
//    return result;
// } 

// const greet = who => console.log("Hello " + who);


// Exercici 3
// Arregla l'error del següent bloc de codi:

// var users = 
// [{ firstName: 'Homer', lastName: 'Simpson' },
// { firstName: 'Marge', lastName: 'Simpson' },
// { firstName: 'Bart', lastName: 'Simpson' },
// { firstName: 'Lisa', lastName: 'Simpson' },
// { firstName: 'Maggie', lastName: 'Simpson' }];

// var firstNames = users.map(function (user) {
//    return user.firstName;
// });


// Exercici 4
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

// var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const frase = epic.reduce(function(a, b){ return `${a} ${b}` });
// console.log(frase);

// Resultat per consola: 'a long time ago in a galaxy far far away'

// Nota: no fa falta fer un "join".


// Exercici 5
// Crear una funció que accepti un string i retornada aquest string revertit. Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()

// var string = "podries tornar aquest string invertit?";
// string = [...string];

// const reversedString = string => {
//    return this.string.reverse();
// }

// console.log(reversedString());

// Exercici 6
// Reemplaça en el següent bloc de codi la promesa per aync/await:


// function b() {
//    return new Promise(resolve => {
//       setTimeout(() => {
//         resolve( doMoreWork());
//       }, 2000);
//     });
// }

// async function a() {
//    const result = await b();
//    console.log(result);
// }

// a();

// Exercici 7
// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 


// - Usar .forEach() per obtenir aquest array.

// - Usar .map() per obtenir aquest array.

var tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];

let newArray = [];

//forEach
tasks.forEach(task => {
   newArray.push(task.name);
});

console.log(newArray);

//map
const newArrayMap = tasks.map(function (task) {
   return task.name;
});

console.log(newArrayMap);
