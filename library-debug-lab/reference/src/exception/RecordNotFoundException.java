package exception;

/**
 * Thrown when we look for a record by its ID but it does not exist.
 * It is also used when something cannot be returned because it was never borrowed.
 */
public class RecordNotFoundException extends LibraryException {

    /**
     * @param message the explanation, for example "Member ID 'S999' was not found."
     */
    public RecordNotFoundException(String message) {
        super(message);
    }
}
