function getReadline() {
    return require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

async function getAnswer(question) {

    const readline = getReadline();
    readline.question(question, answer => {
        let msg = answer;
        readline.close()
        return msg;
    });

}


async function startGame() {
    
    let question = 'Как тебя зовут? '
    let answer = await getAnswer(question);
    console.log(`Привет, ${answer}`)

}

startGame();



//////////////////////////////////////////////////////
//  этот код работает корректно, но не получается
//  вывести в переменную результат пользовательского ввода

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Как тебя зовут? ', answer => {
//     console.log(`Привет, ${answer}!`);
//     readline.close();
// });
//////////////////////////////////////////////////////