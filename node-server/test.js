// test.js - File with intentional ESLint errors

const greeting = 'Hello World';    // double quotes, missing semicolon
let unusedVariable = 42;          // unused variable
var oldStyle = 'test';             // var instead of const/let, double quotes

function sayHello(name) {
    console.log(greeting + ', ' + name);   // wrong indentation
}

sayHello('User');    // double quotes, missing semicolon

const data = {
    name: 'John',
    age: 30
};

console.log(data);