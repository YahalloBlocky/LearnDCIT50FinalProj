package model;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoUnit;

/**
 * One borrowing record: who borrowed what, when, and when it is due.
 *
 * A loan stores IDs (text) instead of whole Book and Member objects.
 * This keeps saving to a file simple. To get the real Book or Member,
 * the service looks the ID up.
 *
 * The loan also keeps the fine, if the item was returned late.
 */
public class Loan {

    private final String loanId;
    private final String itemId;
    private final String memberId;
    private final String staffId;
    private final LocalDate borrowDate;
    private final LocalDate dueDate;
    private LocalDate returnDate; // null means "not returned yet"
    private double fineAmount;    // in PHP, 0 means no fine
    private boolean finePaid;

    /**
     * Creates a NEW loan (not returned, no fine).
     */
    public Loan(String loanId, String itemId, String memberId, String staffId,
                LocalDate borrowDate, LocalDate dueDate) {
        this(loanId, itemId, memberId, staffId, borrowDate, dueDate, null, 0.0, false);
    }

    /**
     * Creates a loan with every value. Used when loading from the data file.
     *
     * @throws IllegalArgumentException if any value is not valid
     */
    public Loan(String loanId, String itemId, String memberId, String staffId,
                LocalDate borrowDate, LocalDate dueDate,
                LocalDate returnDate, double fineAmount, boolean finePaid) {
        if (isEmpty(loanId) || isEmpty(itemId) || isEmpty(memberId) || isEmpty(staffId)) {
            throw new IllegalArgumentException("A loan needs a loan ID, item ID, member ID and staff ID.");
        }
        if (borrowDate == null || dueDate == null) {
            throw new IllegalArgumentException("A loan needs a borrow date and a due date.");
        }
        if (dueDate.isBefore(borrowDate)) {
            throw new IllegalArgumentException("The due date cannot be before the borrow date.");
        }
        if (returnDate != null && returnDate.isBefore(borrowDate)) {
            throw new IllegalArgumentException("The return date cannot be before the borrow date.");
        }
        if (fineAmount < 0) {
            throw new IllegalArgumentException("The fine cannot be negative.");
        }
        this.loanId = loanId.trim().toUpperCase();
        this.itemId = itemId.trim().toUpperCase();
        this.memberId = memberId.trim().toUpperCase();
        this.staffId = staffId.trim().toUpperCase();
        this.borrowDate = borrowDate;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
        this.fineAmount = fineAmount;
        this.finePaid = finePaid;
    }

    /** Small helper: true if the text is null or only spaces. */
    private static boolean isEmpty(String text) {
        return text == null || text.isBlank();
    }

    /** @return the loan ID */
    public String getLoanId() {
        return loanId;
    }

    /** @return the ID of the borrowed item */
    public String getItemId() {
        return itemId;
    }

    /** @return the ID of the member who borrowed it */
    public String getMemberId() {
        return memberId;
    }

    /** @return the ID of the staff member who handled the loan */
    public String getStaffId() {
        return staffId;
    }

    /** @return the date the item was borrowed */
    public LocalDate getBorrowDate() {
        return borrowDate;
    }

    /** @return the date the item must be back */
    public LocalDate getDueDate() {
        return dueDate;
    }

    /** @return the date the item came back, or null if it is still out */
    public LocalDate getReturnDate() {
        return returnDate;
    }

    /** @return the fine in PHP (0 if none) */
    public double getFineAmount() {
        return fineAmount;
    }

    /** @return true if the fine has been paid */
    public boolean isFinePaid() {
        return finePaid;
    }

    /** @return true if the item has been returned */
    public boolean isReturned() {
        return returnDate != null;
    }

    /** @return true if this loan has a fine bigger than zero */
    public boolean hasFine() {
        return fineAmount > 0;
    }

    /**
     * A loan is overdue when it is NOT returned and today is after the due date.
     *
     * @param today the date to check against
     * @return true if the loan is overdue
     */
    public boolean isOverdue(LocalDate today) {
        return !isReturned() && today.isAfter(dueDate);
    }

    /**
     * Counts how many days late the item is (or was).
     * If the item is returned, it counts up to the return date.
     * If it is still out, it counts up to today.
     *
     * @param today the date to use when the item is still out
     * @return the number of days late (0 if not late)
     */
    public int getDaysOverdue(LocalDate today) {
        LocalDate endDate = isReturned() ? returnDate : today;
        long days = ChronoUnit.DAYS.between(dueDate, endDate);
        return days > 0 ? (int) days : 0; // (int) turns the long number into an int
    }

    /**
     * Closes the loan.
     *
     * @param date the return date
     * @param fine the fine to charge (0 if the item is not late)
     */
    public void markReturned(LocalDate date, double fine) {
        if (isReturned()) {
            throw new IllegalStateException("This loan is already returned.");
        }
        if (date == null || date.isBefore(borrowDate)) {
            throw new IllegalArgumentException("The return date is not valid.");
        }
        if (fine < 0) {
            throw new IllegalArgumentException("The fine cannot be negative.");
        }
        this.returnDate = date;
        this.fineAmount = fine;
        this.finePaid = false;
    }

    /** Marks the fine as paid. */
    public void markFinePaid() {
        this.finePaid = true;
    }

    /** @return this loan as one line of text for the data file */
    public String toFileLine() {
        String returnText = (returnDate == null) ? "" : returnDate.toString();
        return loanId + "|" + itemId + "|" + memberId + "|" + staffId + "|"
                + borrowDate + "|" + dueDate + "|" + returnText + "|"
                + fineAmount + "|" + finePaid;
    }

    /**
     * Builds a Loan from one line of the data file.
     *
     * @param line text with 9 fields separated by "|"
     * @return the Loan object
     * @throws IllegalArgumentException if the line is not in the correct format
     */
    public static Loan fromFileLine(String line) {
        String[] p = line.split("\\|", -1);
        if (p.length != 9) {
            throw new IllegalArgumentException("Loan line must have 9 fields but has " + p.length + ".");
        }
        try {
            LocalDate borrowDate = LocalDate.parse(p[4]);
            LocalDate dueDate = LocalDate.parse(p[5]);
            LocalDate returnDate = p[6].isBlank() ? null : LocalDate.parse(p[6]);
            double fine = Double.parseDouble(p[7]);
            boolean paid = Boolean.parseBoolean(p[8]);
            return new Loan(p[0], p[1], p[2], p[3], borrowDate, dueDate, returnDate, fine, paid);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("A date is not in the format YYYY-MM-DD.");
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("The fine is not a valid number.");
        }
    }
}
