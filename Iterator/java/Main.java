package Iterator.java;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BookShelf bookShelf = new BookShelf(4);
		bookShelf.appendBook(new Book("살아있는 것은 다 행복하라"));
		bookShelf.appendBook(new Book("60분 부모"));
		bookShelf.appendBook(new Book("리만가설"));
		bookShelf.appendBook(new Book("건투를 빈다"));
		
		Iterator it = bookShelf.iterator();
		while ( it.hasNext() ) {
			Book book = (Book)it.next();
			System.out.println(book.getName());
		}
	}

}
