package Strategy.java;

public class StrategyPattern {

    public static void main(String[] args) {
        Fighter fighter = new Fighter();

        FlyingStrategy flyingStrategy = new FlyingStrategy();
        WalkingStrategy walkingStrategy = new WalkingStrategy();

        KickStrategy kickStrategy = new KickStrategy();
        PunchStrategy punchStrategy = new PunchStrategy();


        System.out.println("===== Flying + Kick =====");
        fighter.setMoveStrategy(flyingStrategy);
        fighter.setAttackStrategy(kickStrategy);
        // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
        fighter.move();
        fighter.attack();

        System.out.println("===== Walking + Punch =====");
        fighter.setMoveStrategy(walkingStrategy);
        fighter.setAttackStrategy(punchStrategy);
        // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
        fighter.move();
        fighter.attack();

//        // 요구 사항 변경에 의해 새로운 전략이 추가되어도
//        //  fighter.move(), fighter.attack()은 변하지 않음
//        System.out.println("===== Crawl + Tackle =====");
//        fighter.setMoveStrategy(new CrawlingStrategy());
//        fighter.setAttackStrategy(new TackleStrategy());
//        // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
//        fighter.move();
//        fighter.attack();
    }
}



class Fighter {
    private MoveStrategy moveStrategy;
    private AttackStrategy attackStrategy;

    public void setMoveStrategy(MoveStrategy moveStrategy) {
        this.moveStrategy = moveStrategy;
    }

    public void setAttackStrategy(AttackStrategy attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    public void move() {
        moveStrategy.move();
    }

    public void attack() {
        attackStrategy.attack();;
    }
}



interface MoveStrategy {
    void move();
}

class FlyingStrategy implements MoveStrategy {
    @Override
    public void move() {
        System.out.println("FLYING...");
    }
}

class WalkingStrategy implements MoveStrategy {
    @Override
    public void move() {
        System.out.println("WALKING...");
    }
}

//// 요구사항 변경에 의해 나중에 추가
//class CrawlingStrategy implements MoveStrategy {
//    @Override
//    public void move() {
//        System.out.println("CRAWLING...");
//    }
//}



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

//// 요구사항 변경에 의해 나중에 추가
//class TackleStrategy implements AttackStrategy {
//    @Override
//    public void attack() {
//        System.out.println("tackle!!!");
//    }
//}