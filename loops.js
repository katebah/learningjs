/*

//////////////////////////////////
Name: LOOPS
Author: katebah
Date: 1/6/17
//////////////////////////////////

*/
// set array
var friends = [ 'sal', 'tas', 'chris' ]
var message = ' is awesome'
//loop friends array
for (var i in friends) {
	// conditional statements
	if (friends[i]=='tas') // if name is tas 
		console.log ( friends[i] + ' is a geek') 
	else if (friends[i]=='sal') // if name is sal
		console.log ( friends[i] + ' is strange')
	else
		console.log(friends[i] + message)
}

