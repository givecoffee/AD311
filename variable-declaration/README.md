# Understanding const and let 

## Objective
Refactoring Javascript code by replacing outdated 'var' with either 'const' or 'let', and articulate the reasoning behind each choice. 

## Summary of Changes

'fullName' uses 'let' because it is being reassigned from "John Doe" to "Jane Doe"

'age' and 'adult' uses 'const' because is set once and never changes.

'loopArray' uses 'const' because the contents of the array change, but the variable that references the array isn't reassigned.

The variable 'i' uses 'let' because it is incremented each loop iteration. 

'MAXIMUM' now uses 'let' because it is reassigned from 100 to 200 as well as 'colors' being reassigned to a new array.

## Biggest Differences

### 'const'
- Cannot be reassigned after initial value is set 
- Must be initialized when declared 
- This is great for values that shouldn't change
- Arrays/objects that are declared with 'const' can still have their contents modified
  
### 'let' 
- Can easily be reassigned as many times as needed
- They do not need to be initialized immediately 
- This is great for use with counters or values that update

### Something to Avoid
When working with 'const, we are modifying the contents i.e (arr.push()) and not reassigning i.e (arr = [1,2,3]) because this will thrown an error.

