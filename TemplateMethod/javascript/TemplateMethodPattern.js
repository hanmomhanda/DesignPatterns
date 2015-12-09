var Template = function(){

    var that = this;
    // Template 인스턴스마다 달라지지 않는 기상 - private
    var wakeUp = function(){
        console.log("##### Wake Up by Alarm #####");
    };
    // Template 인스턴스마다 달라지지 않는 취침 - private
    var go2Sleep = function(){
        console.log("***** Sweet Dream *****");
    };
    // 실질적인 Template 메서드
    // prototype에서 wakeUp과 go2Sleep 같은
    // private 메서드에 접근할 수 있게 해주는 privileged 메서드
    this.showDailyLife = function(){
        wakeUp();
        that.go2Work();
        that.workHard();
        that.comeback2Home();
        go2Sleep();
    };
};
// Template 메서드는 상속 되며 재정의 할 필요 없다.
// 하지만 Java 에서 final로 재정의를 강제로 막는 방법은
// JavaScript에는 없다.
Template.prototype.showDailyLife = function(){
    this.showDailyLife();
};
// Tempate을 상속받은 객체마다 달라지는 출근 방식
Template.prototype.go2Work = function(){
    throw Error("This method should be overridden");
};
// Tempate을 상속받은 객체마다 달라지는 일과
Template.prototype.workHard = function(){
    throw Error("This method should be overridden");
};
// Tempate을 상속받은 객체마다 달라지는 퇴근 방식
Template.prototype.comeback2Home = function(){
    throw Error("This method should be overridden");
};



var Developer = function(){
    // Java는
    // Template template = new Concrete();
    // template.showDailyLife();
    // 와 같은 방식으로 Client에서 Template 객체를 직접 호출하므로
    // Template 메서드에서 Template 객체의 private 메서드를 호출할 수 있지만
    // JavaScript에서는 Template template = new Concrete(); 와 같은 방식이 불가능하므로
    // Template 객체의 private 메서드들도 직접 재생성해줘야 함
    // 다만 Template 객체의 생성자를 재사용하므로
    // Template 객체 내부가 변경되더라도 Concrete 쪽을 변경할 필요는 없음
    Template.call(this);
};
Developer.prototype = Object.create(Template.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.go2Work = function(){
    console.log("@@ Please, no error today~~");
};
Developer.prototype.workHard = function(){
    console.log("@@@@@ What happened? It worked yesterday~~");
};
Developer.prototype.comeback2Home = function(){
    console.log("@SuppressWarnings...");
};

var Student = function(){
    Template.call(this);
};
Student.prototype = Object.create(Template.prototype);
Student.prototype.constructor = Student;
Student.prototype.go2Work = function(){
    console.log("^^ Please, no exam today~~");
};
Student.prototype.workHard = function(){
    console.log("^^^^^ Damn, I forgot again~~");
};
Student.prototype.comeback2Home = function(){
    console.log("^ Don't worry, I am still young...");
};

//// 요구사항 변경에 의해 나중에 추가
//var TheMan = function(){
//    Template.call(this);
//};
//TheMan.prototype = Object.create(Template.prototype);
//TheMan.prototype.constructor = TheMan;
//TheMan.prototype.go2Work = function(){
//    console.log("!! Oh, Happy day~~");
//};
//TheMan.prototype.workHard = function(){
//    console.log("!!!!! I'm right, you are wrong!!");
//};
//TheMan.prototype.comeback2Home = function(){
//    console.log("! It was a really good day...");
//};



(function(){
    console.log("======= Template for Developer =======");
    var developer = new Developer();
    developer.showDailyLife();

    console.log("======= Template for Student =======");
    var student = new Student();
    student.showDailyLife();

    //// 요구사항 변경에 의해 다른 Template 인스턴스가 추가되어도
    //// 호출 방식은 변하지 않음
    //console.log("======= Template for TheMan =======");
    //var theMan = new TheMan();
    //theMan.showDailyLife();
})();
