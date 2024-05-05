// const first = {a:2};
// const second = {a:2};
// if(first === second){
//     console.log('they are same');

// }
// else{
//     console.log('different');
// }
// do not use this method to compare object or array
const first = {a:2, b:3, C:4};
const second = {a:2, c:7, b:3};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString,secondString);
// if(firstString === secondString){
//     console.log('same');

// }else{
//     console.log('different');
// }

function compareObject(first,second){
    const firstKeys = object.keys(first);
    const secondkeys = object.keys(second);
    if(firstKeys.length === secondkeys.length){
        return true;
    }else{
        return false;
    }
}
const com = compareObject(first,second);
console.log(com);