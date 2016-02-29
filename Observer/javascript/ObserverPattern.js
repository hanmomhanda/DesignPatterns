function Subject(name) {
    this.name = name || "default";
    this.observers = {};
}

Subject.prototype.addObserver = function(observer) {
    this.observers[observer.name] = observer;
};
Subject.prototype.removeObserver = function(observer) {
    delete this.observers[observer.name];
};
Subject.prototype.saySomething = function(something) {
    console.log("+++++" + this.name + " : " + something + "+++++");
    this.notifyAll();
};
Subject.prototype.notifyAll = function() {
    var i;
    for (i in this.observers) {
        this.observers[i].notified();
    }
};

function Observer(name) {
    this.name = name || "default";
}
Observer.prototype.notified = function() {
    throw new Error("This method should be overridden.");
};

function Child(name) {
    Observer.call(this, name);
}
Child.prototype = Object.create(Observer.prototype);
Child.prototype.notified = function() {
    console.log(this.name + '이(가) 뒤에 가서 의자에 앉습니다.');
};

(function() {
    var daddy = new Subject('오명운');
    var yuna = new Child('오윤아');
    var yoonsuk = new Child('오윤석');

    daddy.addObserver(yuna);
    daddy.addObserver(yoonsuk);

    daddy.saySomething('뒤에 가서 봐라~');

    daddy.removeObserver(yuna);

    daddy.saySomething('어허~');
})();


//'strict'
//class Subject {
//    constructor(name) {
//        this.name = name;
//        this.observers = new Set();
//    }
//
//    addObserver(observer) {
//        this.observers.add(observer);
//    }
//
//    removeObserver(observer) {
//        this.observers.delete(observer);
//    }
//
//    saySomething(something) {
//        console.log("+++++" + this.name + " : " + something + "+++++");
//        notifyAll();
//    }
//
//    notifyAll() {
//        for (let observer in this.observers) {
//            observer.notified();
//        }
//    }
//}
//
//class Child {
//    constructor(name) {
//        this.name = name;
//    }
//
//    notified() {
//        console.log(name + '이(가) 뒤에 가서 의자에 앉습니다.');
//    }
//}
//
//let daddy = new Subject('오명운');
//let yuna = new Child('오윤아');
//let yoonsuk = new Child('오윤석');
//
//daddy.addObserver(yuna);
//daddy.addObserver(yoonsuk);
//
//daddy.saySomething('뒤에 가서 봐라~');
//
//daddy.removeObserver(yuna);
//
//daddy.saySomething('어허~');