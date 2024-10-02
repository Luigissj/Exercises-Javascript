import { createInterface } from 'readline';

const usuário = createInterface({input: process.stdin, output: process.stdout});
const ranks = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
let nomeJogador = await questionario('Qual é o seu nome?\n ☞ ');
let partidasVencidas = await questionario('\nQuantas partidas RANQUEADAS você venceu?\n ☞ ');
let rankJogador = ranks[calcularRank()];
console.log(`O Herói ${nomeJogador} tem de saldo de ${partidasVencidas} ${partidasVencidas > 1 ? 'partidas vencidas' : 'partida vencida '} e está no nível de ${rankJogador}`)
usuário.close();

function calcularRank(){
    let numeroPosição = 0;
    switch (true) {
        case (partidasVencidas >= 101):
            numeroPosição++
        case (partidasVencidas <= 100 && partidasVencidas >= 91):
            numeroPosição++
        case (partidasVencidas <= 90 && partidasVencidas >= 81):
            numeroPosição++
        case (partidasVencidas <= 80 && partidasVencidas >= 51):
            numeroPosição++
        case (partidasVencidas <= 50 && partidasVencidas >= 21):
            numeroPosição++
        case (partidasVencidas <= 20 && partidasVencidas >= 11):
            numeroPosição++
    }
    return numeroPosição;
}

function questionario(texto){
    return new Promise((resolve) => {
        usuário.question(texto, (resposta) => {
            resolve(resposta);
        })
    })
}