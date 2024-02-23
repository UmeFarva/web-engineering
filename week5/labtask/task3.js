
 function applyFunction(array) {
    const result = array.map(function(item) {
        return item * 2;
    });
    return result; // Return the result of map operation
}

const numbers = [1, 2, 3];
const result1 = applyFunction(numbers);
console.log(result1);