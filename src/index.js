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
};

function toReadable(number) {
    if (number <= 15 || number == 20 || number == 30) {
        console.log(numbers[number]);
        return numbers[number];
    } else if (number > 15 && number < 20) {
        return numbers[String(number % 10)] + "teen";
    } else if (number > 20 && number < 30) {
        return String(numbers[20]) + " " + numbers[String(number % 10)];
    }
}