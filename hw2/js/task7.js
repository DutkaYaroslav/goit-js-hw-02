const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const input = prompt('create new password');
let allClients = logins.concat(input);

if (input === null) {
    alert('canceled');
}

// 1. написати на валідність не менше 4 чи не більше 16 символів. повернення тру або фолс.

const isLoginValid = function(input) {
    return input.length >= 4 && input.length <= 16;
};

// написати скрипт прийому паролю, щоб не співпадав з масивом логінз. якщо співпадає, то тру. Якщо не співпадає - false.
//- розбити масив з допомогю спліт
// -зрівняти логін з розбитим масивом
const isLoginUnique = function(input) {
    // let array = logins.split(' ');

    // if (logins.includes(array) === input) {
    //     return false
    // } else {
    //     return true
    // }
    for (const client of allClients) {
        if (client === input) {
            return false;
        } else {
            return true;
        }
    }
};

const addLogin = function(final) {
    if (isLoginValid(input) !== true) {
        alert('логін має бути від 4 до 16 символів включно');
    } else if (isLoginUnique(input) !== true) {
        alert('Такий логін вже інсує');
    } else {
        logins.push(input);
    }

    return logins;
};

console.log(addLogin(logins)); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
