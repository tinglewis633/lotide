const flatten = function (arr) {
  let i;
  let k;

  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      const index = arr.indexOf(arr[i]);

      let innerArr = arr[i];
      arr.splice(index, 1);
      for (k = innerArr.length - 1; k >= 0; k--) {
        arr.splice(index, 0, innerArr[k]);
      }
    }
  }
  return arr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
