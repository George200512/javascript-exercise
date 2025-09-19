
// Declare constants

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters = [...uppercaseLetters];
lowercaseLetters.forEach((v, i, arr)=>{arr[i] = v.toLowerCase();});
const symbols = [`|`,`/`, `~`, `{`, `}`, `<`, `>`, `$`, "+"];

// Declare functions to get a random number,letter, and symbol

function getNumber(){
		let index = Math.floor(Math.random() * numbers.length);
		return numbers.at(index);
}

function getLetter(){
		let letters = [...uppercaseLetters, ...lowercaseLetters];
		let index = Math.floor(Math.random() * letters.length);
		return letters.at(index);
}

function getSymbol(){
		let index = Math.floor(Math.random() * symbols.length);
		return symbols.at(index);
}

function getNumbers(quantity=1){
		let numbers = []
		for (let i=0; i<quantity; i++){
				numbers.push(getNumber());
		}
		return numbers;
}

function getLetters(quantity=1){
		let letters = [];
		for(let i=0; i<quantity; i++){
				letters.push(getLetter())
		}
		return letters;
}

function getSymbols(quantity=1){
		let symbols = [];
		for (let i=0; i<quantity; i++){
				symbols.push(getSymbol());
		}
		return symbols;
}

function passwordGenerator(){
		const password = [];
		let numberQuantity = prompt('How many numbers do you want: ', 1);
		let letterQuantity = prompt('How many letters do you want: ', 1);
		let symbolQuantity = prompt('How many symbols do you want: ', 1);
		numberQuantity = isFinite(numberQuantity)? Number(numberQuantity):1;
		letterQuantity = isFinite(letterQuantity)? Number(letterQuantity):1;
		symbolQuantity = isFinite(symbolQuantity)? Number(symbolQuantity):1;
		password.push(...getNumbers(numberQuantity));
		password.push(...getLetters(letterQuantity));
		password.push(...getSymbols(symbolQuantity));
		password.sort(function(){return 0.5 - Math.random()});
		alert(`Your password is ${password.join('')}`);
}

(function(){
		let $continue;
		do{
				passwordGenerator();
				$continue = confirm("Do you want to continue?");
		}while($continue);
})();
