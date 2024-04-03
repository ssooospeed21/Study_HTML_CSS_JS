"use strict"
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

json = JSON.parse(json);
json.push({
    "name": "user4",
    "age": 30,
    "salary": 6000
});
json = JSON.stringify(json);
console.log(json);