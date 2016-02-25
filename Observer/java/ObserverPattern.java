package Observer.java;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by hanmomhanda on 2016-02-25.
 */
public class ObserverPattern {

    public static void main(String[] args) {

        Subject daddy = new Subject("오명운");

        Child yuna = new Child("오윤아");
        Child yoonsuk = new Child("오윤석");

        daddy.addChild(yuna);
        daddy.addChild(yoonsuk);

        daddy.saySomething("뒤에 가서 봐라~");

        daddy.removeChild(yuna);

        daddy.saySomething("어허~");
    }
}

interface Observer {
    void notified();
}

class Child implements Observer {

    private String name;

    public Child(String name) {
        this.name = name;
    }

    @Override
    public void notified() {
        System.out.println(name + "이(가) 뒤에가서 의자에 앉습니다.");
    }
}

class Subject {
    private String name;
    private Set<Child> childSet = new HashSet<>();

    public Subject(String name) {
        this.name = name;
    }

    public void addChild(Child child) {
        childSet.add(child);
    }

    public void removeChild(Child child) {
        childSet.remove(child);
    }

    public void saySomething(String saySomething) {
        System.out.println("+++++" + name + " : " + saySomething + "+++++");
        for (Child child : childSet) {
            child.notified();
        }
    }
}