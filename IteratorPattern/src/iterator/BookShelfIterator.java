package iterator;

public class BookShelfIterator implements Iterator {
	
	private BookShelf bookShelf;
	private int index;
	
	public BookShelfIterator(BookShelf bookshelf) {
		this.bookShelf = bookshelf;
		this.index = 0;
	}

	@Override
	public boolean hasNext() {
		// TODO Auto-generated method stub
		boolean hasNext = false;
		if (index < bookShelf.getLength()) {
			hasNext = true;
		} else {
			hasNext = false;
		}
		return hasNext;
	}

	@Override
	public Object next() {
		// TODO Auto-generated method stub
		Book book = bookShelf.getBookAt(index++);		
		return book;
	}

}
