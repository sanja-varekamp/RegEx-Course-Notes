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

//