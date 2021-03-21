// 定义 class
class Person {
    name: string = "Jater";
    // readonly: 只读
    readonly age: number = 21;
    static gender: string = "male";

    hello() {
        console.log("Hello");
    }

    static smile() {
        console.log("Smile");
    }
}

const person = new Person();
console.log(person.name);

console.log(Person.gender);

person.name = "Frankie"
console.log(person.name);

person.hello()

Person.smile()