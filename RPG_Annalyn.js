mensagemDigitada('Ola viajante, meu nome é Annalyn (. ❛ ᴗ ❛.)', 100);



function stop (time){
    return new Promise(resolve => setTimeout(resolve, time))
}

async function mensagemDigitada(mensagem, tempo){
    for (let letra of mensagem){
        process.stdout.write(letra);
        await stop(tempo);
    }
}