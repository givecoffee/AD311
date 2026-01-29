// 1. snippet (fullName)
// changed var to let because fullName is reassinged from John -> Jane. Need variable scoping
let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

// 2. snippet (age and adult)
//switched var -> const because age is not reassigned (use let if updating age value)
// using const for adult since its value should not change within the if block
const age = 30;
if (age > 18) {
    const adult = true;
    console.log(adult);
}
// 3. snippet (loopArray)
// changed var to const for loopArray since the reference to the array does not change
const loopArray = [];
for (let i = 0; i < 5; i++) {
    loopArray.push(i);
}
console.log(loopArray);

// 4. snippet (maximum)
// using let for MAXIMUM since it is reassigned from 100 to 200
let MAXIMUM = 100;
MAXIMUM = 200;

// 5. snippet (colors)
// changed var to let for colors since it is reassigned to a new array
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);