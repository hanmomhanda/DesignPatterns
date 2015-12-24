var Iterator = function(){};
Iterator.prototype.hasNext = function(){
    throw new Error("Iterator.hasNext() must be overridden");
};
Iterator.prototype.next = function(){
    throw new Error("Iterator.next() must be overridden");
};
// BookShelfIterator는 BookShelf의 내부를 안다고 가정
// 그렇지 않고 BookShelf의 인터페이스에 의존하면
// 인터페이스 항목이 너무 많아짐
var BookShelfIterator = function(aggregate){
    this.aggregate = aggregate;
};
BookShelfIterator.prototype = Object.create(Iterator.prototype);
BookShelfIterator.prototype.constructor = BookShelfIterator;
BookShelfIterator.prototype.hasNext = function(){
    return this.aggregate.getCursor() < this.aggregate.getSize();
};
BookShelfIterator.prototype.next = function(){
    return this.aggregate.getElementAt(this.aggregate.getCursor());
};



var ArrayAggregate = function(){
    var arr = [];
    var cursor = 0;
    var inc = function(){
        cursor++;
    };

    return {
        getElementAt: function(cursor){
            var element = arr[cursor] || null;
            inc();
            return element;
        },
        append: function(element){
            arr.push(element);
        },
        getSize: function(){
            return arr.length;
        },
        getCursor: function(){
            return cursor;
        },
        iterator: function(){
            return new BookShelfIterator(this);
        }
    }
};

var ObjectAggregate = function(){
    var obj = {};
    var cursor = 0;
    var inc = function(){
        cursor++;
    };

    return {
        getElementAt: function(cursor){
            var element = obj[cursor] || null;
            inc();
            return element;
        },
        append: function(element){
            obj[this.getSize()] = element;
        },
        getSize: function(){
            return Object.keys(obj).length;
        },
        getCursor: function(){
            return cursor;
        },
        iterator: function(){
            return new BookShelfIterator(this);
        }
    }
};



var Book = function(name){
    this.name = name;
};

(function(){
    console.log("======= ArrayAggregate =======");
    var bookShelf = new ArrayAggregate();
    bookShelf.append(new Book("살아있는 것은 다 행복하라"));
    bookShelf.append(new Book("60분 부모"));
    bookShelf.append(new Book("리만가설"));
    bookShelf.append(new Book("건투를 빈다"));

    // bookShelf가 array로 되어 있는지, map으로 되어있는지와
    // 무관하게 반복 방법은 동일
    var it = bookShelf.iterator();
    while (it.hasNext()){
        console.log(it.next().name);
    };

    console.log("======= ObjectAggregate =======");
    bookShelf = new ObjectAggregate();
    bookShelf.append(new Book("살아있는 것은 다 행복하라"));
    bookShelf.append(new Book("60분 부모"));
    bookShelf.append(new Book("리만가설"));
    bookShelf.append(new Book("건투를 빈다"));

    // bookShelf가 array로 되어 있는지, map으로 되어있는지와
    // 무관하게 반복 방법은 동일
    it = bookShelf.iterator();
    while (it.hasNext()){
        console.log(it.next().name);
    };
})();
