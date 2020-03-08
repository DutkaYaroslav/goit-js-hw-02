const logItems = function (array) {

    for (let i = 0; i < array.length; i += 1) {

        let number = i + 1;

        console.log(`${number} - ${array[i]}`)
    }
}



logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

// for (let i = 0; i < names.length; i += 1) {

//     console.log('номер', i)
//     console.log(`значення[${i}]`, names[i])
// }


// const products = ['apple', 'grape', 'banana'];


// for (let i = 0; i < products.length; i += 1) {
//     console.log('i:', i)
//     console.log(`значення[${i}]:`, products[i])
// }