# Refactoring (var to const and/or let)

## Potential Issues/Bugs with Original Usage of 'var'

### 1. Variable Hoisting Problems
Declarations are moved to the top of their scope-blocks during compilation, and before being executed which can lead to issues. For example, when using 'var', the 'message' variable was hoisted to the top of the function scope and both declarations of 'message' (including the ones in the if/else blocks) were referring to the same variable. This can cause unexpected behavior and confusion. 

### 2. Scope Leaking in Loop Variable
The loop variable 'i' was declared with 'var' and that can leak into the global scope because after the loop finishes, 'i' would still be accessible outside of the loop. This can affect other parts of the code in unintentional ways.

### 3. 'loggedIn' Variable Scope Leak
Similar to the loop variable 'i', having 'loggedIn' declared with 'var' inside the for-loop leaves it accessible glovally, and can conflict in other areas.

### Redecleration Not Throwing Errors
You can catch bugs where there are redeclerations in the same scope if you are using 'let' or 'const' since 'var' would not throw errors beforehand for 'message' being declared twice. 

### In Conclusion
Using 'const' and 'let' allows the code to be more predictable by keeping the variables in their inteded block scopes, preventing accidental redeclarations, and making the intetions of the variables clearer. 