package pattern;

import model.Book;
import model.FacultyMember;
import model.LibraryItem;
import model.Magazine;
import model.Member;
import model.StudentMember;

/**
 * FACTORY PATTERN: the only place in the program that says "new Book",
 * "new Magazine", "new StudentMember" or "new FacultyMember".
 *
 * The menu and the file loader both ask this class for an object. They give a
 * type word like "BOOK" and get back a LibraryItem. They never need to know
 * which child class was created. This class also gives each member the right
 * BorrowingPolicy (Strategy pattern).
 *
 * All methods are static, so we call them like LibraryFactory.createItem(...)
 * without creating a LibraryFactory object.
 */
public class LibraryFactory {

    /** Private constructor: nobody should create a LibraryFactory object. */
    private LibraryFactory() {
    }

    /**
     * Creates a Book or a Magazine.
     *
     * @param type    "BOOK" or "MAGAZINE" (capital letters do not matter)
     * @param id      the item ID
     * @param title   the title
     * @param detail1 the author (for a book) or the issue (for a magazine)
     * @param detail2 the ISBN (for a book) or the publisher (for a magazine)
     * @return the new item
     * @throws IllegalArgumentException if the type is unknown or a value is not valid
     */
    public static LibraryItem createItem(String type, String id, String title,
                                         String detail1, String detail2) {
        switch (type.trim().toUpperCase()) {
            case "BOOK":
                return new Book(id, title, detail1, detail2);
            case "MAGAZINE":
                return new Magazine(id, title, detail1, detail2);
            default:
                throw new IllegalArgumentException("Unknown item type: " + type);
        }
    }

    /**
     * Creates a StudentMember or a FacultyMember with the correct policy.
     *
     * @param type   "STUDENT" or "FACULTY"
     * @param id     the member ID
     * @param name   the member's name
     * @param detail the course (student) or the department (faculty)
     * @return the new member
     * @throws IllegalArgumentException if the type is unknown or a value is not valid
     */
    public static Member createMember(String type, String id, String name, String detail) {
        switch (type.trim().toUpperCase()) {
            case "STUDENT":
                return new StudentMember(id, name, detail, new StudentPolicy());
            case "FACULTY":
                return new FacultyMember(id, name, detail, new FacultyPolicy());
            default:
                throw new IllegalArgumentException("Unknown member type: " + type);
        }
    }

    /**
     * Builds an item from one line of the items data file.
     *
     * @param line text like "BOOK|B001|Clean Code|Robert Martin|9780132350884"
     * @return the item
     * @throws IllegalArgumentException if the line is not in the correct format
     */
    public static LibraryItem createItemFromLine(String line) {
        String[] parts = line.split("\\|", -1);
        if (parts.length != 5) {
            throw new IllegalArgumentException("Item line must have 5 fields but has " + parts.length + ".");
        }
        return createItem(parts[0], parts[1], parts[2], parts[3], parts[4]);
    }

    /**
     * Builds a member from one line of the members data file.
     *
     * @param line text like "STUDENT|S001|Ana Cruz|BSIT"
     * @return the member
     * @throws IllegalArgumentException if the line is not in the correct format
     */
    public static Member createMemberFromLine(String line) {
        String[] parts = line.split("\\|", -1);
        if (parts.length != 4) {
            throw new IllegalArgumentException("Member line must have 4 fields but has " + parts.length + ".");
        }
        return createMember(parts[0], parts[1], parts[2], parts[3]);
    }
}
