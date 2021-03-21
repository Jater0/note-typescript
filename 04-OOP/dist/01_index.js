"use strict";
// 定义 class
class Person {
    constructor() {
        this.name = "Jater";
        // readonly: 只读
        this.age = 21;
    }
    hello() {
        console.log("Hello");
    }
    static smile() {
        console.log("Smile");
    }
}
Person.gender = "male";
const person = new Person();
console.log(person.name);
console.log(Person.gender);
person.name = "Frankie";
console.log(person.name);
person.hello();
Person.smile();
