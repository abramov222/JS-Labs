console.log("\t\t|---Объекты---|\n")

console.log("\t\tЗадание №1");

let user = {
    name: "John",
    surname: "Smith",
}
console.log(`До: ${user.name}`);
user.name = "Pete";
console.log(`После изменения: ${user.name}`);
delete user.name;
console.log(`После удаления: ${user.name}`);

console.log("\n\t\tЗадание №2\n");

let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0",
}

for (let i in myBrowser) {
    console.log(i,":",myBrowser[i]);
}


console.log("\n\t\tЗадание №3\n");

function isEmpty(obj){
    for (let i in obj)
        return false;
    return true;
}

let temp = {};
console.log(isEmpty(temp));


console.log("\n\t\tЗадание №4\n");

const user1 = {
name: "John"
};
// это будет работать?
user1.name = "Pete";
// а это?
console.log(user1.name);




console.log("\n\t\tЗадание №5\n");

let digits = {
    oneDigit: 6,
    twoDigit: 124
}

function multiplyNumeric(obj){
    for (let i in obj)
        obj[i] = obj[i]*2;
}
multiplyNumeric(digits);
console.log(digits.oneDigit);



console.log("\n\t\tЗадание №6\n");

let calculator = {
    a: undefined,
    b: undefined,
    read(a,b){
        this.a = a;
        this.b = b;
    },
    sum(a,b){
        return a+b;
    },
    mul(a,b){
        return a*b;
    }
}

console.log(calculator.a,calculator.b);
calculator.read(5,10);
console.log(calculator.a,calculator.b);



console.log("\n\t\tЗадание №7\n");

let ladder = {
step: 0,
up() {
this.step++;
return this;
},
down() {
this.step--;
return this;
},
showStep: function() { 
console.log(this.step);
return this;
}
};

ladder.down().up().down().showStep();


console.log("\n\t\tЗадание №8\n");

function Browser(name, version) {
    this.name = name;
    this.version = version;
    this.aboutBrowser = function() {
        console.log(`Браузер: ${this.name}, Версия: ${this.version}`);
    };
}

let myBrowser2 = new Browser("Microsoft Internet Explorer", "9.0");
console.log(myBrowser2.name, myBrowser2.version);
myBrowser2.aboutBrowser();


console.log("\n\t\tЗадание №9\n");

function Employee(name, dept, phone, salary) {
    this.name = name;
    this.dept = dept;
    this.phone = phone;
    this.salary = salary;
    this.displayInfo = function() {
        console.log(`Сотрудник: ${this.name}\nОтдел: ${this.dept}\nТел: ${this.phone}\nЗарплата: ${this.salary}`);
    };
}

let worker = new Employee("Иван Иванов", "IT", "+7-999-000", 150000);
worker.displayInfo();


console.log("\n\t\tЗадание №10\n");

function Calculator() {
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read(10, 5);
console.log(`Сумма: ${calc.sum()}`);
console.log(`Произведение: ${calc.mul()}`);


console.log("\n\t\tЗадание №11\n");

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(a) {
        this.value += a;
    };
}

let accumulator = new Accumulator(1);
accumulator.read(10);
accumulator.read(5);
console.log(`Итоговое значение: ${accumulator.value}`);


console.log("\n\t\t|---Работа с прототипами---|\n");

console.log("\t\tЗадание №1");
// 1. true (взято из rabbit) 
// 2. null (свойство удалено у rabbit, берется из прототипа animal) 
// 3. undefined (свойство удалено везде) 


console.log("\n\t\tЗадание №2\n");

let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};

rabbit.eat();
console.log(`rabbit.full: ${rabbit.full}`); // true (записалось в rabbit)
console.log(`animal.full: ${animal.full}`); // undefined (в animal ничего не менялось)


console.log("\n\t\tЗадание №3\n");

let hamster = {
    stomach: [],
    eat(food) {
        // чтобы не наедались оба, нужно присваивать массив конкретному объекту
        this.stomach = [food]; 
    }
};

let speedy = { __proto__: hamster };
let lazy = { __proto__: hamster };

speedy.eat("apple");
console.log(`Спиди: ${speedy.stomach}`);
console.log(`Лэйзи: ${lazy.stomach}`); // теперь пусто


console.log("\n\t\tЗадание №4\n");

String.prototype.color = "black";
String.prototype.size = "14px";
String.prototype.write = function() {
    console.log(`Текст: ${this.toString()}, Цвет: ${this.color}, Размер: ${this.size}`);
};

let s = new String("Тестовая строка");
s.color = "red";
s.size = "20px";
s.write();


console.log("\n\t\tЗадание №5\n");

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit2 = new Rabbit();

console.log("\n\t\t|---Классы---| \n");

console.log("\t\tЗадание №1\n");

class Clock {
    constructor(hours, mins, secs) {
        this.hours = hours;
        this.mins = mins;
        this.secs = secs;
    }
    show() {
        console.log(`${this.hours}:${this.mins}:${this.secs}`);
    }
}
let myClock = new Clock(12, 30, 45);
myClock.show();


console.log("\n\t\tЗадание №2\n");
// ошибка в том, что в конструкторе Rabbit не вызван super(name) 


console.log("\n\t\tЗадание №3\n");

class ExtendedClock extends Clock {
    constructor(template, precision = 1000) {
        super(template);
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}


console.log("\n\t\tЗадание №4\n");

class Stock {
    constructor() {
        this.boxes = [];
        this.counter = 0;
    }

    add(w, v) {
        this.boxes.push({ id: this.counter++, w, v });
    }

    getByW(min_w) {
        let found = this.boxes
            .filter(b => b.w >= min_w)
            .sort((a, b) => b.id - a.id)[0]; // беру ту, что пришла позже (меньше на складе)
        if (found) {
            this.boxes = this.boxes.filter(b => b.id !== found.id);
            return found.id;
        }
        return -1;
    }

    getByV(min_v) {
        let found = this.boxes
            .filter(b => b.v >= min_v)
            .sort((a, b) => b.id - a.id)[0];
        if (found) {
            this.boxes = this.boxes.filter(b => b.id !== found.id);
            return found.id;
        }
        return -1;
    }
}

let myStock = new Stock();
myStock.add(10, 20);
myStock.add(5, 30);
console.log(`Номер коробки по весу 7: ${myStock.getByW(7)}`);
console.log(`Номер коробки по объему 25: ${myStock.getByV(25)}`);