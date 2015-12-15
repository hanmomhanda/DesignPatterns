package Adapter.java;

public class AdapterPattern {

    public static void main(String[] args) {
        Target target = new Adapter(new Adaptee("Adaptee is adapted to Target by Adapter"));
        target.printWeak();
        target.printStrong();
    }
}


// Client가 사용하는 New type인 Target
interface Target {

    void printWeak();

    void printStrong();
}



// Old type인 Adaptee를 New type인 Target에 맞추는 Adapter
class Adapter implements Target {

    private Adaptee old;

    public Adapter(Adaptee old) {
        this.old = old;
    }

    @Override
    public void printWeak() {
        this.old.printParen();
    }

    @Override
    public void printStrong() {
        this.old.printAster();
    }

}


// Adapter에 의해 New type으로 맞춰질 Old type
class Adaptee {

    private String s;

    public Adaptee(String s) {
        this.s = s;
    }

    public void printParen() {
        System.out.println("("+s+")");
    }

    public void printAster() {
        System.out.println("*"+s+"*");
    }
}
