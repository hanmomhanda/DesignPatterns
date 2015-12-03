package Strategy.java;

public class StrategyPattern {

    public static void main(String[] args) {
        Fighter fighter = new Fighter();

        FlyingStrategy flyingStrategy = new FlyingStrategy();
        WalkingStrategy walkingStrategy = new WalkingStrategy();

        KickStrategy kickStrategy = new KickStrategy();
        PunchStrategy punchStrategy = new PunchStrategy();


        fighter.setMovingStrategy(flyingStrategy);
        fighter.setAttackStrategy(kickStrategy);
        System.out.println("===== Flying + Kick =====");
        // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
        fighter.move();
        fighter.attack();

        fighter.setMovingStrategy(walkingStrategy);
        fighter.setAttackStrategy(punchStrategy);
        System.out.println("===== Walking + Punch =====");
        // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
        fighter.move();
        fighter.attack();

        // 나중에 추가
        fighter.setMovingStrategy(new CrawlingStrategy());
        fighter.setAttackStrategy(new TackleStrategy());
        System.out.println("===== Crawl + Tackle =====");
        // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
        fighter.move();
        fighter.attack();
    }
}





class Fighter {
    private MovingStrategy movingStrategy;
    private AttackStrategy attackStrategy;

    public void setMovingStrategy(MovingStrategy movingStrategy) {
        this.movingStrategy = movingStrategy;
    }

    public void setAttackStrategy(AttackStrategy attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    public void move() {
        movingStrategy.move();
    }

    public void attack() {
        attackStrategy.attack();;
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
class CrawlingStrategy implements MovingStrategy {
    @Override
    public void move() {
        System.out.println("CRAWLING...");
    }
}





interface AttackStrategy {
    void attack();
}

class KickStrategy implements AttackStrategy {
    @Override
    public void attack() {
        System.out.println("kick!!!");
    }
}

class PunchStrategy implements AttackStrategy {
    @Override
    public void attack() {
        System.out.println("punch!!!");
    }
}

// 나중에 추가
class TackleStrategy implements AttackStrategy {
    @Override
    public void attack() {
        System.out.println("tackle!!!");
    }
}