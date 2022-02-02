
// remove duplicate element form an array 

const names = ['mofu','mofazzal','mohit','mamun','shakil','shakib','habib','mofu','mofazzal','mohit','mamun','shakil','shakila','shakib'];
function removeDuplicate(names){
    const unique = [];
  /*   for(i = 0; i < names.length; i++){
        const element = names [i];
        // console.log(element);
    } */
    // for of loop
    for(const element of names){
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);




