/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let xString = x.toString();
    let reverseString = "";
    for (let i = xString.length - 1; i >= 0; i--) {
        reverseString = reverseString + xString[i];
    }
    return xString === reverseString;
};

var isPalindrome1 = (x) => x.toString().split('').reverse().join('') === x.toString() ? true : false;

console.log(isPalindrome(123321))