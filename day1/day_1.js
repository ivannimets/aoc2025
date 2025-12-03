const fs = require('fs');
const data = fs
  .readFileSync('input1.txt', 'utf-8')
  .split('\n')
  .map(line => line.trim());

function part1() {
	let zeros = 0;
	let current = 50;

	data.map(rotation => {
		const dir = rotation[0];
		const count = Number(rotation.slice(1));

		current = (dir === "L") ? current - count : current + count;
		while(current < 0) {
			current += 100;
		};
		while(current > 99) {
			current -= 100
		};
		if (!current) {
			zeros++;
		}
	});

	return zeros;
}

function part2() {
	let zeros = 0;
	let current = 50;

	data.map(rotation => {
		const dir = rotation[0] === "L" ? -1 : 1;
		const count = Number(rotation.slice(1));
		for (i = 0; i < count; i++) {
			current += dir;
			if (current < 0) {
				current += 100;
			}
			if (current > 99) {
				current -= 100;
			}
			if (!current) {
				zeros++;
			}
		}
	});

	return zeros;
}
console.log(`You had 0 at the end of the rotation for ${part1()} times`);
console.log(`You went througt zero for ${part2()} times`);