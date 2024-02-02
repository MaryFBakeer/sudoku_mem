const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

// функция read
function read() {
  const row = fs
    .readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split(/[\r\n]/gi)
    .filter((el) => el !== '');
  return row;
}
function makeTable() {
  const length = 9;
  const pattern = new RegExp('.{1,' + length + '}', 'ig');
  const arr = read();
  const i = getRandomArbitrary()
  let table = arr[i].match(pattern).map((el) => el.replaceAll(/-/gi, '0'));
  let row = table.map((el) => el.split(''));
  return row;
}
  function getRandomArbitrary() {
    return Math.floor(Math.random() * (5 - 0));
  }
  // конец функции read


function solve() {

  
  
  }












function isSolved() {
   


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
