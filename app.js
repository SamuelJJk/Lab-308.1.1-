// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  //////////////////
  //Math problem 1//
  //////////////////


//   Check if all numbers are divisible by 5. 
let dividBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0 
console.log(dividBy5)


// Check if the first number is larger than the last.
let greaterThan = n1 > n4;
console.log(greaterThan)


// Subtract the first number from the second number.
let subtract = n1 - n2;
console.log(subtract);
// Multiply the result by the third number
let mulitply = subtract * n3;
console.log(mulitply);
// Find the remainder of dividing the result by the fourth number.
let remainder = mulitply % n4;
console.log(remainder);


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// const isOver25 = ((n1 > 25) || (n2 > 25) || (n3 > 25) || (n4 > 25));

console.log(isOver25);


// part 2 practical math
let mph_55 = 55;
let mph_60 = 60;
let mph_75 = 75;
let totalMiles = 1500;
let budget = 175;
let avgCost = 3;

 // 55
    let totalMilesFor55 = totalMiles / mph_55;
    console.log("This is total miles for 55, "+ totalMilesFor55); 

    let totalGallonFor55 = totalMilesFor55 * 30 ;
    console.log("This is total gallons for 55, "+ totalGallonFor55);

    let costFor55 = totalGallonFor55 / avgCost;
    console.log("This is total cost for 55, "+ costFor55);


 //60 
 let totalMilesFor60 = totalMiles / mph_60;
 console.log("This is total miles for 60, "+ totalMilesFor60); 

 let totalGallonFor60 = totalMilesFor60 * 28 ;
 console.log("This is total gallons for 60, "+ totalGallonFor60);

 let costFor60 = totalGallonFor60 / avgCost;
 console.log("This is total cost for 60, "+ costFor60);



 //75
 let totalMilesFor75 = totalMiles / mph_75;
 console.log("This is total miles for 75, "+ totalMilesFor55); 

 let totalGallonFor75 = totalMilesFor75 *  23;
 console.log("This is total gallons for 75, "+ totalGallonFor75);

 let costFor75 = totalGallonFor75 / avgCost;
 console.log("This is total cost for 75, "+ costFor75);