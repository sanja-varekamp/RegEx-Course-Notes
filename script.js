let msg = "This is CaSe sensitive";
let pos = msg.search(/case/i);
console.log(pos); 

//-------Regular expression pattern SYNTAX:---------------// 

// 2 ways to write Regular Expressions.

// Starts with a / followed by a search pattern, closed by / 
// after the second /, comes a modifier or a flag

//if the code is to be writen with the RegEx() method in JS, then
//the syntax goes: 
//let ptrn = RegExp("Pattern", "i") // patern, i stands for modifier

//---------------------------------------------------//
//--------MODIFIERS IN REG EX------------------------//
//---------------------------------------------------//

// i = case-insensitive matching (casing doesn't matter)

// g = performs a global match 
let msg1 = "This is case sensitive Case";
let str1 = msg1.match(/case/gi);
console.log(str1); //['case', 'Case'] (because of the i modifier)

// m = performs multiline search 
// s = allows (.) to match new line characters [ES2018] (not for Firefox)
// u = switches on unicode pattern matching
// y = switches on "sticky" mode 

//---------------------------------------------------//
//---------------CHARACTER CLASSES-------------------//
//---------------------------------------------------//

// THE DOT CHARACTER ".", represents any character in a search pattern
// except a new line 

// new line is \n OR \u2028 OR \R (unicode new line) OR \u2029

let str2 = "I wonder why it's windy";
let ptrn2 = /w.n/g; //returns only the three letter strings
let ptrn2_1 = /w.n\w+/g; // the class \w and the quantifier + next to it, 
// will return the whole word where the pattern w.n has been found
console.log(str2.match(ptrn2_1)); //['won', 'win']

let str3 = "I w\nnder why it's windy";
let ptrn3 = /w.n\w+/gs;
console.log(str3.match(ptrn3)); //['w/nnder', 'windy'] 
// because of the s modifier, the w\nnder is returned. 
// if the s modifier is removed, then only windy is returned 

//-------------------------------------------------

//###### explanation of pattern /.h\w+/g;
//first letter is any character, second letter is h, then follows the rest of the word,
// then modifiers 
let str4 = "this is what that is";
let ptrn4 = /.h\w+/g;
console.log(str4.match(ptrn4)); //['this, 'what', 'that]

//-----------------------------------------------

// THE \d CHARACTER searches for DIGITS in the string 

let str5 = "I teach HTML5, CSS3, React 16.8+, Angular 8+";
let ptrn5 = /\d/g;
console.log(str5.match(ptrn5)); //[ '5', '3', '1', '6', '8', '8' ]

//---------------------------------------------

// THE \D CHARACTER searches for NON-DIGIT values in the string (opposite of \d)
// returns all the characters that are not digits, as well as space

let str6 = "I teach HTML5, CSS3, React 16.8+, Angular 8+";
let ptrn6 = /\D/g;
console.log(str6.match(ptrn6));

//------------------------------------------------

// THE \w CHARACTER searches for word characters 
// THE \w+ returns an entire word 

// \w returns all the characters between: 
// [A-Z]
// [a-z]
// [0-9] 
// _(underscore) 

//NOTE: if a string contains a ! . or &, those are IGNORED by \w 

let str7 = "Yes! I do know & 10 times I_say";
let ptrn7 = /\w/g;
console.log(str7.match(ptrn7));

// THE \W CHARACTER finds non-word characters (opposite of \w)
// returns all the rest of the characters 

let str8 = "Yes! I do know & 10 times I_say";
let ptrn8 = /\W/g;
console.log(str8.match(ptrn8)); //['!', ' ', ' ',' ', ' ', '&',' ', ' ', ' ']

//--------------------------------------------------------

// THE \s CHARACTER searches explicitly for white space characters

// WHITE SPACE INCLUDES: 
// single space character " "
// a tab character \t
// a carriage return character \r
// a new line character \n 
// a vertical tab character \v 
// a form feed character \f 

// NOTE: details for \r, \f and \n https://stackoverflow.com/questions/3091524/what-are-carriage-return-linefeed-and-form-feed

let str9 = "Yes! I do\t know & 10\n times I_say";
let ptrn9 = /\s/g;
console.log(str9.match(ptrn9)); //[' ',  ' ', '\t', ' ',  ' ', ' ', '\n', ' ', ' ']

// THE \S CHARACTER searches for non-white spaces (opposite of \s)
// returns everything that doesn't fall into the category of space

let str10 = "Yes! I do\t know & 10\n times I_say";
let ptrn10 = /\S/g;
console.log(str10.match(ptrn10)); //['Y', 'e', 's', '!', 'I', 'd', 'o', 'k', 'n', 'o', 'w', '&', '1', '0', 't', 'i', 'm', 'e', 's', 'I', '_', 's', 'a', 'y']

//--------------------------------------------------------------------

// \t and \n can be used as a pattern against which a string can be compared 
// However, if we want to use them together in one pattern they need to be in brackets
// otherwise, it returns null

let str11 = "Yes! I do\t know & 10\n times I_say";
let ptrn11 = /[\n\t]/g;
console.log(str11.match(ptrn11));