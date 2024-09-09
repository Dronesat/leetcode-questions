/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
};

var romanToInt = function(s) {
    let result = 0;
    for (i = 0; i < s.length; i++) {
        currentVal = romanToIntMap[s[i]];
        nextVal = romanToIntMap[s[i+1]];

        // Check if need to subtract
        if (['I','X','C'].includes(s[i]) && nextVal > currentVal) {
            result += (nextVal - currentVal);
            i++; //Skip the next character since it's already processed
        } else {
            result += currentVal;
        }
        //console.log(s[i]+" - total: "+result)
    }
    return result;
};

console.log(romanToInt("XLIX"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("III"));    