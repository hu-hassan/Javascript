const prompt = require("prompt-sync")({ sigint: true });

// Problem no 1
// console.log("Hello World");

// Problem no 2 & 3
// let num1 = prompt("Enter 1st number: ");
// num1 = parseInt(num1);
// let num2 = prompt("Enter 2nd number: ");
// num2 = parseInt(num2);
// console.log("The sum of two numbers is = ", num1 + num2);
// console.log("The product of two numbers is = ", num1 * num2);

// Problem no 4 & 5
// let temp = prompt("Enter temprature: ");
// temp = parseInt(temp);
// console.log("The temprature in farenhite is ", temp * 1.8 + 32);
// console.log(
//   "The temprature in celcius is ",
//   (temp - 32) * 0.555555555555555555555555
// );

// Problem no 6
// let length = prompt("Enter length of rectangle: ");
// let width = prompt("Enter width of rectangle: ");
// length = parseInt(length);
// width = parseInt(width);
// console.log(
//   "Area of the rectangle with dimensions u gave is : ",
//   length * width
// );

// Basic computer concept
// console.log(!(2 + 3 * 2 >= 2 + 6 / 3));

// From here on things will get a bit complex
// Problem no 7
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// function sumOfodd(arr) {
//   arr.forEach((item) => {
//     if (item % 2 !== 0) {
//       sum += item;
//     }
//   });
//   return sum;
// }
// console.log(sumOfodd(array));

// Problem no 8
// let name = prompt("Enter you name: ")
// console.log("Hello"+ name +"may you have a graet day")

// Problem no 9
// let str = "Hassan";
// let len = str.length - 1;
// for (let index = 0; index <= len; len--) {
//   console.log(str[len]);
// }

// Problem no 10
// let num1 = prompt("Enter 1st number: ");
// let num2 = prompt("Enter 2nd number: ");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Invalid input. Please enter valid numbers.");
// } else if (num1 > num2) {
//   console.log(num1 + " is greater than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is greater than " + num1);
// } else {
//   console.log(num1 + " & " + num2 + " are equal to each other");
// }
