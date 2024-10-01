import line from 'readline';

const user = line.createInterface({input: process.stdin, output: process.stdout});

let fastAttackIsSucess = false, spyisSucess = false, signalPrisonerIsSucess = false, freePrisonerIsSucess = false, 
knightIsAwake = changeCharacterPresence(), archerIsAwake = changeCharacterPresence(), 
dogIsHere = changeCharacterPresence(), prisonerIsAwake = changeCharacterPresence(), prisonerIsFree = false, 
allowChangePresence = true;

let knightKnockedTurns = 0;
let prisonerAwakedTurns = 0;

while (!prisonerIsFree){
    let action = 0;
    recalculateActions();
    console.log(`\nInformations: \x1b[32mArcher is Awake:\x1b[0m \x1b[1m${archerIsAwake ? 'YES' : 'NO'}\x1b[0m; \x1b[34m Knight is Awake:\x1b[0m \x1b[1m${knightIsAwake ? 'YES' : 'NO'}\x1b[0m; \x1b[33m Dog is With You:\x1b[0m; \x1b[1m${dogIsHere ? 'YES' : 'NO'}\x1b[0m; \x1b[31m Prisoner is Awake:\x1b[0m \x1b[1m${prisonerIsAwake ? 'YES' : 'NO'}\x1b[0m`);
    while(action < 1 || action > 5){
        action = await question(`\n                             What do you will do? 
    1)${fastAttackIsSucess ? '\x1b[34m' : '\x1b[31m'} Fast Attack\x1b[0m 2)${spyisSucess ? '\x1b[34m' : '\x1b[31m'} Spy\x1b[0m 3)${signalPrisonerIsSucess ? '\x1b[34m' : '\x1b[31m'} Signal Prisoner\x1b[0m 4)${freePrisonerIsSucess ? '\x1b[34m' : '\x1b[31m'} Free Prisoner\x1b[0m 5) Skip Turn\n☞ `);
        if (allowChangePresence){
        if (!knightKnockedTurns)
            knightIsAwake = changeCharacterPresence();
        archerIsAwake = changeCharacterPresence();
        dogIsHere = changeCharacterPresence();
        if (!prisonerAwakedTurns)
        prisonerIsAwake = changeCharacterPresence();
        }
        if (knightKnockedTurns)
            knightKnockedTurns--
        if (prisonerAwakedTurns)
            prisonerAwakedTurns--
        switch (true){
            case (action == 1 && fastAttackIsSucess):
                knightKnockedTurns = fastAttack();
                break;
            case (action == 2 && spyisSucess):
                await spy();
                break;
            case (action == 3 && signalPrisonerIsSucess):
                prisonerAwakedTurns = signalPrisoner();
                break;
            case (action == 4 && freePrisonerIsSucess):
                freePrisoner();
                break;
            case (action == 5):
                console.log('');
                break;
            default:
                console.log("This option cannot be done, try again\n");
        }
    }
};
user.close();

async function question(text){
    return new Promise((resolve) => {
        user.question(text, (answer) => {
            resolve(answer);
        })
    })
}

function changeCharacterPresence(){
    const random = Math.floor(Math.random() * 2);
    if (random === 0){
        return false;
    } else {
        return true;
    }
}

function recalculateActions(){
    if (!knightIsAwake)
        fastAttackIsSucess = true;
    else 
        fastAttackIsSucess = false;

    if (knightIsAwake || archerIsAwake)
        spyisSucess = true;
    else 
        spyisSucess = false;
    
    if (prisonerIsAwake && !archerIsAwake)
        signalPrisonerIsSucess = true;
    else
        signalPrisonerIsSucess = false;
    
    if (dogIsHere){
        if (!archerIsAwake && prisonerIsAwake)
            freePrisonerIsSucess = true;
        else 
            freePrisonerIsSucess = false;
    } else {
        if (!archerIsAwake && !knightIsAwake && prisonerIsAwake)
            freePrisonerIsSucess = true;
        else 
            freePrisonerIsSucess = false;
    }
}

function fastAttack(){
    console.log("\n         Knight is knocked down! he'll sleep for three turns\n");
    knightIsAwake = false;
    return 3;
}

async function spy(){
    let whileAnswer
    if (changeCharacterPresence()){
        console.log(`\nKNIGHT ${knightIsAwake ? 'will sleep' : 'keep sleeping'} next turn, you wanna leave or interrupt?`);
        while (whileAnswer != 1 && whileAnswer != 2){
            whileAnswer = await question('1) Leave 2) Interrupt ☞ ');
                if (whileAnswer == 1){
                    console.log('You leave and the knight is sleeping\n');
                    knightIsAwake = false;
                } else if (whileAnswer == 2){
                    console.log("You interrupt the knight's sleep, he'll be awake this round\n");
                    knightIsAwake = true;
                } else 
                    console.log("This option doesn't exist, try again\n");
        }
    } else {
        console.log(`\nARCHER ${archerIsAwake ? 'will sleep' : 'keep sleeping'} next turn, you wanna leave or interrupt?`);
        while (whileAnswer != 1 && whileAnswer != 2){
            whileAnswer = await question('1) Leave 2) Interrupt ☞ ');
                if (whileAnswer == 1){
                    console.log('You leave and the archer is sleeping\n')
                    archerIsAwake = false;
                } else if (whileAnswer == 2){
                    console.log("You interrupt the archer sleep, he'll be awake this round\n")
                    archerIsAwake = true;
                } else 
                    console.log("This option doesn't exist, try again\n");
        }
    }
}

function signalPrisoner(){
    console.log("Prisoner is adviced, he'll be awake for three rounds\n")
    prisonerIsAwake = true;
    prisonerAwakedTurns = 3;
}

function freePrisoner(){
    console.log("\nPrisoner was Free, YOU WIN!\n");
    prisonerIsFree = true;
    user.close();
}