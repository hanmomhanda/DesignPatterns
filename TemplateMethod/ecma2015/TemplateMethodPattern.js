'use strict';
class Template {
    constructor() {}

    showDailyLife() {
        this.wakeUp();
        this.go2Work();
        this.workHard();
        this.comeback2Home();
        this.go2Sleep();
    }

    wakeUp() {
        console.log("##### Wake Up by Alarm #####");
    }

    go2Work() {
        throw Error("This method should be overridden");
    }

    workHard() {
        throw Error("This method should be overridden");
    }

    comeback2Home() {
        throw Error("This method should be overridden");
    }

    go2Sleep() {
        console.log("***** Sweet Dream *****");
    }
}

class Developer extends Template {
    constructor() {
        super();
    }

    go2Work() {
        console.log("@@ Please, no error today~~");
    }

    workHard() {
        console.log("@@@@@ What happened? It worked yesterday~~");
    }

    comeback2Home() {
        console.log("@SuppressWarnings...");
    }
}

class Student extends Template {
    constructor() {
        super();
    }

    go2Work() {
        console.log("^^ Please, no exam today~~");
    }

    workHard() {
        console.log("^^^^^ Damn, I forgot again~~");
    }

    comeback2Home() {
        console.log("^ Don't worry, I am still young...");
    }
}

(() => {
    "use strict";

    console.log("======= Template for Developer =======");
    let developer = new Developer();
    developer.showDailyLife();

    console.log('\n');

    console.log("======= Template for Student =======");
    let student = new Student();
    student.showDailyLife();

})();