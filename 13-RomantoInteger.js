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
    splitRoman = s.split('');
    let result = 0;
    for (i = 0; i < s.length; i++) {
        if (splitRoman[i+1] == 'V'){
            result = romanToIntMap['V'] - romanToIntMap['I'];
        } else {
            result += romanToIntMap[splitRoman[i]];
        }
        
    }
    return result;
};

console.log(romanToInt("XIV"));