//---------------------------------------------------//
//---------------CHARACTER SETS & RANGE--------------//
//---------------------------------------------------//

// by putting letters next to each other and wrapping them in brackets, 
// we are searching for those letters. it returns an array of individual letters

let string = "I wonder why it's windy";
let pattern = /w[io]n/g;
console.log(string.match(pattern));

// range is always written in [] 
// returns all strings in the range between i and o [i-o]

let string1 = "I wonder why it's windy";
let pattern1 = /[i-o]/g;
console.log(string1.match(pattern1));

//the same applies for range of numbers

let string2 = "12 456 9878 4";
let pattern2 = /[1-5]/g;
console.log(string2.match(pattern2));

// finding all the capital letters 

let string3 = "FinD all The UppER CasE";
let pattern3 = /[A-Z]/g;
console.log(string3.match(pattern3));


//---------------------------------------------------//
//---------------QUANTIFIERS-------------------------//
//---------------------------------------------------//

