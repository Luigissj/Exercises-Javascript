const readline = require('readline');
const user = readline.createInterface({input: process.stdin, output: process.stdout});

const poem = ['Blowing up on EartH', 'Endless trees whisper to its echO.', 'A creature with a scaR', 'Shrouded in shadows, walking through nightS', 'Threatening our existencE'];

let isInside = false;
(async () => {
    while (!isInside){
        let answer = '';
        let userOption = '';
        let userAnswer = '';
        console.log("Decides where you'll enter?");
        userOption = await questionUser('1) FRONTDOOR 2) BACKDOOR\n ☞ ');
        if (userOption == 1 || userOption == 2)
        console.log(`\nThe guard at the front door quotes the following poem:\n
${talkPoem(poem)}`);
    
        if (userOption == 1){
            for (let phrase of poem){
                answer += frontDoorCode(phrase);
            }
            answer = frontDoorWord(answer);
        } else if (userOption == 2){
            for (let phrase of poem){
                answer += backDoorCode(phrase);
            }
            answer = backDoorWord(answer);
        } else {
            console.error('Inexistent option\n');
            continue;
        }
        userAnswer = await questionUser('So, what is the password?\n ☞ ');
        if (userAnswer == answer){
            console.log('Password is correct! Please, come in');
            isInside = true;
        } else {
            process.stdout.write('Wrong answer... ');
            switch (true){
                case (typeof userAnswer == 'number' || typeof userAnswer == 'bigint'):
                    console.log('This is a number, not a password, understood? bye\n');
                    break;
                case (adjustWord(userAnswer) === answer):
                    console.log(`the password is right, but forgot that:\n  • The first letter need to be in "UPPERCASE";\n  • Do not have spaces;\nunderstood? bye\n`);
                    break;
                case (userOption == 2 && !(userAnswer.endsWith(', please'))):
                    console.log('In the BACKDOOR, we finish the password with ", please", understood? bye\n');
                    break;
                case (userOption == 1 && userAnswer.toLowerCase().endsWith('please')):
                    console.log(`This isn't the BACKDOOR, don't confuse the places, understood? bye\n`);
                    break;
                default:
                    console.log('Try again later\n');
            }
        }
    }
    user.close();
})();

// ----------------------------------------------- Functions -----------------------------------------------

function questionUser(text){
    return new Promise((resolve) => {
        user.question(text, (answer) => {
            resolve(answer);
        })
    })
}

function talkPoem(poem){
    let fullPoem = '';
    for (let phrases of poem){
        if (phrases.length <= 25)
            fullPoem += '      ';
        fullPoem += `       \x1b[3m${phrases}\x1b[0m\n`
    }
    return fullPoem;
}

function adjustWord(line = ''){
    const adjustedWord = (line.trim().slice(0, 1).toUpperCase() + line.trim().slice(1, line.length).toLowerCase());
    let password = '';
    for (let letter of adjustedWord){
        if (letter != ' ' )
            if (adjustedWord.indexOf(letter) === 0)
                password += letter.toUpperCase();
            else 
                password += letter.toLowerCase();
    }
    return password;
}

function frontDoorCode(line = ''){
    const firstWord = line.trim().slice(0, 1);
    return firstWord;
}

function frontDoorWord(line = ''){
    return adjustWord(line);
}

function backDoorCode(line = '') {
    const letter = adjustWord(line);
    const lastLetter = letter.slice(letter.length - 1, letter.length);
    return lastLetter;
}

function backDoorWord(word) {
    let politeWord = adjustWord(word) + ', please';
    return politeWord;
}
