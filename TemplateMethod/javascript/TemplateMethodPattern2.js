// 템플릿 메서드가 포함하는 메서드들이
// 모두 자식에서 구현해야 하는 hook 인 경우의 구현
var template = {
    showDailyLife: function(){
        this.wakeUp();
        this.go2Work();
        this.workHard();
        this.comeback2Home();
        this.go2Sleep();
    }
};



var developer = Object.create(template);
developer.wakeUp = function(){
    console.log("##### Wake Up by Alarm #####");
};
developer.go2Work = function(){
    console.log("@@ Please, no error today~~");
};
developer.workHard = function(){
    console.log("@@@@@ What happened? It worked yesterday~~");
};
developer.comeback2Home = function(){
    console.log("@SuppressWarnings...");
};
developer.go2Sleep = function(){
    console.log("***** Sweet Dream *****");
};

var student = Object.create(template);
student.wakeUp = function(){
    console.log("##### Wake Up by Alarm #####");
};
student.go2Work = function(){
    console.log("^^ Please, no exam today~~");
};
student.workHard = function(){
    console.log("^^^^^ Damn, I forgot again~~");
};
student.comeback2Home = function(){
    console.log("^ Don't worry, I am still young...");
};
student.go2Sleep = function(){
    console.log("***** Sweet Dream *****");
};

// 요구사항 변경에 의해 나중에 추가
var theMan = Object.create(template);
theMan.wakeUp = function(){
    console.log("##### Wake Up by Alarm #####");
};
theMan.go2Work = function(){
    console.log("!! Oh, Happy day~~");
};
theMan.workHard = function(){
    console.log("!!!!! I'm right, you are wrong!!");
};
theMan.comeback2Home = function(){
    console.log("! It was a really good day...");
};
theMan.go2Sleep = function(){
    console.log("***** Sweet Dream *****");
};


(function(){
    console.log("======= Template for Developer =======");    
    developer.showDailyLife();

    console.log("======= Template for Student =======");
    student.showDailyLife();

    // 요구사항 변경에 의해 다른 Template 인스턴스가 추가되어도
    // 호출 방식은 변하지 않음
    console.log("======= Template for TheMan =======");
    theMan.showDailyLife();
})();
