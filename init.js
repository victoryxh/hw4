'use strict'

const randomNumber = (upperBound) => {
  return Math.floor(Math.random() * upperBound) + 1;
};

// create an array storing first five numbers
let lottery = [randomNumber(48), randomNumber(48), randomNumber(48), randomNumber(48), randomNumber(48)];

// get the Lucky Ball number
let lucky = randomNumber(18);
document.write('Initial: <br>');

// display the number array
for (let number of lottery) {
  document.write(`${number} `);
}

document.write(lucky);
document.write('<br><br>');

// sort the number array
lottery.sort((a, b) => a - b);

// display the sorted number array
document.write('Sorted: <br>')
for (let number of lottery) {
  document.write(`${number} `);
}

document.write(lucky);
document.write('<br>');
