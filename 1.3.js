const nestedArrayString = "[4,[[5],[6,[7],8],9,10]]";

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const nestedArray = JSON.parse(nestedArrayString);
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray);

//log: [4, 5, 6, 7, 8, 9, 10]
