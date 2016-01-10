/**
 * Created by hanmomhanda on 2016-01-11.
 */
var Target = function(fileName) {
    this.fileName = fileName || "default";
};
Target.prototype.displayImage = function() {
    throw new Error("This method should be overridden");
};



var RealTarget = function(fileName) {
    Target.call(this, fileName);
    console.log("Loading " + fileName);
};
RealTarget.prototype = Object.create(Target.prototype);
RealTarget.prototype.constructor = RealTarget;
RealTarget.prototype.displayImage = function() {
    console.log("Displaying " + this.fileName);
};



var Proxy = function(fileName) {
    this.realTarget = null;
    Target.call(this, fileName);
};
Proxy.prototype = Object.create(Target.prototype);
Proxy.prototype.constructor = Proxy;
Proxy.prototype.displayImage = function() {
    if (!this.realTarget)
        this.realTarget = new RealTarget(this.fileName);
    this.realTarget.displayImage();
};



var Client = function(target) {
    var that = this;
    this.target = target;
    this.doSomethingWithTarget = function() {
        that.target.displayImage();
    };
};

(function() {
    var client1, client2;
    console.log("======= Example 1 =======");
    client1 = new Client(new Proxy("Image01.jpg"));
    client1.doSomethingWithTarget();
    client1.doSomethingWithTarget();
    client1.doSomethingWithTarget();

    console.log("======= Example 2 =======");
    client2 = new Client(new Proxy("WallPaper.png"));
    client2.doSomethingWithTarget();
    client2.doSomethingWithTarget();
    client2.doSomethingWithTarget();
})();
