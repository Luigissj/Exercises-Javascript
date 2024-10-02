import { createInterface } from 'readline'

async function questionUser(text){
    return new Promise((resolve) => {
        user.question(text, (answer) => {
            resolve(answer);
        })
    })
}

class hero {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.type = null;
    }

    async defineType() {
        let numberTypeChoose = 0;
        let optionsText = '';

        for (let index = 0; index < typeList.length; index++){
            optionsText += `${(index + 1) + ')'} \x1b[1m${typeList[index][0]}\x1b[0m `;
        }
        
        while (true){
            numberTypeChoose = parseInt(await questionUser(`Which class interests you more?\n${optionsText}\n→ `), 10)
            if (numberTypeChoose >= 1 && numberTypeChoose <= typeList.length){
                this.type = typeList[numberTypeChoose - 1];
                break;
            } else {
                console.error('Opção inexistente, tente novamente\n')
            }
        }
        return this.type;
    }

    attack(){
        if (this.type){
            console.log(`The ${this.type[0]} attacks using ${this.type[1]}.`)
        }
    }
}

const typeList = [
    ['Warrior', 'Sword'], 
    ['Mage', 'Magic'], 
    ['Monk', 'Martial Arts'], 
    ['Ninja', 'Shiruken']
];

const user = createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
    const newHero = new hero('Luigi', 20);
    await newHero.defineType();
    newHero.attack();
    user.close();
})();