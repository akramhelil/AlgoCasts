// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // ES2015 Arrow funtion solution 
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;


// function reverse(str) {
    // my solution 
    // const reversed = str.split('').reverse().join('');
    // return reversed;

    // solution #1 
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    // solition #2 
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    //solution 3 
    // new ES2015 syntax
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;
    
// }