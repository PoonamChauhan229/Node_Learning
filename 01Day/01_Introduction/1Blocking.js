//In this case, the code execution is sequential and happens line by line.

// Example 1
console.log('Step 1: Start');
console.log('Step 2: Middle');
console.log('Step 3: End');

//Output:
// Step 1: Start
// Step 2: Middle
// Step 3: End

// Another Example 
function add(a, b) {
    return a + b;
}

console.log('Step 1: Start');

const sum = add(5, 10); // This is a blocking operation
console.log('Step 2: Sum is', sum);

console.log('Step 3: End');

//Output:
// Step 1: Start
// Step 2: Sum is 15
// Step 3: End
