function throttled(func, maxInvocations) {
    let numOfInvocations = 0;
    let value;
    return function(...args) {
        if(numOfInvocations < maxInvocations) {
            value = func.apply(this,args);
            numOfInvocations ++;
        }
        return value;
    }
}

function myFunc(i) { return ++i; }
const increment = throttled(myFunc,5);
console.log(increment(10));
console.log(increment(11));
console.log(increment(12));
console.log(increment(13));
console.log(increment(14));
console.log(increment(15));
console.log(increment(16));