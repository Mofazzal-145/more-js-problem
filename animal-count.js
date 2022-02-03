//
function animalCounts(miles){
    const firstArea10miles = 10;
    const secondtArea10miles = 50;
    const thirdArea10miles = 100;
    if (miles <= 10) {
        const count = miles * firstArea10miles;
        return count;
    }

    else if(miles <= 20){
        const first10 = 10 * firstArea10miles;
        const restMiles = miles - 10; 
        const second10 = restMiles * secondtArea10miles;
        const totalAnimal = first10 + second10;
        return totalAnimal;
    }
    else{
        const first10Desity = 10 * firstArea10miles;
        const second10Density = 10 * secondtArea10miles;
        const restMiles = miles - 20;
        const third10 = restMiles * thirdArea10miles;
        const all = first10Desity + second10Density + third10;
        return all;

    }
}

const animal = animalCounts(35);
console.log(animal);
