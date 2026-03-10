const greeting = 'Hello World';   
const unusedVariable = 42;         
const oldStyle = 'test';           
function sayHello(name) {
    console.log(unusedVariable);          
    console.log(oldStyle);                
    console.log(greeting + ', ' + name);
}

sayHello('User');

const data = {
    name: 'Robot',
    age: 38
};

console.log(data);
