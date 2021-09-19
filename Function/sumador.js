
function getRandomArbitrary(min, max) {
    let random = Math.random() * (max - min) + min;
    let round = Math.round(random);
    return round;
}

function getSumador(max,numero){
    let result =  numero + getRandomArbitrary(1,max);
    return result;
}

module.exports = { getSumador };


