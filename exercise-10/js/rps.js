const choices = ["rock", "paper", "scissors"];

// Get the computer's choice
function computerChoice(){
		let choice = Math.floor(Math.random() * 3);
		return choices[choice];
}

// Get the user's choice
function userChoice(){
		let choice = prompt(
		`
		1.Rock
		2.Paper
		3.Scissors
		`
		);
		if (choice !== null){
				 choice = parseInt(choice);
				if (isNaN(choice)){
						alert("Invalid input.");
						userChoice();
				}else{
						choice = choices[choice - 1] ?? null;
						if (choice === null){
								alert('Wrong Choice');
								userChoice();
						}else{
								return choice;
						}
				}
		}
		alert('Good bye');
}


// Make the Game
function rps(){
		alert("Welcome");
		let computer = computerChoice();
		let user;
		switch (computer){
				case "rock":
				user = userChoice();
				switch (user){
						case "rock":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						It is a draw.
						`);
						break;
						case "paper":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						You lose
						`);
						break;
						case "scissors":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						You lose.
						`);
						break;
				}
				break;
				case "paper":
			user = userChoice();
				switch (user){
						case "rock":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						You win.
						`);
						break;
						case "paper":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						It is a draw
						`);
						break;
						case "scissors":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						You lose.
						`);
						break;
				}
				break;
				case "scissors":
				user = userChoice();
				switch (user){
						case "rock":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						You lose.
						`);
						break;
						case "paper":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						You win
						`);
						break;
						case "scissors":
						alert(`
						Computer's Choice : ${computer}
						Your Choice : ${user}
						It is draw.
						`);
						break;
				}
				break;
				default:
				alert("An error has occured");
		}
}

(function (){
		let $continue;
		do{
				rps();
				$continue = confirm('Do you want to continue?');
		}while($continue);
})();
