const fs = require('fs');
const data = fs
  .readFileSync('input1.txt', 'utf-8');
const ranges = data
  .split("\n\n")[0]
  .split("\n")
  .map(range => range.split("-").map(string => parseInt(string)));

const availibleIds = data
  .split("\n\n")[1]
  .split("\n")
  .map(id => parseInt(id));

function part1() {
  result = 0;
  availibleIds.map(id => {
    ranges.some(range => {
      if (id >= range[0] && id <= range[1]) {
        result++;
        return true;
      }
    });
  })

  return result;
}

function part2() {
  result = 0;
  ranges.sort((a, b) => a[0] - b[0]); 

  let toRemove = []; 
  let removeAgain = true;

  while(removeAgain) {
    removeAgain = false;
    for (i = ranges.length - 1; i > 0; i--) {
      if (ranges[i][1] <= ranges[i-1][1]) {
        toRemove.push(i);
        removeAgain = true;
      }
    }
    toRemove.map(index => {
      ranges.splice(index, 1);
    })
    toRemove = [];
  }

  for (i = 1; i < ranges.length; i++) {
    if(ranges[i][0] <= ranges[i-1][1]) {
      ranges[i][0] = ranges[i-1][1] + 1;
    }
  }

  ranges.map(range => {
    result += range[1] - range[0] + 1;
  })
  
  return result;
}

console.log(`There are ${part1()} fresh ingredients`);
console.log(`There are ${part2()} fresh ingredients at all`);