"use strict";
function makeFibonacciFunction() {
    let a = 0;
    let b = 1;
    let c = 1;

    return () => {
        [c, a, b] = [a, b, a + b]
        return c;
    }
}

const fibonacci = makeFibonacciFunction();

console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
console.log(fibonacci())
