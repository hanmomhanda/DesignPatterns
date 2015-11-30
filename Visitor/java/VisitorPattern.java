package Visitor.java;

import java.util.ArrayList;
import java.util.List;

public class VisitorPattern {

    public static void main(String[] args) {
        List<Element> elements = new ArrayList<>();
        elements.add(new BracketElement("Bracket1"));
        elements.add(new CurlyBraceElement("CurlyBrace1"));
        elements.add(new CurlyBraceElement("CurlyBrace2"));
        elements.add(new BracketElement("Bracket2"));
        elements.add(new CurlyBraceElement("CurlyBrace3"));
        elements.add(new BracketElement("Bracket4"));
        elements.add(new BracketElement("Bracket5"));
        // 요구사항 변경으로 나중에 추가
        elements.add(new AsteriskElement("Asterisk1"));
        elements.add(new CurlyBraceElement("CurlyBrace4"));

        System.out.println("========== Lowercase Visitor ==========");
        // 요구사항 변경으로 Element의 child가 새로 추가되어도
        // 아래 코드는 변하지 않음
        LowercaseVisitor lowercaseVisitor = new LowercaseVisitor();
        for (Element element : elements) {
            element.accept(lowercaseVisitor);
        }

        System.out.println("========== Uppercase Visitor ==========");
        // 요구사항 변경으로 Element의 child가 새로 추가되어도
        // 아래 코드는 변하지 않음
        UppercaseVisitor uppercaseVisitor = new UppercaseVisitor();
        for (Element element : elements) {
            element.accept(uppercaseVisitor);
        }
    }
}





interface Element {
    void accept(Visitor visitor);
    String doElementThing();
}

class BracketElement implements Element {
    private String name;

    public BracketElement(String name) {
        this.name = name;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    @Override
    public String doElementThing() {
        return "<" + name + ">";
    }
}

class CurlyBraceElement implements Element {
    private String name;

    public CurlyBraceElement(String name) {
        this.name = name;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    @Override
    public String doElementThing() {
        return "{" + name + "}";
    }
}

// 요구사항 변경으로 나중에 추가
class AsteriskElement implements Element {
    private String name;

    public AsteriskElement(String name) {
        this.name = name;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    @Override
    public String doElementThing() {
        return "*" + name + "*";
    }
}





interface Visitor {
    void visit(Element element);
}

class LowercaseVisitor implements Visitor {
    @Override
    public void visit(Element element) {
        System.out.println("ElementName : " + element.doElementThing().toLowerCase());
    }
}

class UppercaseVisitor implements Visitor {
    @Override
    public void visit(Element element) {
        System.out.println("ElementName : " + element.doElementThing().toUpperCase());
    }
}

