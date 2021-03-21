(function () {
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.age = age;
            this.name = name;
        }
        say() {
            console.log("Animal Say...");
        }
    }
    class Dog extends Animal {
        say() {
            console.log("旺旺旺");
        }
        run() {
            console.log("Dog is running");
        }
    }
    class Cat extends Animal {

    }
    const dog = new Dog("Black", 21);
    const cat = new Cat("AA", 11);
    dog.say()
    dog.run()
    cat.say()
})();