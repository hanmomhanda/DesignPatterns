package Adapter.java;

public class Adaptee {
	
	private String s;
	
	public Adaptee(String s) {
		this.s = s;
	}

	public void printParen() {
		System.out.println("("+s+")");
	}
	
	public void printAster() {
		System.out.println("*"+s+"*");
	}
}
