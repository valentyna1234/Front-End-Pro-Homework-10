//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

console.log('Task 10.4: ');

let num = 11;

for(let i = 2; i < num; i++) {
    if(num % i === 0) {
    console.log(num + ' не є простим числом');
        break;
    }
    console.log(num + ' є простим числом');    
}
