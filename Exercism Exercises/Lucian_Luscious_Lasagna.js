const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven){
    if (actualMinutesInOven < EXPECTED_MINUTES_IN_OVEN){
        const remainingMinutes = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
        return remainingMinutes;
    } else {
        console.log('A Lasanha queimou!');
    }
}

function preparationTimeInMinutes(numberOfLayers){
    const preparationTime = numberOfLayers * 2;
    return preparationTime; 
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    const preparationTime = preparationTimeInMinutes(numberOfLayers);
    const remainingMinutes = remainingMinutesInOven(actualMinutesInOven);
    const totalTime = preparationTime + remainingMinutes;
    return totalTime; 
}

console.log('Tempo Restante: ' + remainingMinutesInOven(20));
console.log('Tempo de Preparação: ' + preparationTimeInMinutes(2));
console.log('Tempo Total: ' + totalTimeInMinutes(3, 20));