// 탐색기 아이템(파일, 폴더 등)의 부모가 되는 Component
var Component = function(name){
    this.name = name || "default";
};
Component.prototype.getValue = function(){
    // JavaScript에서는 부모의 메서드를 override하도록
    // 강제할 수 있는 방법이 없다.
    // 따라서 override 안된 경우 강제로 에러 처리
    throw Error("This method should be overridden");
};

// 탐색기의 말단 파일 역할을 하는 Leaf
var Leaf = function(name){
    Component.call(this, name);
};
Leaf.prototype = Object.create(Component.prototype);
Leaf.prototype.constructor = Leaf;
Leaf.prototype.getValue = function(){
    return "(" + this.name + ")";
};

// 탐색기의 폴더 역할을 하는 Composite
var Composite = function(name){
    Component.call(this, name);
    this.components = [];
};
Composite.prototype = Object.create(Component.prototype);
Composite.prototype.constructor = Composite;
Composite.prototype.add = function(component){
    if(component && component instanceof Component) this.components.push(component);
    return this;
};
Composite.prototype.getValue = function(){
    var result = '', i, len;
    result += this.name + ":[";
    for(i = 0, len = this.components.length ; i < len ; i++){
        result += this.components[i].getValue(); // Component의 다형성을 이용해서 조건문을 제거
        if(i < len - 1) result += ',';
    }
    result += ']';
    return result;
};

// 탐색기의 바로가기 역할을 하는 Link (나중에 추가)
// var Link = function(name) {
//     Component.call(this, name);
// }
// Leaf.prototype = Object.create(Component.prototype);
// Leaf.prototype.getValue = function() {
//     return "~" + this.name + "~";
// };



(function() {
    var result;

    var leaf1 = new Leaf('leaf1');
    var leaf2 = new Leaf('leaf2');
    var leaf3 = new Leaf('leaf3');
    var leaf4 = new Leaf('leaf4');

    // var link1 = new Link('link1');

    var composite1 = new Composite('composite1');
    var composite2 = new Composite('composite2');

    var composite3 = new Composite('composite3');

    composite1.add(leaf1).add(leaf2);
    // composite1.add(link1);
    composite2.add(leaf3).add(leaf4);

    composite3.add(leaf1)
              .add(composite1)
              .add(leaf2)
              .add(leaf3)
        .add([0])
              .add(composite2)
              .add(leaf4);

    // 탐색기에 폴더와 파일 외에
    // 바로가기라는 새로운 아이템이 추가되어도
    // 아래의 코드는 변경할 필요가 없다.
    result = composite3.getValue();

    console.log(result);
})();
