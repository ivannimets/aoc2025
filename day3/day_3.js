const fs = require('fs');
const data = fs
  .readFileSync('input1.txt', 'utf-8')
  .split('\n');

function part1() {
  let result = 0;
  data.forEach(bank => {
    let first = "0";
    let second = "0";
    let firstIndex = 0;

    for (i = 0; i < bank.length - 1; i++) {
      if (first < bank[i]) {
        first = bank[i];
        firstIndex = i;
      }
    }

    for (i = firstIndex + 1; i < bank.length; i++) {
      if (second < bank[i]) {
        second = bank[i];
      }
    }

    const bankRes = Number(first.concat(second));
    console.log(bankRes);

    result += bankRes;
  })
  return result;
}

function part2() {
  let result = 0;
  data.forEach(bank => {
    let remain = 11;
    let bankResStr = "";
    let lastIndex = -1;
    let nextAdd = "";

    for (i = remain; i >= 0; i--) {
      nextAdd = "0";
      for (j = lastIndex + 1; j < bank.length - i; j++) {
        if (nextAdd < bank[j]) {
          nextAdd = bank[j];
          lastIndex = j;
        }
      }
      bankResStr = bankResStr.concat(nextAdd);
    }
    console.log(bankResStr);

    const bankRes = Number(bankResStr);
    result += bankRes;
  })
  return result;
}

console.log(part2());