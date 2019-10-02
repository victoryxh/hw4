'use strict'

const calc = () => {
    let userLottery = document.getElementById('lottery').value.split(' ');

    for (let elem of userLottery) {
        elem = Number(elem);
    }

    let userLucky = Number(document.getElementById('lucky').value);
    userLottery.sort((a, b) => a - b);
    let isLucky = false;

    if (userLucky == lucky) {
        isLucky = true;
    }

    let counter = 0;
    for (let number of lottery) {
        for (let userNumber of userLottery) {
            if (number == userNumber) {
                counter++;
                for (let i = 0; i < userLottery.length; i++) {
                    if (userLottery[i] == userNumber) {
                        userLottery.splice(i, 1);
                        break;
                    }
                }
                break;
            }
        }
    }

    if (counter == 0 && isLucky) {
        alert('You win $4!');
    } else if (counter == 1 && isLucky) {
        alert('You win $6!');
    } else if (counter == 2 && !isLucky) {
        alert('You win $3!');
    } else if (counter == 2 && isLucky) {
        alert('You win $25!');
    } else if (counter == 3 && !isLucky) {
        alert('You win $20!');
    } else if (counter == 3 && isLucky) {
        alert('You win $150!');
    } else if (counter == 4 && !isLucky) {
        alert('You win $200!');
    } else if (counter == 4 && isLucky) {
        alert('You win $5,000!');
    } else if (counter == 5 && !isLucky) {
        alert('You win $25,000 a YEAR for LIFE!');
    } else if (counter == 5 && isLucky) {
        alert('You win $7,000 a WEEK for LIFE!');
    }
};

document.getElementById('btn').addEventListener('click', calc);