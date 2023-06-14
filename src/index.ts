let sales: number = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;
let numbers: number[] = [1, 2, 3];
let user: [number, string] = [1, 'Sara'];
const enum Size { Small = 1, Medium, Large};
let mysize: Size = Size.Medium;
function calculateTax(income: number, taxYear = 2022) : number {
    if (taxYear < 2023) {
        return income * 1.2
    }
    return income * 1.3
}
calculateTax(50_000);
calculateTax(100_000, 2024);
//objects
type Employee = {
    readonly id: number;
    name: string;
    fax?: boolean;
    retire: (date: Date) => void
}
let employee: Employee = { 
    id : 1,
    name: '',
    retire: (date: Date) => {
        console.log(date)
    }
 };
// employee.name = 'Sara';
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
    
}
kgToLbs(10);
kgToLbs('10kg');

type Customer ={
    birthday: Date
};
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
//class
class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
        ) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = _balance;
    }

    get balance(): number { 
        return this._balance;
    }

    deposit(amount: number): void {
        if(amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
}

let account = new Account(1, 'Sara', 0);
account.deposit(100);
console.log(account.balance);

class SeatAssignment {
    // Index signature property
    [seatNumber: string]: string;
}
let seat = new SeatAssignment();
seat.A1 = 'Sara';
seat['A1'] = 'Sara';
seat.A2 = 'Dara';

class Ride {
    private static _activeRide: number = 0;

    start() { Ride._activeRide++};
    stop() {Ride._activeRide--};

    static get activeRide(){
        return Ride._activeRide;
    }
}

let ride1 = new Ride();
console.log(Ride.activeRide);

class Person {
    constructor(
        public firstName: string, 
        public lastName: string) {}
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
    walk() {
        console.log('everyone walks');        
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

}
let student = new Student(1, 'Sara', 'Labafi');

class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);

printNames([
    new Student(1, 'Sara', 'Labafi'),
    new Teacher('John', 'Smith')
]);
function printNames(people: Person[]) {
    for (let person of people)
        console.log('in methode: ' + person.fullName);        
}

abstract class Shape {
    constructor(public color: string) {
    }
    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius : number, color: string) {
        super(color)
    }
    override render(): void {
        console.log('rendering circle');
    }
}

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}
interface CloudCalendar extends Calendar {
    sync(): void;
}
class GoogleCalendar implements Calendar {
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}
let keyVal1 = new KeyValuePair(1, 'val');
let keyVal2 = new KeyValuePair<string, number>('1', 2);

function wrapInArray<T>(value: T) {
    return [value]
}
let aa = wrapInArray(2);
console.log(aa);

class ArrayUtils {
    wrapIt<T>(value: T) {
        return [value]
    }
}
let dd = new ArrayUtils();
dd.wrapIt('1');

interface Result<T>{
    data: T | null,
    error: string | null    
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null}
}

interface User {
    username: string
}

interface Product {
    title: string
}

let result = fetch<Product>('url');
result.data?.title;