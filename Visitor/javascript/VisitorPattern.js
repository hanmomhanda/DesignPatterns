var Element = function(name){
    this.name = name || "default";
};
Element.prototype.accept = function(visitor){
    visitor(this);
};
Element.prototype.doElementThing = function(){
    // JavaScript에서는 부모의 메서드를 override하도록
    // 특별히 정해진 방법이 없다.
    throw Error("This method should be overridden");
};

var BracketElement = function(name){
    Element.call(this, name);
};
BracketElement.prototype = Object.create(Element.prototype);
BracketElement.prototype.constructor = BracketElement;
BracketElement.prototype.doElementThing = function(){
    return "<" + this.name + ">";
};

var CurlyBraceElement = function(name){
    Element.call(this, name);
};
CurlyBraceElement.prototype = Object.create(Element.prototype);
CurlyBraceElement.prototype.constructor = CurlyBraceElement;
CurlyBraceElement.prototype.doElementThing = function(){
    return "{" + this.name + "}";
};

// 요구사항 변경으로 나중에 추가
//var AsteriskElement = function(name){
//    Element.call(this, name);
//};
//AsteriskElement.prototype = Object.create(Element.prototype);
//AsteriskElement.prototype.constructor = AsteriskElement
//AsteriskElement.prototype.doElementThing = function(){
//    return "*" + this.name + "*";
//};


// Visitor는 어차피 함수 하나이고,
// JavaScript는 함수를 파라미터로 넘길 수 있으므로
// Java 처럼 굳이 interface를 만들 필요 없이 그냥 함수로만 작성해도 된다.
// 하지만 accept에서 형 검사를 할 수 있도록 visitor도 객체화 하는 것이 좋을 수도 있다.
var lowercaseVisitor = function(element) {
    console.log('ElementName : ' +  element.doElementThing().toLowerCase());
};

var uppercaseVisitor = function(element) {
    console.log('ElementName : ' +  element.doElementThing().toUpperCase());
};



(function(){
    var elements = [], i;

    elements.push(new BracketElement("Bracket1"));
    elements.push(new CurlyBraceElement("CurlyBrace1"));
    elements.push(new CurlyBraceElement("CurlyBrace2"));
    elements.push(new BracketElement("Bracket2"));
    elements.push(new CurlyBraceElement("CurlyBrace3"));
    elements.push(new BracketElement("Bracket3"));
    elements.push(new BracketElement("Bracket4"));
    // 요구사항 변경으로 나중에 추가
    //elements.push(new AsteriskElement("Asterisk1"));
    elements.push(new CurlyBraceElement("CurlyBrace4"));

    console.log("========== Lowercase Visitor ==========");
    // 요구사항 변경으로 Element의 child가 새로 추가되어도
    // 아래 코드는 변하지 않음
    for(i in elements){
        elements[i].accept(lowercaseVisitor);
    }

    console.log("========== Uppercase Visitor ==========");
    // 요구사항 변경으로 Element의 child가 새로 추가되어도
    // 아래 코드는 변하지 않음
    for(i in elements){
        elements[i].accept(uppercaseVisitor);
    }

})();

