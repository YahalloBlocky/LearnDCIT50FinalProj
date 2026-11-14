package pattern;

/**
 * OBSERVER PATTERN: the "observer" interface.
 *
 * Anything that wants to hear about overdue items implements this interface.
 * The LibraryService (the "subject") keeps a list of observers and calls
 * onOverdueNotice(...) on each one when something is overdue. The service
 * never knows what the observers do with the message.
 *
 * Because this interface has only one method, we can write an observer as a
 * short lambda, for example: message -> System.out.println(message)
 */
public interface OverdueObserver {

    /**
     * Called by the service when there is an overdue notice.
     *
     * @param message the text of the notice
     */
    void onOverdueNotice(String message);
}
