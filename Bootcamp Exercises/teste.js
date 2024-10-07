const line = require('readline');
const user = line.createInterface({input: process.stdin, output: process.stdout});

let travelerName = ''
let colorFavorite = '32m'

async function questionUser(text){
    return new Promise((resolve) => {
        user.question(text, (answer) => {
            resolve(answer);
        })
    })
}

function stopMessage(time){
    return new Promise((resolve) => {setTimeout(resolve, time)})
}

function firstTextBeforeAction(talkingName = '', text = '', delay = 100){
    let totalLengthFormatter = 0;
    let totalLengthBreakLine = 0;
    const allFormatter = text.match(new RegExp('\\x1b\\[\\d?\\dm', 'g'));
    const allBreakLine = text.match(new RegExp('\\n', 'g'));

    if (allFormatter)    
        for (let formater of allFormatter)
            totalLengthFormatter += formater.length;
    if (allBreakLine)
        for (let breakLine of allBreakLine)
            totalLengthBreakLine += breakLine.length;
        
    let index = 0;
    let timeStop = Math.floor((text !== '...' ? 1.10 : 1) * parseInt((text.length * delay) + (allFormatter !== null ? totalLengthFormatter * delay : 0) + (allBreakLine !== null ? totalLengthBreakLine * delay : 0)));

    console.log(`        Formatadores: ${allFormatter !== null ? allFormatter.length : '0'} / ${totalLengthFormatter} de Largura
        Quebras de Linhas: ${allBreakLine !== null ? allBreakLine.length : '0'} / ${totalLengthBreakLine} de Largura
        Largura do Texto: ${text.length} / Delay: ${delay}s
        Tempo total: ${timeStop}`)
    
    if (talkingName.length != 0){
        talkingName = `\n\n       ${talkingName == travelerName.toLowerCase() ? `\x1b[${colorFavorite}` : ''}${colorFavorite == "30m" ? "\x1b[47m" : colorFavorite == "37m" ? "\x1b[30m": ""}${talkingName.toUpperCase()}: `;
        process.stdout.write(`${talkingName}`);
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

(async () => {
    let time = firstTextBeforeAction('teste',`\x1b[35mOla, viajante, qual é o seu nome?\x1b[0m\n`)
    await stopMessage(time);

    travelerName = await questionUser('>> ');

    time = firstTextBeforeAction('', `\n\x1b[3m       Após semanas enfrentando perigos em terras distantes, você acorda na carroça e se lembra: você pagou
        um carroçeiro para te levar para a capital. Ao sair de cima das mercadorias do carroçeiro,
        a estrada de pedra que leva à capital finalmente surge à frente. Os portões da grande cidade e a guilda
        erguem-se à distância, prometendo descanso e recompensa por seus esforços. As ruas, agora mais familiares, 
        estão cheias de vida — comerciantes gritando suas ofertas, crianças correndo entre barraquinhas, 
        e guardas patrulhando com olhar atento. Após sair da carruagem, você segue para seu objetivo: \x1b[1m 
        aumentar seu ranking na Guilda dos Aventureiros\x1b[0m`, 50);
    await stopMessage(time);

    time = firstTextBeforeAction('', `\n\n\x1b[3m        As portas pesadas da guilda se abrem, e é imediatamente envolvido por uma mistura de cheiros amadeirados
        e incenso suave. O grande salão à frente é movimentado, com membros da guilda circulando, 
        discutindo missões e trocando informações. O chão de pedra ecoa cada passo enquanto você se aproxima 
        do balcão de atendimento. Atrás do balcão, uma jovem atendente organiza pergaminhos e documentos, 
        os olhos ágeis passando rapidamente por um mapa. O cabelo dela é preso em um coque apertado, mas 
        uma mecha escapa, caindo suavemente sobre sua têmpora. Por um breve momento, focada no trabalho à sua frente, 
        ela percebe a sua aproximação. Sem desviar totalmente os olhos do que fazia, ela diz em um tom calmo e profissional:\x1b[0m`, 50);
    await stopMessage(time);
    user.close();
})();