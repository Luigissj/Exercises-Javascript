// Rode esse programa no Node.js;
// Chamando readline para poder interagir com o usuário;
const line = require('readline');

const user = line.createInterface({input: process.stdin, output: process.stdout});

let ranks = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];
let year = Math.floor(Math.random() * 11);
    while (year == 0)
        year = Math.floor(Math.random() * 11);

let travelerRank = ranks[Math.floor(Math.random() * 3)];
let travelernumberPositionRank = ranks.indexOf(travelerRank);
let travelerExp = 0;
let timeStop = 0;

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

// Inicio do programa;
startStory();

// ----------------------------------------------- FUNCTIONS ------------------------------------------------

// Permite parar o programa até o usuário enviar um input;
async function questionUser(text){
    return new Promise((resolve) => {
        user.question(text, (answer) => {
            resolve(answer);
        })
    })
}

// Pausa o programa por um período de tempo;
function stopMessage(time){
    return new Promise((resolve) => {setTimeout(resolve, time)})
}

// Permite dar uma pausa entre letras do Text;
function firstTextBeforeAction(talkingName = ' ', text = 'String', delay = 100){
    let index = 0;
    let timeStop = ((text.length * delay) + (10 * delay));

    if (talkingName.length != 0){
        talkingName = `\n${talkingName.toUpperCase()}: `;
        process.stdout.write(talkingName);
    }

    const interval = setInterval(async () => {
        process.stdout.write(text[index]);
        index++
        if (index == text.length){
            clearInterval(interval);
        }
    }, delay);
    return timeStop;
}

function calcularExpEsperado(){
    let expEsperado = 0;
    if (year <= 2)
        while (expEsperado < 750)
            expEsperado = Math.floor(Math.random() * 1500);
    else if (year <= 5 && year > 2)
        while (expEsperado < 1500)
            expEsperado = Math.floor(Math.random() * 3000);
    else if (year <= 7 && year > 5)
        while (expEsperado < 2250)
            expEsperado = Math.floor(Math.random() * 4500);
    else
        while (expEsperado < 3000){
            expEsperado = Math.floor(Math.random() * 6000);
        }
    return expEsperado;
}

function calcularRank(){
    let travelernumberPositionRank = 0;
    switch(true){
        case (travelerExp >= 10001):
            travelernumberPositionRank++;
        case (travelerExp >= 8001 && travelerExp <= 9000):
            travelernumberPositionRank++;
        case (travelerExp >= 7001 && travelerExp <= 8000):
            travelernumberPositionRank++;
        case (travelerExp >= 6001 && travelerExp <= 7000):
            travelernumberPositionRank++;
        case (travelerExp >= 5001 && travelerExp <= 6000):
            travelernumberPositionRank++;
        case (travelerExp >= 2001 && travelerExp <= 5000):
            travelernumberPositionRank++;
        case (travelerExp >= 1001 && travelerExp <= 2000):
            travelernumberPositionRank++;
    }
    return travelernumberPositionRank;
}

//Começo da história;
async function startStory() {
    timeStop = firstTextBeforeAction('', 'Ola, viajante, qual é o seu nome?\n', 100);
    await stopMessage(timeStop);

    const travelerName = await questionUser('☞ ')

    timeStop = firstTextBeforeAction('', `\x1b[3m       Após semanas enfrentando perigos em terras distantes, você acorda na carroça e se lembra: você pagou 
        um carroçeiro para te levar para a capital. Ao sair de cima das mercadorias do carroçeiro, 
        a estrada de pedra que leva à capital finalmente surge à frente. Os portões da grande cidade e a guilda 
        erguem-se à distância, prometendo descanso e recompensa por seus esforços. As ruas, agora mais 
        familiares, estão cheias de vida — comerciantes gritando suas ofertas, crianças correndo entre 
        barraquinhas, e guardas patrulhando com olhar atento. Após sair da carruagem, você segue para seu 
        objetivo: \x1b[1m aumentar seu ranking na Guilda dos Aventureiros\x1b[0m`, 50);
    await stopMessage(timeStop + 15000);

    timeStop = firstTextBeforeAction('', `\n \x1b[3m       As portas pesadas da guilda se abrem, e é imediatamente envolvido por uma mistura de cheiros amadeirados 
        e incenso suave. O grande salão à frente é movimentado, com membros da guilda circulando, 
        discutindo missões e trocando informações. O chão de pedra ecoa cada passo enquanto você se aproxima 
        do balcão de atendimento. Atrás do balcão, uma jovem atendente organiza pergaminhos e documentos, 
        os olhos ágeis passando rapidamente por um mapa. O cabelo dela é preso em um coque apertado, mas 
        uma mecha escapa, caindo suavemente sobre sua têmpora. Por um breve momento, focada no trabalho à sua frente, 
        ela percebe a sua aproximação. Sem desviar totalmente os olhos do que fazia, ela diz em um tom calmo e profissional:`, 50);
    await stopMessage(timeStop + 10000);

    timeStop = firstTextBeforeAction('atendente', "Precisa de algo, aventureiro? Ou está aqui por uma missão?", 100);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', `\x1b[3m       Finalmente, quando ela levanta os olhos, a leve sombra de um sorriso aparece nos lábios dela, 
        mas seu rosto ainda mantém uma expressão de seriedade. Ela cruza os braços sobre o balcão, 
        aguardando uma resposta com um ar de quem já viu muitos aventureiros passarem por ali. Após se encararem 
        por muito tempo, a atendente, em um tom alegre, mas sem perder seu jeito, diz:`, 50)
    await stopMessage(timeStop);
    
    timeStop = firstTextBeforeAction('atendente', `Ola, ${travelerName}, há quanto tempo!`, 100);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction(travelerName, `Falo o mesmo de você, Katheryne, faz um bom tempo!`, 100);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction(`katheryne`, `É, faz um tempo mesmo... ${year > 1 ? 'uns ' : ' '} ${year > 1 ? year + 'anos,' : 'na verdade foi ano passado, '} certo?`, 100);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction(travelerName, 'Isso mesmo!, lembro como se fosse ontem', 500);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', `\x1b[3m       Seus olhos encontram os dela, e uma brisa suave passa, trazendo lembranças da infância, tempos felizes.
        Seus lábios se curvam em um sorriso genuíno. A sensação de reencontrar alguém que conheceu tão bem, 
        depois de tanto tempo, aquece seu peito.\n\n`, 50);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', '...', 500);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('katheryne', 'AHH! Eu ia me esquecendo, eu tenho que atualizar suas estatísticas, né? espere um minutinho!', 100);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', `\x1b[3mApós um tempo procurando pela estante atrás do local de atendimento, 
        ela retorna com um livro de poucas páginas com suas conquistas, missões e feitos na guilda
        ${year > 2 ? ` que, supreendentemente, não apresentou ter uma partícula de poeira sobre a superficie 
        e entre as suas folhas.` : '.'} após deposita-la na escrivaninha, ela abre-o, pega uma pena e se 
        prepara para anotar`, 50);
    await stopMessage(timeStop + 5000);
    
    timeStop = firstTextBeforeAction('katheryne', 'Tudo pronto! agora deixe eu ver', 100);
    await stopMessage(timeStop);
    
    timeStop = firstTextBeforeAction('', '...', 500);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', ` você estava no ranking \x1b[1m${travelerRank}\x1b[0m antes com \x1b[1m${travelerExp}\x1b[0m de experiência, então`, 100)
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', '...', 500);
    await stopMessage(timeStop);
    
    timeStop = firstTextBeforeAction('katheryne', 'Quanto de \x1b[1mEXPERIÊNCIA\x1b[0m você ganhou nessa aventura? \n', 100)
    await stopMessage(timeStop);

    const expUser = Number(await questionUser('ϵxρ: '));

    timeStop = firstTextBeforeAction(travelerName, `Eu ganhei \x1b[1m${expUser}\x1b[0m de experiência` , 100)

    const expEsperado = calcularExpEsperado();
    if (Math.floor(expUser) < expEsperado){
        timeStop = firstTextBeforeAction('katheryne', 'Ah...', 250);
        await stopMessage(timeStop);

        timeStop = firstTextBeforeAction('', ' eu esperava mais que isso', 100);
        await stopMessage(timeStop);

        timeStop = firstTextBeforeAction('', '...', 500);
        await stopMessage(timeStop);

        timeStop = firstTextBeforeAction('', ' especificamente \x1b[1m${expEsperado}\x1b[0m de ϵxρ', 100);
        await stopMessage(timeStop);

        await stopMessage(1000);

        timeStop = firstTextBeforeAction('katheryne', 'Mas está tudo bem, o que importa é que voltou com segurança!', 100);
        await stopMessage(timeStop);
    } else {
        timeStop = firstTextBeforeAction('', `\x1b[3m       Após responde-la, Katheryne se engasga com a própria saliva ao receber sua resposta. 
            Aparentemente não esperou que ganhasse essa quantidade de experiência nessa quantidade de tempo. 
            Em um tom animado, ela aproxima de seu rosto e solta um berro:`, 50);
        await stopMessage(timeStop + 5000);

        timeStop = firstTextBeforeAction('katheryne', '\x1b[1mSÉRIO?!! ', 100);
        await stopMessage(timeStop);

        await stopMessage(500);

        timeStop = firstTextBeforeAction('', '\x1b[1mNÃO ESTÁ MENTINDO, TA?!!', 100);
        await stopMessage(timeStop);

        timeStop = firstTextBeforeAction('', `\x1b[3mAo perceber que todos, ou quase todos, estavam pondo os olhos na 
            atendente, que era conhecida como a pessoa mais rígida e focada no trabalho e em você, Katheryne, 
            com vergonha do rugido, que provavelmente foi escutado até fora da guilda, se recompõe\n`, 50);
        await stopMessage(timeStop + 5000);
                
        travelerExp += Math.floor(expUser);
    }

    timeStop = firstTextBeforeAction('katheryne', '*cough, cough*, Bem, De acordo com os meus cálculos', 100);
    await stopMessage(timeStop);

    timeStop = firstTextBeforeAction('', '...', 1000);
    await stopMessage(timeStop);

    travelerExp += expUser;
    travelernumberPositionRank = calcularRank();

    if (travelerRank != ranks[travelernumberPositionRank]){
        travelerRank = ranks[travelernumberPositionRank];

        timeStop = firstTextBeforeAction(`katheryne`, `Você subiu para o rank ${travelerRank}, 
            ${travelerName.toUpperCase()}, meus parabens! Espero a gente se encontre novamente`, 100);
        await stopMessage(timeStop);

        timeStop = firstTextBeforeAction(``, `\x1b[3mCom um sorriso exuberante de dentes brancos como neve, Katheryne 
            abana seu braço para um adeus. Após seu vulto desaparecer entre os outros presente nas estradas de 
            pedra, o semblante reduz-se gradualmente e retorna para sua função. Enquanto você, ${travelerName}, 
            se prepara para uma próxima aventura enquanto se orgulha dos resultados de sua última viagem.`, 200);
        await stopMessage(timeStop);

    } else {
        timeStop = firstTextBeforeAction(`katheryne`, `Pena que não subiu de rank, ${travelerName}, é como sempre digo: \x1b[3m O esforço contínuo, incansável e persistente vencerá! \x1b[0m`, 100);
        await stopMessage(timeStop);

        timeStop = firstTextBeforeAction(``, `\x1b[3m Após essas palavras confortantes de uma grande amiga de infância, 
            você sai da guilda, um pouco decepcionado dos seus resultados, mas prometeu prosseguir em outra 
            jornada para poder melhorar seu potencial e conseguir subir de ranking`, 100);
        await stopMessage(timeStop);
    }
    timeStop = firstTextBeforeAction(`"resultados finais: `, `O HEROI DO NOME 
        \x1b[1m${travelerName.toUpperCase()}\x1b[0m ESTÁ NO RANK 
        \x1b[1m${travelerRank.toUpperCase()}\x1b[0m COM \x1b[1m${travelerExp}\x1b[0m DE ξ⩆₱"`, 200);
    await stopMessage(timeStop);
    user.close();
}
