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

// JSON & its common operations
// Definition
// Parsing: Converting a string to a native object
// JSON.parse(text)
// Stringification: converting a native object to a string so it can be transmitted across the network
// JSON.stringify(object)


//Array slice method
//Note: Slice method won't mutate the original array but it returns the subset as a new array.
// let newArr = [0, 1, 2, 3, 4, 5];
// console.log(newArr.slice(0,3));
// console.log(newArr);

//Array splice method
// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let newVar = arrayIntegersOriginal1.splice(0,3);
// console.log(newVar);
// console.log(arrayIntegersOriginal1);

//if you do not pass the second argument, it takes till end by default
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let newLet = arrayIntegersOriginal2.splice(1)
// console.log(newLet);
// console.log(arrayIntegersOriginal2);
