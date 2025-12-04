const fs = require('fs');
const data = fs
  .readFileSync('input1.txt', 'utf-8')
  .split('\n').map(row => row.split(''));

function part1() {
  let result = 0;
  for (y = 0; y < data.length; y++) {
    for (x = 0; x < data[y].length; x++) {
      if (data[y][x] === "@") {
        let count = 0;
        for (dx = -1; dx <= 1; dx++) {
          for (dy = -1; dy <= 1; dy++) {
            if (dx === dy && dx === 0) {
              continue
            }

            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < data[y].length && ny < data.length) {
              if (data[ny][nx] === "@") count++;
            }
          }
        }
        if (count < 4) result++;
      }
    }
  }

  return(result);
}

function part2() {
  let result = 0;
  let removedOnCurrent = -1;
  while(removedOnCurrent != 0) {
    removedOnCurrent = 0;
    for (y = 0; y < data.length; y++) {
      for (x = 0; x < data[y].length; x++) {
        if (data[y][x] === "@") {
          let count = 0;
          for (dx = -1; dx <= 1; dx++) {
            for (dy = -1; dy <= 1; dy++) {
              if (dx === dy && dx === 0) {
                continue
              }

              const nx = x + dx;
              const ny = y + dy;

              if (nx >= 0 && ny >= 0 && nx < data[y].length && ny < data.length) {
                if (data[ny][nx] === "@") count++;
              }
            }
          }
          if (count < 4) {
            result++;
            removedOnCurrent++;
            data[y][x] = "."
          }
        }
      }
    }
  }

  return(result);
}

console.log(`There are ${part1()} accessible paper rolls.`);
console.log(`There are ${part2()} paper rolls that can be removed.`);