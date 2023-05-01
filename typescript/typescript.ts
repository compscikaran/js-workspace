const doSomething = (person: string, age:number, isFunny: boolean) => {

}

function square(num: number): number {
    return num* num;
}

doSomething('Chicken', 78, true);

console.log(square(5));

const x = [1,2,3,4,5]

const y = x.map((x) => x **2)

function printTwice(x: string): void {
    console.log(x);
    console.log(x);
}

const neverStop = (): never => {
    while(true) {
        console.log('Hello there')
    }
}

const twoFer = (name: string = 'you'): string => {
    return `One for ${name}, One for me`;
}

const leapYear = (year: number): boolean => {
    return (year % 4 == 0 && year  % 100 != 0) || (year % 400 == 0)
}

console.log(leapYear(2013))
console.log(leapYear(2012))
console.log(leapYear(2016))

console.log(twoFer())
console.log(twoFer('Elton'));

function printName(person: {first: string, last: string}): void {
    console.log(person.first + ' ' + person.last);
}

printName({first: 'Karan', last: 'Gupta'});

let coordinate: {x: number, y: number} = {x: 4, y: 7};

function makeRandomCoordinates(): {x: number, y: number} {
    return {
        x: Math.random(),
        y: Math.random()
    }
}

printName({first: 'Karan', last: 'Gupta'});

type Point = {
    x: number;
    y: number;
    z?: number;
}

function doublePoint(p: Point): Point {
    return {
        x: p.x **2,
        y: p.y**2
    }
}

type SongCredits = {
    producer: string;
    writer: string;
}

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: SongCredits;
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 2876,
    username: "batgirl"
}

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful & {
    center: number;
}

const christy: ColorfulCircle = {
    color: 'blue',
    radius: 10,
    center: 0
}


const bools: Array<boolean> = [];

const bools2: boolean[] = [];

const points: Point[] = [{x: 13, y: 13}];

let f1: number | string = 2;
f1 = 'er'

const tuple: [number, number] = [1,2];

enum Status {
    PENDING='To do',
    IN_PROGRESS='In progress',
    COMPLETED='Done',
}

interface Point2 {
    x: number;
    y: number;
}

interface Person {
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string;
    sayHi: () => void;
    applyDiscount: (rate: number, amount: number) => number 
}

const thomas: Person = {
    id: 1234,
    firstName: "thomas",
    lastName: "hardy",
    nickName: "tom",
    sayHi: function() {
        console.log('Hi ' + this.firstName)
    },
    applyDiscount: function(rate: number, discount: number ){
        return (1-rate)*discount;
    }
}

thomas.sayHi()

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark: () => string;
}

const elton: Dog = {
    name: 'Elton',
    age: 0.5,
    breed: 'Golden Retriever',
    bark(): string {
        return 'Woof Woof'
    },
}

interface ServiceDog extends Dog {
    job: string;
}

interface Chicken {
    breed: string;
    eggs: number;
    name: string;
    speak: () => void;
}

const norma: Chicken = {
    breed: "Silky",
    name: "Norma",
    eggs: 16,
    speak(){
        console.log('quack quack')
    },
}


class Player {

    public first: string;
    public readonly last: string;
    private score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
   
}

const p1 = new Player("Elton", "Steele")
p1.first = 'Karan';
console.log(p1);

class Player2 {

    private score: number = 10;
    constructor(public first: string, public readonly last: string) {
    }
   
}

abstract class Employee {
    constructor(public first: string, public last: string) {

    }

    abstract getPay(): number;
    greet() {
        console.log("Hello Everyone");
    }
}

function doThing<T>(thing: T): T {
    return thing;
}

