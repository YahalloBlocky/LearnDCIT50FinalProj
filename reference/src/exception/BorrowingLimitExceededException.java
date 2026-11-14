package exception;

/**
 * Thrown when a member already has the maximum number of borrowed items.
 * It also remembers the limit number, so other code can read it with getLimit().
 */
public class BorrowingLimitExceededException extends LibraryException {

    private final int limit; // the most items this member may borrow

    /**
     * @param message the explanation to show to the user
     * @param limit   the borrowing limit that was reached
     */
    public BorrowingLimitExceededException(String message, int limit) {
        super(message);
        this.limit = limit;
    }

    /**
     * @return the borrowing limit that was reached
     */
    public int getLimit() {
        return limit;
    }
}
