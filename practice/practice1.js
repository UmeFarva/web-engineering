var arr1= [1,2,4,5,4,1,4,2]
var arr= ["apple","apple","mango","mango"]
var object1={
}
for (let i=0; i<arr.length; i++) {
    const element= arr[i]
    if  (object1[element]){

        object1[element]++


      }
      else {

       object1[element]=1
      }
    }
    console.log(object1)

    var arr2=[
        {id:1 ,name:"farva"} , {id:2 ,name:"saba"} , {id:1 ,name:"farva"} , {id:3 ,name:"farva"} 
    ]
    var object1={
    }
    for (let i=0; i<arr.length; i++) {
        const element= arr2[i].id
        if  (object1[element]){
    
            object1[element]++
    
    
          }
          else {
    
           object1[element]=1
          }
        }
        console.log(object1)

function greet(name) {
return 'Hello, ' + name + '!';
}
console.log(greet("farva"))

