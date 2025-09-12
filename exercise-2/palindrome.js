function isPalindrome(text){
    text = text.toLowerCase();
    let array = [...text];
    let reversedWord = array.reverse().join('');
    if (text === reversedWord){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('George'));

