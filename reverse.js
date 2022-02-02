
// reversed string 
/* 
const greetings = 'Hello, how are you?'

function reverseString(text){
    for(const letter of text){
        console.log(letter);
    }
}

const reversed = reverseString(greetings);
console.log(reversed); */

//

const greetings = 'Hello, how are you?'

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        // console.log(letter);
        reverse =  letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);

