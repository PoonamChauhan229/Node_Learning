//In this example, the setTimeout function makes the second step non-blocking.


console.log('Step 1: Start');

setTimeout(() => {
    console.log('Step 2: Middle (after delay)');
}, 0); // Even with 0 ms delay, this is non-blocking

console.log('Step 3: End');

// Output:
// Step 1: Start
// Step 3: End
// Step 2: Middle (after delay)

// In the non-blocking example, even though setTimeout is set to 0 milliseconds, the console.log('Step 3: End') executes before console.log('Step 2: Middle (after delay)') because the setTimeout callback is handled asynchronously.

// Another Example
function addAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000); // Non-blocking with a 1-second delay
}

console.log('Step 1: Start');

addAsync(5, 10, (sum) => {
    console.log('Step 2: Sum is', sum);
});

console.log('Step 3: End');

//Output:
// Step 1: Start
// Step 3: End
// Step 2: Sum is 15

