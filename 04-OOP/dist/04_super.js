"use strict";
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log("Animal Say...");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        say() {
            super.say();
            console.log("Hello");
        }
    }
    const dog = new Dog("Frankie", 23);
    dog.say();
})();
