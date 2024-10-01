/*const { time } = require('console');
const exp = require('constants');
*/
const line = require('readline');

const user = line.createInterface({input: process.stdin, output: process.stdout});

let ranks = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];
let year = 10;//Math.floor(Math.random() * 11);


let travelerRank = ranks[Math.floor(Math.random() * 3)];
let travelernumberPositionRank = travelerRank.indexOf(travelerRank);
let travelerExp;
let travelerRankUp = false;
let travelerName = '';

switch (travelerRank) {
    case 'Ferro':
        travelerExp = Math.ceil(Math.random() * 1000);
        break;
    case 'Bronze':
        while(travelerExp < 1000)
            travelerExp = Math.ceil(Math.random() * 2000);
        break;
    case 'Prata':
        while (travelerExp < 2000)
            travelerExp = Math.ceil(Math.random() * 5000);
        break;
}
/*
let teste = `KATHERYNE: Ja faz um tempo que você não volta desde a sua viagem de ${year} ANOS`;
console.log(teste.length);
console.log(teste.length * 250);
startStory();

// ----------------------------------------------- FUNCTIONS ------------------------------------------------
*/
function stopMessage(time){
    return new Promise((resolve) => {setTimeout(resolve, time)})
}

 function firstTextBeforeAction(text = String, delay = Number, callback = undefined){
    let index = 0;
    let timeStop = ((text.length * delay) + (10 * delay));
    const interval = setInterval(() => {
        process.stdout.write(text[index]);
        index++
        if (index == text.length){
            clearInterval(interval);
            if (typeof callback == 'function')
                callback()
        }
    }, delay);
    if (typeof callback == 'function')
        return 864000;
    else
        return timeStop;
}/*

async function startStory() {
    let timeStop = firstTextBeforeAction('ATENDENTE: Ola, viajante, qual é o seu nome?\n', 100, () => {
        user.question('☞ ', (answer) => {
            travelerName = answer;
            firstTextBeforeAction(`KATYERYNE: Ola, ${travelerName}, meu nome é Katheryne \n`, 150);
            user.close();
        });
      });
    console.log(timeStop);
    let stop = await stopMessage(timeStop);
    timeStop = firstTextBeforeAction(`KATHERYNE: Ja faz um tempo que você não volta desde a sua viagem de ${year} ANOS`, 100);
    stop = await stopMessage(timeStop);
}*/

const askQuestion = (promptText) => {
    return new Promise((resolve) => {
      user.question(promptText, (answer) => {
        resolve(answer);
      });
    });
  };
  
  const updateTravelerExperience = (year) => {
    let ExpEsperado;
    if (year <= 2) {
      while (ExpEsperado < 750) ExpEsperado = Math.ceil(Math.random() * 1500);
    } else if (year <= 5) {
      while (ExpEsperado < 1500) ExpEsperado = Math.ceil(Math.random() * 3000);
    } else if (year <= 7) {
      while (ExpEsperado < 2250) ExpEsperado = Math.ceil(Math.random() * 4500);
    } else {
      while (ExpEsperado < 3000) ExpEsperado = Math.ceil(Math.random() * 6000);
    }
    return ExpEsperado;
  };
  
  const calculateRank = (exp) => {
    let rankPosition = 0;
    switch (true) {
      case exp >= 10001:
        rankPosition++;
      case exp >= 8001:
        rankPosition++;
      case exp >= 7001:
        rankPosition++;
      case exp >= 6001:
        rankPosition++;
      case exp >= 5001:
        rankPosition++;
      case exp >= 2001:
        rankPosition++;
      case exp >= 1001:
        rankPosition++;
    }
    return rankPosition;
  };
  
  (async () => {
    let timeStop, stopID;
  
    // Pergunta inicial ao jogador
    timeStop = firstTextBeforeAction('ATENDENTE: Olá, viajante, qual é o seu nome?\n', 100);
    stopID = await stopMessage(timeStop);
    
    const travelerName = await askQuestion('☞ ');
  
    timeStop = firstTextBeforeAction(`KATHERYNE: Olá, ${travelerName}, meu nome é Katheryne.`, 150);
    clearTimeout(stopID);
    await stopMessage(timeStop);
  
    // Outras mensagens...
    timeStop = firstTextBeforeAction(`\nKATHERYNE: Já faz um tempo desde a sua viagem de ${year} ANOS`, 100);
    await stopMessage(timeStop);
  
    // Simulação de tempo e mensagens subsequentes
    timeStop = firstTextBeforeAction('...', 500);
    await stopMessage(timeStop);
    timeStop = firstTextBeforeAction('\nKATHERYNE: AHH..., ia me esquecendo, tenho que atualizar seu rank!', 150);
    await stopMessage(timeStop);
  
    // Pede ao jogador a experiência obtida
    timeStop = firstTextBeforeAction('Quanto de EXPERIÊNCIA você ganhou nessa viagem?\n', 100);
    await stopMessage(timeStop);
  
    const expResposta = await askQuestion('ϵxρ: ');
    const expEsperado = updateTravelerExperience(year);
  
    if (Math.floor(expResposta) < expEsperado) {
      timeStop = firstTextBeforeAction('KATHERYNE: ah... Eu esperava mais que isso.', 150);
    } else {
      timeStop = firstTextBeforeAction('KATHERYNE: Sério!!! É mais do que eu esperava, muito bem!', 150);
      travelerExp += Math.floor(expResposta);
    }
    await stopMessage(timeStop);
  
    // Calcula o rank
    const travelernumberPositionRank = calculateRank(travelerExp);
    const travelerRankUp = travelerRank !== ranks[travelernumberPositionRank];
    travelerRank = ranks[travelernumberPositionRank];
  
    // Mensagem final
    timeStop = firstTextBeforeAction(`"ANÚNCIO: O HERÓI ${travelerName.toUpperCase()} ESTÁ NO RANK ${travelerRank.toUpperCase()} COM ${travelerExp} DE EXP!"`, 200);
    await stopMessage(timeStop);
  
    if (travelerRankUp) {
      timeStop = firstTextBeforeAction(`KATHERYNE: PARABÉNS POR SUBIR DE RANK, ${travelerName}!`, 150);
    } else {
      timeStop = firstTextBeforeAction(`KATHERYNE: Pena que não subiu de rank, ${travelerName}.`, 150);
    }
    await stopMessage(timeStop);
  
    user.close();
  })();
  