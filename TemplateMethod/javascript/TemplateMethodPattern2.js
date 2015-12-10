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



(function(){
    console.log("======= Template for Developer =======");    
    developer.showDailyLife();
    //
    //console.log("======= Template for Student =======");
    //var student = new Student();
    //student.showDailyLife();

    //// 요구사항 변경에 의해 다른 Template 인스턴스가 추가되어도
    //// 호출 방식은 변하지 않음
    //console.log("======= Template for TheMan =======");
    //var theMan = new TheMan();
    //theMan.showDailyLife();
})();
