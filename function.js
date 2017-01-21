/*
//////////////////////////////////
Name: function
Author: katebah
Date: 1/6/17
//////////////////////////////////
*/

// set array 
//var pals = GetMeFriends(['sam','ali','nik'])
//var pals2 = GetMeFriends ( [ 'ahmed', 'hamza', 'mohammed'])
console.log (AddLastName(['khawla']))
console.log (AddLastName(['marwat']))
console.log (AddLastName(['mohammed']))
console.log (GetMeTheDate())
//Return string of fruits
function AddLastName(more_pals) {
	return more_pals.concat(['alolefi']).join (' ') // concat both arrays
	//message = results.join(' ') // turn array into string
	//return results // return string
}
function GetMeTheDate ()
{ return new Date()}

