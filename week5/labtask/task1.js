

 

function reverseArray(arr) {
    let reversedArray = [];
    while (arr.length > 0) {
        reversedArray.push(arr.pop());
    }
    return reversedArray;
}

const originalArray = [1, 2, 3];
const reversed = reverseArray(originalArray);
console.log(reversed);