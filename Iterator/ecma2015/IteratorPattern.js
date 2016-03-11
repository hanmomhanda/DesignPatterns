"use strict";
class Book {
    constructor(name) {
        this.name = name;
    }
}

class Iterable {
    constructor(object) {
        this.object = object;
        this.object[Symbol.iterator] = () => {
            const keys = Object.keys(this);
            const len = keys.length;
            let isDone = false;
            let count = 0;
            let next = () => {
                if (count >= len)
                    isDone = true;
                let iterator = { done: isDone, value: this[keys[count++]] };
                return iterator;
            };
            return { next };
        }
    }

    getIterable() {
        return this.object;
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
    const iterableObject = new Iterable(objectAggregate).getIterable();

    let i = 0;
    for (let item of iterableObject) {
        console.log(item);
    }
    console.log(objectAggregate);
})();