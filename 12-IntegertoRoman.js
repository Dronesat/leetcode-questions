/**
 * @param {number} num
 * @return {string}
 */

const intToRomanMap = {
    1:'I',
    4:'IV',
    5:'V',
    9:'IX',
    10:'X',
    40:'XL',
    50:'L',
    90:'XC',
    100:'C',
    400:'CD',
    500:'D',
    900:'CM',
    1000:'M'
};

var intToRoman = function(num) {
    let romanString = ""
    for (let [key, value] of Object.entries(intToRomanMap).reverse()) {
        while (num >= key) {
            romanString += value
            num -= key
            console.log(`Current string: ${romanString}, number: ${num}`);
        }
    }
    return romanString;
};

console.log(intToRoman(1994))