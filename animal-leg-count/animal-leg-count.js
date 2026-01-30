// Animal Leg Count - given an array, return count of animals with exactly 4 legs

function countFourLegs(animals) {
    // edge case: if the input is not an array or empty, return 0
    if (!Array.isArray(animals) || animals.length === 0) {
        return 0;
    }

    // set of animals that have exactly four (4) legs   
    const fourLeggedAnimals = new Set([
        'dog', 
        'cat', 
        'deer', 
        'lion', 
        'horse',
        'elephant',  
    ]);

// count the number of animals with exactly 4 legs
let count = 0;
    // loop through array and count 4-legged animals
for (let animal of animals) {
    if (typeof animal === 'string' && fourLeggedAnimals.has(animal.toLowerCase().trim())) {
        count++;
    }
}   
return count;
}

// testing if code is running
const animals = ['cat', 'spider', 'dog', 'ant', 'deer', 'fish', 'lion'];
const count = countFourLegs(animals);   
// display results
console.log(`Number of animals with 4 legs: ${count}`);

// TEST USE CASES BELOW! 

// Test Case 1: No four-legged animals
console.assert(countFourLegs(['spider', 'ant', 'fish']) === 0, 'Test Case 1 Failed');

// Test Case 2: All four-legged animals
console.assert(countFourLegs(['dog', 'cat', 'deer', 'lion']) === 4, 'Test Case 2 Failed');

// Test Case 3: Mixed Animals
console.assert(countFourLegs(['dog', 'spider', 'cat', 'ant', 'deer']) === 3, 'Test Case 3 Failed');

// ---! EDGE CASES !---

// Edge Case 1: Empty array
console.assert(countFourLegs([]) === 0, 'Edge Case 1 Failed');

// Edge Case 2: Not an Array
console.assert(countFourLegs('not an array') === 0, 'Edge Case 2 Failed');

// Edge Case 3: Case Sensitivity
console.assert(countFourLegs(['Dog', 'CAT', 'Deer']) === 3, 'Edge Case 3 Failed');

// Edge Case 4: Duplicate Animals
console.assert(countFourLegs(['dog', 'dog', 'cat', 'cat']) === 4, 'Edge Case 4 Failed');    

console.log('All test cases passed!');