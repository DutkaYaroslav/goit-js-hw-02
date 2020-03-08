    const numbers = []
    let total = 0;
    let input;


    do {
        input = prompt('input you numbers');
        numbers.push(Number(input));
    }
    while (input !== null)

    for (const number of numbers) {
        total += number;
    }
    console.log(total);