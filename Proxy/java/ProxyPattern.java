package Proxy.java;

/**
 * Created by hanmomhanda on 2016-01-08.
 */
public class ProxyPattern {

    public static void main(String[] args) {

        System.out.println("======= Example 1 =======");
        Client client1 = new Client();
        client1.setTarget(new Proxy("Image01.jpg"));
        client1.doSomethingWithTarget();
        client1.doSomethingWithTarget();
        client1.doSomethingWithTarget();


        System.out.println("======= Example 2 =======");
        Client client2 = new Client();
        client2.setTarget(new Proxy("WallPaper.png"));
        client2.doSomethingWithTarget();
        client2.doSomethingWithTarget();
        client2.doSomethingWithTarget();
    }
}



class Client {
    // 클라이언트 입장에서는 Target만 알 뿐
    // 그것이 Proxy인지 RealTarget인지 알지 못한다.
    private Target target;

    public Client() {}

    public void setTarget(Target target) {
        this.target = target;
    }

    public void doSomethingWithTarget() {
        target.displayImage();
    }
}



interface Target {
    void displayImage();
}



class RealTarget implements Target {

    private String fileName;

    public RealTarget(String fileName) {
        this.fileName = fileName;
        loadImageFromDisk();
    }

    private void loadImageFromDisk() {
        System.out.println("Loading " + fileName);
    }

    @Override
    public void displayImage() {
        System.out.println("Displaying " + fileName);
    }
}



class Proxy implements Target {

    private String fileName;

    private Target realTarget;

    public Proxy(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void displayImage() {
        if (realTarget == null)
            realTarget = new RealTarget(fileName);
        realTarget.displayImage();
    }
}


