'use strict'

const randomNumber = (upperBound) => {
    return Math.floor(Math.random() * upperBound) + 1;
};

let lottery = [randomNumber(48), randomNumber(48), randomNumber(48), randomNumber(48), randomNumber(48)];
let lucky = randomNumber(18);
document.write('Initial: <br>');

for (let number of lottery) {
    document.write(`${number} `);
}

document.write(lucky);
document.write('<br><br>');

lottery.sort((a, b) => a - b);

document.write('Sorted: <br>')
for (let number of lottery) {
    document.write(`${number} `);
}

document.write(lucky);
document.write('<br>');