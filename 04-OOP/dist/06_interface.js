"use strict";
(() => {
    class Dog {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        say() {
            return `${this.name}: ${this.age} & ${this.gender}`;
        }
    }
    const dog = new Dog("Frankie", 23, "male");
    console.log(dog);
})();
