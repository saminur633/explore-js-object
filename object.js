// create object literals
const player = {} ;
player.name = 'small nirob'
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat')
}
console.log(player);
player.bat();
const student = {
    name: 'pandey',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 1000000
}
// obeject constructor
const person = new Object();
console.log(person);

// object create method
const item = object.create(student);
console.log(atel.friend);


// 4.class
class person1 {
    name = 'abul';
    address = 'sador ghat';
    constructor(age){
        this.age = age;
    }

}
const person1 = new person(56);
console.log(person1);

// 5.Function
function car(model, price){
    this.model = model;
    this.price = price;

}
const tesla = new car ('elon', 32);