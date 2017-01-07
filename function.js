/*

//////////////////////////////////
Name: function
Author: katebah
Date: 1/6/17
//////////////////////////////////

*/

var fruits2 = GetMeFruits(['orange','guava','grapes'])
console.log (fruits2)
//Return string of fruits
function GetMeFruits(more_fruits) {
	var fruits  = ['apple', 'kiwi', 'pineapple']
	var more = fruits.concat(more_fruits)
	message = more.join(' ') 
	return message
}