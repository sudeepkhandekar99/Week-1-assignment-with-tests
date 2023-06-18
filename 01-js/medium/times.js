/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, 
given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    startTime = new Date();
    var sum = 0;
    // running sum
    for (let i = 1; i <= n; i++) sum += i;
    endTime = new Date();
    return (endTime - startTime);
}

function calculateTimeFaster(n) {
    startTime = new Date();
    // using sum of all natural numbers formula
    var sum = (n * (n+1))/2;
    endTime = new Date();
    return (endTime - startTime);
}

console.log("Slower Logic: ");
console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
console.log();
console.log("Faster Logic: ");
console.log(calculateTimeFaster(100));
console.log(calculateTimeFaster(100000));
console.log(calculateTimeFaster(1000000000));
