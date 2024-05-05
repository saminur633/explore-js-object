const numbers = [12,33,44,55];
// for(const number of numbers){
//     console.log(number);
// }
// 1. for of can not used with objects
const bottle = {color: 'yellow', price: 50, iscleaned: true, capacity: 1};
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
// 3 ways to read objects properties
// bottle.color
// bottle['color']
// bottle[key]
for(const key of keys){
    // console.log(key, bottle[key]);
}
//  for in loop
for (const key in bottle){
    console.log(key, bottle[key]);
}