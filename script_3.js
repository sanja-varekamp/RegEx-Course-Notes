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
console.log(rope4.split(/(\d)/));

//---------------------------------------------------------------------

