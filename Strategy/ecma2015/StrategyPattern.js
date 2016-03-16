"use strict";
class Fighter {

    constructor() {
        this.moveStrategy = null;
        this.attackStrategy = null;
    }

    setMoveStrategy(moveStrategy) {
        this.moveStrategy = moveStrategy;
    }

    setAttackStrategy(attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    move() {
        this.moveStrategy();
    }

    attack() {
        this.attackStrategy();
    }
}



let flyingStrategy = () => {
    console.log("FLYING...");
};

let walkingStrategy = () => {
    console.log("WALKING...");
};
//// 요구 사항 변경에 의해 나중에 추가
//let crawlingStrategy = () => {
//    console.log("CRAWLING...");
//};



let kickStrategy = () => {
    console.log("kick!!!");
};

let punchStrategy = () => {
    console.log("punch!!!");
};
//// 요구 사항 변경에 의해 나중에 추가
//let tackleStrategy = () => {
//    console.log("tackle!!!");
//};

(() => {
    let fighter = new Fighter();

    console.log("===== Flying + Kick =====");
    fighter.setMoveStrategy(flyingStrategy);
    fighter.setAttackStrategy(kickStrategy);
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.move();
    fighter.attack();


    console.log("===== Walking + Punch =====");
    fighter.setMoveStrategy(walkingStrategy);
    fighter.setAttackStrategy(punchStrategy);
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.move();
    fighter.attack();

    //// 요구 사항 변경에 의해 아래와 같은 새로운 전략이 추가되어도
    //// fighter.move(), fighter.attack() 은 변경되지 않음
    //console.log("===== Crawling + Tackle =====");
    //fighter.setMoveStrategy(crawlingStrategy);
    //fighter.setAttackStrategy(tackleStrategy);
    //// 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    //fighter.move();
    //fighter.attack();

})();