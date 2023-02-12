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
   let morsearr = [];
	let tenzero = [];
	let arrfinal = [];

	for (let i = 0; i < expr.length; i++) {
		for (let key in MORSE_TABLE) {
			if (expr[i] === MORSE_TABLE[key]) {
				morsearr.push(key)
			}
		}
	}
	for (let i = 0; i < morsearr.length; i++) {
		let arrayI = "";
		for (let k = 0; k < morsearr[i].length; k++) {
			if (morsearr[i][k] === "-") {
				arrayI = arrayI + "11"
			} else if (morsearr[i][k] === ".") {
				arrayI = arrayI + "10"
			}
		}
		tenzero.push(arrayI)
	}

	for (let i = 0; i < tenzero.length; i++) {
		let zerocount = "";
		let strlength = 0;
		strlength = 10 - tenzero[i].length;
		for (let j = 0; j < strlength; j++) {
			zerocount = zerocount + "0"
		}
		arrfinal[i] = zerocount + tenzero[i];
	}
	return (arrfinal.join(""))
}

module.exports = {
    decode
}
