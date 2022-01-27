/* 05) Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
- сумма a и b; 
- разница между a и b;
- произведение a и b; 
- частное от деления a на b; 
- остаток от деления a на b;  
- результат возведения числа a в степень b */

const a = +prompt("Please insert number a");
const b = +prompt("Please insert number b");

// сумма a и b;
const sum = a + b;

// разница между a и b;
const subtr = a - b;

// произведение a и b;
const multip = a * b;

// частное от деления a на b;
const division = a / b;

// остаток от деления a на b;
const remain = a % b;

// результат возведения числа a в степень b
const power = Math.pow(a, b);

document.write(`Summary is: ${sum} <br>`);
document.write(`a - b is: ${subtr} <br>`);
document.write(`a * b is: ${multip} <br>`);
document.write(`a / b is: ${division} <br>`);
document.write(`Remainder: ${remain} <br>`);
document.write(`a power of b: ${power}`);


console.log(`Summary is: ${sum}`);
console.log(`a - b is: ${subtr}`);
console.log(`a * b is: ${multip}`);
console.log(`a / b is: ${division}`);
console.log(`Remainder: ${remain}`);
console.log(`a power of b: ${power}`);


