package Command.java;

public class CommandPattern {

    public static void main(String[] args){
        Button button = new Button();

        Light light = new Light();

        button.setCommand(new TurnOffCommand(light));
        button.pressed();

        button.setCommand(new TurnOnCommand(light));
        button.pressed();
    }
}



// Invoker
class Button {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressed() {
        command.execute();
    }
}

// Receiver
class Light {

    public void turnOn() {
        System.out.println("***** Light is ON *****");
    }

    public void turnOff() {
        System.out.println("_____ Light is OFF _____");
    }

}

// Command
interface Command {
    void execute();
}

class TurnOnCommand implements Command {

    private Light light;

    public TurnOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOn();
    }
}

class TurnOffCommand implements Command {

    private Light light;

    public TurnOffCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();
    }
}



