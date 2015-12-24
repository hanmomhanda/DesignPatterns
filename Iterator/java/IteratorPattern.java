package Iterator.java;

public class IteratorPattern {

    public static void main(String[] args) {
        BookShelf bookShelf = new BookShelf(4);
        bookShelf.appendBook(new Book("살아있는 것은 다 행복하라"));
        bookShelf.appendBook(new Book("60분 부모"));
        bookShelf.appendBook(new Book("리만가설"));
        bookShelf.appendBook(new Book("건투를 빈다"));

        Iterator it = bookShelf.iterator();
        // bookshelf의 내부에 list로 구현되어있는지 배열로 구현되어 있는지
        // 알 필요 없이 haxNext(), next()로 사용
        while ( it.hasNext() ) {
            Book book = (Book)it.next();
            System.out.println(book.getName());
        }
    }
}



interface Iterator {
    boolean hasNext();
    Object next();
}

class BookShelfIterator implements Iterator {

    private BookShelf bookShelf;
    private int index;

    public BookShelfIterator(BookShelf bookshelf) {
        this.bookShelf = bookshelf;
        this.index = 0;
    }

    @Override
    public boolean hasNext() {
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
        Book book = bookShelf.getBookAt(index++);
        return book;
    }

}



interface Aggregate {
    Iterator iterator();
}

class BookShelf implements Aggregate {

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
        return new BookShelfIterator(this);
    }

}



class Book {

    private String name;

    public Book(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}


