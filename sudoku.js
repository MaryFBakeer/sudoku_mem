const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

// функция read
function read() {
  const row = fs
    .readFileSync('./puzzles.txt', 'utf-8');
    .trim();
    .split(/[\r\n]/gi);
    .filter((el) => el !== '');
  return row;
};
function getRandomArbitrary() {
  return Math.floor(Math.random() * (9 - 1 ) + 1);
};

function makeTable() {
  const length = 9;
  const pattern = new RegExp('.{1,' + length + '}', 'ig');
  const arr = read();
  const i = getRandomArbitrary();
  let table = arr[i].match(pattern).map((el) => el.replaceAll(/-/gi, '0'));
  let row = table.map((el) => el.split(''));
  return row;
}
  // конец функции read

function solve() {
  const table = makeTable();
  for (let i = 0; i < 9; i += 1) {
    let sum = 0;
    for (let j = 0; j < 9; j += 1) {
      if(Number(table[i][j]) === 0) {
        table[i][j] = getRandomArbitrary();
      };
    };
  };
  return table;
}
console.table(isSolved());

function isSolved() {
  const table = solve();
  for (let i = 0; i < 9; i += 1) {
    let sum = 0;
    for (let j = 0; j < 9; j += 1) {
      sum += Number(table[i][j]);
      if(sum !== 45) {
        return false;
      };
    };
  };
  return true;
}






  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */


function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
