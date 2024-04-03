"use strict"
let json = '["user1","user2","user3","user4","user5"]';
json = JSON.parse(json);
json.push('user6');
json = JSON.stringify(json);
console.log(json);