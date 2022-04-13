function addCounter() {
    let counter = 1;
    return function() {
        counter++;
        return counter;
    }
}


function answerAnalysis(answer) {
    answer = answer.replace(/^\s+|\s+$/g, '')

    if (!answer) {
        rl.question(`\nВведено пустое поле, попытка не засчитана.\nПопробуйте еще разок: `, (answer) => {
            answerAnalysis(answer)
        });
    }

    else if (!isNaN(answer)) {

        if (hiddenNumber > answer) {
            count = counter();
            rl.question(`\nПопытка №${count}\nМое число БОЛЬШЕ!\nПопробуйте еще разок: `, (answer) => {
                answerAnalysis(answer)
            });
        }
        else if (hiddenNumber < answer) {
            count = counter();
            rl.question(`\nПопытка №${count}\nМое число МЕНЬШЕ!\nПопробуйте еще разок: `, (answer) => {
                answerAnalysis(answer)
            });
        }
        else {
            rl.question(`\nПоздравляю, вы угадали!\nПотрачено попыток: ${count}\nСыграем еще (да/нет)? `, (answer) => {
                isTheEnd(answer)
            });
        }

    }

    else {
        count = counter();
        rl.question(`\nПопытка №${count}\nВведено не число!\nПопробуйте еще разок: `, (answer) => {
            answerAnalysis(answer)
        });
    }
}


function isTheEnd(answer) {
    let yes = ['yes', 'y', 'да', 'д'];
    let no = ['no', 'n', 'нет', 'н'];

    if (yes.includes(answer.toLowerCase())) {
        body()
    }
    else if (no.includes(answer.toLowerCase())) {
        console.log('\nОтлично поиграли, до встречи!');
        rl.close();
    }
    else {
        console.log('\nОтвета не понял ¯\\_(ツ)_/¯, до встречи!');
        rl.close();
    }
}


function body() {
    hiddenNumber = Math.floor(Math.random() * 101);
    console.log(hiddenNumber);
    rl.question('\nЯ загадал число от 0 до 100.\nУгадай, какое число я загадал (Попытка №1): ', (answer) => {
        counter = addCounter();
        count = 1;
        answerAnalysis(answer)
    });
}


const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

var hiddenNumber = NaN;
var counter = NaN;
var count = NaN;

body()