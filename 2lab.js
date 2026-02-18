console.log("\t\t1 Задание");

let a = 5,b = 3;

function minus(a,b){
    console.log(`Разность ${a} и ${b} = `, a - b);
}

function minus2(a,b){
    return a - b;
}


console.log("1. Разность выводом через функцию");
minus(a,b);

console.log(`\n2. Разность чисел = ${minus2(a,b)}`);


console.log("\n\n\t\t2 Задание");

let ageYoung = 8;
let age = 19

function checkAge(age){
    if (age < 18)
    {
        console.log("Привет, Малыш");
    }
    else if (age >= 18) {
        console.log("Здраствуй, Юноша");
    }
    else {
        console.log("Введено некоректное значение");
    }
}

checkAge(ageYoung);
checkAge(age);


console.log("\n\t\tЗадание 3");

let digit1 = 100,digit2 = 17,digit3 = 13;

function digitMax(a,b,c) {
    return Math.max(a,b,c)
}

console.log("Наибольшее число из 3:", digitMax(digit1,digit2,digit3));


console.log("\n\n\t\t4 Задание");

let variable = "Глобальная переменная"; 
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);
/*
 Видимость переменной в функции ограничена за её пределами, то-есть
 там она не определена. Соответственно такая же переменная может быть
 создана за границами видимости функции и они никак не будут конфликтовать
 между собой.
 */

console.log("\n\n\t\t5 Задание");

function func(x,y,z) {
    let u = (Math.max(x,y) + Math.max(x + y, x + z))/((Math.max(0,5,x+z))^2);
    return u;
}

console.log(`Вывод функции func: ${func(5,11,8)}`);

console.log("\n\n\t\t6 Задание");

let coordinate = [
    {x: 10, y: 4},
    {x: 2,  y: 5},
    {x: -2, y: 8}
];

function perimetr(coordinate) {
    let tempSum = 0;
    
    for (let i = 0; i < coordinate.length; i++) {
        
        let current = coordinate[i];
        
    
        let next = coordinate[(i + 1) % coordinate.length];

    
        let dx = next.x - current.x;
        let dy = next.y - current.y;

       
        tempSum += Math.sqrt(dx**2 + dy**2);
    }
    return tempSum;
}

console.log("Периметр:", perimetr(coordinate));


console.log("\n\n\t\t7 Задание");

function recursion(n,step,sum){
    let currentNumber;
    if (step === 1) {
        currentNumber = 1;
    }
    else {
        currentNumber = Math.sin(sum);
    }

    if (step === n) {
        return currentNumber;
    }

    return recursion(n, step + 1, currentNumber + sum);
}

let test = recursion(3,1,0);

console.log("Рекурсия = ", test);




console.log("\n\n\t\tМассивы");

console.log("\n\t№1");

let arr = [10,6,8];

console.log(arr[1]);
console.log(arr.length);
arr.splice(1,1);

console.log("Вывод массива:");
for(let i of arr){
    console.log(`${i}`);
}


console.log("\n\t№2");

const countries = ['Russian','Indonesia'];
const population = [142350152,4257120];
/*
function output(countries,population) {
    for (let i = 0;i < countries.length;i++)
    console.log(`В стране под названием ${countries[i]} проживает ${population[i]} людей`);
}
*/

function output(countries,population) {
    for (let i in countries)
    console.log(`В стране под названием ${countries[i]} проживает ${population[i]} людей`);
}

output(countries,population);

console.log("\n\t№3");

let arr1 = ["January", "February", "March", "April", "May", "June"];
let len = arr1.pop();
console.log(arr1.join(" "));
console.log(len);

console.log("\n\t№4");

let a1 = [1, 2, 3, 4, 5, 6, 7];
let t = a1.slice(0,3);
console.log(t);

console.log("\n\t№5");

let a2 = [1, 2, 3, 4, 5, 6, 7];
let d = a2.splice(1,3);
console.log(a2);

console.log("\n\t№6");

const arr2 = [1,2,3,4,5];
arr2.reverse();
console.log(arr2);

console.log("\n\t№7");

let mixedArr = ['c', 5, 2, 'b', 3, 1, 4, 'a'];

mixedArr.sort();
console.log(mixedArr.join(', '));


console.log("\n\t№8");

let simpleArr = [1, 2, 3, 4, 5];
console.log(simpleArr.join('+'));


console.log("\n\t№9");

let m1 = [1, 2, 5, 4, 6];
let m2 = [8, 2, 5, 9, 5];

let combined = m1.concat(m2).sort((a, b) => a - b);

let median;
let mid = Math.floor(combined.length / 2);

if (combined.length % 2 !== 0) {
    median = combined[mid];
} else {
    median = (combined[mid - 1] + combined[mid]) / 2;
}
console.log("Объединенный массив:", combined);
console.log("Медиана:", median);


console.log("\n\t№10");

let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 100));
}
console.log("Исходный:", randomArr);

let maxVal = Math.max(...randomArr);
let minVal = Math.min(...randomArr);
let maxIndex = randomArr.indexOf(maxVal);
let minIndex = randomArr.indexOf(minVal);


randomArr[maxIndex] = minVal;
randomArr[minIndex] = maxVal;

console.log("После замены (max и min):", randomArr);


console.log("\n\t№11");

let testArr = [10, 8, 5, 6, 2]; 
let isDescending = true;
let breakIndex = -1;

for (let i = 0; i < testArr.length - 1; i++) {
    if (testArr[i] < testArr[i + 1]) {
        isDescending = false;
        breakIndex = i + 1; 
        break;
    }
}

if (isDescending) {
    console.log("Массив по убыванию, инвертируем:", testArr.reverse());
} else {
    console.log("Нарушение на индексе:", breakIndex);
}


console.log("\n\t№12");

let numbers12 = [2, -10, 5, -20, 3, -5, 8];
for (let i = 0; i < numbers12.length; i++) {
   
    if (numbers12[i] > 0 && i % 2 !== 0) {
        numbers12[i] *= 3;
    }
    
    if (numbers12[i] < 0 && i % 2 === 0) {
        numbers12[i] /= 5;
    }
}
console.log("Измененный массив:", numbers12);


console.log("\n\t№13");

let matrix5x5 = [
    [1, -6, 2, 8, 0],
    [5, 10, -2, 4, 7],
    [3, -3, 6, 12, -1],
    [-10, 0, 5, 2, 9],
    [4, 7, -4, 1, 11]
];

console.log("Элементы в интервале [-5; 7]:");
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matrix5x5[i][j] >= -5 && matrix5x5[i][j] <= 7) {
            console.log(matrix5x5[i][j]);
        }
    }
}


console.log("\n\t№14");

let matrixMN = [
    [10, 2, 3],
    [4, 5, 20],
    [1, 8, 2]
];

let sumMaxRows = 0;
for (let row of matrixMN) {
    sumMaxRows += Math.max(...row);
}

let prodMinCols = 1;
for (let j = 0; j < matrixMN[0].length; j++) {
    let col = [];
    for (let i = 0; i < matrixMN.length; i++) {
        col.push(matrixMN[i][j]);
    }
    prodMinCols *= Math.min(...col);
}

console.log("Сумма макс. элементов строк:", sumMaxRows);
console.log("Произведение мин. элементов столбцов:", prodMinCols);


console.log("\n\t№15");

let library = {
    "Пушкин": ["Капитанская дочка", "Евгений Онегин"],
    "Есенин": ["Черный человек", "Анна Снегина"],
    "Донцова": ["Маникюр для покойника"]
};

for (let author in library) {
    console.log(`Автор: ${author}. Книги: ${library[author].join(", ")}`);
}