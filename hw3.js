function addCounter() {
    let counter = 1;
    return function() {
        counter++;
        return counter;
    }
}


const rl = require('readline');
const { promisify } = require('util');
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Prepare readline.question for promisification
readline.question[promisify.custom] = (question) => {
    return new Promise((resolve) => {
        readline.question(question, resolve);
    });
};


async function answerAnalysis(answer) {
    answer = answer.replace(/^\s+|\s+$/g, '')

    if (!answer) {
        let answer = await promisify(readline.question)(`\nВведено пустое поле, попытка не засчитана.\nПопробуйте еще разок: `);
        await answerAnalysis(answer)
    }

    else if (!isNaN(answer)) {

        if (hiddenNumber > answer) {
            count = counter();
            let answer = await promisify(readline.question)(`\nПопытка №${count}\nМое число БОЛЬШЕ!\nПопробуйте еще разок: `);
            await answerAnalysis(answer)
        }
        else if (hiddenNumber < answer) {
            count = counter();
            let answer = await promisify(readline.question)(`\nПопытка №${count}\nМое число МЕНЬШЕ!\nПопробуйте еще разок: `);
            await answerAnalysis(answer)
        }
        else {
            let answer = await promisify(readline.question)(`\nПоздравляю, вы угадали!\nПотрачено попыток: ${count}\nСыграем еще (да/нет)? `);
            await isTheEnd(answer)
        }

    }

  else {
      count = counter();
      let answer = await promisify(readline.question)(`\nПопытка №${count}\nВведено не число!\nПопробуйте еще разок: `);
      await answerAnalysis(answer)
  }
}


async function isTheEnd(answer) {
    let yes = ['yes', 'y', 'да', 'д'];
    let no = ['no', 'n', 'нет', 'н'];

    if (yes.includes(answer.toLowerCase())) {
        await startGame()
    }
    else if (no.includes(answer.toLowerCase())) {
        console.log('\nОтлично поиграли, до встречи!');
        readline.close();
    }
    else {
        console.log('\nОтвета не понял ¯\\_(ツ)_/¯, до встречи!');
        readline.close();
    }
}


// Usage example:
async function startGame() {

    hiddenNumber = Math.floor(Math.random() * 101);
    // console.log(hiddenNumber);
    counter = addCounter();
    count = 1;
    let answer = await promisify(readline.question)('\nЯ загадал число от 0 до 100.\nУгадай, какое число я загадал (Попытка №1): ');
    await answerAnalysis(answer);

};


var hiddenNumber;
var counter;
var count;
startGame();