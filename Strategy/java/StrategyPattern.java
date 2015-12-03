package Strategy.java;

public class StrategyPattern {

    public static void main(String[] args) {

    }

}





interface MovingStrategy {
    void move();
}

class FlyingStrategy implements MovingStrategy {
    @Override
    public void move() {
        System.out.println("FLYING...");
    }
}

class WalkingStrategy implements MovingStrategy {
    @Override
    public void move() {
        System.out.println("WALKING...");
    }
}

// 나중에 추가
//class CrawolingStrategy implements MovingStrategy {
//    @Override
//    public void move() {
//        System.out.println("CRAWLING...");
//    }
//}





interface AttackStrategy {
    void attack();
}