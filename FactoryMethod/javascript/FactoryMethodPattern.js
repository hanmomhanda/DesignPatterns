var Factory = function(){};
Factory.prototype.create = function(owner){
    var p = this.createProduct(owner);
    this.registerProduct(p);
    return p;
};
Factory.prototype.createProduct = function(owner){
    throw new Error("This method should be overridden");
};
Factory.prototype.registerProduct = function(product){
    throw new Error("This method should be overridden");
};



var Product = function(){};
Product.prototype.use = function(){
    throw new Error("This method should be overridden");
};

var IDCard = function(owner){
    this.owner = owner;
    console.log(owner + "의 카드를 만듭니다.");

    this.getOwner = function(){
        return owner;
    };
};
IDCard.prototype = Object.create(Product.prototype);
IDCard.prototype.constructor = IDCard;
IDCard.prototype.use = function(){
    console.log(this.owner + "의 카드를 사용합니다.");
};



var IDCardFactory = function(){
    this.owners = [];
};
IDCardFactory.prototype = Object.create(Factory.prototype);
IDCardFactory.prototype.constructor = IDCardFactory;
IDCardFactory.prototype.createProduct = function(owner){
    return new IDCard(owner);
};
IDCardFactory.prototype.registerProduct = function(product){
    var owner = product.getOwner();
    this.owners.push(owner);
    console.log(owner + "의 카드가 등록되었습니다.");
};



(function(){
    var factory = new IDCardFactory();
    var p1 = factory.create("Phoebe");
    var p2 = factory.create("Claudia");

    p1.use();
    p2.use();

    // IDCard가 아닌 다른 Product,
    // IDCardFactory가 아닌 다른 Factory를 추가로 만들더라도
    // 기존 코드 호출 방식 달라지지 않음
})();