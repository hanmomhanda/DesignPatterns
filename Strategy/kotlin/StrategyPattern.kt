package Strategy.kotlin

/**
 * Created by hanmomhanda on 2016-06-25.
 */
fun main(args: Array<String>) {

    val fighter: Fighter = Fighter()

    println("===== Flying + Kick =====")
    fighter.moveStrategy = FlyingStrategy()
    fighter.attackStrategy = KickStrategy()
    fighter.move()
    fighter.attack()

    println("===== Walking + Punch =====")
    fighter.moveStrategy = WalkingStrategy()
    fighter.attackStrategy = PunchStrategy()
    fighter.move()
    fighter.attack()

    // 요구 사항 변경에 의해 새로운 전략이 추가되어도
    // fighter.move(), fighter.attack()은 변하지 않음
    println("===== Crawling + Tackle =====")
    fighter.moveStrategy = CrawlingStrategy()
    fighter.attackStrategy = TackleStrategy()
    fighter.move()
    fighter.attack()

    println("===== null + null =====")
    fighter.moveStrategy = null
    fighter.attackStrategy = null
    fighter.move()
    fighter.attack()

}

class Fighter() {

    var moveStrategy : MoveStrategy? = null
    var attackStrategy : AttackStrategy? = null

    fun move() = moveStrategy?.move()

    fun attack() = attackStrategy?.attack()

}

interface MoveStrategy {

    fun move()
}

class FlyingStrategy : MoveStrategy {
    override fun move() {
        println("FLYING...")
    }
}

class WalkingStrategy : MoveStrategy {
    override fun move() {
        println("WALKING...")
    }
}

// 요구사항 변경에 의해 나중에 추가
class CrawlingStrategy : MoveStrategy {
    override fun move() {
        println("CRAWLING...")
    }
}

interface AttackStrategy {
    fun attack()
}

class KickStrategy : AttackStrategy {
    override fun attack() {
        println("kick!!!")
    }

}

// 요구사항 변경에 의해 나중에 추가
class TackleStrategy : AttackStrategy {
    override fun attack() {
        println("tackle!!")
    }
}

class PunchStrategy : AttackStrategy {
    override fun attack() {
        println("punch!!!")
    }

}