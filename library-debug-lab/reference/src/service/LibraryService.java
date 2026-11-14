package service;

import exception.BorrowingLimitExceededException;
import exception.DuplicateRecordException;
import exception.ItemNotAvailableException;
import exception.RecordNotFoundException;
import model.LibraryItem;
import model.Loan;
import model.Member;
import model.Staff;
import pattern.LibraryFactory;
import pattern.OverdueObserver;
import storage.Repository;
import util.ConsoleHelper;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * The "brain" of the library. It holds all the records and enforces the rules:
 * adding, searching, borrowing, returning, fines, overdue loans, saving and loading.
 *
 * The menu never decides if a borrow is allowed. It asks this class.
 *
 * This class is also the "subject" of the OBSERVER PATTERN. It keeps a list of
 * OverdueObserver objects and tells them about overdue items.
 */
public class LibraryService {

    // Four repositories: one generic class, four different record types
    private final Repository<LibraryItem> itemRepo = new Repository<>("Item", LibraryItem::getItemId);
    private final Repository<Member> memberRepo = new Repository<>("Member", Member::getMemberId);
    private final Repository<Staff> staffRepo = new Repository<>("Staff", Staff::getStaffId);
    private final Repository<Loan> loanRepo = new Repository<>("Loan", Loan::getLoanId);

    private final List<OverdueObserver> observers = new ArrayList<>();
    private final String dataFolder;

    /**
     * @param dataFolder the folder that holds the data files (for example "data")
     */
    public LibraryService(String dataFolder) {
        this.dataFolder = dataFolder;
    }

    // ------------------------------------------------------------------
    // Observer pattern: subject side
    // ------------------------------------------------------------------

    /**
     * Registers an observer. It will receive every overdue notice.
     *
     * @param observer the observer to add
     */
    public void addObserver(OverdueObserver observer) {
        observers.add(observer);
    }

    /** Sends a message to every observer. We do not know what they do with it. */
    private void notifyObservers(String message) {
        for (OverdueObserver observer : observers) {
            observer.onOverdueNotice(message);
        }
    }

    /**
     * Looks at all open loans and notifies the observers about each overdue one.
     *
     * @return how many overdue loans were found
     */
    public int checkOverdueLoans() {
        LocalDate today = LocalDate.now();
        List<Loan> overdueLoans = getOverdueLoans();
        for (Loan loan : overdueLoans) {
            notifyObservers("OVERDUE: '" + getItemTitle(loan.getItemId()) + "' (" + loan.getItemId()
                    + ") borrowed by " + getMemberName(loan.getMemberId())
                    + " was due on " + loan.getDueDate()
                    + " (" + loan.getDaysOverdue(today) + " day(s) late, fine so far "
                    + ConsoleHelper.money(getFineSoFar(loan)) + ").");
        }
        return overdueLoans.size();
    }

    // ------------------------------------------------------------------
    // Library items
    // ------------------------------------------------------------------

    /**
     * Adds a new item.
     *
     * @param item the item to add
     * @throws DuplicateRecordException if the item ID already exists
     */
    public void addItem(LibraryItem item) throws DuplicateRecordException {
        itemRepo.add(item);
    }

    /**
     * Removes an item that has never been borrowed.
     *
     * @param itemId the ID of the item
     * @throws RecordNotFoundException   if the item does not exist
     * @throws ItemNotAvailableException if the item has loan records
     */
    public void removeItem(String itemId) throws RecordNotFoundException, ItemNotAvailableException {
        LibraryItem item = itemRepo.getById(itemId);
        List<Loan> history = loanRepo.findAll(loan -> loan.getItemId().equals(item.getItemId()));
        if (!history.isEmpty()) {
            throw new ItemNotAvailableException("'" + item.getTitle()
                    + "' cannot be removed because it has loan records.");
        }
        itemRepo.remove(item.getItemId());
    }

    /**
     * Searches items. It matches the keyword against the ID, the title, the type
     * and the details (author, ISBN, issue, publisher). Capital letters do not matter.
     *
     * @param keyword the word to look for
     * @return the matching items
     */
    public List<LibraryItem> searchItems(String keyword) {
        String key = keyword.trim().toLowerCase();
        // The part after "item ->" is a lambda. It is true for items that match.
        return itemRepo.findAll(item ->
                item.getItemId().toLowerCase().contains(key)
                        || item.getTitle().toLowerCase().contains(key)
                        || item.getItemType().toLowerCase().contains(key)
                        || item.getDetails().toLowerCase().contains(key));
    }

    /**
     * @return all items, sorted A to Z by title
     */
    public List<LibraryItem> getAllItemsSortedByTitle() {
        List<LibraryItem> sorted = itemRepo.getAll();
        // Lambda: compare two items by title, ignoring capital letters
        sorted.sort((first, second) -> first.getTitle().compareToIgnoreCase(second.getTitle()));
        return sorted;
    }

    /**
     * @param itemId an item ID
     * @return the title of the item, or the ID itself if the item is not found
     */
    public String getItemTitle(String itemId) {
        LibraryItem item = itemRepo.findById(itemId);
        return (item == null) ? itemId : item.getTitle();
    }

    // ------------------------------------------------------------------
    // Members and staff
    // ------------------------------------------------------------------

    /**
     * Registers a new member.
     *
     * @param member the member to add
     * @throws DuplicateRecordException if the member ID already exists
     */
    public void registerMember(Member member) throws DuplicateRecordException {
        memberRepo.add(member);
    }

    /** @return all members in the order they were registered */
    public List<Member> getAllMembers() {
        return memberRepo.getAll();
    }

    /**
     * @param memberId a member ID
     * @return the name of the member, or the ID itself if the member is not found
     */
    public String getMemberName(String memberId) {
        Member member = memberRepo.findById(memberId);
        return (member == null) ? memberId : member.getName();
    }

    /**
     * Adds a staff member.
     *
     * @param staff the staff member to add
     * @throws DuplicateRecordException if the staff ID already exists
     */
    public void addStaff(Staff staff) throws DuplicateRecordException {
        staffRepo.add(staff);
    }

    /** @return all staff in the order they were added */
    public List<Staff> getAllStaff() {
        return staffRepo.getAll();
    }

    // ------------------------------------------------------------------
    // Borrowing and returning
    // ------------------------------------------------------------------

    /**
     * Lends an item to a member.
     *
     * @param itemId   the item to borrow
     * @param memberId the member who borrows
     * @param staffId  the staff member who handles the loan
     * @return the new loan
     * @throws RecordNotFoundException           if the item, member or staff ID does not exist
     * @throws ItemNotAvailableException         if the item is already borrowed
     * @throws BorrowingLimitExceededException   if the member is at their borrowing limit
     */
    public Loan borrowItem(String itemId, String memberId, String staffId)
            throws RecordNotFoundException, ItemNotAvailableException, BorrowingLimitExceededException {
        LibraryItem item = itemRepo.getById(itemId);
        Member member = memberRepo.getById(memberId);
        staffRepo.getById(staffId); // only checks that this staff member exists

        if (!item.isAvailable()) {
            throw new ItemNotAvailableException("'" + item.getTitle() + "' is already borrowed.");
        }
        int openLoans = countOpenLoans(member.getMemberId());
        if (openLoans >= member.getMaxItems()) {
            throw new BorrowingLimitExceededException(member.getName() + " already has " + openLoans
                    + " borrowed item(s). The limit for a " + member.getMemberType().toLowerCase()
                    + " is " + member.getMaxItems() + ".", member.getMaxItems());
        }

        LocalDate today = LocalDate.now();
        Loan loan = new Loan(nextLoanId(), item.getItemId(), member.getMemberId(),
                staffRepo.getById(staffId).getStaffId(), today, today.plusDays(member.getLoanDays()));
        try {
            loanRepo.add(loan);
        } catch (DuplicateRecordException e) {
            // nextLoanId() always gives a new ID, so this should never happen
            throw new IllegalStateException("Loan ID clash: " + e.getMessage());
        }
        item.markBorrowed();
        return loan;
    }

    /**
     * Returns an item. If it is late, the fine is calculated and stored in the loan.
     *
     * @param itemId the item that comes back
     * @return the loan that was closed (check getFineAmount() for a fine)
     * @throws RecordNotFoundException if the item does not exist or is not currently borrowed
     */
    public Loan returnItem(String itemId) throws RecordNotFoundException {
        LibraryItem item = itemRepo.getById(itemId);
        Loan loan = findOpenLoanForItem(item.getItemId());
        if (loan == null) {
            throw new RecordNotFoundException("'" + item.getTitle()
                    + "' is not currently borrowed, so it cannot be returned.");
        }

        LocalDate today = LocalDate.now();
        Member member = memberRepo.getById(loan.getMemberId());
        int daysLate = loan.getDaysOverdue(today);
        double fine = member.calculateFine(daysLate); // the member's policy does the math

        loan.markReturned(today, fine);
        item.markReturned();

        if (fine > 0) {
            notifyObservers("LATE RETURN: '" + item.getTitle() + "' was returned " + daysLate
                    + " day(s) late by " + member.getName() + ". Fine: " + ConsoleHelper.money(fine) + ".");
        }
        return loan;
    }

    /** Counts the loans of one member that are not returned yet. */
    private int countOpenLoans(String memberId) {
        return loanRepo.findAll(loan -> loan.getMemberId().equals(memberId) && !loan.isReturned()).size();
    }

    /** Finds the open (not returned) loan of an item, or null if there is none. */
    private Loan findOpenLoanForItem(String itemId) {
        for (Loan loan : loanRepo.getAll()) {
            if (loan.getItemId().equals(itemId) && !loan.isReturned()) {
                return loan;
            }
        }
        return null;
    }

    /** Makes a new loan ID like L0001, L0002, ... that is not used yet. */
    private String nextLoanId() {
        int number = loanRepo.size() + 1;
        String id = String.format("L%04d", number);
        while (loanRepo.exists(id)) {
            number++;
            id = String.format("L%04d", number);
        }
        return id;
    }

    // ------------------------------------------------------------------
    // Loans, overdue loans and fines
    // ------------------------------------------------------------------

    /** @return all loans (open and returned) */
    public List<Loan> getAllLoans() {
        return loanRepo.getAll();
    }

    /**
     * @return the loans that are not returned and are past their due date
     */
    public List<Loan> getOverdueLoans() {
        LocalDate today = LocalDate.now();
        return loanRepo.findAll(loan -> loan.isOverdue(today));
    }

    /**
     * Works out the fine so far for a loan that is still open and overdue.
     * (This amount is calculated now. It is not stored until the item is returned.)
     *
     * @param loan the loan
     * @return the fine in PHP (0 if the loan is not late)
     */
    public double getFineSoFar(Loan loan) {
        Member member = memberRepo.findById(loan.getMemberId());
        if (member == null) {
            return 0.0;
        }
        return member.calculateFine(loan.getDaysOverdue(LocalDate.now()));
    }

    /** @return the loans that have a fine (paid or unpaid) */
    public List<Loan> getLoansWithFines() {
        return loanRepo.findAll(loan -> loan.hasFine());
    }

    /**
     * Marks the fine of a loan as paid.
     *
     * @param loanId the loan ID
     * @throws RecordNotFoundException if the loan does not exist or has no unpaid fine
     */
    public void payFine(String loanId) throws RecordNotFoundException {
        Loan loan = loanRepo.getById(loanId);
        if (!loan.hasFine() || loan.isFinePaid()) {
            throw new RecordNotFoundException("Loan " + loan.getLoanId() + " has no unpaid fine.");
        }
        loan.markFinePaid();
    }

    // ------------------------------------------------------------------
    // Saving and loading
    // ------------------------------------------------------------------

    /**
     * Saves all records to the data files.
     *
     * @throws IOException if a file cannot be written
     */
    public void saveAll() throws IOException {
        itemRepo.saveToFile(dataFolder + "/items.txt", LibraryItem::toFileLine);
        memberRepo.saveToFile(dataFolder + "/members.txt", Member::toFileLine);
        staffRepo.saveToFile(dataFolder + "/staff.txt", Staff::toFileLine);
        loanRepo.saveToFile(dataFolder + "/loans.txt", Loan::toFileLine);
    }

    /**
     * Loads all records from the data files. Missing files and bad lines
     * are reported in the returned list and never crash the program.
     *
     * @return warning messages (empty if everything loaded fine)
     */
    public List<String> loadAll() {
        List<String> messages = new ArrayList<>();
        messages.addAll(itemRepo.loadFromFile(dataFolder + "/items.txt", LibraryFactory::createItemFromLine));
        messages.addAll(memberRepo.loadFromFile(dataFolder + "/members.txt", LibraryFactory::createMemberFromLine));
        messages.addAll(staffRepo.loadFromFile(dataFolder + "/staff.txt", Staff::fromFileLine));
        messages.addAll(loanRepo.loadFromFile(dataFolder + "/loans.txt", this::parseLoanLine));

        // The items file does not store "available". We work it out from the open loans.
        for (Loan loan : loanRepo.getAll()) {
            if (!loan.isReturned()) {
                itemRepo.findById(loan.getItemId()).markBorrowed();
            }
        }
        return messages;
    }

    /** Reads one loan line and checks that the item, member and staff really exist. */
    private Loan parseLoanLine(String line) {
        Loan loan = Loan.fromFileLine(line);
        if (!itemRepo.exists(loan.getItemId())) {
            throw new IllegalArgumentException("unknown item ID " + loan.getItemId());
        }
        if (!memberRepo.exists(loan.getMemberId())) {
            throw new IllegalArgumentException("unknown member ID " + loan.getMemberId());
        }
        if (!staffRepo.exists(loan.getStaffId())) {
            throw new IllegalArgumentException("unknown staff ID " + loan.getStaffId());
        }
        if (!loan.isReturned() && findOpenLoanForItem(loan.getItemId()) != null) {
            throw new IllegalArgumentException("item " + loan.getItemId() + " already has an open loan");
        }
        return loan;
    }
}
