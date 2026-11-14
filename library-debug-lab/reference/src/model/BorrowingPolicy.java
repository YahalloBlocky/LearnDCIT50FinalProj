package model;

/**
 * STRATEGY PATTERN: the "strategy" interface.
 *
 * A borrowing policy holds the rules that change from one kind of member to
 * another: how many items they may borrow, for how many days, and how much
 * the fine is. Each kind of member gets its own policy class
 * (see StudentPolicy and FacultyPolicy in the pattern package).
 *
 * This interface lives in the model package because the Member class is the
 * one that uses it.
 */
public interface BorrowingPolicy {

    /**
     * @return the most items a member may borrow at the same time
     */
    int getMaxItems();

    /**
     * @return how many days a member may keep an item
     */
    int getLoanDays();

    /**
     * Works out the fine for an item that is late.
     *
     * @param daysOverdue how many days late the item is (0 or less means not late)
     * @return the fine in PHP (0.0 if the item is not late)
     */
    double calculateFine(int daysOverdue);
}
