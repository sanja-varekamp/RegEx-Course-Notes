//---------------------------------------------------//
//---------------GROUP CAPTURING---------------------//
//---------------------------------------------------//

rope7 = "123-4567 is to test"
model4 = /(\d+)-(\d+)/g;
console.log(model4.exec(rope7)); // '123-4567','123', '4567'
// '123-4567' - group 0, default group
// '123' - group 1 (because there are parenthesis around the first \d)
// '4567' - group 2 (because there are parenthesis around the second \d) 

// IMPORTANT NOTE: Group 0 can NOT be accessed 
// The others can be accessed by writing ${1} for group 1, ${2} for group 2 
// ${X} where X is the group number 





//---------------------------------------------------//
//-------METHODS USED WITH REGEX---------------------//
//---------------------------------------------------//

// exec() syntax:
// regexPattern.exec(string);

let rope = "this is how it is";
let model = /is/g;
console.log(model.exec(rope)); //["is", index: 2, input: "this is how it is", groups: undefined]
console.log(model.exec(rope)); //["is", index: 5, input: "this is how it is", groups: undefined]

// everytime exec() executes, returns the search value and stores the next search STARTING POSITION
// in a property called lastIndex

//-------------------------------------------------------------

// match() syntax: 
// string.match(regexPattern);

// it returns an array containing matched values 
// returns all matching values in an array, if the /g modifier is used
// returns null if there is no match found 

//---------------------------------------------------------------

// matchAll() syntax: 
// string.matchAll(regexPattern);

// improved version of match()
// returns a RegExp String Iterator 
let rope2 = "this is how it is";
let model2 = /is/g;
const iObj = rope2.matchAll(model2) //RegExpStringIterator {}

for (let item of iObj){
    console.log(item);
    //console.log(item + " found at " + item.index)
} 
// ["is", index: 2, input: "this is how it is", groups: undefined]
// ["is", index: 5, input: "this is how it is", groups: undefined]
// ["is", index: 15, input: "this is how it is", groups: undefined]

//------------------------------------------------------------------

// search() syntax: 
// string.search(regexPattern)

//returns index of first match or -1 if match not found 

let rope3 = "this is how it is";
let model3 = /is/g;
console.log(rope3.search(model3)); // 2

//--------------------------------------------------------------------

// split() syntax: 
// string.split(regexPattern/ separator character, [limit])
// limit is an optional argument. If given then limits number of returned values 

let rope4 = "this1 is2 how3 it4 is";
console.log(rope4.split(/(\d)/)); //[ 'this', '1', ' is',  '2', ' how', '3', ' it',  '4', ' is']

//---------------------------------------------------------------------

// replace() syntax: 
// newString = string.replace(search RegExpattern or string, string to be replaced/function)

// regular example
let rope5 = "this method is working";
let newRope = rope5.replace("is", "at");
console.log(newRope); //that method is working 
//only the first occurence of "is" is replaced 

// with a RegEx pattern with the globam modifier 
let rope6 = "this method is working";
let newRope1 = rope6.replace(/is/g, "at");
console.log(newRope1); //that method at working
//every occurence of is is replaced 

//------------------------------------------------------------------------

// test() syntax: 
// regexPattern.test(string);
// returns true if it's a match (the word/character exists in the string), false if it's not

