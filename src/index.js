const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resStr = '';
    for(let i = 0; i < expr.length; i = i + 10) {
        if(expr[i] == '*') {
            resStr += ' ';
            continue;
        }
        let elementStr = '';
        for(let j = i; j < i + 10; j = j + 2) {
            if(expr.slice(j, j + 2) == '10') {
                elementStr += '.';
            }
            else if(expr.slice(j, j + 2) == '11') {
                elementStr += '-'
            }
        }
        resStr += MORSE_TABLE[elementStr];
    }
    return resStr;
}

module.exports = {
    decode
}