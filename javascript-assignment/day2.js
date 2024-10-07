// 1. Write a function greet that takes a string name as an argument and logs "Hello, [name]!".
// const greet = (name) => {
//     console.log(`Hello, ${name}! `)
// }
// greet('Faisal')

// 2. Create a function multiply that takes two numbers as arguments, multiplies them, and returns the result.

// function multiply(numOne, numTwo){
//     const result = numOne * numTwo
//     return result
// }

// console.log(multiply(16,3))


// 3. Create an object student with properties name, age, and grade. Write a function printStudentInfo that logs the student's information

const student  = {
    name : 'Faisal Ansari',
    age : 20,
    grade : 'A',
    printStudentInfo : function(){
        console.log(`Name = ${this.name}`)
        console.log(`Age = ${this.age} `)
        console.log(`Grade =  ${this.grade}`);
    }
}

// student.printStudentInfo()



// 4. Write a function updateGrade that takes a student object and a new grade, then updates the student's grade property.


// function updateGrade(stud, grade){
//     stud.grade = grade
// }

// updateGrade(student, 'B')
// console.log(student.grade);


// 5. Write a code for nested object with different properties.

// const Info = {
//     name : {
//         firstName : 'Faisal',
//         lastName : 'Ansari'
//     },
//     address : {
//         place : 'Dahegaon',
//         pincode : 441113,
//         city : 'Nagpur'
//     }
    
// }


// 6. Write a function introduce that takes two parameters name and age (with a default value for age) and logs a message like "My name is [name] and I am [age] years old."


// function Introduce(name, age = 20) {
//     console.log(`My name is ${name} and I am ${age} years old.`)
// }

// Introduce('Faisal Ansari')


// 7. Write a function calculateArea that takes the length and width of a rectangle, with a default width of 1, and returns the area

// function calculateArea(length, width =  1) {
//     area =  length * width
//     return area
// }

// console.log(calculateArea(10));

// 8. Write a function square that returns the square of a number.

// const square = (num) => {
//     return Math.pow(num,2)
// } 
// console.log(square(8));

// 8. Write a function capitalize that takes a string and returns it with the first letter capitalized.

// function capitalize(name){

//     console.log(name[0].toUpperCase()+name.substring(1,name.length))
// }

// capitalize('faisal')


// 9. Write a function isEven that checks if a given number is even and returns true or false.

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isEven(89));


