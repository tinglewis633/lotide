// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1f621);
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: [${actual}] === [${expected}]`;
  } else if (actual !== expected) {
    return `${mad}Assertion failed: [${actual}] !== [${expected}]`;
  }
};
const findKey = function (obj, callback) {
  const keys = Object.keys(obj);
  // let arr1 = [];
  //let arr2 = [];

  for (let key of keys) {
    //   arr1.push(obj[key]); //  (x) => x.stars === 2
    //   arr2.push(key);
    let isFound = callback(obj[key]);
    if (isFound === true) {
      return key;
    }
  }
  // console.log(arr1);
  //  let arr3 = arr1.map(callback); //????
  // console.log(arr3)
  //  let index = arr3.indexOf(true);
  // console.log(arr2);
  // console.log(index);
  // console.log(arr2[index]);
};
findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
