import line from 'readline';

const user = line.createInterface({input: process.stdin, output: process.stdout});

let fastAttackIsSucess = false, spyisSucess = false, signalPrisoner = false, freePrisoner = false, 
knightIsAwake = false, archerIsAwake = false, dogIsHere = false, prisonerIsAwake = false, 
dogIsFree = false, prisonerIsFree = false;

while (!dogIsFree){
    console.log(`Informations: 
\x1b[32mArcher is Awake:\x1b[0m \x1b[1m${archerIsAwake ? 'YES' : 'NO'}\x1b[0m
\x1b[36mKnight is Awake:\x1b[0m \x1b[1m${knightIsAwake ? 'YES' : 'NO'}\x1b[0m
\x1b[33mDog is With You:\x1b[0m \x1b[1m${dogIsHere ? 'YES' : 'NO'}\x1b[0m
\x1b[31mPrisoner is Awake:\x1b[0m \x1b[1m${prisonerIsAwake ? 'YES' : 'NO'}\x1b[0m`);

user.question(`What do you will do? 
    ${fastAttackIsSucess ? '\x1b[34m' : '\x1b[31m'}Fast Attack ${spyisSucess ? '\x1b[34m' : '\x1b[31m'}Spy ${signalPrisoner ? '\x1b[34m' : '\x1b[31m'}Signal Prisoner ${freePrisoner ? '\x1b[34m' : '\x1b[31m'}Free Prisoner`)
}


