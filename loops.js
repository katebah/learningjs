/*

//////////////////////////////////
Name: LOOPS
Author: katebah
Date: 1/6/17
//////////////////////////////////

*/


var friends = [ 'sal', 'tas', 'chris' ]
var message = ' is awesome'
//loop friends array
for (var i in friends) {
	// conditional statements
	if (friends[i]=='tas')
	console.log ( friends[i] + ' is a geek')
	else if (friends[i]=='sal') 
		console.log ( friends[i] + ' is strange')
	else
	console.log(friends[i] + message)
}

