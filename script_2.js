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

// the same applies for range of numbers

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

// the * quantifier means: "any number of this"; 0 or more of.

let string4 = "This issss a trial string";
let pattern4 = /is*/g;
console.log(string4.match(pattern4)); //[ 'is', 'issss', 'i', 'i' ]
// because the pattern starts with i, it returns all occurences of i
// but because the definition is: zero or more of, then the s has sometimes zero occurences

//---------------------------------------------------

// the + quantifier searches for 1 or more (of) occurences of the given criteria

let string5 = "This issss a trial string";
let pattern5 = /is+/g;
console.log(string5.match(pattern5)); //[ 'is', 'issss' ]

//-------------------------------------------------

// the ? quantifier searches for 0 or 1 occurences of the given criteria 

let string6 = "This issss a trial string";
let pattern6 = /is?/g;
console.log(string6.match(pattern6)); //[ 'is', 'is', 'i', 'i' ]

let string7 = "hello hla";
let pattern7 = /he?l\w+/g;
console.log(string7.match(pattern7)); //[ 'hello', 'hla' ]

//---------------------------------------------------

// character{X} will search for character which occurs X times in a string

let string8 = "hello helo";
let pattern8 = /hel{2}o/g;
console.log(string8.match(pattern8)); //[ 'hello' ]

// with this quantifier, we can also specify range {2,4}. in the following example, it will look
//for 2 to 4 occurences of L (2, 3 or 4).

let string9 = "hello helo helllo hellllo helllllo";
let pattern9 = /hel{2,4}o/g;
console.log(string9.match(pattern9)); //[ 'hello', 'helllo', 'hellllo' ]

// if we omit the second number in the curly brackets but leave the coma after the first one, 
// then we are asking the quantifier to return all the occurences with the specified number
// or more. {3,} means all the strings with 3 or more of the specified character 

let string10 = "hello helo helllo hellllo helllllo";
let pattern10 = /hel{3,}o/g;
console.log(string10.match(pattern10)); //[ 'helllo', 'hellllo', 'helllllo' ]

//----------------------------------------------------------------------

//GREEDY AND LAZY BEHAVIOR OF QUANTIFIERS 

// below is an example of greedy quantifier behavior. the pattern returns everything between the
// the first ' and the last ', instead of what we are asking for, separate words between quotes
// because it includes everything, it's called GREEDY BEHAVIOR 

let string11 = "JavaScript 'ES6' and 'ES7'is not new anymore";
let pattern11 = /'.+'/g;
console.log(string11.match(pattern11)); //[ "'ES6' and 'ES7'" ]

// in order to prevent the greedy behavior, a ? is needed after the + quantifier
// the use of questionmark makes a quantifier LAZY 
// (remember that the ? returns 0 or 1 occurence of the designated chatacter)

let string12 = "JavaScript 'ES6' and 'ES7'is not new anymore";
let pattern12 = /'.+?'/g;
console.log(string12.match(pattern12)); //[ "'ES6'", "'ES7'" ]

//---------------------------------------------------//
//---------------ASSERTIONS--------------------------//
//---------------------------------------------------//

// Assertions are provision of forcing a regular expression pattern (nani?)

//-------------------------------------------------------

// \b the boundary of words anchor, which returns the exact word/string and not all of the 
// other words that contain it 

let string13 = "testing a best test to testify";
let pattern13 = /test/g;
console.log(string13.match(pattern13)); //[ 'test', 'test', 'test' ]

// returns only one, since there is only one word that's 'test' in the string
let string14 = "testing a best test to testify";
let pattern14 = /\btest\b/g;
console.log(string14.match(pattern14)); //[ 'test' ]

// removing one of the \b will search for words starting with or ending with the
// specified characters
let string15 = "testing a best test to testify";
let pattern15 = /\btest/g;
console.log(string15.match(pattern15)); //[ 'test', 'test', 'test' ]

let string16 = "testing a best test to testify";
let pattern16 = /est\b/g;
console.log(string16.match(pattern16)); //[ 'est', 'est' ]

// the same logic applies for searching for numbers 

// in the code below, we are testing for three digits numbers in the string 
let string17 = "126 4067 8933 45 653";
let pattern17 = /\b\d\d\d\b/g;
console.log(string17.match(pattern17)); //[ '126', '653' ]


//---------------------------------------------------//
//---POSITIVE AND NEGATIVE LOOKAHEAD ASSERTIONS------//
//---------------------------------------------------//

// POSITIVE LOOKAHEAD
// we use it to find all the words/characters that are followed by something 
// lookahead (looking for a coma following a word) (?=,)
// (?=,) 0 or 1 occurence, comparing the equality, coma

let string18 = "Hi, is it you, or not";
let pattern18 = /\w+(?=,)/g;
console.log(string18.match(pattern18)); //["Hi", "you"]

// NEGATIVE LOOKAHEAD
// we use it to find all the words/characters NOT ENDING with a coma , 
// negative lookahead (looking for words not ending with a coma) (?!,)
// (?=,) 0 or 1 occurence, not equal to, coma

let string19 = "Hi, is it you, or not";
let pattern19 = /\w+(?!,)/g;
console.log(string19.match(pattern19)); //["H", "is", "it", "yo", "or", "not"]

// to get whole words only 

let string20 = "Hi, is it you, or not";
let pattern20 = /\b\w+(?!,)\b/g;
console.log(string20.match(pattern20)); //["is", "it", "or", "not"]

//CASE: we want to avoid all words ending with coma or a questionmark. IN that case we have to use
// | pipe, which is an OR operator 
// also, ? is a reserved character in RegEx so we need to use \ escape sequence 

let string21 = "Hi, is it you, or not?";
let pattern21 = /\b\w+(?!,|\?)\b/g;
console.log(string21.match(pattern21)); //["is", "it", "or"]


//---------------------------------------------------//
//---POSITIVE AND NEGATIVE LOOKBEHIND ASSERTIONS-----//
//---------------------------------------------------//

// POSITIVE LOOKBEHIND
// we use it to find all the words/characters that are preceded by something 
// the <= looks for the designated character BEHIND the string 

// looking for a word, preceded by Dr.
let string22 = "Dr.Java and Mr.Script are here!";
let pattern22 = /(?<=Dr.)\w+/g;
console.log(string22.match(pattern22)); //["Java"]

// looking for a $ in strings. has to be written with an escape sequence, because $ is a
// designated character in RegEx. the $ is followed by digits
let string23 = "Told 10 times to pay $30";
let pattern23 = /(?<=\$)\d+/g;
console.log(string23.match(pattern23)); //["30"]

// NEGATIVE LOOKBEHIND
// finds words and characters that are NOT preceded by something 
// <! 

let string24 = "Told 10 times to pay $30";
let pattern24 = /(?<!\$)\d+/g;
console.log(string24.match(pattern24)); //["10", "0"]

let string25 = "Told 10 times to pay $30";
let pattern25 = /\b(?<!\$)\d+\b/g;
console.log(string25.match(pattern25)); //["10"]