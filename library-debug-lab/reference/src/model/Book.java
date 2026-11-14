package model;

/**
 * A book. It IS-A LibraryItem (inheritance), and adds an author and an ISBN.
 */
public class Book extends LibraryItem {

    private String author;
    private String isbn;

    /**
     * @param itemId the unique ID
     * @param title  the title
     * @param author the author's name
     * @param isbn   the ISBN number
     */
    public Book(String itemId, String title, String author, String isbn) {
        super(itemId, title); // let LibraryItem set the ID and title
        setAuthor(author);
        setIsbn(isbn);
    }

    /** @return the author */
    public String getAuthor() {
        return author;
    }

    /**
     * @param author the new author (cannot be empty)
     */
    public void setAuthor(String author) {
        if (author == null || author.isBlank()) {
            throw new IllegalArgumentException("Author cannot be empty.");
        }
        this.author = author.trim();
    }

    /** @return the ISBN */
    public String getIsbn() {
        return isbn;
    }

    /**
     * @param isbn the new ISBN (cannot be empty)
     */
    public void setIsbn(String isbn) {
        if (isbn == null || isbn.isBlank()) {
            throw new IllegalArgumentException("ISBN cannot be empty.");
        }
        this.isbn = isbn.trim();
    }

    @Override
    public String getItemType() {
        return "Book";
    }

    @Override
    public String getDetails() {
        return "by " + author + " (ISBN " + isbn + ")";
    }

    @Override
    public String toFileLine() {
        return "BOOK|" + getItemId() + "|" + getTitle() + "|" + author + "|" + isbn;
    }
}
