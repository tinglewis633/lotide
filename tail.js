const tail = function (arr) {
  let i;
  for (i = arr.length - 1; i < arr.length; i++) {
    let result = arr[i].toString();
    return result;
  }
};
module.exports = tail;
