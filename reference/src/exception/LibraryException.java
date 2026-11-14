package exception;

/**
 * The parent of all our own exceptions.
 *
 * It extends Exception, so it is a "checked" exception. Java forces us to
 * either catch it or declare it with "throws". Because all our exceptions
 * share this parent, the menu can catch them all with one catch block.
 */
public class LibraryException extends Exception {

    /**
     * Creates the exception with a message that is safe to show to the user.
     *
     * @param message the explanation of what went wrong
     */
    public LibraryException(String message) {
        super(message); // pass the message up to the Exception class
    }
}
