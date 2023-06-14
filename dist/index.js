"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers = [1, 2, 3];
let user = [1, 'Sara'];
;
let mysize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(50000);
calculateTax(100000, 2024);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
}
let account = new Account(1, 'Sara', 0);
account.deposit(100);
console.log(account.balance);
class SeatAssignment {
}
let seat = new SeatAssignment();
seat.A1 = 'Sara';
seat['A1'] = 'Sara';
seat.A2 = 'Dara';
class Ride {
    start() { Ride._activeRide++; }
    ;
    stop() { Ride._activeRide--; }
    ;
    static get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
let ride1 = new Ride();
console.log(Ride.activeRide);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('everyone walks');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
let student = new Student(1, 'Sara', 'Labafi');
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
printNames([
    new Student(1, 'Sara', 'Labafi'),
    new Teacher('John', 'Smith')
]);
function printNames(people) {
    for (let person of people)
        console.log('in methode: ' + person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('rendering circle');
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let keyVal1 = new KeyValuePair(1, 'val');
let keyVal2 = new KeyValuePair('1', 2);
function wrapInArray(value) {
    return [value];
}
let aa = wrapInArray(2);
console.log(aa);
//# sourceMappingURL=index.js.map