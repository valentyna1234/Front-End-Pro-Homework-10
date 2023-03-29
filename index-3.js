//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

console.log('Task 10.3: ');

let n = 200

for (let i = 1; i <= 200; i++) {
    square = i*i
    if (square < n) 
        console.log(`${i} * ${i} = ${square}`);
    
    
}