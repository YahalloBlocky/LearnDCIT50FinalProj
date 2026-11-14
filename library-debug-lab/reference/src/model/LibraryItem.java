package model;

/**
 * ABSTRACT parent class of everything the library can lend (Book, Magazine).
 *
 * An abstract class cannot be created with "new". It only holds what all
 * items share: an ID, a title, and whether the item is on the shelf.
 * Each child class must fill in the abstract methods.
 */
public abstract class LibraryItem {

    private final String itemId;  // final = can never change after it is set
    private String title;
    private boolean available;    // true = on the shelf, false = borrowed

    /**
     * Creates an item. New items start as available.
     *
     * @param itemId the unique ID (saved in capital letters)
     * @param title  the title (cannot be empty)
     */
    public LibraryItem(String itemId, String title) {
        if (itemId == null || itemId.isBlank()) {
            throw new IllegalArgumentException("Item ID cannot be empty.");
        }
        this.itemId = itemId.trim().toUpperCase();
        setTitle(title);
        this.available = true;
    }

    /** @return the item ID */
    public String getItemId() {
        return itemId;
    }

    /** @return the title */
    public String getTitle() {
        return title;
    }

    /**
     * Changes the title. Empty titles are rejected.
     *
     * @param title the new title
     */
    public void setTitle(String title) {
        if (title == null || title.isBlank()) {
            throw new IllegalArgumentException("Title cannot be empty.");
        }
        this.title = title.trim();
    }

    /** @return true if the item is on the shelf */
    public boolean isAvailable() {
        return available;
    }

    /** Marks the item as borrowed. */
    public void markBorrowed() {
        this.available = false;
    }

    /** Marks the item as back on the shelf. */
    public void markReturned() {
        this.available = true;
    }

    /** @return the kind of item, for example "Book" */
    public abstract String getItemType();

    /** @return a short description of the extra details of this item */
    public abstract String getDetails();

    /** @return this item as one line of text for the data file */
    public abstract String toFileLine();
}
