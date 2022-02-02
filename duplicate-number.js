// remove duplicate Number form an array 

const numbers = [1, 23, 32, 56, 66, 77, 1, 32, 44, 7, 18, 22, 56, 66, 77, 7, 18];
function removeDuplicateNumber(numbers){
    const unique = [];
  /*   for(i = 0; i < names.length; i++){
        const element = names [i];
        // console.log(element);
    } */
    // for of loop
    for(const element of numbers){
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNumbers = removeDuplicateNumber(numbers);
console.log(uniqueNumbers);