const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

function read() {
  const row = fs
    .readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split(/[\r\n]/gi)
    .filter((el) => el !== '');
  return row;
}

function solve() {
  const length = 9;
  const pattern = new RegExp('.{1,' + length + '}', 'ig');
  const arr = read();
  let table = arr[0].match(pattern).map((el) => el.replaceAll(/-/gi, '0'));
  let row = table.map((el) => el.split(''));
  return row;

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}
console.table(solve());

function isSolved() {
   qwedw


  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
