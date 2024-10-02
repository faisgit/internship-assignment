// Write a program that takes a number as input and prints whether the number is odd or even using an if-else statement.

// let num = 4;

// if (num % 2 === 0) {
//   console.log("It is an Even Number");
// } else {
//   console.log("It is an odd Number");
// }


// 2. Create a program that accepts a student's marks as input and prints their grade based on the following criteria:
// Marks ≥ 90: Grade A
// Marks ≥ 75: Grade B
// Marks ≥ 50: Grade C
// Marks < 50: Grade F

// let Marks = 10

// if (Marks >= 90) {
//     console.log('Grade A')

// }else if(Marks >= 75){
//     console.log('Grase B');
    
// }else if(Marks >=50){
//     console.log('Grade C')
// }
// else{
//     console.log('Grade F')
// }


// 3.  Write a program that takes a person's age as input and checks if they are eligible to vote (age ≥ 18) using an if-else statement.

// const age = 3

// if(age >= 18){
//     console.log('You are  Eligible for voting')
// }
// else{
//     console.log("You are not eligible for voting")
// }


//  4 . Write a program that takes a year as input and determines if it is a leap year using an if-else statement.

// const checkLeapyear = (year) => {
//     return (year % 4 === 0 && year % 100 != 0 ) || year % 4 === 0
// } 

// const year = 2023 
// if (checkLeapyear(year)) {
//     console.log(`${year} is a leap year`)
// }else {
//     console.log(`${year} is not a leap year`)
// }




// 5 Write a program that takes two numbers and an operator (+, -, *, /) as input. Use a switch statement to perform the corresponding operation and print the result.

// const arthematicOperation =  (a, b, operator) => {
//     switch (operator) {
//         case '+':
//             console.log(`${a} + ${b} = ${a + b}`)
//             break;
//         case '-':
//             console.log(`${a} - ${b} = ${a - b}`)
//             break;
//         case '*':
//             console.log(`${a} * ${b} = ${a * b}`)
//             break;
//         case '/':
//             console.log(`${a} / ${b} = ${a / b}`)
//         break;
//         case '%':
//             console.log(`${a} % ${b} = ${a % b}`)
//             break;
//         default:
//             console.log('Invalid Operator')
//             break;
//     }
// }

// arthematicOperation(1 , 2, '-')

// 6. Write a program that simulates a traffic light system. Based on the color (Red, Yellow, Green) provided as input, use a switch statement to print whether to "Stop," "Get Ready," or "Go.".

// const trafficLightSystem = (color) => {
//     switch (color) {
//         case 'Red':
//             console.error('Stop')
//             break;
//         case 'Yellow':
//             console.log('Get Ready')
//             break;
//         case 'Green':
//             console.log('Go')
//             break;
//         default:
//             console.log('invalid Traffic Color')
//             break;
//     }
// }

// trafficLightSystem('Red')


// 7. Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.

// const sumOfArray = (nums) => {
//     let sum = 0
//     for (const num of nums) {
//         sum = sum + num
//     }
//     return sum
// }

// const num = [1, 2, 3, 4, 6, 7, 8, 9]
// console.log(sumOfArray(num))

// 8 Create a function that takes an array as input and returns a new array with the elements in reverse order.

// const reverseArray = (arr) => {
//     const reverseArr = arr.reverse()
//     return reverseArr
// }

// const num = [10, 20, 30, 40, 50, 60]
// const reverseArr =  reverseArray(num)
// console.log(reverseArr)


// 9. 9.Write a program that takes two arrays as input and merges them into a single array.

// const mergeArray = (arr1, arr2) => {
//     const merge = arr1.concat(arr2)
//     return merge
// }

// const mergeNumArray =  mergeArray([1,2,3,4],[5,6,7,8])
// console.log(mergeNumArray)


// Write a function that takes an array of numbers and returns the difference between the maximum and minimum numbers in the array.

// const differenceInMaxValueAndMinValue = (num) => {
//     const maxNum = num.reduce((a, b) => Math.max(a,b))
//     const minNum = num.reduce((a,b) => Math.min(a,b))
//     const difference =  maxNum - minNum
//     console.log(difference)
// }

// differenceInMaxValueAndMinValue([5,10,1,91,0,2,6])