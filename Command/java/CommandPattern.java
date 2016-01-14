package Command.java;

public class CommandPattern {

    public static void main(String[] args){
        Button button = new Button();

        Light light = new Light();

        button.setCommand(new TurnOffCommand(light));
        button.pressed();
        button.undoPressed();

        button.setCommand(new TurnOnCommand(light));
        button.pressed();
        button.undoPressed();
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

    public void undoPressed() { command.undo(); }
}

// Receiver
class Light {

    public void turnOn() {
        System.out.println("***** Light is ON *****");
    }

    public void turnOff() {
        System.out.println("_____ Light is OFF _____");
    }

    public void undo() {
        System.out.println("%%%%% UNDO %%%%%");
    }
}

// Command
interface Command {
    void execute();
    void undo();
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

    @Override
    public void undo() {
        light.undo();
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

    @Override
    public void undo() {
        light.undo();
    }
}



