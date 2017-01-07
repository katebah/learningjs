/*

//////////////////////////////////
Name: LOOPS
Author: (Name)
Date: 
//////////////////////////////////

*/

var friends = [ 'sal', 'tas', 'chris' ]
var message = ' is awesome'
var name = ''

for (var i in friends) {
	name = friends[i]
	if(name=='tas')
		console.log(name + " is a geek")
	else if(name=='chris')
		console.log(name + " is super awesome")
	else
		console.log(name + message)
}

function GetMeFruits(more_fruits) {
	var fruits  = ['apple', 'kiwi', 'pineapple']
	var more = fruits.concat(more_fruits)
	message = more.join(' ') 
	return message
}