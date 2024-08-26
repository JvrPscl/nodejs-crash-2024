function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celsiusToFahrenheit(celsius) {
    return (9/5*celsius+32);
}

// common JS default export (solo de una)
// module.exports = generateRandomNumber;

// common JS export de varias funciones. Mediante un objeto
module.exports = {
    generateRandomNumber,
    celsiusToFahrenheit,
};