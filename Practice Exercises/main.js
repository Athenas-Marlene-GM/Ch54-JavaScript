import { printOutString } from "./modules/ex1.js";
import { doubleArrayValues } from "./modules/ex2.js";
import { sumAndProductOfArray } from "./modules/ex3.js";
import { getCommonCourses } from "./modules/ex4.js";
import { arraySteps } from "./modules/ex5.js";
import { bubbleSort } from "./modules/ex6.js";
/* 
    Exercise #1 ( sugerencia join() )
    Copy the code below into your workspace:
    let arr = ["This", "is", "a", "sentence."];
    function printOutString() {
    // your code here
    }
    printOutString();
    Complete the function to print out the string: This is a sentence. 
*/


let arr = ["This", "is", "a", "sentence."];
console.log("Ejercicio 1:");
printOutString(arr);

/* 
    Exercise #2 (sugerencia map() )
    Write a function that:
    •	Takes in an array of numbers.
    •	Doubles the value of each number in the array.
    •	Prints out the new updated array.
    Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] 
*/

let myArray = [1, 2, 4, 5];
console.log("Ejercicio 2:");
console.log(doubleArrayValues(myArray));


/* Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

let myArray2 = [1, 2, 3, 4];
console.log("Ejercicio 3:");
sumAndProductOfArray(myArray2);

/* Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
  */
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log("Ejercicio 4:");
console.log(getCommonCourses(student1Courses,student2Courses));

/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array. */

console.log("Ejercicio 5:");
arraySteps();

/* Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100] */

let arr3 = [3, 6, 12, 5, 100, 1 ];

console.log("Ejercicio 6:");
console.log(bubbleSort(arr3));

