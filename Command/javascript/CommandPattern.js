// Invoker
var Button = function(){
    var _command;

    this.setCommand = function(command){
        if (command instanceof Command)
            _command = command;
        else
            throw new Error("command should be instanceof Command");
    };

    this.pressed = function(){
        _command.execute();
    };
};



// Receiver
var Light = function(){
    this.turnOn = function(){
        console.log("***** Light is ON *****");
    };
    this.turnOff = function(){
        console.log("_____ Light is OFF _____");
    };
};



// Command
var Command = function(light){
    if (light instanceof Light)
        this.light = light;
    else
        throw new Error("light should be instanceof Light");
};
Command.prototype.execute = function(){
    // JavaScript에서는 부모의 메서드를 override하도록
    // 강제할 수 있는 방법이 없다.
    // 따라서 override 안된 경우 강제로 에러 처리
    throw Error("This method should be overridden");
};

var TurnOnCommand = function(light){
    Command.call(this, light);
};
TurnOnCommand.prototype = Object.create(Command.prototype);
TurnOnCommand.prototype.constructor = TurnOnCommand;
TurnOnCommand.prototype.execute = function(){
    this.light.turnOn();
};

var TurnOffCommand = function(light){
    Command.call(this, light);
};
TurnOffCommand.prototype = Object.create(Command.prototype);
TurnOffCommand.prototype.constructor = TurnOffCommand;
TurnOffCommand.prototype.execute = function(){
    this.light.turnOff();
};



(function(){

    var button = new Button();

    var light = new Light();

    button.setCommand(new TurnOffCommand(light));
    button.pressed();

    button.setCommand(new TurnOnCommand(light));
    button.pressed();

})();
