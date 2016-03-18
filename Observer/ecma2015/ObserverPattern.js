'use strict';
class Subject {
    constructor(name) {
        this.name = name || 'default';
        this.observers = new Map();
    }
    
    addObserver(observer) {
        this.observers.set(observer.name, observer);
    }
    
    removeObserver(observer) {
        this.observers.delete(observer.name);
    }
    
    saySomething(something) {
        console.log(`+++++ ${this.name} : ${something} +++++`);
        this.notifyAll();
    }
    
    notifyAll() {
        // 아래 코드는 브라우저에서 정상동작하지만,
        // node 5.9.0에서는 동작하지 않음
        //for (let [k, v] of this.observers) {
        //    v.notified();
        //}

        for (let observer of this.observers) {
            observer[1].notified();
        }

    }
}

class Observer {
    constructor(name) {
        this.name = name || 'default';
    }
    
    notified() {
        throw new Error("This method should be overridden.");
    }
}

class Child extends Observer {
    constructor(name) {
        super(name);
    }
    
    notified() {
        console.log(`${this.name}이(가) 뒤에 가서 의자에 앉습니다.`);
    }
}

(() => {
    let daddy = new Subject('오명운');
    let yuna = new Child('오윤아');
    let yoonsuk = new Child('오윤석');

    daddy.addObserver(yuna);
    daddy.addObserver(yoonsuk);

    daddy.saySomething('뒤에 가서 봐라~');

    daddy.removeObserver(yuna);

    daddy.saySomething('어허~');
})();