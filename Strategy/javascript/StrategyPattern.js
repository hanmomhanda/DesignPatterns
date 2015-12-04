var Fighter = function() {
    var _movingStrategy, _attackStrategy;
    return {
        setMovingStrategy: function(movingStrategy) {
            _movingStrategy = movingStrategy;
        },
        setAttackingStrategy: function(attackStrategy) {
            _attackStrategy = attackStrategy;
        },
        move: function() {
            _movingStrategy();
        },
        attack: function() {
            _attackStrategy();
        }
    }
};



var flyingStrategy = function() {
    console.log("FLYING...");
};
var walkingStrategy = function() {
    console.log("WALKING...");
};
var crawlingStrategy = function() {
    console.log("CRAWLING...");
};



var kickStrategy = function() {
    console.log("kick!!!");
};
var punchStrategy = function() {
    console.log("punch!!!");
};
var tackleStrategy = function() {
    console.log("tackle!!!");
};



(function() {
    var fighter = new Fighter();

    fighter.setMovingStrategy(flyingStrategy);
    fighter.setAttackingStrategy(kickStrategy);
    console.log("===== Flying + Kick =====");
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.move();
    fighter.attack();

    fighter.setMovingStrategy(walkingStrategy);
    fighter.setAttackingStrategy(punchStrategy);
    console.log("===== Walking + Punch =====");
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.move();
    fighter.attack();

    fighter.setMovingStrategy(crawlingStrategy);
    fighter.setAttackingStrategy(tackleStrategy);
    console.log("===== Crawling + Tackle =====");
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.move();
    fighter.attack();
})();
