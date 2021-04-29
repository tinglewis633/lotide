const eqObjects = function (obj1, obj2) {
  let sentence = [];
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  for (let i = 0; i < key1.length; i++) {
    if (obj1[key1[i]] === obj2[key1[i]]) {
      sentence.push("true");
    } else {
      sentence.push("false");
    }
  }
  for (let k = 0; k < key2.length; k++) {
    if (obj1[key2[k]] === obj2[key2[k]]) {
      sentence.push("true");
    } else {
      sentence.push("false");
    }
  }
  if (sentence.includes("false") === true) {
    return false;
  } else {
    return true;
  }
};

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected) === true) {
    return `✅✅✅ Assertion Passed: [${JSON.stringify(
      actual
    )}] === [${JSON.stringify(expected)}]`;
  } else if (eqObjects(actual, expected) === false) {
    return `🛑🛑🛑 Assertion Failed: [${JSON.stringify(
      actual
    )}] !== [${JSON.stringify(expected)}]`;
  }
};

const ba = { b: "2", a: "1" };
const ab = { a: "1", b: "2", c: "3" };

console.log(assertObjectsEqual(ab, ba));
