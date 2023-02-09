//MAP and SET in javascript

//Map
//key are unique in maps, if we will duplcate then it overrides
let m = new Map();
m.set(1, "Ashutosh");
m.set(2, "Soemthing");
m.set(3, "Nothings");
m.set("name", "Raj");

console.log(m);
m.has("name");
//get the value with key as 3 in the map m
console.log(m.get(3));

//get all keys in the map
console.log(m.keys());

//SET
//set is a data structure that holds unique keys,
//it doesnot hold values , it store only keys,

let s = new Set();
s.add(1);
s.add(2);
s.add("3");
s.add(2);

console.log(s);

// check if it contains any key;
console.log(s.has(2));
console.log(s.has(5));
