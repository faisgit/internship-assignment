// 1. Create a program that checks whether a given year is a leap year or not.

// const checkLeapyear = (year) => {
//     return (year % 4 === 0 && year % 100 != 0 ) || year % 4 === 0
// } 

// const year = 2023 
// if (checkLeapyear(year)) {
//     console.log(`${year} is a leap year`)
// }else {
//     console.log(`${year} is not a leap year`)
// }

// 2. Write a program to print the first 10 natural numbers using a for loop and a while loop.

// let i = 1
// while (i <=10) {
//     console.log(i)
//     i++
// }

// let name = 'Faisal'
// const reverseStr = (str) => {
//     let revStr = ''
//     for (let i = str.length - 1; i >=0; i--) {
//         revStr =  revStr + str[i]
//     }
//     console.log(revStr)
// }


// reverseStr('Faisal')

// 4. Write a JavaScript program to find the largest and smallest number in an array.

// const minValueInArray =  (arr) =>{
//     const minValue = arr.reduce((a,b) => Math.min(a,b))
//     console.log(minValue)
// }

// minValueInArray([3,19,71,0,1,-1])

// 5. Create an object representing a student, with properties like name, age, and marks. Write functions to add marks, calculate the average, and determine the grade.

// const student =  {
//     name : 'Faisal',
//     age : 20,
//     marks : {
//         Java : 34,
//         AspNet : 28
//     },
//     averageMarks  : () => {
//         const totalMarks = this.marks.Java + this.marks.AspNet
//         const average =  totalMarks / 2
//         console.log(this.marks.java)
//     }
//  }

//  6. Write a function that takes a sentence and returns the number of vowels in the sentence.


// function calculateVowels(sentence){
//     const vowels = 'aeiouAEIOU'
//     return sentence.split('').filter(char => vowels.includes(char)).length
// }

// let FullName =  'My Name is Faisal Ansari'

// console.log(calculateVowels(FullName));


// 7. Write a function processNumbers that takes two numbers and a callback function as arguments. Based on the callback function passed, the numbers should either be added, subtracted, multiplied, or divided.

// function processNumbers(num1, num2, callback) {
//     return callback(num1, num2);
//   }
  
//   // Example callback functions:
//   function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function divide(a, b) {
//     if (b === 0) {
//       throw new Error('Cannot divide by zero');
//     }
//     return a / b;
//   }
  
//   // Usage:
//   console.log(processNumbers(10, 5, add)); // Output: 15
//   console.log(processNumbers(10, 5, subtract)); // Output: 5
//   console.log(processNumbers(10, 5, multiply)); // Output: 50
//   console.log(processNumbers(10, 5, divide)); // Output: 2



// 8. Create a program that converts temperatures from Celsius to Fahrenheit and vice versa.

// const CelsiusToFarenhiet = (C) =>{
//     const F  =  C *(9/5) + 32
//     return F + 'F'
// }
// console.log(CelsiusToFarenhiet(10));

// const FahrenheitTOCelsius = (F) => {
//     const C  = (F - 32) * 5/9
//     return C.toFixed(2) + 'C'
// }

// console.log(FahrenheitTOCelsius(10));


// 9. Create a program that sums all even numbers between 1 and 100.
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sum  = sum  + i
//     }
// }
// console.log(`The Sum all Even Numbers between 1 and 100 are ${sum}`);

// const countWords = (sent) =>{
//     let count = 0
//     sent.split(' ').map((sentWord) => {
//         sentWord.toLowerCase()
//         if (sentWord.includes('the')) {
//             count = count + 1
//         }
//     })

//     return count
// }

// let sent = 'The quick brown fox jumps over the lazy dog.'
// console.log(countWords(sent));



