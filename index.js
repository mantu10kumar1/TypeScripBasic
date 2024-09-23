"use strict";
console.log("Hello world..!");
// let num1:number = 9
// console.log("Number 1: " + num1);
// TODO 1: Write a program to add two numbers
// Function define 
// function add(a:number , b:number):number{
//     return a + b;
// }
/*
// wrote the same code in the form of fat errow function
const add = (a:number , b:number):number => {
    return a + b;
}
// calling function and pring this value
console.log("The sum of tow numbers is : " , add(3, 5));

// Type annotation
let myFavNum: number = 6;
let myFullName : string = "Mantukumar Mausha";

console.log("My number is : "  , myFavNum.toString()); */
/*
let myFavNum: number = 5;
let myAge : number = 23;
let pi:number = 3.14;
let myNegVal : number = -5;
*/
/*

// String datatype

let myFirstNam : string = "Mantu";
let myLastName : string  = "kumar";
let myFullName : string = "Mantu kumar";
myFullName = myFirstNam + " " + myLastName;
console.log("My name is : " ,  myFullName);

// Write a code print the length of the string
let sentence:string  = "ka hal ba";
let sentenceLength: number = sentence.length;
console.log("Our sentence is : " , sentence);
console.log("The length of the sentence is : " ,  sentenceLength);
console.log("Sentence  in upper case is : " , sentence.toUpperCase());
console.log("Sentence in lower case is : " , sentence.toLowerCase());
*/
/*
// Boolean datatype
let isMyName:boolean = true;
let isDone:boolean = false;

console.log("Is my name true ? : " , isMyName);

// Write a function that check a number is even or odd

function isEven(num : number) : boolean{
    return num % 2 ===0;
}

let isEvenNumber : boolean = isEven(5);
console.log("Is even number : " , isEvenNumber)

// Write a function to check a number is divisible by 4 and 8 or not
function isDivisible(num1 : number) : boolean {
    return (num1 % 4 === 0 && num1 % 8 === 0);
}

let isDivisibleNumber : boolean = isDivisible(24);
console.log("Is divisible number : " , isDivisibleNumber);
*/
/*
// Bigint datatype
let maxNumber:number = Number.MAX_VALUE;
let minNumber: number = Number.MIN_VALUE;
console.log("Max number : " , maxNumber);
console.log("Min number : " , minNumber);

let maxNumber1:number = Number.MAX_SAFE_INTEGER;
console.log("Max number : " , maxNumber1);

let bigNumber:bigint =  9007199254740991n;
console.log("Big number : " , bigNumber);

let anotherBigNumber:bigint = BigInt(" 90071992547409914")
console.log("Another Big number : " , anotherBigNumber);

let sumBigNumber:bigint = bigNumber + anotherBigNumber
console.log("Sum big number : " , sumBigNumber);
*/
/*
// Any datatype
let myFavNum: any = 53
myFavNum = "Mantu"
myFavNum = true
console.log("This is the value of myFavNum : " , myFavNum);
*/
// Unknown datatype
let num2;
num2 = 5;
num2 = "Mantu";
num2 = true;
if (typeof num2 === "number") {
    console.log("In the case of number : ", num2 + 50);
}
else if (typeof num2 === "string") {
    console.log("In the case of string : ", num2);
}
else if (typeof num2 === "boolean") {
    console.log("In the case of boolean : ", num2);
}
