(() => {
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        say() {
            console.log("Animal Say...");
        }
    }

    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }

        say() {
            super.say()
            console.log("Hello");
        }
    }
    const dog = new Dog("Frankie", 23);
    dog.say()
})();