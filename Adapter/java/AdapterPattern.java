package Adapter.java;

public class AdapterPattern {

    public static void main(String[] args) {
        Target target = new Adapter("Adapter Pattern");
        target.printWeak();
        target.printStrong();
    }
}



interface Target {

    void printWeak();

    void printStrong();
}



class Adapter implements Target {

    private Adaptee orgin;

    public Adapter(String s) {
        this.orgin = new Adaptee(s);
    }

    @Override
    public void printWeak() {
        this.orgin.printParen();
    }

    @Override
    public void printStrong() {
        this.orgin.printAster();
    }

}



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
