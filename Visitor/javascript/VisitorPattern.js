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
BracketElement.prototype.doElementThing = function(){
    return "<" + this.name + ">";
};

var CurlyBraceElement = function(name){
    Element.call(this, name);
};
CurlyBraceElement.prototype = Object.create(Element.prototype);
CurlyBraceElement.prototype.doElementThing = function(){
    return "{" + this.name + "}";
};





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
    elements.push(new BracketElement("Bracket4"));
    elements.push(new BracketElement("Bracket5"));
    elements.push(new CurlyBraceElement("CurlyBrace4"));

    console.log("========== Lowercase Visitor ==========");

    for(i in elements){
        elements[i].accept(lowercaseVisitor);
    }

    console.log("========== Uppercase Visitor ==========");

    for(i in elements){
        elements[i].accept(uppercaseVisitor);
    }

})();

