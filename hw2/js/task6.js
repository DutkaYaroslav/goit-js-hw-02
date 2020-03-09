    const numbers = []
    let total = 0;
    let input;

    // console.log()
    do {
        input = prompt('input you numbers');
        numbers.push(Number(input));
    }
    while (input !== null)



    if (numbers[0] === 0) {

        alert('введіть хоча б одне число');
    }


    for (const number of numbers) {
        total += number;
    }
    console.log(total);