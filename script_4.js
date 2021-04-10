//---------------------------------------------------//
//---------------------EXERCISES---------------------//
//---------------------------------------------------//


//validate if the first letter of string is uppercase
_string = "Hello World";
_pattern = /^[A-Z]/
console.log(_pattern.test(_string)); //true

//validate if a string begins with a digit 
_string1 = "88 New Street";
_pattern1 = /^[0-9]/; // or /^\d/
console.log(_pattern1.test(_string1)); //true

//validate if a string contains only digits 
_string2 = "987789";
_pattern2 = /^[0-9]+$/;
console.log(_pattern2.test(_string2)); //true

//validate if a string contains only letters 
_string3 = "abcdefg";
_pattern3 = /^[A-Za-z]+$/;
console.log(_pattern3.test(_string3)); //true

//validate for all uppercase characters 
//space needs to be included, because all the words should be checked
_string4 = "THIS IS A TEST STRING";
_pattern4 = /^[A-Z\s]+$/;
console.log(_pattern4.test(_string4));

//how to count vowels and consonants in a string 
//for vowels we use /[aeiou]/gi 
_string5 = "This is A test string";
_pattern5 = /[aeiou]/gi;
console.log(_string5.match(_pattern5).length); //5

//for consonants /[^aeiou]/gi
_string6 = "This is A test string";
_pattern6 = /[^aeiou\s]/gi;
console.log(_string6.match(_pattern6).length); //12 (space not included)

//find the double word in a string 
_string7 = "This is a a string test test";
_pattern7 = /[^aeiou\s]/gi;
console.log(_string7.match(_pattern7).length);