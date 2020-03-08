const calculateEngravingPrice = function (message, pricePerWord) {
    let sum = 0;
    const words = message.split(' ');

    for (const word of words) {
        sum += pricePerWord;
    }

    return sum;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10))

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20))

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40))

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20))