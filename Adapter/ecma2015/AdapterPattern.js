'use strict';
class Target {
    printWeak() {
        throw Error("printWeak method should be overridden");
    }

    printStrong() {
        throw Error("printStrong method should be overridden");
    }
}

class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    printWeak() {
        this.adaptee.printParen();
    }

    printStrong() {
        this.adaptee.printAsterisk();
    }
}

class Adaptee {
    constructor(message) {
        this.message = message;
    }

    printParen() {
        console.log(`(${this.message})`);
    }

    printAsterisk() {
        console.log(`*${this.message}*`);
    }
}

(()=> {
    "use strict";
    let target = new Adapter(new Adaptee("Adaptee is adapted to Target by Adapter"));
    target.printWeak();
    target.printStrong();
})();