(() => {
    interface Animal {
        name: string;
        age: number;
    }
    interface Animal {
        gender: string;
        say(): string;
    }
    class Dog implements Animal {
        name: string;
        age: number;
        gender: string;
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        say(): string {
            return `${this.name}: ${this.age} & ${this.gender}`
        }
    }
    const dog = new Dog("Frankie", 23, "male");
    console.log(dog);
})();