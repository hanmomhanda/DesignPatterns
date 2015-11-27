package Iterator.java;

import java.util.ArrayList;
import java.util.List;

public class BookShelf implements Aggregate {
	
	//private List<Book> books;
	private Book[] books;
	private int last = 0;
	
	public BookShelf(int maxsize) {
		//this.books = new ArrayList(maxsize);
		this.books = new Book[maxsize];
	}
	
	public Book getBookAt(int index) {
		//return books.get(index);
		return books[index];
	}
	
	public void appendBook(Book book) {
		//books.add(book);
		books[last++] = book;		
	}
	
	public int getLength() {
		//return books.size();
		return last;
	}

	@Override
	public Iterator iterator() {
		// TODO Auto-generated method stub
		return new BookShelfIterator(this);
	}

}
