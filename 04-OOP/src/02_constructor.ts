class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    say() {
        console.log(`${this.name} is ${this.age}`);
    }
}

const dog = new Animal("Dog", 10)
dog.say()
const duck = new Animal("Duck", 1)
duck.say()
const brid = new Animal("Brid", 3)
brid.say()
const cat = new Animal("Cat", 15)
cat.say()