// Printing "Hello World" in JavaScript 
// console.log("Hello World!")
// document.write("<h1>Hello World</h1>")

// Variables in JavaScript 
// var college = "RCCIIT" // String
// var cgpa = 8.9 // Number
// var isAdult = true // Boolean

// var gender // undefined
// var failPercentage = null // Object

// Check variable type 
// console.log(typeof cgpa)
// console.log(typeof gender)
// console.log(typeof failPercentage)

// Type Coercion
// var name = "Aditya"
// var age = 23
// var isSinger = false

// console.log(name + " is of age "+age+" and singing status: "+isSinger)

//  Type Mutation
// var roll_no = 21
// console.log(typeof roll_no)

// roll_no = "Twenty One"
// console.log(typeof roll_no)

// Comparison vs String Comparison 

// Conditional Statement 
// voterAge = 12

// if(voterAge < 18){
//     console.log("Can't cast vote!")
// }else{
//     console.log("Can cast vote!")
// }

// Boolean Logic 
// var compsci = 81
// var maths = 90

// if(compsci >= 85 && maths >= 90){
//     console.log("First List")
// }else if(compsci >= 75 && maths >= 80){
//     console.log("Second List")
// }else{
//     console.log("Better luck next time!")
// }

// Ternary Operator 
// age = 19
// age > 21 ? console.log("Welcome to the party!") : console.log("Come after "+ (21-age) + " years.")

// Switch Statement 
// pressedButton = 1

// switch(pressedButton){
//     case 1: console.log("Welcome to the club.")
//             break
    
//     case 2: console.log("Kindly hold to talk to our manager.")
//             break

//     case 3: console.log("Register your complain.")
//             break
    
//     default: console.log("Please press the correct button.")
// }

// Function
// function add(a,b){
//     return a+b
// }
// result = add(2,4)
// console.log(result)

// Function Expression
// var add = function(a,b){
//     return a+b
// }
// result = add(3,5)
// console.log(result)

// Array 
// var names = new Array("Dev","Joe","Elina","Aditya")

// // 1. Find length 
// console.log(names.length)

// // 2. Indexing 
// console.log(names[2])

// // 3. Insert at end 
// names.push("Subha")
// console.log(names)

// // 4. Insert at beginning 
// names.unshift("Joy")
// console.log(names)

// // 5. Removing element from start 
// names.shift()
// console.log(names)

// // 6. Remove from back
// names.pop()
// console.log(names)

// // 7. Find index
// console.log(names.indexOf("Dev"))

// // 8. Check element exists
// console.log("Elina exists: "+ names.includes("Elina"))

// Object 
// var john = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 45,
//     isMarried: true,
//     dob: "11 Aug, 1980"
// }

// var john = new Object()
// john.firstName = "John";
// john.lastName = "Doe"
// john.age = 45
// console.log(john)

// Methods 
// var john = {
//         firstName: "John",
//         lastName: "Doe",
//         isMarried: true,
//         yob: 1980,
//         calcAge: function(){
//             this.age = 2021 - this.yob
//         }
// }
// john.calcAge()
// console.log(john.age)

// For loop 
// var i = 0
// for(i = 0; i<=9;i++){
//     console.log(i)
// }

// While Loop
// while(i<10){
//     console.log(i)
//     i++
// }