"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d == 0) {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  // Проверка
  if (isNaN(percent)) {
    return `Параметр percent содержит неправильное значение ${percent}`;
  }
  if (isNaN(contribution)) {
      return `Параметр contribution содержит неправильное значение ${contribution}`;
  }
  if (isNaN(amount)) {
      return `Параметр amount содержит неправильное значение ${amount}`;
  }
  if (isNaN(countMonths)) {
      return `Параметр CountMonths содержит неправильное значение ${countMonths}`;
  }

  // Вычисления
  const refundAmount = amount - contribution; // тело кредита
  let P = (percent / 100) / 12; // Новый формат процентов
  const conditions = refundAmount * (P + (P / (((1 + P)**countMonths) - 1))); // Плата
  let totalAmount = conditions * countMonths; // Финальная сумма
  return parseFloat(totalAmount.toFixed(2)); // Парсим число с "плавающей" запятой
  }