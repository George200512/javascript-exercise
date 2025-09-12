function getSentence(){
    let input = prompt('Enter a sentence: ');
    return input !== null ? input.trim() : '';
}

function countWords(){
    let sentence = getSentence();
    const array = sentence.split(/\s+/);
    let numberOfWords = array.length;
    return sentence === "" ? numberOfWords : 0;
}

function main(){
    let $continue;
    do{
        console.log(`There are ${countWords()} words in your sentence`);
        let $continue = confirm('Do you want to continue?');
    }while($continue);
    
}

main()

