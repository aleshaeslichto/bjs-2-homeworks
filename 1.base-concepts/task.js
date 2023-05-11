"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return "D = 0 => Корней нет.";
  }
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {}
