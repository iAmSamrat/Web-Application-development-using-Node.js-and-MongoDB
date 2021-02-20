// TODO : ES5

// Class -> Prototype in ES5 
// Constructor -> Function Constructor

// Object 
// var Mike1 = {
//     name:"Mike",
//     age:21,
//     gender: "M"
// }

// Function Constructor
// var Person = function(name,age,gender){
//     this.name = name,
//     this.age = age
//     this.gender = gender
//     this.sayHi = function(){
//         console.log("Hi!")
//     }
// }

// var Mike2 = new Person("Mike",21,"M")

// console.log(Mike1)
// console.log(Mike2)
// Mike2.sayHi()

// Primitive & Object Reference Logic
// var a = 5
// var b = 10
// console.log(a,b)
// var b = a
// var a = 22
// console.log(a,b)

// var a = {name:"A",status:"Caps"}
// b = 20
// console.log(a,b)
// b = a
// a = {name:"B",status:"Caps"}
// console.log(a,b)

// var a = {
//     name:"A",
//     age: 23
// }
// b = a
// a.age = 50
// console.log(a.age)
// console.log(b.age)

// First Class Function in JS 

// Passing functions as an argument 
// var years = [1998,1990,1993,1997,1994]

// function calcAge(yr, fn){
//     var arrage = [];
//     for(i=0;i<yr.length;i++){
//         arrage.push(fn(yr[i]))
//     }
//     return arrage
// }
// function Age(elem){
//     return 2021 - elem;
// }
// var arrCurrentAge = calcAge(years, Age);
// console.log(arrCurrentAge)

// Return function as an argument 
// function ask(job){
//     if(job === "Teacher"){
//         return function(name){
//             console.log("Hello Mr./Mrs. "+name)
//         }
//     }else if(job === "Singer"){
//         return function(name){
//             console.log("Welcome the great singer, Mr./Mrs."+name)
//         }
//     }else{
//         return function(name){
//             console.log("Hello Sir/Ma'am!")
//         }
//     }
// }

// 1. 
// var calling = ask("Teacher")
// calling("Samrat")

// 2.
// ask("Developer")("Sus")

// Immediately Invoked Function Expression 
// (function(name){
//     console.log("hey! "+name)
// })("Dev")

// TODO: ES6
// (function(){
//     let name = "Dev"
//     console.log("hey! "+name)
// })()


// console.log(a)
// var a = 10

// ask("Hi!")
// function ask(shout){
//     console.log(shout)
// }

// let age = 21
// for(let age = 0; age<5;age++){
//     console.log(age)
// }
// console.log(age)


// var firstName = "Anand"
// var lastName = "Das"

// console.log(firstName + " " + lastName) // ES5
// console.log(`${firstName} ${lastName}`)  // ES6 -> Template Literals

// var student1 = ["Mike","Joe",212212,"M"]

// ES5
// var fname = student1[0]
// var lname = student1[1]
// var roll = student1[2]
// var gender = student1[3]

// ES6 -> Destructuring
// const [fname,lname,roll, gender] = student1

// Object Oriented Programming in ES5 vs ES6 


// ! ES5
// var Person5 = function(name,yob,job){ // Function Cons
//     this.name = name
//     this.yob = yob
//     this.job = job
// }
// Person5.prototype.calcAge = function(){ // Method
//     var age = new Date().getFullYear() - this.yob
//     console.log(age)
// }
// Instantiation
// var Emma = new Person5("Emma",1998,"Artist")
// console.log(Emma)
// Calling a Method
// Emma.calcAge()


//!  ES6
// class Person6{
//     constructor(name,yob,job){
//         this.name = name
//         this.yob = yob
//         this.job = job
//     }
//     calcAge(){
//         let age = new Date().getFullYear() - this.yob
//         console.log(age)
//     }
//     static greet(){
//         console.log("Hello boy!")
//     }
// }
// Instantiation
// var Emma = new Person6("Emma",1998,"Artist")
// console.log(Emma)
// Calling a Method
// Emma.calcAge()
// Static Method
// Person6.greet()

// Creating subclass from superclass

// //! ES5
// var Person5 = function(name,yob,job){ // Function Cons
//     this.name = name
//     this.yob = yob
//     this.job = job
// }
// Person5.prototype.calcAge = function(){ // Method
//     var age = new Date().getFullYear() - this.yob
//     console.log(age)
// }

// var Athelete = function(name,yob,job, game, medals){
//     Person5.call(this, name,yob,job)
//     this.game = game
//     this.medals = medals
// }

// Athelete.prototype = Object.create(Person5.prototype)

// Athelete.prototype.incMedals = function(){
//     console.log(++this.medals)
// }

// var Rustom = new Athelete("Rustom",1990,"Clerk","Boxing", 12)
// console.log(Rustom)
// Rustom.incMedals()
// console.log(Rustom)

// //! ES6
// class Person6{
//     constructor(name,yob,job){
//         this.name = name
//         this.yob = yob
//         this.job = job
//     }
//     calcAge(){
//         let age = new Date().getFullYear() - this.yob
//         console.log(age)
//     }
//     static greet(){
//         console.log("Hello boy!")
//     }
// }

// class Athelete extends Person6{
//     constructor(name,yob,job,game,medals){
//         super(name,yob,job)
//         this.game = game
//         this.medals = medals
//     }
//     incMedals(){
//         console.log(++this.medals)
//     }
// }
// var Rustom = new Athelete("Rustom",1990,"Clerk","Boxing", 12)
// console.log(Rustom)
// Rustom.incMedals()
// console.log(Rustom)