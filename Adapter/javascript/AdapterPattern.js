// Client가 사용하는 New type인 Target
var Target = function(){};
Target.prototype.printWeak = function(){
    throw Error("printWeak method should be overridden");
};
Target.prototype.printStrong = function(){
    throw Error("printStrong method should be overridden");
};



// Old type인 Adaptee를 New type인 Target에 맞추는 Adapter
var Adapter = function(adaptee){
    this.adaptee = adaptee;
};
Adapter.prototype = Object.create(Target.prototype);
Adapter.prototype.constructor = Adapter;
Adapter.prototype.printWeak = function(){
    this.adaptee.printParen();
};
Adapter.prototype.printStrong = function(){
    this.adaptee.printAsterisk();
};



// Adapter에 의해 New type으로 맞춰질 Old type
var Adaptee = function(message){
    this.message = message;
};
Adaptee.prototype.printParen = function(){
    console.log("(" + this.message + ")");
};
Adaptee.prototype.printAsterisk = function(){
    console.log("*" + this.message + "*");
};



(function(){
    var target = new Adapter(new Adaptee("Adaptee is adapted to Target by Adapter"));
    target.printWeak();
    target.printStrong();
})();
