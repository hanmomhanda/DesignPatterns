var Light = function(){
    var _state = off,
        self = this;
    this.triggerStateChange = function(){
        _state.applyNextState(self);
    };
    this.setState = function(state){
        _state = state;
    };
};



var off = {
    applyNextState: function(context){
        context.setState(on);
        console.log("Light goes ON ======");
    }
};

var on = {
    applyNextState: function(context){
        // On인 상태에서 호출되면 Off 모드로 상태 변경
        context.setState(off);
        console.log("====== Light goes Off");

        //// On인 상태에서 호출되면 Blink 모드가 되도록 요구 사항이 변경되면
        //// 위의 코드가 아래와 같이 변경되어야 한다(OCP 위배)
        //context.setState(blink);
        //console.log("= Light goes BLINK =");
    }
};
//// 요구 사항 변경에 의해 새로 추가되는 Blink 모드
//var blink = {
//    applyNextState: function(context){
//        // Blink인 상태에서 호출되면 Off 모드로 상태 변경
//        context.setState(off);
//        console.log("====== Light goes OFF");
//    }
//};



(function(){
    var light = new Light();

    // Strategy 패턴에서는 Context에 주입해 줄 Strategy를
    // Client가 알고, Client가 직접 Context에게 Strategy를 주입하지만
    // State 패턴에서는 Context에 주입해 줄 State를
    // Client가 알지 못하며, 상태 변화를 유발하는 행위를 호출할 뿐이다.
    // Blink 모드가 추가되어도 아래의 코드는 변경되지 않는다.
    light.triggerStateChange();
    light.triggerStateChange();
    light.triggerStateChange();

    light.triggerStateChange();
    light.triggerStateChange();
    light.triggerStateChange();
})();
