console.log(typeof(undefined));

let x = 3;
console.log(x);

// let person = undefined;
// console.log(person.mood); // TypeError!

let bandersnatch;
console.log(bandersnatch);

console.log(typeof(null));

console.log(Number.MAX_SAFE_INTEGER)

console.log(Number.MIN_SAFE_INTEGER)

let scale = 0;
let a = 1 / scale;
let b = 0 / scale;
let c = -a;
let d = 1 / c;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(typeof(NaN));

let alot = 9007199254740991n; 
console.log(alot + 1n);
console.log(alot + 2n);
console.log(alot + 3n);
console.log(alot + 4n);
console.log(alot + 5n);

console.log(typeof("こんにちは"));
console.log(typeof('こんにちは'));
console.log(typeof(`こんにちは`));

let alohomora = Symbol();
console.log(typeof(alohomora)); 

console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(new Date()));
console.log(typeof(/\d+/));
console.log(typeof(Math));

let person = {name: 'karan'}
person.name = 'manoj'
console.log(person);
person['name'] = 'karan'
console.log(person);

let countDwarves = function() { return 7; };
let dwarves = countDwarves();
console.log(countDwarves);
console.log(dwarves);

