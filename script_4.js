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
_pattern7 = /\b(\w+)\s\1/g;
console.log(_string7.match(_pattern7)); //["a a", "test test"]

//find a word of a specific number of letters (3)
_string8 = "You and I flying in the sky";
_pattern8 = /\b\w{3}\b/g;
console.log(_string8.match(_pattern8)); // ["You", "and", "the", "sky"]

//date format validation; with regex we can not only check the format, 
//but also validate for month, day and year values

//format validation 
_string9 = "02/03/2020" //or "02-03-2020" 
_pattern9 = /^\d{1,2}[\/-]\d{1,2}[\/-]\d{4}$/g;
console.log(_pattern9.test(_string9)); //true 

//format + date value validation 
_string10 = "2020-jan-30" 
_pattern10 = /^(19|20)\d\d([-\s])(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\2(0[1-9]|[12][0-9]|3[01])$/i;
console.log(_pattern10.test(_string10));
