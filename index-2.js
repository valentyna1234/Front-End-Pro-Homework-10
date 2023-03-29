//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

console.log('Task 10.2: ');

let price = 27;
let quantity = '';

for ( let i = 10; i <= 100; i = i + 10) {
    quantity = i * price;
    console.log( i + ' dollars are worth ' + quantity + ' hryvnias');
}