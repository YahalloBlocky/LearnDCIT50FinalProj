package exception;

/**
 * Thrown when someone tries to borrow an item that is already borrowed,
 * or tries to remove an item that still has loan records.
 */
public class ItemNotAvailableException extends LibraryException {

    /**
     * @param message the explanation, for example "'Clean Code' is already borrowed."
     */
    public ItemNotAvailableException(String message) {
        super(message);
    }
}
