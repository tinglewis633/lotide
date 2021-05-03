const takeUntil = function (array, callback) {
  const arr2 = array.map(callback);
  return array.slice(0, arr2.indexOf(true));
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, (x) => x < 0));

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
