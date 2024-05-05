const student = {
    name: 'kodom ali',
    money : 50000,
    study: 'math',
    subjects: ['calculas' , 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatdey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('calculas');
// console.log(reExam)
const remaining = student.treatdey(1000, 100);
console.log(remaining)