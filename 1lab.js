// 1 Лабораторная работа, ФИТ-241, Абрамов Илья

let name = "ilya";
let age = 19;
let isMan = true;
let documentNumber = 2556424356124n
let phoneNumber;

console.log("\t\t1 Задание  \n")

console.log(`Переменная name имеет такой тип данных: ` + typeof(name));
console.log(`Переменная age имеет такой тип данных: ` + typeof(age));
console.log(`Переменная isMan имеет такой тип данных: ` + typeof(isMan));
console.log(`Переменная documentNumber имеет такой тип данных: ` + typeof(documentNumber));
console.log(`Переменная phoneNumber имеет такой тип данных: ` + typeof(phoneNumber));


console.log("\n\n\t\t2 Задание  \n")

let a = 20, b = 30;
console.log("a = b: " + String(a === b));
console.log("a < b: " + String(a < b));
console.log("a <= b: " + String(a <= b));
console.log("a > b: " + String(a > b));


console.log("\n\n\t\t3 Задание  \n")

let a1 = false;
let b1 = null;
let c1;

console.log("a1: " + a1, "\tb1: " + b1, "\tc1: " + c1);


console.log("\n\n\t\t4 Задание  \n")

console.log("1" + 2 + 3, "\t", typeof ("1" + 2 + 3)); // первый символ стринг и все числа следующие преобразуются к стрингу
console.log(1 + 2 + "3", "\t", typeof (1 + 2 + "3")); // первые два числа складываются и потом склеиваются с стринговой тройкой
console.log("1" - 2, "\t", typeof ("1" - 2)); // минус преобразует стриговую единицу к числу
console.log("1" + - 2, "\t", typeof ("1" + - 2)); // так понимаю, что склеивает стринговую единицу с символом минуса, а дальше не знаю
console.log("1" + "1" - "1", "\t", typeof ("1" + "1" - "1")); // склеивает две единицы, а минус преобразует 11 в число и делает вычисление
console.log("foo" + - "bar", "\t", typeof ("foo" + - "bar")); // пытается минусануть буквы, что приводит к неопределенности NaN
console.log(0 == "0", "\t", typeof (0 == "0")); // == нестрогое сравнение
console.log(0.5 + 0.1 == 0.6, "\t", typeof (0.5 + 0.1 == 0.6)); // все правильно просто
console.log(0.1 + 0.2 == 0.3, "\t", typeof (0.1 + 0.2 == 0.3)); // 0.1 + 0.2 = 0.30000000...4 при сложение этих чисел из-за каких-то особенностей там число выходит немного больше чем 0.3
console.log(true + true + true == 3, "\t", typeof (true + true + true == 3)); // true = 1
console.log(true == 1, "\t", typeof (true == 1)); // == нестрогое сравнение из-за этого true
console.log(true === 1, "\t", typeof (true === 1)); // === строгое сравнение, где важны типы из-за этого false
console.log(1 < 2 < 3, "\t", typeof (1 < 2 < 3)); // последнее сравнение 2 < 3 true из-за этого тру
console.log(3 > 2 > 1, "\t", typeof (3 > 2 > 1)); // последнее сравнение слева направо false из-за этого false
console.log(9007199254740991 + 1 == 9007199254740991 + 2, "\t", typeof (9007199254740991 + 1 == 9007199254740991 + 2)); // 2 в 54 степени максимальное значение number и если прибавить к нему число, оно больше не станет
console.log(Math.sqrt(-1) == Math.sqrt(-1), "\t", typeof (Math.sqrt(-1) == Math.sqrt(-1)));


console.log("\n\n\t\t5 Задание  \n")

let str1;
let str2;
let str3;
let concatenation;

str1 = "Кто";
str2 = " ты";
str3 = " такой?";

concatenation = str1 + str2 + str3;
console.log(concatenation);


console.log("\n\n\t\t6 Задание  \n")

let str = 20;
let a2 = 5;

console.log(str + a2);
console.log(str - a2);
console.log(str * "2");
console.log(str / 2);


console.log("\n\n\t\t7 Задание  \n")

let a3 = 12;
let b2 = 7.15;

console.log("Остаток деление числа a3 на b2 =", Math.round(a3 % b2));


console.log("\n\n\t\t8 Задание  \n")

let x = 17;
console.log("(x^2 - 7x + 10)/(x^2 - 8x + 12) =", (x^2 - 7*x + 10)/(x^2 - 8*x + 12));


console.log("\n\n\t\t9 Задание  \n")

let mail = "ilyabramov22222@gmail.com";

let yesOrNo = false;
for(let i = 0;i < mail.length;i++)
{
    if(mail[i] = "@")
    {
        yesOrNo = true;
        break;
    };
};
if (yesOrNo === false)
    console.log("В вашем адресе майл не обнаружена собака!!");


console.log("\n\n\t\t10 Задание  \n")

let age1 = 12;

if (age1 >= 18 && age1 <= 30) {
    console.log("Для всех возрастов");
} 
else if (age1 >= 1 && age1 <= 17) {
    console.log("Для детей");
}

console.log("\n\n\t\t11 Задание  \n")

let a4 = 41,b4 = 23;
let max;

function digit_max(a,b) {
    if (a > b)
        return a;
    else
        return b;
}

max = digit_max(a4,b4);
console.log(`max = ${max}`);

console.log("\n\n\t\t12 Задание  \n")

let amount = 8;

switch (amount) {
    case 1: 
    console.log(`На ветке ${amount} ворона`)
    break;
    case 2:
    case 3:
    case 4:
    console.log(`На ветке ${amount} вороны`);
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`На ветке ${amount} ворон`);
        break;
}

console.log("\n\n\t\t13 Задание  \n")

let count = 0;
console.log("while Цикл: ");
while (count <= 50) {
    if (count % 2 !== 0)
        console.log(count);
    count++;
}

console.log("\nfor Цикл: ");
for (let i = 0;i <= 50;i++)
{
    if (i % 2 !== 0)
        console.log(i);
}

console.log("\n\n\t\t14 Задание  \n")

let sum = 0;
for (let i = 0;i <= 15;i++)
{
    if (i !== 5 || i !== 7)
        sum += i;
}
console.log(sum);

console.log("\n\n\t\t14 Задание  \n")

let x5 = 5;
let y5 = 4;
temp = x5;

while (y5 !== 1) {
    x5 = x5*temp;
    y5--;
}

console.log(x5);