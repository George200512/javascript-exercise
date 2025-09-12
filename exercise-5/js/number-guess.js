//Declare a custom error class
class ValueError extends Error{
    constructor(message){
        super(message);
        this.name = "ValueError";
    }
}

//A function that generates a number between max and min (min included)
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Declare a main function
function main(){
    let proceed = true;
    let randomNumber = random(1, 10);
    try{
        while (proceed){
            let input  = prompt('Enter a decimal number: ');
            if (input === null){
                console.log('Aborted');
                proceed = false;
            }else{
                let number = Number(input);
                if (!isNaN(number)){
                    if (number === randomNumber){
                        console.log('Your guess is right.');
                        proceed = false;
                    }else if (number > randomNumber){
                        console.log('Your number is too high.');
                    }else{
                        console.log('Your number is too low.');
                    }
                }else{
                    throw new ValueError('Value should be decimal');
                }
            }
        }
    }catch(e){
       console.log(e.message); 
    }
}

main()
    