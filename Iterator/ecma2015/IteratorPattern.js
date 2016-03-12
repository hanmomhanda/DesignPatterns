"use strict";
class Book {
    constructor(name) {
        this.name = name;
    }
}

class Iterable {
    constructor(object) {
        this.object = object;
        //console.log(Object.getOwnPropertySymbols(this.object));
    }

    [Symbol.iterator]() {
        console.log('iterator');
        const keys = Object.keys(this.object);
        const len = keys.length;
        let done = false;
        let current = 0;
        const next = () => {
            if (current >= len) done = true;
            return {
                done,
                value: this.object[keys[current++]]
            };
        };
        return { next }; // next 메서드를 가진 객체가 iterator 객체
    }

    // 두 개의 [Symbol.iterator] 중 나중에 선언된 것이
    // 먼저 선언된 것을 덮어씀
    *[Symbol.iterator]() {
        console.log('generator');
        for (let key in this.object)
            yield this.object[key];
    }
}

(() => {
    "use strict";
    console.log("======= ArrayAggregate =======");
    let arrayAggregate = [];
    arrayAggregate.push(new Book("살아있는 것은 다 행복하라"));
    arrayAggregate.push(new Book("60분 부모"));
    arrayAggregate.push(new Book("리만가설"));
    arrayAggregate.push(new Book("건투를 빈다"));

    for (let item of arrayAggregate) {
        console.log(item);
    }

    console.log("======= ObjectAggregate =======");
    let objectAggregate = {};
    objectAggregate['0'] = new Book("살아있는 것은 다 행복하라");
    objectAggregate['1'] = new Book("60분 부모");
    objectAggregate['2'] = new Book("리만가설");
    objectAggregate['3'] = new Book("건투를 빈다");

    let iterableObject = new Iterable(objectAggregate);

    for (let item of iterableObject) {
        console.log(item);
    }

    console.log('+++++++++++++++++++++');
    // 원래 Array에 있는 [Symbol.iterator]도 덮어써짐
    let test = new Iterable(arrayAggregate);

    for (let item of test) {
        console.log(item);
    }

    console.log('+++++++++++++++++++++');
    for (let item of arrayAggregate) {
        console.log(item);
    }
})();
