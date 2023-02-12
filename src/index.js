const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};



function decode(expr) {
	let morseArr = [];
	let morsePoint = [];
	let tenzero = [];
	let arrayOutput = [];
	for (let i = 0; i < expr.length; i++) {
		morseArr.push(expr[i])
	}
	for (let i = 0; i < morseArr.length; i++) {
		
		if (morseArr[i] !== " ") {
			for (let key in MORSE_TABLE) {
				if (morseArr[i] === MORSE_TABLE[key]) {
					morsePoint.push(key)
				}
			}
		}
		else if (morseArr[i] === " ") {
			morsePoint.push("**********")
		}
	}
	for (let i = 0; i < morsePoint.length; i++) {
		
		if (morsePoint[i] !== "**********") {
			let arrayI = "";
			for (let j = 0; j < morsePoint[i].length; j++) {
				if (morsePoint[i][j] === "-") {
					arrayI = arrayI + "11"
				} else if (morsePoint[i][j] === ".") {
					arrayI = arrayI + "10"
				}
			}
			tenzero.push(arrayI)
		}
		else if (morsePoint[i] === "**********") {
			tenzero.push("**********")
		}
	}
	for (let i = 0; i < tenzero.length; i++) {
		let zerocount = "";
		let strlength = 0;
		strlength = 10 - tenzero[i].length;
		if (tenzero[i] !== "**********") {
			for (let j = 0; j < strlength; j++) {
				zerocount = zerocount + "0"
			}
			arrayOutput[i] = zerocount + tenzero[i];
		}
		else if (tenzero[i] === "**********") {
			arrayOutput.push("**********")
		}
	}
	return(arrayOutput.join(""))
}


decode(expr)
module.exports = {
	decode
}
