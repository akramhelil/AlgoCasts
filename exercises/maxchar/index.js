// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // const charObj = {};
    // let max = 0 
    // let maxChar = ''

    // // transfer the string to an object depends on the how many times the character showed up in the string
    // for (let char of str) {
    //     if (charObj[char]) {
    //         charObj[char] ++;
    //     } else {
    //         charObj[char] = 1;   
    //   }
    // }

    // // loop through the obj and find the max value of the obj.
    // for (let obj in charObj) {
    //     if (charObj[obj] > max) {
    //         max = charObj[obj]
    //         maxChar = obj;
    //     }
    // }
    // return maxChar;

    let max = 0;
    let maxChar = '';

  str.split('').forEach( char => {
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
}

module.exports = maxChar;
