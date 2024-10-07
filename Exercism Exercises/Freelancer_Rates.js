console.log(dayRate(89));
console.log(daysInBudget(20000, 89));
console.log(priceWithMonthlyDiscount(16, 70, 0));

function dayRate(days){
    if (typeof days == "number" || typeof days == "bigint"){
        const totalRate = days * 8
        return totalRate;
    } else {
        console.error('ERROR: Parameter is NaN (Not a Number)');
    }
}

function daysInBudget(budget, days){
    if ((typeof budget == 'number' || typeof budget == 'bigint') && (typeof days == "number" || typeof days == "bigint")){
        const numberDays = Math.floor(budget / dayRate(days));
        return numberDays;
    } else {
        console.error('ERROR: One of the parameters is NaN (Not a Number)');
    }
}

function priceWithMonthlyDiscount(ratePerHour, days, discountPrice){
    if ((typeof ratePerHour == 'number' || typeof ratePerHour == 'bigint') && (typeof days == 'number' || typeof days == 'bigint') && (discountPrice <= 1 || discountPrice >= 0)) {
        const pricePerDay = dayRate(ratePerHour);
        const workDaysPerMonth = 22;
        const restDays = days % workDaysPerMonth;
        const totalMonth = Math.floor(days / workDaysPerMonth);
        const totalRateWithDiscount = pricePerDay * (totalMonth * workDaysPerMonth) * (1 - discountPrice);
        const totalRestDaysRate = restDays * pricePerDay;

        const projectTotalRate = Math.ceil(totalRateWithDiscount + totalRestDaysRate);
        return projectTotalRate;
    } else {
        console.error('ERROR: Oner of the parameters is NaN (Not a Number) or the discount is higher than 1 or lower than 0')
    }
}