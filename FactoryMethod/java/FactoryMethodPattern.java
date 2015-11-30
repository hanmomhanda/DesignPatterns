package FactoryMethod.java;

import java.util.ArrayList;
import java.util.List;

public class FactoryMethodPattern {
    public static void main(String[] args) {
        Factory factory = new IDCardFactory();
        Product p1 = factory.create("Phobe");
        Product p2 = factory.create("Claudia");

        p1.use();
        p2.use();

    }
}





abstract class Factory {
    public final Product create(String owner) {
        Product p = createProduct(owner);
        registerProduct(p);
        return p;
    }

    protected abstract Product createProduct(String owner);
    protected abstract void registerProduct(Product product);
}

class IDCardFactory extends Factory {

    private List<String> owners = new ArrayList();

    @Override
    protected Product createProduct(String owner) {
        return new IDCard(owner);
    }

    @Override
    protected void registerProduct(Product product) {
        owners.add(((IDCard)product).getOwner());
    }

    public List getOwners() {
        return owners;
    }
}




interface Product {
    void use();
}

class IDCard implements Product {

    private String owner;

    public IDCard(String owner) {
        System.out.println(owner +"의 카드를 만듭니다.");
        this.owner = owner;
    }

    @Override
    public void use() {
        System.out.println(owner +"의 카드를 사용합니다.");
    }

    public String getOwner() {
        return owner;
    }

}