package TemplateMethod.java;

public class TemplateMethodPattern {

    public static void main(String[] args){
        System.out.println("======= Template for Developer =======");
        Template developer = new Developer();
        developer.showDailyLife();

        System.out.println("\n");

        System.out.println("======= Template for Student =======");
        Template student = new Student();
        student.showDailyLife();

        // 요구사항 변경에 의해 다른 Template 인스턴스가 추가되어도
        // 호출 방식은 변하지 않음
//        System.out.println("\n");
//
//        System.out.println("======= Template for TheMan =======");
//        Template theMan = new TheMan();
//        theMan.showDailyLife();
    }
}

abstract class Template {

    // Template Method
    // 상속 받는 클래스에서 순서를 바꾸지 못하도록 final 지정
    public final void showDailyLife() {
        wakeUp();
        go2Work();
        workHard();
        comeback2Home();
        go2Sleep();
    }

    // Tempate 인스턴스마다 달라지지 않는 기상
    private void wakeUp() {
        System.out.println("##### Wake Up by Alarm #####");
    }

    // Tempate 인스턴스마다 달라지는 출근 방식
    protected abstract void go2Work();

    // Tempate 인스턴스마다 달라지는 일과
    protected abstract void workHard();

    // Tempate 인스턴스마다 달라지는 퇴근 방식
    protected abstract void comeback2Home();

    // Tempate 인스턴스마다 달라지지 않는 취침
    private void go2Sleep() {
        System.out.println("***** Sweet Dream *****");
    }
}

class Developer extends Template {
    @Override
    protected void go2Work() {
        System.out.println("@@ Please, no error today~~");
    }

    @Override
    protected void workHard() {
        System.out.println("@@@@@ What happened? It worked yesterday~~");
    }

    @Override
    protected void comeback2Home() {
        System.out.println("@SuppressWarnings...");
    }
}

class Student extends Template {
    @Override
    protected void go2Work() {
        System.out.println("^^ Please, no exam today~~");
    }

    @Override
    protected void workHard() {
        System.out.println("^^^^^ Damn, I forgot again~~");
    }

    @Override
    protected void comeback2Home() {
        System.out.println("^ Don't worry, I am still young...");
    }
}

//// 요구사항 변경에 의해 나중에 추가
//class TheMan extends Template {
//    @Override
//    protected void go2Work() {
//        System.out.println("!! Oh, Happy day~~");
//    }
//
//    @Override
//    protected void workHard() {
//        System.out.println("!!!!! I'm right, you are wrong!!");
//    }
//
//    @Override
//    protected void comeback2Home() {
//        System.out.println("! It was a really good day...");
//    }
//}