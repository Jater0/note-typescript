function fn<T>(a: T): T {
    return a;
}

fn("Jater");
fn<string>("Jater");

function fun2<T, K>(a: T, b: K): T {
    return a;
}

fun2<string, number>("Jater", 123)

interface Inter {
    length: number;
}

function fun3<T extends Inter>(a: T): number {
    return a.length;
}

fun3("123");

class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>("Jater")