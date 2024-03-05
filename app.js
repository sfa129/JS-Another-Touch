//What are the possible ways to create objects in JavaScript

//i. Object constructor
//not recommended
//var obj = new Object();  


//ii. Object's create method
//create a object by create method by passing a prototype object as a parameter
//var obj = Object.create(null)

//iii. Object Literal Syntax
// object literal syntax is equivalent to create method when it passes null as parameter
//var object = {};

//iv.Function constructor
// function Person(name, age){
//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     return obj;
// }
// let newOne = new Person('Faiz', 25);
// console.log(newOne)

//v.Function constructor with Prototype
// function Person (){}
// Person.prototype.name = 'Faiz';
// let newOne = new Person()
// console.log(newOne)


//vi. ES6 Class Syntax
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// let newOne = new Person('Faiz')
// let newTwo = new Person('Ahmer')
// console.log(newOne)
// console.log(newTwo)


//vii.Singleton Pattern
//A Singleton is an object which can only be instantiated one time.
// let obj = new function(){
//     this.name = 'Faiz';
// }
// console.log(obj)