//Declarative Approach:
function applyFunctionDeclarative(arr, fn) {
  return arr.map(fn);
}

const numbers = [1, 2, 3, 4, 5];
const double = (num) => num * 2;

const resultDeclarative = applyFunctionDeclarative(numbers, double);
console.log(resultDeclarative);

//Imperative Approach:
function applyFunctionImperative(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

const resultImperative = applyFunctionImperative(numbers, double);
console.log(resultImperative);
