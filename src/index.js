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
	let arr = [];
	let point = [];
	let stringlength = expr.length;
	let str = "";
	for (let i = 0; i < stringlength / 10; i++) {
		arr.push(expr.slice(i * 10, i * 10 + 10))
	}
	for (let i = 0; i < arr.length; i++) {
		let strres = "";
		let massArr = [];
		if (arr[i] !== "**********") {
			for (let k = 0; k < arr[i].length / 2; k++) {
				if ((arr[i].slice(k * 2, k * 2 + 2)) !== "00" && (arr[i].slice(k * 2, k * 2 + 2)) === "10") {
					massArr.push(".")
				}
				else if ((arr[i].slice(k * 2, k * 2 + 2)) !== "00" && (arr[i].slice(k * 2, k * 2 + 2)) === "11") {
					massArr.push("-")
				}
			}
		} else if (arr[i] === "**********") { massArr.push(" ") }
		point.push(massArr.join(""))
	}
	for (let i = 0; i < point.length; i++) {
		if (point[i] !== " ") {
			str = str + MORSE_TABLE[point[i]]
		} else {
			str = str + " ";
		}
	}
	return str
}



module.exports = {
	decode
}
