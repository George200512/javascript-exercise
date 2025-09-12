// A function to generate a random number from one to six.
function rollDice(){
    return Math.floor(Math.random() * (6 - 1 + 1));
}

// The main function(program)
function main(){
    let proceed = true; 
    while (proceed){
        let input = prompt('Press "r" ro roll dice: ');
        if (input === null){
             console.log('Good Bye.')
            proceed = false;
        }else if(input.toLowerCase() !== "r"){
            console.log('Please Try Again')
        }else{
            let value = rollDice();
            console.log(`Value is ${value}`);
            let confirmation = confirm('Do you want to roll again ?');
            if (!confirmation){
                console.log('Bye');
                proceed = false;
            }    
        }
    }
}  
main()