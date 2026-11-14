package pattern;

import model.BorrowingPolicy;

/**
 * STRATEGY PATTERN: the rules for students.
 * 3 items, 7 days, fine of PHP 5.00 for each day late.
 */
public class StudentPolicy implements BorrowingPolicy {

    private static final int MAX_ITEMS = 3;          // static final = a constant that never changes
    private static final int LOAN_DAYS = 7;
    private static final double FINE_PER_DAY = 5.00; // PHP

    @Override
    public int getMaxItems() {
        return MAX_ITEMS;
    }

    @Override
    public int getLoanDays() {
        return LOAN_DAYS;
    }

    @Override
    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0; // not late, so no fine
        }
        return daysOverdue * FINE_PER_DAY;
    }
}
