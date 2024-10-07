<?php
// Basic

// <!-- WAP to read 2 numbers and print addition of those two numbers  -->

    // $numOne = readline('Enter Number One: ');
    // $numTwo =  readline("Enter Number Two: ");
    // $add =  $numOne + $numTwo;
    // echo "$numOne + $numTwo = $add"


    // WAP to read 2 numbers and print substraction

    // $numOne = readline("Enter First Number: ");
    // $numTwo = readline("Enter Second Number: ");
    // $sub = $numOne -  $numTwo;
    // echo "$numOne - $numTwo =  $sub"

     // WAP to read 2 numbers and print multiplication

    // $numOne = readline("Enter First Number: ");
    // $numTwo = readline("Enter Second Number: ");
    // $product = $numOne * $numTwo;
    // echo "$numOne * $numTwo =  $product"


    // WAP to read 2 numbers and print division

    // $numOne = readline("Enter First Number: ");
    // $numTwo = readline("Enter Second Number: ");
    // $division = $numOne * $numTwo;
    // echo "$numOne * $numTwo =  $division"


    // WAP to read 2 numbers and print modulus (Remainder)

    // $numOne = readline("Enter First Number: ");
    // $numTwo = readline("Enter Second Number: ");
    // $modulus = $numOne * $numTwo;
    // echo "$numOne * $numTwo =  $modulus"

    // WAP to read radius and print area and circumference of circle

    // $radius = readline("Enter the radius of Circle: ");
    // $circumference =  2 * 3.14 *  $radius;
    // echo $circumference; 

    // WAP to read length and breadth and print area and perimeter of rectangle

    // $l = readline("Enter the length of rectangle: ");
    // $b =  readline("Enter the breadth of rectangle: ");

    // $perimeter = 2 *($l + $b);

    // echo "perimeter of rectangle is $perimeter \n";
    // $area = $l * $b;
    // echo "area of rectangle is $area";


    // Conditional Statement (if else)

    // 1. WAP to read a number and check if its positive or negative

    // if ($num > 0) {
    //     # code...
    //     echo "The given number is positive";
    // }
    // else{
    //     echo "The given number is negetive";
    // }

    // 2. WAP to read a number and check it is even or odd
    
        // $num = readline("Enter number: ");
        // if ($num % 2 == 0) {
        //     # code...
        //     echo "Even";
        // }
        // else{
        //     echo 'Odd';
        // }

        // WAP to read 2 numbers and find greatest among them
        // $numOne = readline("Enter First Number: ");
        // $numTwo = readline("Enter Second Number: ");

        // if ($numOne > $numTwo) {
        //     # code...
        //     echo "Num One is greater";
        // }
        // else{
        //     echo "Num Two is greater";
        // }

    // WAP to read 3 numbers and find greatest among them
    // $a = 56;
    // $b = 67;
    // $c = 2;
    // if ($a > $b  && $a > $c) {
    //     # code...
    //     echo "a is greater";
    // }
    // else if($b > $c && $b > $a){
    //     echo "b is greater";
    // }
    // else{
    //     echo "c is greater";
    // }


//     5. WAP to read marks of 5 subjects and check the student is pass or failed

// 1. add validation for marks less than o

// 2. add validation for marks greater than 100

// $arr = [];


// for ($i=0; $i <5 ; $i++) { 
//     # code...
//     $marks =  readline('Enter your Marks: ');
//     if ($marks > 0 && $marks < 100) {
//         # code...
//         array_push($arr, $marks);
//     }
//     else if($marks < 0 || $marks > 100){
//         break ;
//     }
// }

// $length  = sizeof($arr);

// if($length == 5){
//     $totalMarks = 0;
//     for ($i=0; $i < $length ; $i++) { 
//         # code...
//         $totalMarks =  $totalMarks + $arr[$i]; 
//     }
//     $totalSubjects =  sizeof($arr);
//     $percentage =  $totalMarks / $totalSubjects;

//     if ($percentage < 35) {
//         # code...
//         echo 'The Student has been fail';
//     }
//     else{
//         echo 'The Student has been passed';
//     }
// }

//  Loops 


// 1. WAP to print hello world 10 times with numbering
// for($i = 1 ; $i<=  10; $i++)
//     echo "$i Hello world \n";

// 

// 2. WAP to print square of numbers from 1 to 10

// for ($i=1; $i <= 10; $i++) { 
//     # code...
//     echo $i * $i . "\n";

// }
// 3. WAP to print numbers from 1 to given number
// $num =  readline("Enter the number: ");
// for ($i=0; $i <= $num ; $i++) { 
//     # code...
//     echo $i."\n";
// }


// 4. WAP to print cube of numbers from 1 to given number
// $num =  readline("Enter the number: ");
// for ($i=0; $i <= $num ; $i++) { 
//     # code...
//     echo $i * $i * $i."\n";
// }


// WAP to read a number and print table of that number

// $num =  readline("Enter the number: ");
// for ($i=0; $i <= 10 ; $i++) { 
//     # code...
//     $product =  $num * $i;
//     echo " $num x  $i =  $product \n";
// }

// 6. WAP to execute Fizz Buzz Problem / Print number 1 to 100
//  1. if number is divisible by 3 then print Fizz
//  2. iif number is divisible by 5 then prnt Buzz
//  3. if number is divisible by both 3 and 5 then print Fizz Buzz

// for ($i=1; $i <= 100 ; $i++) { 
//     # code...
//     if ($i % 3 == 0 && $i % 5 == 0) {
//         # code...
//         echo $i."\n";
//         echo "Fizz Buzz \n";
//     }else if($i % 3 == 0){
//         echo $i."\n";
//         echo "Fizz \n";
//     }
//     else if($i % 5 == 0){
//         echo $i."\n";
//         echo "Buzz \n";
//     }
// }


// 7. WAP to execute lift program of 20 floor
// 1. print number with delay of 1 sec (use time module's sleep method)
// 2. skip 13 number
// 3. break after printing 13


// for ($i=0; $i <=20 ; $i++) { 
//     # code...
//     if ($i == 13) {
//         echo $i;
//         break;
//         # code...
//     }
//     if ($i == 13) {
//         # code...
//         continue;
//     }
//     echo "$i \n";
//     sleep(1);
// }

?>