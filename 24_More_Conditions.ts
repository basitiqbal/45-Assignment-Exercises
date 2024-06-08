// Tests for equality and inequality with strings
let fruit1 = "apple";
let fruit2 = "orange";

console.log("Is fruit1 == 'apple'? I predict True.");
console.log(fruit1 == 'apple');

console.log("Is fruit1 != fruit2? I predict True.");
console.log(fruit1 != fruit2);

// Tests using the lower case function
let str1 = "HELLO";
let str2 = "hello";

console.log("Is str1 converted to lowercase equal to str2? I predict True.");
console.log(str1.toLowerCase() == str2);

// Numerical tests
let num1 = 10;
let num2 = 20;

console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let a = 5;
let b = 10;
let c = 15;

console.log("Is a < b and b < c? I predict True.");
console.log(a < b && b < c);

console.log("Is a > b or b > c? I predict False.");
console.log(a > b || b > c);

// Test whether an item is in an array
let colors:string[] = ["red", "blue", "green"];

console.log("Is 'blue' in the colors array? I predict True.");
console.log(colors.includes("blue"));

// Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes("yellow"));
