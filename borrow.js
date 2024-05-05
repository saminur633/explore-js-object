const KodomAli = {
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
const result = KodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000,
}
const result2 = KodomAli.exam.call(badamAli);
const badamMoney = KodomAli.treatdey.call(badamAli, 400,40)
console.log(badamMoney);
const badamMoney2 = KodomAli.treatdey.apply(badamAli, [400,40]);
console.log(badamMoney2);