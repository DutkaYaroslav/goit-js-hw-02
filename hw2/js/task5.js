const checkForSpam = function (message) {


    let register = message.toLowerCase();

    let isSpamIncluded = register.includes('spam') || register.includes('sale');
    console.log(register)

    return isSpamIncluded;

}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true