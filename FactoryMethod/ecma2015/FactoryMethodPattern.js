'use strict';
class Factory {
    create(owner) {
        let product = this.createProduct(owner);
        this.registerProduct(product);
        return product;
    }

    createProduct(owner) {
        throw new Error("This method must be overrided.");
    }

    registerProduct(product) {
        throw new Error("This method must be overrided.");
    }
}

class Product {
    constructor(owner) {
        this.owner = owner;
    }
    use() {
        throw new Error("This method must be overrided.");
    }

    getOwner() {
        return this.owner;
    }
}

class IDCard extends Product {

    constructor(owner) {
        super(owner);
        console.log(`${owner}의 카드를 만듭니다.`);
    }

    use() {
        console.log(`${this.owner}의 카드를 사용합니다.`)
    }
}

class IDCardFactory extends Factory {
    constructor() {
        super();
        this.owners = [];
    }
    createProduct(owner) {
        return new IDCard(owner);
    }

    registerProduct(product) {
        let owner = product.getOwner();
        this.owners.push(owner);
        console.log(`${owner}의 카드가 등록되었습니다.`);
    }
}

(() => {
    let factory = new IDCardFactory();
    let product1 = factory.create("Phoebe");
    let product2 = factory.create("Claudia");

    product1.use();
    product2.use();
})();