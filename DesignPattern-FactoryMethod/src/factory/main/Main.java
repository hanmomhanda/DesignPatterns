package factory.main;

import factory.framework.Factory;
import factory.framework.Product;
import factory.idcard.IDCardFactory;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Factory factory = new IDCardFactory();
		Product p1 = factory.create("Phobe");
		Product p2 = factory.create("Claudia");
		
		p1.use();
		p2.use();
	}

}
