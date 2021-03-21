(() => {
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        abstract say(): void;
    }

    class Dog extends Animal {
        say() {
            console.log("Hello");
        }
    }

    const dog = new Dog("Frankie");
    dog.say()
})();