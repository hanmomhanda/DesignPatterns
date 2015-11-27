package Adapter.java;

public class Adapter implements Target {

	private Adaptee orgin;
	
	public Adapter(String s) {
		this.orgin = new Adaptee(s);
	}
	
	@Override
	public void printWeak() {
		// TODO Auto-generated method stub
		this.orgin.printParen();
	}

	@Override
	public void printStrong() {
		// TODO Auto-generated method stub
		this.orgin.printAster();
	}

}
