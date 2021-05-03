const eqArrays = require("./eqArrays");

const assertEqual = require("./assertEqual");

const assertArraysEqual = function (actual, expected) {
  return assertEqual(eqArrays(actual, expected), true);
};

module.exports = assertArraysEqual;
