

const questions = [
{
		question:"What is the purpose of the break statement in a loop?",
		options:{
				a:"To continue to the next iteration",
				b:"To exit the loop immediately",
				c:"To skip a specific iteration",
				d:"To restart the loop"
		},
		correctAnswer:"b"
},
{
		question:"Which data type is used to represent a sequence of characters in most programming languages?",
		options:{
				a:"Integer",
				b:"Float",
				c:"String",
				d:"Boolean"
		},
		correctAnswer:"c"
},
{
		question:"What is the difference between null and undefined in JavaScript?",
		options:{
				a:"null represents an empty string, while undefined reprsents a missing value",
				b:"null represents a missing value, while undefined represents an empty string",
				c:"null represents a deliberate abscence of value, while undefined represents an uninitialised variable",
				d:"null and undefined are interchangeable terms"
		},
		correctAnswer:"c"
},
{
		question:"What is the purpose of the this keyword in JavaScript?",
		options:{
				a:"To refer to the global object",
				b:"To create a new object",
				c:"To refer to the current object",
				d:"To define a new function"
		},
		correctAnswer:"c"
},
{
		question:"Which programming paradigm emphizes the use of pure functions and immutable data?",
		options:{
				a:"Object-oriented programming",
				b:"Functional programming",
				c:"Imperative programming",
				d:"Declarative programming"
		},
		correctAnswer:"b"
},
{
		question:"What is the difference between let and var in JavaScript?",
		options:{
				a:"let is used for global variables, while var is used for local variables",
				b:"let is used for local variables, while var is used for global variables",
				c:"let has block scope, while var has functional scope",
				d:"let and var are interchangeable terms"
		},
		correctAnswer:"c"
},
{
		question:"What is the purpose of try-catch block in programming?",
		options:{
				a:"To handle runtime errors and exceptions",
				b:"To optimize code performance",
				c:"To improve code readability",
				d:"To reduce code complexity"
		},
		correctAnswer:"a"
}
];

let score = 0;

function quizApp(){
		alert("Welcome to the quiz app");
		for(let data of questions){
				displayQuestion(data);
				let $continue = confirm("Do you want to continue? ");
				if (!$continue){
						alert("Ok!");
						break;
				}
		}
		alert(`Final Score: ${score}/${questions.length}`);
}

function displayQuestion(data){
		let text = '';
		text += `${data.question}\n\n`;
		for (let x in data.options){
				text += `${x}. ${data.options[x]}\n`;
		}
		alert(text);
		let choice = prompt("Choose an answer: ");
		choice = choice !== null ? choice.toLowerCase() : choice;
		checkAnswer(choice, data.correctAnswer);
}

function checkAnswer(choice, correctAnswer){
		score = choice === correctAnswer ? score + 1 : score;
		if (choice === null){
				alert('You chose no answer.');
				return ;
		}
		if (choice === correctAnswer){
				alert(`Your answer is correct. ${score}/${questions.length}`);
		}else{
				alert(`Incorrect answer.
				The right answer is: ${correctAnswer}
				`)
		}
}

(function (){
		let $confirm;
		do{
		quizApp();
		$confirm = confirm('Do you want to restart?');
				score = 0;
		}while($confirm);
})();