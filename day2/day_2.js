const fs = require('fs');
const data = fs
  .readFileSync('input1.txt', 'utf-8')
  .split(',')
  .map(range => {
    const numbers = range.split('-').map(num => Number(num));
    return numbers;
  });

DIVIDERS_DICT = {
  1 : [1],
  2 : [1],
  3 : [1],
  4 : [1, 2],
  5 : [1],
  6 : [1, 2, 3],
  7 : [1],
  8 : [1, 2, 4],
  9 : [1, 3],
  10 : [1, 2, 5],
  11 : [1],
  12 : [1, 2, 3, 4, 6],
  13 : [1]
}

function part1() {
  let result = 0;

  data.map(range => {  
    for (i = range[0]; i <= range[1]; i++) {
      const strNum = i.toString();
      const strNumLength = strNum.length;
      if (strNumLength % 2 != 0) {
        continue;
      }
      const parts = splitStringToEqualLength(strNum, strNumLength / 2);
      if (parts[0] === parts[1]) {
        result += i;
      }
    }
  });
  
  return result;
}

function part2() {
  let invalid = 0;
  let result = 0;

  data.map(range => {   
    let invalidInRange = 0;
    let resultInRange = 0;
    for (i = range[0]; i <= range[1]; i++) {
      const strNum = i.toString();
      const strNumLength = strNum.length;
      let isInvalid = false;
      if (strNumLength < 2) {
        continue;
      }
      DIVIDERS_DICT[strNumLength].map(spliter => {
        const parts = splitStringToEqualLength(strNum, spliter);
        if (parts.every(part => part === parts[0])) {
          isInvalid = true;
        }
      });
      if (isInvalid) {
        invalid++;
        invalidInRange++;
        result += i;
        resultInRange += i;
      }
    }
  });
  
  return result;
}

function splitStringToEqualLength(str, length) {
  if (length <= 0) {
    throw new Error("Length must be a positive number.");
  }
  return str.match(new RegExp(`.{1,${length}}`, 'g'));
}

console.log(`${part1()} is the sum of unique IDs in these ranges where a patern is repeted twice`);
console.log(`${part2()} is the sum of unique IDs in these ranges where a patern is repeted for several times`);