package Proxy.java;

/**
 * Created by hanmomhanda on 2016-01-08.
 */
public class ProxyPattern {

    public static void main(String[] args) {

        System.out.println("======= Example 1 =======");
        Target image1 = new Proxy("Image01.jpg");
        image1.displayImage();
        image1.displayImage();
        image1.displayImage();

        System.out.println("======= Example 2 =======");
        Target image2 = new Proxy("WallPaper.png");
        image2.displayImage();
        image2.displayImage();
        image2.displayImage();
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


