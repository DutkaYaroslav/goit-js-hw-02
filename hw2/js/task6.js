    const numbers = []
    let total = 0;
    let input;

    while (input !== null) {
        input = prompt('input you numbers');
        numbers.push(Number(input));
    }


    if (numbers.length > 0) {

        for (const number of numbers) {
            total += number;
        }
    }




    console.log(total);