// function calculate(a, b, callback) {
//     callback(a + b);
// }

// function displayResult(result) {
//     console.log('The result is: ' + result);
// }

// calculate(2,3,displayResult);

const nums = [1,20,10,22,30,44,100,11];
console.log(nums.sort((a,b) => a - b)); // [1, 10, 11, 20, 22, 30, 44, 100]