package pattern;

import model.BorrowingPolicy;

/**
 * STRATEGY PATTERN: the rules for faculty (teachers).
 * 10 items, 30 days, fine of PHP 2.00 for each day late.
 */
public class FacultyPolicy implements BorrowingPolicy {

    private static final int MAX_ITEMS = 10;
    private static final int LOAN_DAYS = 30;
    private static final double FINE_PER_DAY = 2.00; // PHP

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
            return 0.0;
        }
        return daysOverdue * FINE_PER_DAY;
    }
}
