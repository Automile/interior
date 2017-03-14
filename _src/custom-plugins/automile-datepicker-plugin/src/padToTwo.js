function padToTwo(numberString) {
    let number = parseInt(numberString);

    if (number <= 9999) {
        number = ('00' + number).slice(-2);
    }

    return number;
}

export default padToTwo;
