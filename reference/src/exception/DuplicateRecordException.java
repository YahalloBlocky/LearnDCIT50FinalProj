package exception;

/**
 * Thrown when we try to add a record (item, member, staff, loan)
 * whose ID is already used by another record.
 */
public class DuplicateRecordException extends LibraryException {

    /**
     * @param message the explanation, for example "Item ID 'B001' already exists."
     */
    public DuplicateRecordException(String message) {
        super(message);
    }
}
