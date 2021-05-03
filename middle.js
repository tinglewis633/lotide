const middle = function (arr) {
  if (arr.length % 2 === 0) {
    let index = arr.length / 2 - 1;
    return [arr[index], arr[index + 1]];
  }
  if (arr.length % 2 === 1) {
    let index2 = (arr.length + 1) / 2 - 1;
    return arr[index2];
  }
};

module.exports = middle;
