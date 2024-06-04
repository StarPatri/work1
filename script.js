// "use strict";

// const obj = {
//     a: "5",
//     b: "4",
//     c: "6"
// }
//  const f = 'f';

// obj[f] = "4545"
// console.log(obj.f)

// const arr = ['a', 'v', 'c']

// arr[10] = '3434'

// console.log(arr)


// const result = confirm("A u ready?");
// console.log(result);
// const answer = prompt("18 year?", "");
// console.log(typeof(answer))


// const answers = [];

// answers[0] = prompt('name', '');
// answers[1] = prompt('surename', '');
// answers[2] = prompt('old', '');

// document.write(answers);


// const answer = 'toys';

// console.log(`http://someurl/${answer}`);

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// const num = 50;

// if (num < 49) {
//     console.log('Eror');
// } else if(num > 100) {
//     console.log('Big');
// } else {
//     console.log(num);
// }


// const num = 49;

// switch(num){
//     case 49: 
//         console.log('Eror');
//         break;
//     case 100:
//         console.log('Eror');
//         break;
//     case 50:
//         console.log('в точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break; 
// }

// const hamburger = 3;
// const cola = 0;
// const fries = 3;
// const nuggets = 3;

// if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
//     console.log('Все довольны');
// }else{
//     console.log('Мы уходим');
// }

// let hamburger;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }


// let number = 50;

// while(number <= 59){
//     console.log(number);
//     number++;
// }

// do{
//     console.log(number);
//     number++;
// }
// while(number <= 59)

// let number = 50;

// for(let i = 1; i <= 8; i++){
//     console.log(number);
//     number++;  
// }

// let res = '';
// const lenght = 7;

// for(let i = 1; i < lenght; i++){

//     for(let j = 0; j < i; j++){
//         res += '*';
//     }
//     res += '\n';
// }

// console.log(res);
// for(let i=5; i<11; i++){
//     console.log(i);
// }
// for(let i = 20; i >= 10; i--){
//     if(i === 13) break
//     console.log(i)
// }
// for(let i = 2; i < 11; i++){
//     if( i % 2 === 0)
//     console.log(i);
// }
// let i = 2;

// for(let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
let i = 2;
while( i <= 16){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        
    }
    i++;
}
// const arrayOfNumbers = [];

// // Пишем решение вот тут
// for(let i = 5; i > 11; i++){
//     console.log(arrayOfNumbers);
// }

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;

console.log('abc' instanceof String);
