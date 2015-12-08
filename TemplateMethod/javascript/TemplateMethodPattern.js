var Template = function(){
    var wakeUp = function(){
        System.out.println("##### Wake Up by Alarm #####");
    };
    var go2Sleep = function(){
        System.out.println("***** Sweet Dream *****");
    };
    var Template = {
        showDailyLife: function(){
            wakeUp();
            go2Work();
        }
    }
};
Template.prototype.go2Work = function(){
    throw Error("This method should be overridden");
};
Template.prototype.workHard = function(){
    throw Error("This method should be overridden");
};
Template.prototype.comeback2Home = function(){
    throw Error("This method should be overridden");
};
