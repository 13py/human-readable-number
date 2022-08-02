let numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    80: "eighty",
};

module.exports = function toReadable(number) {
    const hundred = "hundred";
    if (
        number <= 15 ||
        number == 20 ||
        number == 30 ||
        number == 40 ||
        number == 50 ||
        number == 80
    ) {
        return numbers[number];
    } else if (number > 15 && number < 20) {
        return numbers[String(number % 10)] + "teen";
    } else if (number > 20 && number < 30) {
        return String(numbers[20]) + " " + numbers[String(number % 10)];
    } else if (number > 30 && number < 40) {
        return String(numbers[30]) + " " + numbers[String(number % 10)];
    } else if (number > 40 && number < 50) {
        return String(numbers[40]) + " " + numbers[String(number % 10)];
    } else if (number > 50 && number < 60) {
        return String(numbers[50]) + " " + numbers[String(number % 10)];
    } else if (number > 80 && number < 90) {
        return String(numbers[80]) + " " + numbers[String(number % 10)];
    } else if (number > 60 && number < 100) {
        return (
            String(numbers[Math.floor(number / 10)]) +
            "ty" +
            " " +
            numbers[String(number % 10)]
        );
    } else if (number >= 100 && number < 1000) {
        if (number % 100 == 0) {
            return String(numbers[Math.floor(number / 100)]) + " " + hundred;
        }
    }
};