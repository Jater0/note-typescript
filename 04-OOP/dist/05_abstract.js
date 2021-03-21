"use strict";
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        say() {
            console.log("Hello");
        }
    }
    const dog = new Dog("Frankie");
    dog.say();
})();
