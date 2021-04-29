const countLetters = function (str) {
  let obj = {};
  for (const element of str) {
    if (obj[element] === undefined && element !== " ") {
      obj[element] = 1;
    } else if (typeof obj[element] === "number")
      obj[element] = obj[element] + 1;

    console.log(obj);
  }
};
