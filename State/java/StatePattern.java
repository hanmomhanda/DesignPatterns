package State.java;

public class StatePattern {
    public static void main(String[] args) {
        Light light = new Light();

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
    }
}



class Light {
    private State state;

    public Light() {
        this.state = Off.getInstance();
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public void triggerStateChange() {
        state.applyNextState(this);
    }
}



interface State {
    // 다음 상태로 전이(transition)시킨다.
    void applyNextState(Light light);
}

class Off implements State {

    private static Off off = new Off();

    public static Off getInstance() {
        return off;
    }

    @Override
    public void applyNextState(Light light) {
        // Off인 상태에서 호출되면 On 모드로 상태 변경
        light.setState(On.getInstance());
        System.out.println("Light goes ON ======");
    }
}

class On implements State {

    private static On on = new On();

    public static On getInstance() {
        return on;
    }

    @Override
    public void applyNextState(Light light) {
        // On인 상태에서 호출되면 Off 모드로 상태 변경
        light.setState(Off.getInstance());
        System.out.println("====== Light goes Off");

        // On인 상태에서 호출되면 Blink 모드가 되도록 요구 사항이 변경되면
        // 위의 코드가 아래와 같이 변경되어야 한다(OCP 위배)
//        light.setState(Blink.getInstance());
//        System.out.println("= Light goes BLINK =");
    }
}

// 요구 사항 변경에 의해 새로 추가되는 Blink 모드
//class Blink implements State {
//
//    private static Blink blink = new Blink();
//
//    public static Blink getInstance() {
//        return blink;
//    }
//
//    @Override
//    public void applyNextState(Light light) {
//        // Blink인 상태에서 호출되면 Off 모드로 상태 변경
//        light.setState(Off.getInstance());
//        System.out.println("====== Light goes OFF");
//    }
//}






