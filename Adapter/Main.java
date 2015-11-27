package adapter;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Target target = new Adapter("Adapter Pattern");
		target.printWeak();
		target.printStrong();
	}

}
