const checkForSpam = function (message) {

    // const spamToFind = ['SPAM', 'sale'];

    // rigster = t

    message.toLowerCase()

    let isSpamIncluded = message.includes('SPAM') || message.includes('sale');

    return isSpamIncluded;

}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true