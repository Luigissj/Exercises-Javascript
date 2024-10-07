const {EXPECTED_MINUTES_IN_OVEN, remainingMinutesInOven, preparationTimeInMinutes, totalTimeInMinutes} = require('./Lucian_Luscious_Lasagna.js');

console.log('Tempo Restante: ' + remainingMinutesInOven(30));
console.log('Tempo de Preparação: ' + preparationTimeInMinutes(2));
console.log('Tempo Total: ' + totalTimeInMinutes(3, 5));