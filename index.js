// // # Map, Filter, Reduce

// // #### 1. Get total orders
// // * Return the total amount of orders. 

// // ```javascript
const orders = [
   { amount: 250 },
   { amount: 400 },
   { amount: 100 },
   { amount: 325 }
];

const startingPrice = 0;
const total = orders.reduce(function(accumulator, current) {
    return accumulator + current.amount;
}, startingPrice);
console.log(total);
// ```



// // #### 2. Increment by 1
// // ```javascript 
let arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// // ``` 
// // * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

arrayOfNumbers = arrayOfNumbers.map(function(number){ return number + 1;});
console.log(arrayOfNumbers);



// // #### 3. Filter Evens
// // * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
const filterEvens = arrayOfNumbers.filter(function(number) {
    return number % 2 === 0;
 });

console.log(filterEvens);

// // * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(array, string) {
   return array.filter(name => name.includes(string));
};


console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 
let arrayOfNumbers2 = [78, 456, 21, 69,78];
const total2 = arrayOfNumbers2.reduce(function(accumulator, current) {
    return accumulator + current;
});
console.log(total2);

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```

// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const squareRoot = arrayOfNumbers2.map(Math.sqrt);
console.log(squareRoot);