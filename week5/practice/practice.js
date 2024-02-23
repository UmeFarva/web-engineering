
var colors = ["red", "green", "blue"];
console.log(colors);
colors.push("white");
console.log(colors);
colors.pop("red");
console.log(colors);
colors.shift();
colors.push("white");
console.log(colors);
colors.unshift("brown");
console.log(colors);

var colors1 = ["orange", "violet"];
var colors2=colors.concat(colors1);

console.log(colors2);
var number = colors2.lastIndexOf("violet");
console.log(number);
var boolean = colors2.includes("violet");
console.log(boolean);


var person = {
    name: "John", age: 30, city: "New York" };
    var keys= Object.keys(person)
    console.log(keys);
    var value =Object.values(person)
    console.log(value);
    var key1  = Object.entries(person)
    console.log(key1);


    var object1={


        
    }
    
    object1['1']=1;
    object1['100']=1;
    
    object1['1']++;
    console.log(object1)
      if (object1["1"]){

        console.log("key found")


      }
      elseif( object1["0"]) {

        console.log("not found")
      }




