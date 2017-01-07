/*
//////////////////////////////////
Name: function
Author: katebah
Date: 1/6/17
//////////////////////////////////
*/

// set array 
var fruits2 = GetMeFruits(['orange','guava','grapes'])
console.log (fruits2)
//Return string of fruits
function GetMeFruits(more_fruits) {
	var fruits  = ['apple', 'kiwi', 'pineapple']
	var more = fruits.concat(more_fruits) // concat both arrays
	message = more.join(' ') // turn array into string
	return message // return string
}