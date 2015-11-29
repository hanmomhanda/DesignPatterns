package FactoryMethod.java;

public class IDCard implements Product {

	private String owner;
	IDCard(String owner) {
		System.out.println(owner +"의 카드를 만듭니다.");
		this.owner = owner;
	}
	@Override
	public void use() {
		// TODO Auto-generated method stub
		System.out.println(owner +"의 카드를 사용합니다.");
	}
	
	public String getOwner() {
		return owner;
	}

}
