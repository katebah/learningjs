// objects
var object=  {
	"car":{
		"make": " toyota"
	,	"model": "rav 4"
	,	"color": "yellow"
	},
	"person":[{
		"name": "gerardo"
		,"ethnicity": "yemeni"
		,"eyecolor": "brown"
		, "height": "average"
		, "codinglevel": "basic"
		,"friends": ['nik', 'mike', 'ali', 'sam']
		,"fave_movies": ['harry potter', 'SALT', 'Dr Strange']
		,"hobbies": ['swimming', 'bowling', 'singing']		
			},{
		"name": "moe"
		,"ethnicity": "yemeni"
		,"eyecolor": "brown"
		, "height": "average"
		, "codinglevel": "basic"
		,"friends": ['nik', 'mike', 'ali', 'sam']
		,"fave_movies": ['harry potter', 'SALT', 'Dr Strange']
		,"hobbies": ['swimming', 'bowling', 'singing']		
			},
			{
		"name": "chris"
		,"ethnicity": "yemeni"
		,"eyecolor": "brown"
		, "height": "average"
		, "codinglevel": "basic"
		,"friends": ['nik', 'mike', 'ali', 'sam']
		,"fave_movies": ['harry potter', 'SALT', 'Dr Strange']
		,"hobbies": ['swimming', 'bowling', 'singing']		
			}
			]
}
function friends (object) {

console.log (object.person.eyecolor)
console.log (object.person.codinglevel)
console.log (object)
var message =""
for (var i in object.person) {
console.log(i)
message+= " my friend name is " + object.person[i].name
message+= " his eye color is " + object.person[i].eyecolor
message+= " his coding level is very  " + object.person[i].codinglevel
message+= " his favorite movies are " + object.person[i].fave_movies
message+= " his hobbies are " + object.person[i].hobbies
message+= "\n\n"

console.log (message)
message = ""


}
}
friends (object)

console.log (object.person.length)
